javascript:(function()%7Bvar%20bearerToken%2CrideID%3Dwindow.location.pathname.split(%22%2F%22)%3BrideID%3DrideID%5BrideID.length-1%5D%3Bconst%20auth0Key%3DObject.keys(localStorage).find((e%3D%3Ee.startsWith(%22%40%40auth0spajs%40%40%22)%26%26e.indexOf(%22api.%22)%3E0))%3Bif(auth0Key)%7BbearerToken%3DJSON.parse(window.localStorage%5Bauth0Key%5D).body.access_token%7Dfetch(%22https%3A%2F%2Fapi.onepeloton.com%2Fapi%2Fride%2F%22%2BrideID%2B%22%2Fdetails%3Fstream_source%3Dmultichannel%22%2C%7Bheaders%3A%7Baccept%3A%22application%2Fjson%2C%20text%2Fplain%2C%20*%2F*%22%2C%22accept-language%22%3A%22en-US%22%2C%22peloton-platform%22%3A%22web%22%2C%22sec-fetch-dest%22%3A%22empty%22%2C%22sec-fetch-mode%22%3A%22cors%22%2C%22sec-fetch-site%22%3A%22same-site%22%2C%22x-requested-with%22%3A%22XmlHttpRequest%22%2CAuthorization%3A%22Bearer%20%22%2BbearerToken%7D%2Creferrer%3A%22https%3A%2F%2Fmembers.onepeloton.com%2Fclasses%2Fplayer%2F%22%2BrideID%2CreferrerPolicy%3A%22no-referrer-when-downgrade%22%2Cbody%3Anull%2Cmethod%3A%22GET%22%2Cmode%3A%22cors%22%2Ccredentials%3A%22include%22%7D).then((function(e)%7Breturn%20e.json()%7D)).then((function(e)%7Bvar%20t%3D%5B0%2C1%2C2%2C3%2C3%2C4%2C4%2C4%2C5%2C5%2C5%2C6%2C6%2C6%2C7%2C7%2C7%2C8%2C8%2C8%2C9%2C9%2C9%2C10%2C10%2C10%2C11%2C11%2C11%2C12%2C12%2C13%2C13%2C14%2C15%2C15%2C16%2C16%2C17%2C17%2C18%2C18%2C19%2C19%2C20%2C20%2C21%2C21%2C22%2C22%2C23%2C23%2C24%2C24%2C25%2C25%2C25%2C25%2C26%2C26%2C26%2C26%2C27%2C27%2C27%2C27%2C27%2C28%2C28%2C28%2C28%2C28%2C28%2C29%2C29%2C29%2C29%2C29%2C29%2C30%2C30%2C30%2C30%2C30%2C31%2C31%2C31%2C31%2C31%2C31%2C32%2C32%2C32%2C32%2C32%2C32%2C32%2C32%2C32%2C32%2C32%5D%2Cr%3DNumber(e.ride.duration)%2Cs%3Ddocument.createElement(%22div%22)%3Bs.id%3D%22cadresist%22%2Cs.style%3D%22color%3Awhite%3B%20position%3Aabsolute%3B%20top%3A%205%25%3B%20left%3A36%25%3B%20margin-top%3A%2035px%22%2Cs.innerHTML%3D'%3Cdiv%20id%3D%22cadresisttxt%22%20style%3D%22width%3A100%25%3Bcolor%3Awhite%3Btext-align%3Acenter%3B%22%3Emetrics%20start%20during%20warmup%3C%2Fdiv%3E%3Cdiv%20style%3D%22margin-top%3A10px%3Bwidth%3A100%25%3B%20height%3A2px%3B%20background-color%3A%23555555%22%3E%3Cdiv%20id%3D%22cadresistprogress%22%20style%3D%22width%3A0%25%3Btransition%3A990ms%20linear%3Bheight%3A2px%3Bbackground-color%3Awhite%22%3E%3C%2Fdiv%3E%3C%2Fdiv%3E'%2Cdocument.querySelector(%22div%5Bclass%3D'jw-wrapper%20jw-reset'%5D%22).after(s)%3Bvar%20i%3Ddocument.getElementById(%22cadresisttxt%22)%2Ca%3Ddocument.getElementById(%22cadresistprogress%22)%3Bif(e.target_metrics_data.length)return%20s.innerHTML%3D%22Class%20does%20not%20have%20target%20metrics.%22%2Cvoid%20setTimeout((function()%7Bs.innerHTML%3D%22%22%7D)%2C5e3)%3Bfor(var%20n%3D%5B%5D%2Cc%3De.target_metrics_data.target_metrics%5B0%5D%2Co%3D1%3Bo%3Ce.target_metrics_data.target_metrics.length%3Bo%2B%2B)%7Bvar%20p%3De.target_metrics_data.target_metrics%5Bo%5D%3Bp.metrics.hasOwnProperty(%22upper%22)%26%26p.metrics.hasOwnProperty(%22upper%22)%26%26p.metrics.hasOwnProperty(%22lower%22)%26%26p.metrics.hasOwnProperty(%22lower%22)%26%26c.metrics%5B0%5D.upper%3D%3Dp.metrics%5B0%5D.upper%26%26c.metrics%5B0%5D.lower%3D%3Dp.metrics%5B0%5D.lower%26%26c.metrics%5B1%5D.upper%3D%3Dp.metrics%5B1%5D.upper%26%26c.metrics%5B1%5D.lower%3D%3Dp.metrics%5B1%5D.lower%3Fc.offsets.end%3Dp.offsets.end%3A(n.push(c)%2Cc%3Dp)%7Dn.push(p)%2Ce.target_metrics_data.target_metrics%3Dn%3Bvar%20d%3Ddocument.querySelector(%22div%5Bclass%3D'player-overlay-wrapper'%5D%22)%2Cl%3Dnew%20MutationObserver((function(s)%7Bvar%20n%3Ddocument.querySelector(%22p%5Bdata-test-id%3D'time-to-complete'%5D%22)%3Bif(!n)return%3Bif(2!%3D(n%3Dn.innerHTML.split(%22%3A%22)).length)return%20void(i.innerHTML%3D%22%22)%3Bfor(var%20c%3Dr-(60*Number(n%5B0%5D)%2BNumber(n%5B1%5D))%2BNumber(e.ride.pedaling_start_offset)%2Co%3D0%3Bo%3Ce.target_metrics_data.target_metrics.length%3Bo%2B%2B)%7Bvar%20p%3De.target_metrics_data.target_metrics%5Bo%5D%3Bif(c%3E%3DNumber(p.offsets.start)%26%26c%3C%3DNumber(p.offsets.end))%7Bswitch(p.segment_type)%7Bcase%22cycling%22%3Afor(var%20d%2Cl%2Cm%3D0%3Bm%3Cp.metrics.length%3Bm%2B%2B)switch(p.metrics%5Bm%5D.name)%7Bcase%22resistance%22%3Al%3Dp.metrics%5Bm%5D%3Bbreak%3Bcase%22cadence%22%3Ad%3Dp.metrics%5Bm%5D%7Di.innerHTML%3D%22cadence%3A%20%22%2Bd.lower%2B%22%20-%20%22%2Bd.upper%2B%22%20%26nbsp%3B%26nbsp%3B%26nbsp%3B%26nbsp%3B%20resistance%3A%20%22%2Bt%5Bl.lower%5D%2B%22%20-%20%22%2Bt%5Bl.upper%5D%2B%22%26nbsp%3B%26nbsp%3B%26nbsp%3B%26nbsp%3B%20(%22%2Bl.lower%2B%22%20-%20%22%2Bl.upper%2B%22)%22%3Bbreak%3Bcase%22running%22%3Avar%20u%2Ch%3Bfor(m%3D0%3Bm%3Cp.metrics.length%3Bm%2B%2B)switch(p.metrics%5Bm%5D.name)%7Bcase%22speed%22%3Au%3Dp.metrics%5Bm%5D%3Bbreak%3Bcase%22incline%22%3Ah%3Dp.metrics%5Bm%5D%7Di.innerHTML%3D%22speed%3A%20%22%2Bu.lower%2B%22%20-%20%22%2Bu.upper%2B%22%20%26nbsp%3B%26nbsp%3B%26nbsp%3B%26nbsp%3B%20incline%3A%20%22%2Bh.lower%2B%22%20-%20%22%2Bh.upper%3Bbreak%3Bcase%22caesar%22%3Avar%20f%2Cb%3Bfor(m%3D0%3Bm%3Cp.metrics.length%3Bm%2B%2B)switch(p.metrics%5Bm%5D.name)%7Bcase%22stroke_rate%22%3Af%3Dp.metrics%5Bm%5D%3Bbreak%3Bcase%22pace_intensity%22%3Ab%3Dp.metrics%5Bm%5D%7Di.innerHTML%3D%22stroke%3A%20%22%2Bf.lower%2B%22%20-%20%22%2Bf.upper%2B%22%20%26nbsp%3B%26nbsp%3B%26nbsp%3B%26nbsp%3B%20pace%3A%20%22%2Bb.lower%2B%22%20-%20%22%2Bb.upper%3Bbreak%3Bdefault%3Ai.innerHTML%3D%22%22%7Dreturn%20void(c%3D%3DNumber(p.offsets.start)%3F(a.style.transition%3D%22none%22%2Ca.style.width%3D%220%25%22)%3A(a.style.transition%3D%22990ms%20linear%22%2Ca.style.width%3DMath.round((c-p.offsets.start)%2F(p.offsets.end-p.offsets.start)*100)%2B%22%25%22))%7D%7D%7D))%3Bl.observe(d%2C%7Battributes%3A!0%2CchildList%3A!0%2Csubtree%3A!0%2CcharacterData%3A!0%7D)%7D))%3B%7D)()