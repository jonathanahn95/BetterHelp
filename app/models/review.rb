class Review < ApplicationRecord
  validates :user_id, :business_id, :rating, :body, presence: true

  belongs_to :user
  belongs_to :business


end
