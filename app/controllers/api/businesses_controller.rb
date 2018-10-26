class Api::BusinessesController < ApplicationController
  def show
    @business = Business.find(params[:id])
    @reviews = @business.reviews
  end

  def index
    @businesses = params[:business_category_id] ? Business.where( business_category_id: params[:business_category_id]) : Business.all
  end

  def search
    # @business_categories = BusinessCategory.where('category ILIKE ?', "%#{params[:search]}%")
    if params[:search].include?("price")
      price = params[:search][-1]
      @businesses = Business.where(price: price)
    elsif params[:search].include?("noise")
      filter_by = params[:search].split("=")[-1]
      @businesses = Business.where(noise: filter_by)
    elsif params[:search].include?("delivery")
      filter_by_two = params[:search].split("=")[-1]
      @businesses = Business.where(delivery: filter_by_two)
    else
      @businesses = Business.where('name ILIKE ?', "%#{params[:search]}%")
    end

    render :index
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
    :business_category_id, :latitude, :longitude, :price)
  end

end
