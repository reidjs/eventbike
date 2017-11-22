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
    # fail
    if !@user.nil?
      render "api/users/show"
    else 
      render json: "here"
    end 
  end 

  private

  def user_params
    params.require(:user).permit(:password, :username)
  end
end
