class Api::BookmarksController < ApplicationController
  def create
    if logged_in?
        @event = Event.find_by(id: params[:event_id])
        @bookmark = Bookmark.new(user_id: current_user.id, event_id: @event.id)
        #we should be able to do something like user.bookmarks = []
        @bookmark.save
        
        render :show
    else 
        render json: ["Sorry, you must be logged in to bookmark an event"], status: 422
    end 
  end 

  def index 
    if logged_in?
      render json: current_user.bookmarked_events
    else 
      render json: ["Sorry, must be logged in to retrieve your bookmarks"], status: 422
    end 
  end 

  def destroy 
    if logged_in?
      @bookmark = Bookmark.find_by(user_id: current_user.id, event_id: params[:id])
      if @bookmark 
        @event = @bookmark.event 
        @bookmark.destroy
        # render json: current_user.bookmarked_events.pluck(:id)
        render :show
      else 
        render json: ['Could not find bookmark'], status: 404
      end 
    end   
  end
end 
