Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: 'json' } do
    get 'businesses/search', to: 'businesses#search'
    # get 'adjectives/adjective', to: 'adjectives#find_adjective'

    post 'adjectives/likes', to: 'adjectives#create_like'
    delete 'adjectives/likes/:id', to: 'adjectives#delete_like'
    patch 'adjectives/cool', to: 'adjectives#update_cool'
    patch 'adjectives/useful', to: 'adjectives#update_useful'
    patch 'adjectives/funny', to: 'adjectives#update_funny'
    get 'adjectives/cool/:id', to: 'adjectives#show_cool'
    get 'adjectives/funny/:id', to: 'adjectives#show_funny'
    get 'adjectives/useful/:id', to: 'adjectives#show_useful'

    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :businesses, only: [:index, :create, :show] do
      resources :reviews, only: [:create, :index]
    end
    resources :business_categories, only: [:index, :create, :show] do
      resources :businesses, only: [:index]
    end
    resources :reviews, only: [:show, :destroy, :update, :index]

  end
end
