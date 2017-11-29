class Api::MyEventsController < ApplicationController
  def index
    @events = Events.where(creator: current_user)
    render template: '/api/events/index'
  end 
end
