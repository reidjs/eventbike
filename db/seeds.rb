# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user1 = User.new(username: 'reidjs', password: '123456')
user2 = User.new(username: 'bob', password: '123456')
user3 = User.new(username: 'charlie', password: '123456')
user4 = User.new(username: 'Dave', password: '123456')
user5 = User.new(username: 'Eddie', password: '123456')
user1.save
user2.save
user3.save
user4.save
user5.save
#reidjs created first three events, bob created fourth

event1 = Event.new(
  title: "Stop by for our Bicycle Race put together by The Bicycle Mafia", 
  details: "Its not just any motocross race, but the oldest and one of the most prestigious in the United States. Hangtown is the opening round of the 12-race Lucas Oil Pro Motocross Championship sanctioned by the AMA.\nEvery year, there is a new battle to witness, and new champions to crown. Perhaps its the mystique of 50 years of racing, dating back before the series was even established, that makes Hangtown racing legendary. Many people say that attending Hangtown is a way to be a part of motorcross history.",
  creator_id: user1.id,
  category: "Social",
  location: "Oakland Track", 
  lat: 37.773972,
  lng: -122.431297,
  date: Date.new(2018, 1, 1),
  image_url: "https://res.cloudinary.com/eventbike/image/upload/v1511840424/joe-neric-223563_kjcucx.jpg")
event2 = Event.new(
  title: "Join us another Bicycle Ride put on by Relaxed Riders",
  details: "To get tickets and full race information about the Hangtown Motocross Classic, go to www.hangtownmx.com and click on tickets.\" In addition to General Admission tickets, the Hangtown Motocross Classic has some of the finest high-end hospitality areas in the entire series.", 
  creator_id: user1.id,
  category: "Social",
  location: "SF Moto Club",
  lat: 37.7732,
  lng: -122.39,
  date: Date.new(2018, 4, 1),
  image_url: "https://res.cloudinary.com/eventbike/image/upload/v1511840485/mohamed-nohassi-202199_exn3um.jpg")
event3 = Event.new(
  title: 'Join us our Bicycle Race put together with Bay Area Moto Club',
  details: "Racing gets underway at 9am, with some of the best amateurs in the country doing battle. In the afternoon, the top pros will be riding on the track for their series media day. Later on Thursday night, join us at the Palladio Mall in Folsom from 5 - 7pm for a Hangtown pre-party. Amateur racing continues on Friday, May 18 at 9am, when the top experts and Pro Ams compete for pro points, which leads to a professional license in the premier professional series.", 
  creator_id: user1.id,
  category: "Race",
  lat: 37.723972,
  lng: -122.397,
  location: "San Fran Raceway",
  date: Date.new(2018, 1, 18),
  image_url: "https://res.cloudinary.com/eventbike/image/upload/v1511840548/cameron-kirby-105242_ydaau2.jpg" )
event4 = Event.new(
  title: 'Stop by for our Motorcycle Function organized with The SF Riders',
  details: "Its not just any motocross race, but the oldest and one of the most prestigious in the United States. Hangtown is the opening round of the 12-race Lucas Oil Pro Motocross Championship sanctioned by the AMA.\nEvery year, there is a new battle to witness, and new champions to crown. Perhaps its the mystique of 50 years of racing, dating back before the series was even established, that makes Hangtown racing legendary. Many people say that attending Hangtown is a way to be a part of motorcross history.", 
  creator_id: user2.id,
  category: "Social",
  location: "East Bay",
  lat: 37.743972,
  lng: -122.45,
  date: Date.new(2018, 1, 30),
  image_url: "https://res.cloudinary.com/eventbike/image/upload/v1511840796/markus-spiske-265590_u0npvf.jpg")
event5 = Event.new(
  title: 'Stop by for our Motorcycle Event put on by Relaxed Riders',
  details: "Over the last few years Family Off-Road Adventures has raised and donated THOUSANDS of dollars to the Blue Ribbon Coalition, a non-profit organization that works to keep the trails open.\nDuring the Saturday evening Family BBQ we will award prizes and raffle THOUSHANDS in donations from motorcycle dealerships and product retailers.", 
  creator_id: user2.id,
  category: "Race",
  location: "East Bay Track",
  lat: 37.673972,
  lng: -122.931297,
  date: Date.new(2018, 2, 8),
  image_url: "http://res.cloudinary.com/eventbike/image/upload/v1511497455/james-pond-103321_g3yjqc.jpg" )
event6 = Event.new(
  title: 'Join us our Scooter Ride put on with Bay Area Moto Club',
  details: "Racing gets underway at 9am, with some of the best amateurs in the country doing battle. In the afternoon, the top pros will be riding on the track for their series media day. Later on Thursday night, join us at the Palladio Mall in Folsom from 5 - 7pm for a Hangtown pre-party. Amateur racing continues on Friday, May 18 at 9am, when the top experts and Pro Ams compete for pro points, which leads to a professional license in the premier professional series.", 
  creator_id: user2.id,
  category: "Social",
  lat: 37.733972,
  lng: -122.451297,
  location: "SF Moto Club Lake Merritt",
  date: Date.new(2018, 3, 18),
  image_url: "https://res.cloudinary.com/eventbike/image/upload/v1511840845/nicolas-picard-317919_tb1cdi.jpg")
event7 = Event.new(
  title: 'Stop by for the Motorcycle Race hosted by The SF Riders',
  details: "To get tickets and full race information about the Hangtown Motocross Classic, go to www.hangtownmx.com and click on tickets.\" In addition to General Admission tickets, the Hangtown Motocross Classic has some of the finest high-end hospitality areas in the entire series.", 
  creator_id: user2.id,
  category: "Race",
  lat: 37.743972,
  lng: -122.411297,
  location: "Laguna Seca Raceway",
  date: Date.new(2018, 3, 4),
  image_url: "http://res.cloudinary.com/eventbike/image/upload/v1511497474/tim-cook-98503_zr4fbc.jpg")
event8 = Event.new(
  title: 'Join us another Scooter Event put on with The SF Riders',
  details: "Its not just any motocross race, but the oldest and one of the most prestigious in the United States. Hangtown is the opening round of the 12-race Lucas Oil Pro Motocross Championship sanctioned by the AMA.\nEvery year, there is a new battle to witness, and new champions to crown. Perhaps its the mystique of 50 years of racing, dating back before the series was even established, that makes Hangtown racing legendary. Many people say that attending Hangtown is a way to be a part of motorcross history.", 
  creator_id: user2.id,
  category: "Joyride",
  lat: 37.723972,
  lng: -122.461297,
  location: "East Bay Track Meet",
  date: Date.new(2018, 4, 4),
  image_url: "http://res.cloudinary.com/eventbike/image/upload/v1511497437/davide-ragusa-27505_wqtwiy.jpg")
event9 = Event.new(
  title: 'Join us our Scooter Event organized by Relaxed Riders',
  details: "Over the last few years Family Off-Road Adventures has raised and donated THOUSANDS of dollars to the Blue Ribbon Coalition, a non-profit organization that works to keep the trails open.\nDuring the Saturday evening Family BBQ we will award prizes and raffle THOUSHANDS in donations from motorcycle dealerships and product retailers.", 
  creator_id: user2.id,
  category: "Other",
  lat: 37.783972,
  lng: -122.4431297,
  location: "Laguna Seca (The other one)",
  date: Date.new(2018, 2, 1),
  image_url: "http://res.cloudinary.com/eventbike/image/upload/v1511497423/adils-photography-419425_uk3fif.jpg" )
event10 = Event.new(
  title: 'Join us a Bicycle Event arranged with Bay Area Moto Club',
  details: "Its not just any motocross race, but the oldest and one of the most prestigious in the United States. Hangtown is the opening round of the 12-race Lucas Oil Pro Motocross Championship sanctioned by the AMA.\nEvery year, there is a new battle to witness, and new champions to crown. Perhaps its the mystique of 50 years of racing, dating back before the series was even established, that makes Hangtown racing legendary. Many people say that attending Hangtown is a way to be a part of motorcross history.", 
  creator_id: user2.id,
  category: "Joyride",
  location: "The Track (Berkeley)",
  date: Date.new(2018, 4, 4),
  image_url: "http://res.cloudinary.com/eventbike/image/upload/v1511497438/chris-knight-434457_hqw9nz.jpg")

  event11 = Event.new(
  title: 'Motorcycle Gettogether Soon',
  details: "The automotive world comes to the Monterey Peninsula each year to celebrate automotive history, racing, and design and Gordon McCall’s Motorworks Revival kicks-off this world class week of events.
  Please join us and our 3000 VIP guests as we host our exclusive First-Class evening and experience culinary delights while strolling the array of exceptional and rare vintage race cars, motorcycles, and aircraft. World-Class sponsors will also join us to show off their latest offerings and WOW guests with the first look at what's coming next in the aviation and automotive world. Noted California chefs will pair gourmet selections with California wines for McCall's 27th Anniversary Celebration.",
  creator_id: user3.id,
  category: "Motorcycle",
  location: "The Track (Alameda County)",
  date: Date.new(2018, 1, 9),
  lat: 37.743972,
  lng: -122.4491297,
  image_url: "https://res.cloudinary.com/eventbike/image/upload/q_11/v1512048568/edgar-chaparro-143297_rsdzuz.jpg")
  
  event12 = Event.new(
  title: 'Maintaining Bikes Gettogether Today',
  details: "Don’t miss the SF Bicycle Coalition’s largest party of the year! Join more than a thousand of your bike-loving buddies for an evening of festivities. Enjoy the fabulous local art auction, snap a pick in the photo booth, make a bike-y craft and bid on items donated by your favorite bike-supporting businesses.
  Winterfest is kid friendly - bring the whole family. Kids 12 and under are free.",
  creator_id: user4.id,
  category: "Bicycle",
  location: "Bike Maintenance Shop",
  date: Date.new(2018, 1, 9),
  lat: 37.769972,
  lng: -122.4471297,
  image_url: "https://res.cloudinary.com/eventbike/image/upload/q_10/v1511497476/stefan-rayner-98149_wauxct.jpg")
  
  event13 = Event.new(
  title: 'Bicycle Race Next Week',
  details: " a hacker/maker space for women, is hosting the SF Bicycle Coalition's class for women, trans*,  femme and non-binary individuals on the joys of biking in San Francisco!
  Come learn the basics of biking in San Francisco at our Intro to Urban Bicycling Workshop. We are offering our one-hour course covering bicycling for everyday riding in SF, the rules of the road, route planning and more.
  This course is a great introduction for people who are considering biking in the city or looking to brush up on urban biking skills.
  Topics Covered:
  Helmet fit
  Preparing to ride
  Rules of the road
  Safety skills & tips
  Route planning
  Locking",
  creator_id: user4.id,
  category: "Other",
  location: "Lake Meritt Picnic Spot",
  date: Date.new(2018, 5, 19),
  lat: 37.739972,
  lng: -122.4411297,
  image_url: "https://res.cloudinary.com/eventbike/image/upload/q_14/v1511497439/dimon-blr-309444_vygcl2.jpg")

  event14 = Event.new(
  title: 'Bike to the Beach',
  details: "Learn how to keep your bike in tip-top shape and fix simple mechanicals while out and about. Our maintenance classes are friendly, interactive sessions run by our expert workshop team.
  Fix a Puncture - Learn how to replace tubes including pro tips and techniques.
  Fix a Broken Chain - Learn how to replace a chain pin, fit a quick link and check chain length.
  Cleaning - Learn how to clean and lube effectively in addition to cable maintenance and other moving parts.
  Safety  - Learn how to ensure your bike is always safe to ride before you set out.",
  creator_id: user5.id,
  category: "Other",
  location: "North Beach",
  date: Date.new(2018, 11, 18),
  lat: 37.730,
  lng: -122.4511297,
  image_url: "https://res.cloudinary.com/eventbike/image/upload/q_10/v1511497456/matthew-lejune-384220_godh8t.jpg")

  event15 = Event.new(
  title: 'Track Day',
  details: "For 15 years, Black Rebel Motorcycle Club has carried the torch for true rock and roll. The latest edition of the firebrand rock troupe, sees them at their most dynamic. Their sixth studio album, “Specter at the Feast,” ventures into diverse sonic territory, delivering their most ambitious offering yet. It’s an album of impossible dichotomies; opposing sounds amalgamate into a seamless, entirely coherent package, that rumbles with driving rhythms, and soars with skyward-arcing guitar howls. Robert Been delivers growling bass grooves on “Hate the Taste,” and Peter Hayes’ guitar wails on what may be their most hard-rocking song, “Rival.” Counterbalancing these frenetic outbursts are moments of star-gazing ambient textures, like the crystalline harmonics introducing the slinking album opener, “Fire Walker,” and the organ drones of “Returning.” There are moments of down-home blues paired alongside flailing punk bombasticism; gnarled dark rock shores upon uplifting, and optimistic anthems. Taking cues from all points of the band’s many years on the road, this record is the band’s most well-realized album to date. “We thought about making it a double album,” Been says of the many songs that were written for the record.
  To write the album, the Los Angeles band traveled north to the sleepy Northern California town of Santa Cruz, where they holed up in an old Post Office-turned-recording studio. It was here, just a few blocks from where Been grew up, that they began to write. For two years, the band worked on creating the album, a process that they all agree, was one of the most difficult of their career. Like the Macbeth quote that became the album’s title, there was a painful shadow that had been cast upon the band. During the band’s 2010 tour, Robert’s father Michael Been — known for fronting 1980’s alt-rock group, The Call — died while backstage. He was BRMC’s sound engineer, and as Hayes says, “he was like another member of the band.” They finished the tour but afterward, the trauma began to set in.
  ",
  creator_id: user5.id,
  category: "Race",
  location: "North Beach Track",
  date: Date.new(2018, 5, 18),
  lat: 37.750,
  lng: -122.4311297,
  image_url: "https://res.cloudinary.com/eventbike/image/upload/q_10/v1511497426/alex-holyoake-381214_y2dhtw.jpg")

  event16 = Event.new(
  title: 'Work Out with the crew',
  details: "After visiting Australia for a series of sold out shows in 2013, LA three-piece Black Rebel Motorcycle Club have announced that they’ll once again return for a run of shows to showcase their much anticipated new album, expected in early 2018.
  Presented by MJR Presents, Black Rebel Motorcycle Club will visit Sydney, Melbourne, Brisbane, Adelaide, and Perth where they’ll be performing a selection of new material as well as crowd favourites from the bands illustrious 19-year, seven album back catalogue, showing why they are one of the world’s most celebrated live bands.
  ",
  creator_id: user2.id,
  category: "Workout",
  location: "Motorcycle Gym",
  date: Date.new(2018, 5, 19),
  lat: 37.759,
  lng: -122.4319997,
  image_url: "https://res.cloudinary.com/eventbike/image/upload/q_10/v1511840660/francisco-aceldo-217919_ztiedc.jpg")
  event17 = Event.new(
  title: 'Sccoter thing',
  details: "After visiting Australia for a series of sold out shows in 2013, LA three-piece Black Rebel Motorcycle Club have announced that they’ll once again return for a run of shows to showcase their much anticipated new album, expected in early 2018.
  Presented by MJR Presents, Black Rebel Motorcycle Club will visit Sydney, Melbourne, Brisbane, Adelaide, and Perth where they’ll be performing a selection of new material as well as crowd favourites from the bands illustrious 19-year, seven album back catalogue, showing why they are one of the world’s most celebrated live bands.
  ",
  creator_id: user2.id,
  category: "Scooter",
  location: "Scoot town",
  date: Date.new(2018, 5, 19),
  lat: 37.759,
  lng: -122.4819997,
  image_url: "https://res.cloudinary.com/eventbike/image/upload/q_10/v1511840660/francisco-aceldo-217919_ztiedc.jpg")

event1.save
event11.save 
event2.save
event4.save
event9.save
event6.save
event3.save
event5.save
event7.save
event13.save 
event8.save
event12.save 
event10.save
event14.save 
event15.save 
event16.save 
event17.save 
#reidjs is registered for both events
#bob is registered for the first event
#charlie is registered for no events 
registration1 = Registration.new(user_id: user1.id, event_id: event1.id)
registration2 = Registration.new(user_id: user1.id, event_id: event2.id)
registration3 = Registration.new(user_id: user2.id, event_id: event1.id)
registration4 = Registration.new(user_id: user3.id, event_id: event8.id)
registration5 = Registration.new(user_id: user2.id, event_id: event9.id)
registration6 = Registration.new(user_id: user2.id, event_id: event7.id)
registration7 = Registration.new(user_id: user4.id, event_id: event8.id)
registration8 = Registration.new(user_id: user4.id, event_id: event8.id)
registration9 = Registration.new(user_id: user5.id, event_id: event1.id)
registration10 = Registration.new(user_id: user1.id, event_id: event6.id)
registration11 = Registration.new(user_id: user4.id, event_id: event14.id)
registration12 = Registration.new(user_id: user5.id, event_id: event14.id)
registration13 = Registration.new(user_id: user2.id, event_id: event9.id)
registration14 = Registration.new(user_id: user4.id, event_id: event9.id)
registration15 = Registration.new(user_id: user5.id, event_id: event15.id)
registration16 = Registration.new(user_id: user5.id, event_id: event16.id)
registration17 = Registration.new(user_id: user5.id, event_id: event1.id)
registration18 = Registration.new(user_id: user5.id, event_id: event5.id)
registration19 = Registration.new(user_id: user5.id, event_id: event6.id)
registration20 = Registration.new(user_id: user5.id, event_id: event7.id)
registration21 = Registration.new(user_id: user5.id, event_id: event8.id)
registration22 = Registration.new(user_id: user5.id, event_id: event9.id)

registration1.save 
registration2.save
registration3.save
registration4.save
registration5.save
registration6.save
registration7.save
registration8.save
registration9.save
registration10.save
registration11.save
registration12.save
registration13.save
registration14.save
registration15.save
registration16.save
registration17.save
registration18.save
registration19.save
registration20.save
registration21.save
registration22.save
#reidjs has bookmarked the first two events 
#bob bookmarked the first event only
bookmark1 = Bookmark.new(user_id: user1.id, event_id: event1.id)
bookmark2 = Bookmark.new(user_id: user1.id, event_id: event2.id)
bookmark3 = Bookmark.new(user_id: user2.id, event_id: event1.id)
bookmark1.save
bookmark2.save
bookmark3.save