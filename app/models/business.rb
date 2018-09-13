class Business < ApplicationRecord
  validates :address, presence: true, uniqueness: true
  validates :name, :hours, :phone_number, :website, :city, :state, :zip_code, presence: true
  validates :latitude, :longitude, :business_category_id, presence: true

end
