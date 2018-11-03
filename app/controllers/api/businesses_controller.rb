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
    # @businesses = []
    # if params[:price] && params[:noise] && params[:delivery]
    #   prices = params[:price].split(",")
    #   prices.each do |price|
    #     @businesses =  @businesses + Business.where(price: price.to_i)
    #   end
    #
    #   noises =  params[:noise].split(",")
    #   noises.each do |noise|
    #     @businesses = @businesses.select { |bus| bus.noise == noise.to_i} + Business.where(noise: noise.to_i)
    #   end
    #
    #   deliveries =  params[:delivery].split(",")
    #   deliveries.each do |delivery|
    #     @businesses = @businesses.select { |bus| bus.delivery == delivery.to_i} + Business.where(delivery: delivery.to_i)
    #   end
    # elsif params[:price] && params[:noise]
    #   prices = params[:price].split(",")
    #   prices.each do |price|
    #     @businesses =  @businesses + Business.where(price: price.to_i)
    #   end
    #
    #   noises =  params[:noise].split(",")
    #   noises.each do |noise|
    #     @businesses = @businesses + Business.where(noise: noise.to_i)
    #   end
    # elsif params[:price] && params[:delivery]
    #   prices = params[:price].split(",")
    #   prices.each do |price|
    #     @businesses =  @businesses + Business.where(price: price.to_i)
    #   end
    #
    #   deliveries =  params[:delivery].split(",")
    #   deliveries.each do |delivery|
    #     @businesses = @businesses + Business.where(delivery: delivery.to_i)
    #   end
    #
    # elsif params[:noise] && params[:delivery]
    #   noises = params[:noise].split(",")
    #   noises.each do |noise|
    #     @businesses =  @businesses + Business.where(noise: noise.to_i)
    #   end
    #
    #   deliveries =  params[:delivery].split(",")
    #   deliveries.each do |delivery|
    #     @businesses = @businesses + Business.where(delivery: delivery.to_i)
    #   end
    # elsif params[:noise]
    #   noises =  params[:noise].split(",")
    #   noises.each do |noise|
    #     @businesses = @businesses + Business.where(noise: noise.to_i)
    #   end
    # elsif params[:delivery]
    #   deliveries = params[:delivery].split(",")
    #   deliveries.each do |delivery|
    #     @businesses =  @businesses + Business.where(delivery: delivery.to_i)
    #   end
    # elsif params[:price]
    #   prices = params[:price].split(",")
    #   prices.each do |price|
    #     @businesses =  @businesses + Business.where(price: price.to_i)
    #   end
    # elsif params[:search] == "[object Object]"
    #   @businesses = Business.where('name ILIKE ?', "%%")
    # else
    #   @businesses = Business.where('name ILIKE ?', "%#{params[:search]}%")
    # end

    # Business.where(price: param_queries[:price].slice(1..-2).split(","),noise:1,delivery:1)
    # Business.where(price: 1,noise: 1,delivery:1)
    # debugger
    query_matches = ""
    param_queries = {price: params[:price], noise: params[:noise], delivery: params[:delivery]}
    selected_queries = param_queries.select {|k,v| v.length > 2}
    selected_queries.keys.each_with_index do |query,idx|
      if idx != selected_queries.length - 1
        query_matches << "#{query} IN  #{selected_queries[query]} AND "
      else
        query_matches << "#{query} IN  #{selected_queries[query]} "
      end
    end
    # Business.where("price IN  (3,4) AND  noise IN (1)")
    @businesses = Business.where(query_matches)
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
