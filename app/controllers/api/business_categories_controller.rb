class Api::BusinessCategoriesController < ApplicationController


  def index
    # @businesses = BusinessCategory.find_by(id: params[:business_category_id]).businesses
    @businesses = BusinessCategory.all
    # render 'api/categories/index'


  end

  # def create
  #   @business = BusinessCategory.new(business_category_params)
  #
  #   if @business.save
  #     render :index
  #   else
  #     render json: @business.errors.full_messages
  #   end
  # end




  private
  def business_category_params
    params.require(:business_category).permit(:category)
  end

end
