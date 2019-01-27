class ApplicationController < ActionController::Base
    def head
        render 'shared/_head'
    end

    def header
        render 'shared/_header'
    end

    def footer
        render 'shared/_footer'
    end

    def blahblah
        render 'lines/articles/index'
    end
end
