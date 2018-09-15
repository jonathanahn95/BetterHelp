json.extract! @business, :id, :owner_id, :name, :address, :hours, :phone_number, :website, :city , :state, :zip_code, :business_category_id, :latitude, :longitude

json.reviews do
  @business.reviews.each do |review|
    json.set! review.id do
      json.extract! review, :id, :user_id, :business_id, :body, :rating
    end
  end
end
