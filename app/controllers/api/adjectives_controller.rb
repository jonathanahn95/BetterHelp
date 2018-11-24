
class Api::AdjectivesController < ApplicationController

  def create_like
    like_param = params[:like]
    user_id = like_param[:user_id].to_i
    @review_id = like_param[:review_id].to_i
    @like = Like.new(user_id: user_id, review_id: @review_id)
    @user_marked = 1
    if @like.save
      render 'api/adjectives/like'
    else
     render json: @like.errors.full_messages, status: 422
    end
  end

  def delete_like
    @review_id = params[:id].to_i
    user_id = params[:like][:user_id].to_i
    @like = Like.find_by(user_id: user_id, review_id: @review_id)
    @user_marked = 0

    @like.destroy
    render 'api/adjectives/like'
  end

  def show_like
    @review_id =  params[:id].to_i
    @like = Like.where(review_id: @review_id, user_id: params[:like][:user_id])
    @user_marked = @like.where(review_id: @review_id, user_id: params[:like][:user_id]).length
    render 'api/adjectives/like'
  end

  def show_cool
    @review_id =  params[:id].to_i
    @cools = Cool.where(review_id: @review_id)
    @user_marked = @cools.where(review_id: @review_id, user_id: params[:cool][:user_id])
    render 'api/adjectives/show_cool'

  end
  def show_funny
    @review_id =  params[:id].to_i
    @funny = Funny.where(review_id: @review_id)
    @user_marked = @funny.where(review_id: @review_id, user_id: params[:funny][:user_id])
    render 'api/adjectives/show_funny'
  end

  def show_useful
    @review_id =  params[:id].to_i
    @useful = Useful.where(review_id: @review_id)
    @user_marked = @useful.where(review_id: @review_id, user_id: params[:useful][:user_id])
    render 'api/adjectives/show_useful'
  end

  def update_cool
    cool_params = params[:cool]
    user_id = cool_params[:user_id].to_i
    @review_id = cool_params[:review_id].to_i
    if Cool.where(review_id: @review_id,user_id: user_id).length == 0
      @user_marked = Cool.where(review_id: @review_id,user_id: user_id)
      Cool.create!(user_id: user_id, review_id: @review_id)
      @cools = Cool.where(review_id: @review_id)
      else
      @user_marked = Cool.where(review_id: @review_id,user_id: user_id)
      cool = Cool.find_by(user_id: user_id, review_id: @review_id)
      cool.destroy
      @cools = Cool.where(review_id: @review_id)
    end

    render 'api/adjectives/update_cool'
  end

  def update_useful
    useful_params = params[:useful]
    user_id = useful_params[:user_id].to_i
    @review_id = useful_params[:review_id].to_i
    if Useful.where(review_id: @review_id,user_id: user_id).length == 0
      @user_marked = Useful.where(review_id: @review_id,user_id: user_id)
      Useful.create!(user_id: user_id, review_id: @review_id)
      @useful = Useful.where(review_id: @review_id)
    else
      @user_marked = Useful.where(review_id: @review_id,user_id: user_id)
      useful = Useful.find_by(user_id: user_id, review_id: @review_id)
      useful.destroy
      @useful = Useful.where(review_id: @review_id)
    end

    render 'api/adjectives/update_useful'
  end

  def update_funny
    funny_params = params[:funny]
    user_id = funny_params[:user_id].to_i
    @review_id = funny_params[:review_id].to_i
    if Funny.where(review_id: @review_id,user_id: user_id).length == 0
      @user_marked = Funny.where(review_id: @review_id,user_id: user_id)
      Funny.create!(user_id: user_id, review_id: @review_id)
      @funny = Funny.where(review_id: @review_id)
    else
      @user_marked = Funny.where(review_id: @review_id,user_id: user_id)
      funny = Funny.find_by(user_id: user_id, review_id: @review_id)
      funny.destroy
      @funny = Funny.where(review_id: @review_id)
    end
    
    render 'api/adjectives/update_funny'
  end


  private
  def adjective_params
    params.require(:adjective).permit(:review_id, :user_id)
  end

end
