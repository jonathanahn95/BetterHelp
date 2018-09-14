class Api::BusinessesController < ApplicationController


  def show

    @business = Business.find(params[:id])
  end

  def index
    # @businesses = Business.all
    if params[:business_category_id]
      @businesses = Business.where( business_category_id: params[:business_category_id])
    else
      @businesses = Business.all
    end
  end

  def create
    @business = Business.new(business_params)

    if @business.save
      render 'api/businesses/show'
    else
      render json: @business.errors.full_messages, status: 404
    end
  end



  private
  def business_params
    params
    .require(:business)
    .permit(:owner_id, :name, :address, :hours, :phone_number,
    :website, :city, :state, :zip_code,
    :business_category_id, :latitude, :longitude)
  end

end
