# json.extract! user, :id, :username, :attending_events
json.id user.id
json.username user.username
json.attending_events user.attending_events.pluck(:id).as_json
# json.favorite_benches user.favorite_benches.pluck(:id)
