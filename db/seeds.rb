# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user1 = User.new(username: 'reid', password: '123456')
user2 = User.new(username: 'bob', password: '123456')
user1.save
user2.save
event1 = Event.new(title: 'A fun event', creator_id: user1.id)
event2 = Event.new(title: 'Another super boring event', creator_id: user1.id)
event1.save
event2.save
