class BusinessCategory < ApplicationRecord
  validates :category, presence: true

  has_many :businesses


end
