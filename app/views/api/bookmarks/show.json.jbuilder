json.bookmarks current_user.bookmarked_events.pluck(:id)
json.event do 
  json.partial! "api/events/event", event: @event
end 
