class Business < ApplicationRecord
  validates :address, presence: true, uniqueness: true
  validates :name, :hours, :phone_number, :website, :city, :state, :zip_code, presence: true
  validates :latitude, :longitude, :business_category_id, presence: true


  belongs_to :business_category
  belongs_to :owner,
    foreign_key: :owner_id,
    class_name: :User,
    optional: true

  has_many :reviews
  has_many_attached :photos

  def self.in_bounds(bounds)
    self.where("latitude < ?", bounds[:northEast][:latitude])
    .where("latitude > ?", bounds[:southWest][:latitude])
    .where("longitude > ?", bounds[:southWest][:longitude])
    .where("longitude < ?", bounds[:northEast][:longitude])
  end

end
