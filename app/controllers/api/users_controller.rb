class Api::UsersController < ApplicationController
  def new
    @user = User.new(user_params)
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index 
    render json: ["Please fill in the username"], status: 405
  end 

  def show 
    #this works because of the definition in the user model 
    # debugger
    @user = User.find_by(username: params[:id])
    # debugger
    if !@user.nil? 
      render "api/users/show"
    elsif params[:id].length >= 3
      render json: ["no user found"], status: 404
    else 
      render json: ["Sorry, that name is too short (minimum 3 letters)"], status: 405
    end 
  end 

  private

  def user_params
    params.require(:user).permit(:password, :username)
  end
end
