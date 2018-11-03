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
    @businesses = []
    if params[:price] && params[:noise] && params[:delivery]
      prices = params[:price].split(",")
      prices.each do |price|
        @businesses =  @businesses + Business.where(price: price.to_i)
      end
      noises =  params[:noise].split(",")
      noises.each do |noise|
        @businesses = @businesses.select { |bus| bus.noise == noise.to_i} + Business.where(noise: noise.to_i)
      end
      deliveries =  params[:delivery].split(",")
      deliveries.each do |delivery|
        @businesses = @businesses.select { |bus| bus.delivery == delivery.to_i} + Business.where(delivery: delivery.to_i)
      end
    elsif params[:price] && params[:noise]
      prices = params[:price].split(",")
      prices.each do |price|
        @businesses =  @businesses + Business.where(price: price.to_i)
      end
      noises =  params[:noise].split(",")
      noises.each do |noise|
        @businesses = @businesses.select { |bus| bus.noise == noise.to_i} + Business.where(noise: noise.to_i)
      end
    elsif params[:price] && params[:delivery]
      prices = params[:price].split(",")
      prices.each do |price|
        @businesses =  @businesses + Business.where(price: price.to_i)
      end
      deliveries =  params[:delivery].split(",")
      deliveries.each do |delivery|
        @businesses = @businesses.select { |bus| bus.delivery == delivery.to_i} + Business.where(delivery: delivery.to_i)
      end
    elsif params[:noise] && params[:delivery]
      noises = params[:noise].split(",")
      noises.each do |noise|
        @businesses =  @businesses + Business.where(noise: noise.to_i)
      end
      deliveries =  params[:delivery].split(",")
      deliveries.each do |delivery|
        @businesses = @businesses.select { |bus| bus.delivery == delivery.to_i} + Business.where(delivery: delivery.to_i)
      end
    elsif params[:noise]
      noises =  params[:noise].split(",")
      noises.each do |noise|
        @businesses = @businesses + Business.where(noise: noise.to_i)
      end
    elsif params[:delivery]
      deliveries = params[:delivery].split(",")
      deliveries.each do |delivery|
        @businesses =  @businesses + Business.where(delivery: delivery.to_i)
      end
    elsif params[:price]
      prices = params[:price].split(",")
      prices.each do |price|
        @businesses =  @businesses + Business.where(price: price.to_i)
      end
    elsif params[:search] == "[object Object]"
      @businesses = Business.where('name ILIKE ?', "%%")
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
    :business_category_id, :latitude, :longitude, :price, :delivery, :noise)
  end

end
