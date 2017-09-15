Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      # resources :voters
      resources :volunteers, only: [:index, :create, :show]
      get '/volunteers/:id/voters', to: 'voters#get_voters_by_volunteer'
    end
  end
end
