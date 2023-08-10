Rails.appication.config.middleware.insert_before 0, Rack::Cors do
  allow do
    orgins "*"
    resource "*", headers: :any, methods: %i[get post patch put delete]
  end
end