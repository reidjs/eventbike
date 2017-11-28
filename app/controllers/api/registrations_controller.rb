class Api::RegistrationsController < ApplicationController
  def index 
    if logged_in?
      render json: current_user.attending_events
    else 
      render json: ["Sorry, must be logged in to retrieve your tickets"], status: 422
    end 
  end 

  def create 
    @event = Event.find_by(id: params[:eventId])
    @user = current_user
    if logged_in?
      registration = Registration.new(user_id: current_user.id, event_id: @event.id)
      if registration.save

        #send back the user so the event knows who's attending
        render template: '/api/users/show'
      else 
        render json: registration.errors.full_messages, status: 422
      end 
    else
      render json: ["You must be logged in to register for events"], status: 422
    end 
  end 

  def destroy 
    @event = Event.find_by(event_id: params[:eventId])
    if @event
      @registration = Registration.find_by(user_id: current_user.id, event_id: @event.id) 
    end 
    # debugger
    if @registration.nil? || @event.nil?
      # debugger
      render json: ["Could not find registration"], status: 404
      return 
    end 
    @registration.destroy
    #return the event details (event show page)
    render template: '/api/events/show'
  end 

end
