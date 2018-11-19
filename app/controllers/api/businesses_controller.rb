class Api::BusinessesController < ApplicationController
  def show
    @business = Business.includes(:reviews).with_attached_photos.find(params[:id])
    @reviews = @business.reviews.includes(:user).includes(:business).order(created_at: :desc)
  end

  def index
    @businesses = params[:business_category_id] ? Business.includes(:reviews).with_attached_photos.where( business_category_id: params[:business_category_id]) : Business.includes(:reviews).with_attached_photos.all
  end

  def search
    if params[:dropdown]
      @businesses = Business.where('name ILIKE ?', "%#{params[:name]}%")
    else
      query_matches = ""
      param_queries = {price: params[:price], noise: params[:noise], delivery: params[:delivery],name: params[:name]}
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
