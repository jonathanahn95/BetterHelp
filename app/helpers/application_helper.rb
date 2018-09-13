module ApplicationHelper

  # have it in an array and call it in applicaiton.hmtl.erb, it will generate for you
  # ['bakery.jp']

  def generate_random_pic
    
    ["cupcake.jpg","random.jpg", "splash.jpg", "bakery.jpg"].sample
  end


end
