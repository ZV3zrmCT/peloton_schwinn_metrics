// grab the ride ID from the URL in the browser
var rideID = window.location.pathname.split("/");
rideID = rideID[rideID.length - 1];

var bearerToken;

const auth0Key = Object.keys(localStorage).find(key => key.startsWith('@@auth0spajs@@') && key.indexOf("api.") > 0);
if(auth0Key) {
  const authToken = JSON.parse(window.localStorage[auth0Key]);
  bearerToken = authToken.body.access_token;
}

// peloton doesn't respond with target metrics if credentials are not included
fetch("https://api.onepeloton.com/api/ride/" + rideID + "/details?stream_source=multichannel", {
    "headers": {
      "accept": "application/json, text/plain, */*",
      "accept-language": "en-US",
      "peloton-platform": "web",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      "x-requested-with": "XmlHttpRequest",
      "Authorization": "Bearer " + bearerToken
    },
    "referrer": "https://members.onepeloton.com/classes/player/" + rideID,
    "referrerPolicy": "no-referrer-when-downgrade",
    "body": null,
    "method": "GET",
    "mode": "cors",
    "credentials": "include"
  }).then(function (response) {
    return response.json()
  })
  .then(function (ride) {
    // schwinn mapping, values in order corresponding to peloton

    //schwinn
    var schwinnResistance = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,3,4,5,6,7,8,10,11,13,13,14,15,16,17,18,19,21,22,24,25,27,28,30,31,33,34,36,37,39,40,42,43,45,46,48,49,51,52,54,55,57,58,60,61,63,64,66,67,69,70,72,73,75,76,78,79,81,82,84,85,87,88,90,91,93,94,96,97,99,100];

    var classDuration = Number(ride.ride.duration);

    var cadResistDiv = document.createElement('div');
    cadResistDiv.id = 'cadresist';
    cadResistDiv.style = 'color:white; position:absolute; top: 5%; left:36%; margin-top: 35px';
    cadResistDiv.innerHTML = '<div id="cadresisttxt" style="width:100%;color:white;text-align:center;">metrics start during warmup</div><div style="margin-top:10px;width:100%; height:2px; background-color:#555555"><div id="cadresistprogress" style="width:0%;transition:990ms linear;height:2px;background-color:white"></div></div>';
    document.querySelector("div[class='jw-wrapper jw-reset']").after(cadResistDiv);

    var cadResisTextDiv = document.getElementById('cadresisttxt');
    var cadResisProgressDiv = document.getElementById('cadresistprogress');

    //does the class have target metrics?
    if (ride.target_metrics_data.length ) {
      cadResistDiv.innerHTML = "Class does not have target metrics.";
      setTimeout(function () {
        cadResistDiv.innerHTML = "";
      }, 5000);
      return;
    }

    
    // combinue consecutive cues that are the same
    //   some classes have lots of consecutive segments of only a couple seconds, but all with the same cadence/resistance 
    var rideCue = [];
    //var cue = ride.instructor_cues[0];
    var cue = ride.target_metrics_data.target_metrics[0];
    for (var i = 1; i < ride.target_metrics_data.target_metrics.length; i++) {
      var newCue = ride.target_metrics_data.target_metrics[i];
      if (newCue.metrics.hasOwnProperty("upper") && newCue.metrics.hasOwnProperty("upper") &&
        newCue.metrics.hasOwnProperty("lower") && newCue.metrics.hasOwnProperty("lower") &&
        cue.metrics[0].upper == newCue.metrics[0].upper &&
        cue.metrics[0].lower == newCue.metrics[0].lower &&
        cue.metrics[1].upper == newCue.metrics[1].upper &&
        cue.metrics[1].lower == newCue.metrics[1].lower) {
        cue.offsets.end = newCue.offsets.end;
      } else {
        rideCue.push(cue);
        cue = newCue;
      }
    }
    rideCue.push(newCue);
    ride.target_metrics_data.target_metrics = rideCue; //overwrite original cue data


    // set an observer on the timer, triggers running the code when it changes
    //var mPar = document.querySelector("div[data-test-id='video-timer']"),
    var mPar = document.querySelector("div[class='player-overlay-wrapper']"),
      options = {
        attributes: true,
        childList: true,
        subtree: true,
        characterData: true
      },
      observer = new MutationObserver(mCallback);

    function mCallback(mutations) {
      // if the course has not started (1 minute warm-up), exit
      var timestamp = document.querySelector("p[data-test-id='time-to-complete']");
      if (!timestamp) return;

      // split the mm:ss timestamp from the peloton GUI
      timestamp = timestamp.innerHTML.split(":");
      if (timestamp.length != 2) {
        cadResisTextDiv.innerHTML = "";
        return;
      }

      // convert mm:ss timestamp to cue timecode in the API (seconds elapsed)
      var timecode = (classDuration - (Number(timestamp[0]) * 60 + Number(timestamp[1]))) + Number(ride.ride.pedaling_start_offset);

      for (var i = 0; i < ride.target_metrics_data.target_metrics.length; i++) {
        var cue = ride.target_metrics_data.target_metrics[i];

        if (timecode >= Number(cue.offsets.start) && timecode <= Number(cue.offsets.end)) {
            switch(cue.segment_type) {
                case 'cycling':
                    var cadence;
                    var resistance;
                    for(var x = 0; x<cue.metrics.length; x++) { 
                      switch(cue.metrics[x].name) {
                        case 'resistance':
                          resistance = cue.metrics[x];
                          break;
                        case 'cadence':
                          cadence = cue.metrics[x];
                          break;
                      }
                    }
                    cadResisTextDiv.innerHTML = "cadence: " + cadence.lower + " - " + cadence.upper + " &nbsp;&nbsp;&nbsp;&nbsp; resistance: " + schwinnResistance[resistance.lower] + " - " + schwinnResistance[resistance.upper] + "&nbsp;&nbsp;&nbsp;&nbsp; (" + resistance.lower + " - " + resistance.upper + ")";
          
                    break;
                case 'running':
                    var speed;
                    var incline;
                    for(var x = 0; x<cue.metrics.length; x++) { 
                        switch(cue.metrics[x].name) {
                        case 'speed':
                            speed = cue.metrics[x];
                            break;
                        case 'incline':
                            incline = cue.metrics[x];
                            break;
                        }
                    }
                    cadResisTextDiv.innerHTML = "speed: " + speed.lower + " - " + speed.upper + " &nbsp;&nbsp;&nbsp;&nbsp; incline: " + incline.lower + " - " + incline.upper;
                
                    break;
                    
                case 'caesar':
                    var stroke;
                    var pace;
                    for(var x = 0; x<cue.metrics.length; x++) { 
                        switch(cue.metrics[x].name) {
                        case 'stroke_rate':
                            stroke = cue.metrics[x];
                            break;
                        case 'pace_intensity':
                            pace = cue.metrics[x];
                            break;
                        }
                    }
                    cadResisTextDiv.innerHTML = "stroke: " + stroke.lower + " - " + stroke.upper + " &nbsp;&nbsp;&nbsp;&nbsp; pace: " + pace.lower + " - " + pace.upper;
                
                    break;
                case 'free_mode':
                    cadResisTextDiv.innerHTML = "";
                
                    break;
                default:
                    cadResisTextDiv.innerHTML = "";
            }
        
          if (timecode == Number(cue.offsets.start)) {
            cadResisProgressDiv.style.transition = "none";
            cadResisProgressDiv.style.width = "0%";
          } else {
            cadResisProgressDiv.style.transition = "990ms linear";
            cadResisProgressDiv.style.width = Math.round((((timecode) - cue.offsets.start) / (cue.offsets.end - cue.offsets.start)) * 100) + "%";
          }
          return;
        }
      }

    }

    observer.observe(mPar, options);

  });