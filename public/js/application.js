$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them
  bindEvents()
});

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()

function bindEvents(){
  $("#feedback_form").on("click", addNewEntry);
}


var addNewEntry = function(event){
  event.preventDefault();
  var ajaxRequest = $.ajax({
    url: '/feedback/new',
    type: 'post',
    data: {email: this.email.value, content: this.content.value}
  });
  ajaxRequest.done(function(server_data){
    console.log("yo")
    $("#new_entry").append(server_data.content + '<br>')
  }
)};





