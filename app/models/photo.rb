class Photo < ApplicationRecord
  validates :business_id, :image_url, presence: true

  belongs_to :business


end
