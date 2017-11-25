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
user1.save
user2.save
user3.save
#reidjs created both events
event1 = Event.new(title: 'A fun event', creator_id: user1.id)
event2 = Event.new(title: 'Another super boring event', creator_id: user1.id)
event1.save
event2.save
#reidjs is registered for both events
#bob is registered for the first event
#charlie is registered for no events 
registration1 = Registration.new(user_id: user1.id, event_id: event1.id)
registration2 = Registration.new(user_id: user1.id, event_id: event2.id)
registration3 = Registration.new(user_id: user2.id, event_id: event1.id)
registration1.save 
registration2.save
registration3.save
