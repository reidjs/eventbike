json.user do 
  json.partial! "api/users/user", user: @user  
end 
json.event do 
  json.partial! "api/events/event", event: @event  
end 