Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  namespace :api, defaults: { format: :json } do
    resources :events, only: [:show, :index, :create, :new] do 
      resources :registrations, only: [:create, :destroy]
    end 
    resources :users, only: [:new, :create, :show, :index]
    resource :session, only: [:new, :create, :destroy]
  end
end
