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
json.attendees attendees
if logged_in? 
  json.bookmarked current_user.bookmarked_events.pluck(:id).include?(event.id)
else 
  json.bookmarked false
end 
