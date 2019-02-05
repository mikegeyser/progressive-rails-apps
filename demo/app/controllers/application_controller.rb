class ApplicationController < ActionController::Base
    def head
        render 'shared/_head', layout: false
    end

    def header
        render 'shared/_header', layout: false
    end

    def footer
        render 'shared/_footer', layout: false
    end
end
