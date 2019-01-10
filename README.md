

# BetterHelp

[Live!](https://betterhelp.herokuapp.com/#/)
 * Please note the live site is currently on Heroku Hobby Dynos, so please allow a couple seconds for BetterHelp to get up and running *
  
BetterHelp is a single-page web application inspired by Yelp. It is a local-search service application that allows users to write reviews and search businesses. It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.


![](betterhelp.gif	)

## Features


### Mark reviews as funny, cool, useful, and like
BetterHelp uses single table inhertiance to keep code DRY. There is a column `type` on the `adjectives` table which allows creating new class models that inherit from `Adjective` giving the child classes access to the parent class. 

```ruby 
class Cool < Adjective


  validates :user_id, :review_id, presence: true

  belongs_to :review
  belongs_to :user


end
```

### Reviews
Users are able to create, read, update, and delete reviews they have written for relevant businesses. Once a user writes a review, the review is then saved in the database with the `user_id`.
![alt text](https://github.com/jonathanahn95/BetterHelp/blob/master/app/assets/images/git_review.png "Logo Title Text 1")

Once the review is stored in the database, it will redirect you to the business show page where on `componentDidMount`, the relevant reviews for the business will be rendered along with the written review.

![alt text](https://github.com/jonathanahn95/BetterHelp/blob/master/app/assets/images/git_reviews.png "Logo Title Text 1")



### Search
One of BetterHelp's core features is the ability to search for relavent businesses. Users are able to search for relevant businesses and upon submission, an AJAX Api request is made to the database where the businesses are filtered using ActiveRecord.

```ruby
  def search
    @businesses = Business.where('name ILIKE ?', "%#{params[:search]}%")
    render :index
  end
```


