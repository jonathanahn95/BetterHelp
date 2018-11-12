class Review < ApplicationRecord
  validates :rating, :body, presence: true

  belongs_to :user
  belongs_to :business
  has_many :adjectives


end
