# json.extract! event, :title, :details, event.attendees.each {|attendee| attendee.id}
#get attendees as an array of user ids 
#could have probably used pluck for this 
attendees = [] 
event.attendees.each do |attendee|
  attendees.push(attendee.id)
end 
json.id event.id
json.title event.title
json.details event.details
json.category event.category 
json.image_url event.image_url
json.attendees event.attendees.count
json.creator event.creator.id
json.creator_name event.creator.username
json.day event.date.day 
json.lat event.lat 
json.lng event.lng
json.hour event.date.hour % 12 + 1
# json.minute event.date.minutes 
if event.date.hour >= 12
  json.ampm "pm"
else 
  json.ampm "am"
end 

json.wordmonth Date::MONTHNAMES[event.date.month]
if event.date.day < 10 
  json.fancyday '0' + event.date.day.to_s
else 
  json.fancyday event.date.day.to_s 
end 
json.month event.date.month
json.fancymonth Date::MONTHNAMES[event.date.month][0...3].upcase
json.location event.location
if logged_in? 
  json.bookmarked current_user.bookmarked_events.pluck(:id).include?(event.id)
  json.registered current_user.attending_events.pluck(:id).include?(event.id)
else 
  json.bookmarked false
  json.registered false
end 
