class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/reviews" do
    all_Reviews = Review.all
    all_Reviews.to_json
  end

  get "/reviews/:id" do
    all_Reviews = Review.find(params[:id])
    all_Reviews.to_json
  end

  post "/reviews" do
    new_Review = Review.create(
      comment: params[:comment]
    )
    new_Review.to_json
  end

  #DELETE REVIEWS
  delete "/reviews" do
    all_Reviews = Review.all
    all_Reviews.destroy
    all_Reviews.to_json
  end

  delete "/reviews/:id" do
    all_Reviews = Review.find(params[:id])
    all_Reviews.destroy
    all_Reveiws.to_json
  end





  # get "/" do
  #   { message: "Good luck with your project!" }.to_json
  # end

  # get "/woobly" do
  #   { message: "Woobly" }.to_json
  # end

  # get "/users" do
  #   all_Users = User.all
  #   all_Users.to_json
  # end

  # get "/users/:id" do
  #   all_Users = User.find(params[:id])
  #   all_Users.to_json
  # end

  # post "/users" do
  #   all_Users = User.create(
  #     name:params[:name],
  #     image:params[:image]
  #   )
  # end

  # delete "/users/:id" do
  #   all_Users = User.find(params[:id])
  #   all_Users.destroy
  #   all_Users.to_json
  # end

end
