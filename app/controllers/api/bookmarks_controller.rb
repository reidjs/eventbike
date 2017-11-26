class Api::BookmarksController < ApplicationController
  def create
    if logged_in?
        @bookmark = Bookmark.new(user_id: current_user.id, event_id: params[:event_id])
        @event = Event.find_by(id:params[:event_id])
        render '/api/events/show'
    else 
        render json: ["Sorry, you must be logged in to bookmark an event"], status: 422
    end 
  end 

  def destroy 
    if logged_in?
      @bookmark = Bookmark.find_by(event_id: params[:id])
      if @bookmark 
        @event = @bookmark.event 
        render '/api/events/show'
      else 
        render json: ['Could not find bookmark'], status: 404
      end 
  end 
end
