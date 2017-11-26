class Api::EventsController < ApplicationController
  def index
    @events = Event.all
  end 

  def show 
    @event = Event.find_by(id: params[:id])
    if @event 
      render `api/events/#{@event.id}`
    else 
      render json: ["Event not found"], status: 404
    end 

  end 

  def create 
    @event = Event.new(event_params)
    if @event.save
      render `api/events/#{@event.id}`
    else 
      render @event.errors.full_messages, status: 422
    end 
  end 

  private

  def event_params
    params.require(:event).permit(:title, :details)
  end 

end
