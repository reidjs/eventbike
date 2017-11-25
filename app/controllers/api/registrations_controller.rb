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
      #return the user id?
      render json: ["Registration saved!"], status: 200
    else 
      render json: ["Registration failed to save"], status: 422
    end 

  end 

  def destroy 
  end 

end
