@business_categories.each do |category|
  json.set! category.id do
    json.partial! 'api/shared/categories', business_category: @business_category
  end
end
