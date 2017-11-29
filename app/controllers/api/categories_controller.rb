class Api::CategoriesController < ApplicationController
  def index
  end 
  #sends forward events of the category. CASE SENSITIVE!
  def show
    @events = Event.where(category: params[:id])
    if @events 
      render template: '/api/events/index'
    else 
      render json: ["Category not found"], status: 404
    end 
  end 
end
