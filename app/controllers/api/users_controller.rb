class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render 'api/users'
    else
      render json: @user.errors.full_messages, status: 404
    end
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  private
  def user_params
    params.require(:user).permit(:password, :fname, :lname, :email, :zipcode)
  end


end
