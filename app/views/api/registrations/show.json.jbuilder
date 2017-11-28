json.user do 
  json.partial! "api/users/user", user: @user
end 
json.event do 
  json.partial! "api/events/event", event: @event  
end
json.registration do 
  json.event_id @registration.event_id  
  json.tickets @registration.tickets 
end 