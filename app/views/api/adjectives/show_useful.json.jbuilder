json.adjectives do

  json.useful do
    json.set! @review_id do
      json.useful @useful
      json.useful_count @user_marked.length
    end
  end

  json.cool do
  end

  json.funny do
  end

end
