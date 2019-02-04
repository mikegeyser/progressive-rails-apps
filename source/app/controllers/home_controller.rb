class HomeController < ApplicationController
  def index
    if params[:fragment]
      render layout: false
    end
  end
end
