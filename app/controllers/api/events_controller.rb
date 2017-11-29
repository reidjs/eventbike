class Api::EventsController < ApplicationController
  def index
    # debugger
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
    if logged_in?
      @event.creator_id = current_user.id
      if @event.save
        render :show
      else 
        render json: @event.errors.full_messages, status: 422
      end 
    else 
      render json: ["You must be logged in to create events"], status: 422
    end 
  end 

  def query
    @events = Event.where("title like ?", "%#{params[:id]}%" )
    render :index
  end 

  def user_events 
    @events = Event.where(creator: current_user)
    render :index
  end   

  private

  def event_params
    params.require(:event).permit(:title, :details, :image_url, :category)
  end 

end
