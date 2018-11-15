json.adjectives do

  json.funny do
    json.set! @review_id do
      json.funny @funny
      json.funny_count @user_marked.length
    end
  end

  json.cool do
  end

  json.useful do
  end

end
