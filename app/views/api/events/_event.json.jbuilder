# json.extract! event, :title, :details, event.attendees.each {|attendee| attendee.id}
attendees = [] 
event.attendees.each do |attendee|
  attendees.push(attendee.id)
end 
p attendees
json.title event.title
json.details event.details
json.attendees attendees
