# About
The Peloton web application does not display target metrics, like cadance and resistance. This bookmarklet uses the Peloton web application and API to display the target metrics. Works in cycling classes only.

![Alt](https://coffeesnip.com/example.jpeg "Peloton class with target metrics")

# Metrics
- Two resistance ranges are displayed. The first is for the Schwinn ic4 bike, the second is for Peloton (in paranthesis).
- Live and recently added classes do not have metrics. It can take a day or more for Peloton to add metrics to a recording.
- Metrics begin during the warmup, after the 1 minute class introduction.

# What's a bookmarklet?
A bookmarklet is a bookmark stored in a web browser. Bookmarklets are unobtrusive JavaScripts stored as the URL of a bookmark in a web browser or as a hyperlink on a web page.

# How to use
1. Start a cycling class on the Peloton website.
2. Open the PelotonSchwinn bookmark.
3. Metrics are magically displayed! (after the one minute start/warm-up)

It works great with the [Kinetic Fit app](https://www.kinetic.fit).

# How to install
Bookmark the link below. (UPDATED September 30, 2020 - If metrics disappear when you resize your browser window, update your bookmark with the version below.)

[PelotonSchwinn bookmarklet](javascript:(function()%7Bvar%20rideID%3Dwindow.location.pathname.split(%22%2F%22)%3BrideID%3DrideID%5BrideID.length-1%5D%2Cfetch(%22https%3A%2F%2Fapi.onepeloton.com%2Fapi%2Fride%2F%22%2BrideID%2B%22%2Fdetails%3Fstream_source%3Dmultichannel%22%2C%7Bheaders%3A%7Baccept%3A%22application%2Fjson%2C%20text%2Fplain%2C%20*%2F*%22%2C%22accept-language%22%3A%22en-US%22%2C%22peloton-platform%22%3A%22web%22%2C%22sec-fetch-dest%22%3A%22empty%22%2C%22sec-fetch-mode%22%3A%22cors%22%2C%22sec-fetch-site%22%3A%22same-site%22%2C%22x-requested-with%22%3A%22XmlHttpRequest%22%7D%2Creferrer%3A%22https%3A%2F%2Fmembers.onepeloton.com%2Fclasses%2Fplayer%2F%22%2BrideID%2CreferrerPolicy%3A%22no-referrer-when-downgrade%22%2Cbody%3Anull%2Cmethod%3A%22GET%22%2Cmode%3A%22cors%22%2Ccredentials%3A%22include%22%7D).then(function(e)%7Breturn%20e.json()%7D).then(function(e)%7Bvar%20t%3D%5B1%2C1%2C1%2C1%2C1%2C1%2C1%2C1%2C1%2C1%2C1%2C1%2C1%2C1%2C1%2C1%2C1%2C1%2C1%2C1%2C1%2C1%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C11%2C12%2C14%2C15%2C17%2C19%2C20%2C22%2C23%2C25%2C27%2C29%2C31%2C33%2C35%2C38%2C41%2C43%2C46%2C49%2C51%2C52%2C53%2C54%2C55%2C56%2C57%2C58%2C59%2C60%2C61%2C62%2C63%2C64%2C65%2C66%2C67%2C68%2C69%2C70%2C71%2C72%2C73%2C74%2C75%2C76%2C77%2C78%2C79%2C80%2C81%2C82%2C83%2C84%2C85%2C86%2C87%2C88%2C89%2C90%2C91%2C92%2C93%2C94%2C95%2C96%2C97%2C98%2C99%2C100%5D%2Cr%3DNumber(e.ride.duration)%2Cs%3Ddocument.createElement(%22div%22)%3Bs.id%3D%22cadresist%22%2Cs.style%3D%22color%3Awhite%3B%20position%3Aabsolute%3B%20top%3A%205%25%3B%20left%3A36%25%3B%20margin-top%3A%2035px%22%2Cs.innerHTML%3D'%3Cdiv%20id%3D%22cadresisttxt%22%20style%3D%22width%3A100%25%3Bcolor%3Awhite%3Btext-align%3Acenter%3B%22%3Emetrics%20start%20during%20warmup%3C%2Fdiv%3E%3Cdiv%20style%3D%22margin-top%3A10px%3Bwidth%3A100%25%3B%20height%3A2px%3B%20background-color%3A%23555555%22%3E%3Cdiv%20id%3D%22cadresistprogress%22%20style%3D%22width%3A0%25%3Btransition%3A990ms%20linear%3Bheight%3A2px%3Bbackground-color%3Awhite%22%3E%3C%2Fdiv%3E%3C%2Fdiv%3E'%2Cdocument.querySelector(%22div%5Bclass%3D'jw-wrapper%20jw-reset'%5D%22).after(s)%3Bvar%20n%3Ddocument.getElementById(%22cadresisttxt%22)%2Ci%3Ddocument.getElementById(%22cadresistprogress%22)%3Bif(!e.instructor_cues.length)return%20s.innerHTML%3D%22Class%20does%20not%20have%20target%20metrics.%22%2Cvoid%20setTimeout(function()%7Bs.innerHTML%3D%22%22%7D%2C5e3)%3Bfor(var%20a%3D%5B%5D%2Co%3De.instructor_cues%5B0%5D%2Cc%3D1%3Bc%3Ce.instructor_cues.length%3Bc%2B%2B)%7Bvar%20d%3De.instructor_cues%5Bc%5D%3Bo.resistance_range.upper%3D%3Dd.resistance_range.upper%26%26o.resistance_range.lower%3D%3Dd.resistance_range.lower%26%26o.cadence_range.upper%3D%3Dd.cadence_range.upper%26%26o.cadence_range.lower%3D%3Dd.cadence_range.lower%3Fo.offsets.end%3Dd.offsets.end%3A(a.push(o)%2Co%3Dd)%7Da.push(d)%2Ce.instructor_cues%3Da%3Bvar%20u%3Ddocument.querySelector(%22div%5Bclass%3D'player-overlay-wrapper'%5D%22)%3Bnew%20MutationObserver(function(s)%7Bvar%20a%3Ddocument.querySelector(%22p%5Bdata-test-id%3D'time-to-complete'%5D%22)%3Bif(!a)return%3Bif(2!%3D(a%3Da.innerHTML.split(%22%3A%22)).length)return%3Bfor(var%20o%3Dr-(60*Number(a%5B0%5D)%2BNumber(a%5B1%5D))%2BNumber(e.ride.pedaling_start_offset)%2Cc%3D0%3Bc%3Ce.instructor_cues.length%3Bc%2B%2B)%7Bvar%20d%3De.instructor_cues%5Bc%5D%3Bif(o%3E%3DNumber(d.offsets.start)%26%26o%3C%3DNumber(d.offsets.end))return%20n.innerHTML%3D%22cadence%3A%20%22%2Bd.cadence_range.lower%2B%22%20-%20%22%2Bd.cadence_range.upper%2B%22%20%26nbsp%3B%26nbsp%3B%26nbsp%3B%26nbsp%3B%20resistance%3A%20%22%2Bt%5Bd.resistance_range.lower%5D%2B%22%20-%20%22%2Bt%5Bd.resistance_range.upper%5D%2B%22%26nbsp%3B%26nbsp%3B%26nbsp%3B%26nbsp%3B%20(%22%2Bd.resistance_range.lower%2B%22%20-%20%22%2Bd.resistance_range.upper%2B%22)%22%2Cvoid(o%3D%3DNumber(d.offsets.start)%3F(i.style.transition%3D%22none%22%2Ci.style.width%3D%220%25%22)%3A(i.style.transition%3D%22990ms%20linear%22%2Ci.style.width%3DMath.round((o-d.offsets.start)%2F(d.offsets.end-d.offsets.start)*100)%2B%22%25%22))%7D%7D).observe(u%2C%7Battributes%3A!0%2CchildList%3A!0%2Csubtree%3A!0%2CcharacterData%3A!0%7D)%7D)%3B%7D)()%3B)())

## iPad
In Safari, open the bookmarks side panel. Drag the PelotonSchwinn bookmarklet above into your bookmarks.

## iPhone
Create a new bookmark (to any website -- doesn't matter). Copy the PelotonSchwinn link above. Open your bookmarks, find the bookmark you just created, and replace the URL with the link you copied. (Need more help? Google "iphone bookmarklet").

## Safari on a Mac
Click and drag the PelotonSchwinn link to the bookmarks bar. If you do not see the bookmarks bar, go to the View menu and select "Show Favorites Bar".

## Chromebook
Click and drag the PelotonSchwinn link to the bookmarks bar. Use Ctrl+Shift+B to reveal the bookmarks bar, if hidden.
