class Like < Adjective


  validates :user_id, :review_id, presence: true

  belongs_to :review
  belongs_to :user


end
