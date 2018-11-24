json.adjectives do

  json.cool do
    json.set! @review_id do
      json.cools @cools
      json.cool_count @user_marked.length
    end
  end


  json.funny do
  end

  json.useful do
  end
end
