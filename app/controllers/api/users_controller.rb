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

  def show 
    #this works because of the definition in the user model 
    @user = User.find_by(username: params[:id])
    if !@user.nil?
      render "api/users/show"
    elsif params[:id].nil? || params[:id].length < 3
      render json: ["name too short"], status: 405
    else 
      render json: ["no user found"], status: 404
    end 
  end 

  private

  def user_params
    params.require(:user).permit(:password, :username)
  end
end
