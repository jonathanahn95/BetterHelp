Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: 'json' } do
    get 'businesses/search', to: 'businesses#search'
    get 'adjectives/adjective', to: 'adjectives#find_adjective'

    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :businesses, only: [:index, :create, :show] do
      resources :reviews, only: [:create, :index]
    end
    resources :business_categories, only: [:index, :create, :show] do
      resources :businesses, only: [:index]
    end
    resources :reviews, only: [:show, :destroy, :update, :index]
    resources :adjectives, only: [:update, :show]

  end
end
