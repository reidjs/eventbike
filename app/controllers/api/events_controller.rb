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
    @events = Event.where("title ILIKE ? OR details ILIKE ?", "%#{params[:id]}%", "%#{params[:id]}%" )
    render :index
  end 

  def user_events 
    @events = Event.where(creator: current_user)
    render :index
  end   
  def user_tickets
    
    @events = current_user.attending_events 
    render :index
  end   
  def user_bookmarks
    @events = current_user.bookmarked_events
    render :index
  end   

  #split data into groups of 6
  def page
    # events_per_page = 6
    # page_number = params[:id]
    # result = []
    # Event.find_each(:batch_size => events_per_page) do |events|
    #   result << events
    # end 
    # @events = result[page_number.to_i]
    # render :index
    page_number = params[:id].to_s

    @events = Event.all.paginate(per_page: 5, page: page_number)
    render :index
  end 


  private

  def event_params
    params.require(:event).permit(:title, :details, :image_url, :category)
  end 

end
