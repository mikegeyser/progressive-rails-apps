class ArticleController < ApplicationController
    def index
        @first_page = true
        @article = Lines::Article.published.find(params[:id])
        @article.teaser = nil unless @article.teaser.present?
  
        @related_articles = Lines::Article.published.where('id != ?', @article.id).order('').limit(2)

        if params[:fragment]
            render layout: false
          end
    end    
end
