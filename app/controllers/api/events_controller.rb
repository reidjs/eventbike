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
    @event.creator_id = current_user.id
    if @event.save
      render :show
    else 
      render json: @event.errors.full_messages, status: 422
    end 
  end 

  private

  def event_params
    params.require(:event).permit(:title, :details, :image_url, :category)
  end 

end
