get '/' do

  erb :sign_in
end

get '/feedback' do
  @allFeedback = Feedback.all
  erb  :index
end

post '/feedback/new' do
  content_type :json
  @feedback = Feedback.create(email: params[:email], content: params[:content])
  @feedback.to_json
end


