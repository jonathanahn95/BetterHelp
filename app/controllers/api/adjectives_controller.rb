class Api::AdjectivesController < ApplicationController

  def find_adjective
    cool = Cool.where(review_id: params[:adjective].to_i)
    @cool_count = cool.count

    funny = Funny.where(review_id: params[:adjective].to_i)
    @funny_count = funny.count

    useful = Useful.where(review_id: params[:adjective].to_i)
    @useful_count = useful.count

    #
    render "api/adjectives/show"

  end


  def update
    #
    adjective_params = params[:query].split("?")
    review_id = adjective_params[0]
    adjective_name = adjective_params[1]
    user_id = adjective_params[2]

    if user_id == 'undefined'
      return
    end

    case adjective_name
    when "cool"
      if Cool.where(user_id: user_id).length > 0
        adj = Cool.where(user_id: user_id).destroy_all
        cool = Cool.where(review_id: review_id.to_i)
        @cool_count = cool.count
        funny = Funny.where(review_id: review_id.to_i)
        @funny_count = funny.count
        useful = Useful.where(review_id: review_id.to_i)
        @useful_count = useful.count
        #
        render 'api/adjectives/show'
      else
        Cool.create!(review_id: review_id.to_i, user_id:user_id.to_i)
        cool = Cool.where(review_id: review_id.to_i)
        @cool_count = cool.count
        funny = Funny.where(review_id: review_id.to_i)
        @funny_count = funny.count
        useful = Useful.where(review_id: review_id.to_i)
        @useful_count = useful.count
        #
        render 'api/adjectives/show'
      end
    when "useful"
      if Useful.where(user_id: user_id).length > 0
        adj = Useful.where(user_id: user_id).destroy_all
        cool = Cool.where(review_id: review_id.to_i)
        @cool_count = cool.count
        funny = Funny.where(review_id: review_id.to_i)
        @funny_count = funny.count
        useful = Useful.where(review_id: review_id.to_i)
        @useful_count = useful.count
        render 'api/adjectives/show'
      else
        Useful.create!(review_id: review_id.to_i, user_id:user_id.to_i)
        cool = Cool.where(review_id: review_id.to_i)
        @cool_count = cool.count
        funny = Funny.where(review_id: review_id.to_i)
        @funny_count = funny.count
        useful = Useful.where(review_id: review_id.to_i)
        @useful_count = useful.count
        render 'api/adjectives/show'
      end
    when "funny"
      if Funny.where(user_id: user_id).length > 0
        adj = Funny.where(user_id: user_id).destroy_all
        cool = Cool.where(review_id: review_id.to_i)
        @cool_count = cool.count
        funny = Funny.where(review_id: review_id.to_i)
        @funny_count = funny.count
        useful = Useful.where(review_id: review_id.to_i)
        @useful_count = useful.count
        render 'api/adjectives/show'
      else
        Funny.create!(review_id: review_id.to_i, user_id:user_id.to_i)
        cool = Cool.where(review_id: review_id.to_i)
        @cool_count = cool.count
        funny = Funny.where(review_id: review_id.to_i)
        @funny_count = funny.count
        useful = Useful.where(review_id: review_id.to_i)
        @useful_count = useful.count
        render 'api/adjectives/show'
      end
    end

  end

  private
  def adjective_params
    params.require(:adjective).permit(:review_id, :user_id)
  end

end
