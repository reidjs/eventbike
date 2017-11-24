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
  end 

end
