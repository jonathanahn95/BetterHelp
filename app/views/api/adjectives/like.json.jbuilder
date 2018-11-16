json.adjectives do

  json.likes do
    json.set! @review_id do
      json.like @like
      json.like_count @user_marked
    end
  end

  json.cool do
  end

  json.useful do
  end
  json.funny do
  end

end
