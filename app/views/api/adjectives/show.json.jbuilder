json.adjectives do

  json.likes do
    json.set! @like.review_id do
      json.extract!( @like, :id, :review_id)
    end
  end

  json.funny do
    # json.set! @funny.review_id do
    #   json.extract!( @funny, :id, :review_id)
    # end
  end

  json.cool do
    # json.set! @cool.review_id do
    #   json.extract!( @cool, :id, :review_id, @cool_count)
    # end
  end

  json.useful do
    # json.set! @useful.review_id do
    #   json.extract!( @useful, :id, :review_id)
    # end
  end
end
