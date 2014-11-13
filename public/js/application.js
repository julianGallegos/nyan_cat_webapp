$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()

var addNewEntry = function(event){
  event.preventDefault();
  console.log("i'm in the function")
  console.log(this.email)
  console.log(this.content)
  var ajaxRequest = $.ajax({
    url: '/feedback/new',
    type: 'post',
    data: {email: this.email.value, content: this.content.value}
  })
}


  $("#feedback_form").on("click", addNewEntry)

});

