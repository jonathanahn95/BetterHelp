@businesses.each do |business|
  json.set! business.id do
    json.extract! business, :id, :owner_id, :name, :address, :hours, :phone_number, :website, :city , :state, :zip_code, :business_category_id, :latitude, :longitude
  end
end
