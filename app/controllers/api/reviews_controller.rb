class Api::ReviewsController < ApplicationController


  def show
    @review = Review.find(params[:id])
  end

  def index
    if params[:business_id]
      @reviews = Review.includes(:user).includes(:business).where( business_id: params[:business_id]).order(id: :desc)[0..8]
    else
      @reviews = Review.includes(:user).includes(:business).all.order(id: :desc)[0..8]
    end
  end

  def create
    @review = Review.new(review_params)
    @review.user_id = current_user.id

    if @review.save
      render "api/reviews/show"
    else
      render json: @review.errors.full_messages, status: 522
    end
  end

  def update
    @review = Review.find(params[:id])

    if @review.update(review_params)
      render 'api/reviews/show'
    else
      render json: @review.errors.full_messages, status: 522
    end
  end


  def destroy
    @review = Review.find(params[:id])
    @review.destroy
    render 'api/reviews/show'
  end




  private
  def review_params
    params.require(:review).permit(:business_id, :rating, :body)
  end


end
