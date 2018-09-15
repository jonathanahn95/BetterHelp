class Api::ReviewsController < ApplicationController


  # def index
  #   # @businesses = Business.all
  #   if params[:business_category_id]
  #     @businesses = Business.where( business_category_id: params[:business_category_id])
  #   else
  #     @businesses = Business.all
  #   end
  # end

  def create
    @review = Review.new(review_params)

    if @review.save
      render 'api/reviws/show'
    else
      render json: @review.errors.full_messages, status: 404
    end
  end

  def
  end



  private
  def review_params
    params.require(:review).permit(:user_id, :business_id, :rating, :body)
  end

end
