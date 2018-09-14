@businesses.each do |business|
  json.set! business.id do
    json.extract! business, :id, :category
  end
end
