class Api::RegistrationsController < ApplicationController
  def index 
    if logged_in?
      render :index
    else 
      render json: ["Sorry, must be logged in to retrieve your tickets"], status: 422
    end 
  end 

  def create 
    @event = Event.find_by(id: params[:eventId])
    @user = current_user
    tickets = 1 #get from params
    if logged_in?
      @registration = Registration.new(user_id: current_user.id, event_id: @event.id)
      @registration.tickets = tickets
      if @registration.save

        #send back payload with 
        #event 
        #user 
        render :show
      else 
        render json: @registration.errors.full_messages, status: 422
      end 
    else
      render json: ["You must be logged in to register for events"], status: 422
    end 
  end 

  def destroy 
    if logged_in? 
      @event = Event.find_by(id: params[:id])
      if @event
        @registration = Registration.find_by(user_id: current_user.id, event_id: @event.id) 
      end 

      if @registration.nil? || @event.nil?
        # debugger
        render json: ["Could not find registration"], status: 404
        return 
      end 
      @user = current_user
      @registration.destroy
      render :show
    end 
    #return the event details (event show page)
    # render template: '/api/events/show'
  end 

end
