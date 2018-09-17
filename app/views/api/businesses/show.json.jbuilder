# json.business do
  json.extract!(
    @business,
    :id,
    :owner_id,
    :name,
    :address,
    :hours,
    :phone_number,
    :website,
    :city ,
    :state,
    :zip_code,
    :business_category_id,
    :latitude,
    :longitude,
    :photos)
# end

json.reviews do
  json.array! @reviews do |review|
    ## fix would be to set the review id here ???
    json.extract!(
      review,
      :id,
      :user_id,
      :business_id,
      :body,
      :rating,
      :created_at,
      )
    #fixed security issue, no pw
    json.user do
      json.extract! review.user, :fname, :lname
    end
  end
end
