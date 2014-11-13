get '/' do

  erb :sign_in
end

get '/feedback' do
  @allFeedback = Feedback.all
  erb  :index
end

post '/feedback/new' do
  # "hello!!!!"
  @feedback = Feedback.create(email: params[:email], content: params[:content])
  content_type :json
  @feedback.to_json
end


