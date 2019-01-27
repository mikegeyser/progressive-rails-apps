Rails.application.routes.draw do
  get 'home/index'
  get 'head', controller: 'application'
  get 'header', controller: 'application'
  get 'footer', controller: 'application'
  get 'blahblah', controller: 'application'

  mount Lines::Engine => "/blog"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'home#index'
end
