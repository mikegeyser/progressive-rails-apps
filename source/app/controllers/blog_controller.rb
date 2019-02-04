class BlogController < ApplicationController

  def index
    
    @first_page = (params[:page] and params[:page].to_i > 0) ? false : true
      if params[:tag]
        @articles = Lines::Article.published.tagged_with(params[:tag]).page(params[:page].to_i)
      else
        @articles = Lines::Article.published.page(params[:page].to_i).padding(1)
      end
      
      if @articles.first_page?
        if @first_article = Lines::Article.published.first
        @first_article.teaser = nil unless @first_article.teaser.present?
        end
      end
    
      if params[:fragment]
        render layout: false
      end
    end
end
