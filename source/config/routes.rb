Rails.application.routes.draw do
  get 'home', to: 'home#index'
  get 'blog', to: 'blog#index'
  get 'blog/:id', to: 'article#index', as: 'id'

  get 'head', controller: 'application'
  get 'header', controller: 'application'
  get 'footer', controller: 'application'

  mount Lines::Engine => "/lines"

  root 'home#index'
end
