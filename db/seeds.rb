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
  title: 'moto', 
  creator_id: user1.id,
  image_url: "https://res.cloudinary.com/eventbike/image/upload/v1511840424/joe-neric-223563_kjcucx.jpg")
event2 = Event.new(
  title: 'Another super boring event', 
  creator_id: user1.id,
  image_url: "https://res.cloudinary.com/eventbike/image/upload/v1511840485/mohamed-nohassi-202199_exn3um.jpg")
event3 = Event.new(
  title: 'Another eve', 
  creator_id: user1.id,
  image_url: "https://res.cloudinary.com/eventbike/image/upload/v1511840548/cameron-kirby-105242_ydaau2.jpg" )
event4 = Event.new(
  title: 'Another supdsf event asdf hi', 
  creator_id: user2.id,
  image_url: "https://res.cloudinary.com/eventbike/image/upload/v1511840796/markus-spiske-265590_u0npvf.jpg")
event5 = Event.new(
  title: 'Another supdsf event asdf hi', 
  creator_id: user2.id,
  image_url: "http://res.cloudinary.com/eventbike/image/upload/v1511497455/james-pond-103321_g3yjqc.jpg" )
event6 = Event.new(
  title: 'Another supdsf event asdf hi', 
  creator_id: user2.id,
  image_url: "https://res.cloudinary.com/eventbike/image/upload/v1511840845/nicolas-picard-317919_tb1cdi.jpg")
event7 = Event.new(
  title: 'Another supdsf event asdf hi', 
  creator_id: user2.id,
  image_url: "http://res.cloudinary.com/eventbike/image/upload/v1511497474/tim-cook-98503_zr4fbc.jpg")
event8 = Event.new(
  title: 'Another supdsf event asdf hi', 
  creator_id: user2.id,
  image_url: "http://res.cloudinary.com/eventbike/image/upload/v1511497437/davide-ragusa-27505_wqtwiy.jpg")
event9 = Event.new(
  title: 'Another supdsf event asdf hi', 
  creator_id: user2.id,
  image_url: "http://res.cloudinary.com/eventbike/image/upload/v1511497423/adils-photography-419425_uk3fif.jpg" )
event10 = Event.new(
  title: 'Another supdsf event asdf hi', 
  creator_id: user2.id,
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