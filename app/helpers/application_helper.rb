module ApplicationHelper

  # have it in an array and call it in applicaiton.hmtl.erb, it will generate for you
  # ['bakery.jp']

  def generate_random_pic

    ["burgers.jpg","o.jpg", "splash.jpg", "cookie.jpg"].sample
  end


end
