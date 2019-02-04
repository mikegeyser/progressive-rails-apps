namespace :workbox do
  desc "Generate the service worker"
  task generateSW: :environment do
      sh('workbox generateSW workbox-config.js')
  end

  desc "Precompile assets, inject manifest, and serve production"
  task server: :environment do

    sh('rails assets:precompile')

    sh('workbox injectManifest workbox-config.js')

    ENV['RAILS_ENV'] = 'production'
    sh('rails server')
  end

end
