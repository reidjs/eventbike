class Api::RegistrationsController < ApplicationController
  def create 
    user = User.find_by(id: params[:user_id])
    event = Event.find_by(id: params[:event_id])
    if user.nil?
      render json: ["User not found"], status: 404
      return
    end 
    if event.nil?
      render json: ["Event not found"], status: 404   
      return    
    end 
    #make sure user is not already signed up for this event
    if event.attendees.include?(user) 
      render json: ["User is already registered for this event"], status: 422
      return
    end 
    registration = Registration.new(user_id: user.id, event_id: event.id)
    if registration.save
      #send back the updated event
      # render 'api/events/show.json.jbuilder'
      render json: {"eventId": event.id, "attendees": event.attendees.pluck(:id), "attending_events": user.attending_events.pluck(:id)}
      # render event: `show/#{@event.id}`
    else 
      render json: ["Registration failed to save"], status: 422
    end 

  end 

  def destroy 
  end 

end
