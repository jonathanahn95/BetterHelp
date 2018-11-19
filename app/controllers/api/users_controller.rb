class Api::UsersController < ApplicationController

  def index
    @users = User.all
  end

  def create
    @user = User.new(user_params)
    unless user_params["birthday"]["month"].length == 0 || user_params["birthday"]["year"].length == 0|| user_params["birthday"]["day"].length == 0
      new_bday = User.convert_to_date(user_params["birthday"])
      @user.birthday = new_bday
    end



    if @user.save
      login(@user)
      render 'api/users/show'
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
    params.require(:user).permit(:password, :fname, :lname, :email, :zipcode, birthday: [:month, :day, :year])
  end

end
