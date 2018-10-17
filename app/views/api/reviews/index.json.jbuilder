
@reviews.each do |review|
  json.set! review.id do
    json.extract! review, :id, :user_id, :business_id, :rating, :body, :user, :business
  end
end
