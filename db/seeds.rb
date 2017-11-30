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
event1.save
event2.save
event3.save
event4.save
event5.save
event6.save
event7.save
event8.save
event9.save
event10.save
#reidjs is registered for both events
#bob is registered for the first event
#charlie is registered for no events 
registration1 = Registration.new(user_id: user1.id, event_id: event1.id)
registration2 = Registration.new(user_id: user1.id, event_id: event2.id)
registration3 = Registration.new(user_id: user2.id, event_id: event1.id)
registration1.save 
registration2.save
registration3.save
#reidjs has bookmarked the first two events 
#bob bookmarked the first event only
bookmark1 = Bookmark.new(user_id: user1.id, event_id: event1.id)
bookmark2 = Bookmark.new(user_id: user1.id, event_id: event2.id)
bookmark3 = Bookmark.new(user_id: user2.id, event_id: event1.id)
bookmark1.save
bookmark2.save
bookmark3.save