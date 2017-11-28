Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  namespace :api, defaults: { format: :json } do
    resources :events, only: [:show, :index, :create, :new]
    resources :registrations, only: [:index, :create, :destroy]
    resources :users, only: [:new, :create, :show, :index] 
    resources :my_events, only: [:index]
    #bookmark index will be the current user's bookmarks
    resources :bookmarks, only: [:index, :create, :destroy]
    resource :session, only: [:new, :create, :destroy]
  end
end
