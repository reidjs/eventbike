class Api::RegistrationsController < ApplicationController
  def index 
    if logged_in?
      render json: current_user.attending_events
    else 
      render json: ["Sorry, must be logged in to retrieve your tickets"], status: 422
    end 
  end 
  def create 
    user = User.find_by(id: params[:user_id])
    event = Event.find_by(id: params[:event_id])
    # if user.nil?
    #   render json: ["User not found"], status: 404
    #   return
    # end 
    # if event.nil?
    #   render json: ["Event not found"], status: 404   
    #   return    
    # end 
    #make sure user is not already signed up for this event
    # if event.attendees.include?(user) 
    #   render json: ["User is already registered for this event"], status: 422
    #   return
    # end 
    registration = Registration.new(user_id: user.id, event_id: event.id)
    if registration.save
      #send back the updated event
      render json: {"eventId": event.id, "attendees": event.attendees.pluck(:id), "attending_events": user.attending_events.pluck(:id)}
    else 
      render json: registration.errors.full_messages, status: 422
    end 

  end 

  def destroy 
    registration = Registration.find_by(user_id: params[:id], event_id: params[:event_id])
    # debugger
    if registration.nil?
      # debugger
      render json: ["Could not find registration"], status: 404
      return 
    end 
    registration.destroy
    #return the event details (event show page)
    event = Event.find_by(id: params[:event_id])
    user = User.find_by(id: params[:id])
    # redirect_to template: `events/show`
    # redirect_to template: `events/#{@event.id}`
    # render template: `api/events/show`
    render json: {"eventId": event.id, "attendees": event.attendees.pluck(:id), "attending_events": user.attending_events.pluck(:id)}
  end 

  def delete
  end 

end
