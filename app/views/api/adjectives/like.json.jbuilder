json.adjectives do

  json.likes do
    json.set! @review_id do
      json.like @like
      json.like_count @user_marked
    end
  end

  json.funny do

  end

  json.cool do

  end

  json.useful do

  end
end
