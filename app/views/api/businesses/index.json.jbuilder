@businesses.each do |business|
  json.set! business.id do
    json.extract!(
      business,
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
      :reviews)
    json.photos do
      json.array! business.photos.each do |photo|
        json.photo_image_url url_for(photo)
      end
    end

  end

end
