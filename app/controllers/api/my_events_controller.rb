class Api::MyEventsController < ApplicationController
  def index
    @events = current_user.events
    render template: '/api/events/index'
  end 
end
