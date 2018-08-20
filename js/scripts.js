//back end

function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
}
Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

//front end

$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    var inputFirstName = $("#new-first-name").val();
    var inputLastName = $("#new-last-name").val();
    var newContact = new Contact (inputFirstName, inputLastName);
    console.log(newContact);
    $("#contacts").append(("<li><span class='contact'>" + newContact.fullName() + "</span></li>"));
    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
    });
  });
});

//Examples for adding and removing input lines:
// $("#add-address").click(function() {
//   $("#appended-addresses").append('<div class="new-address">' +
//                              '<div class="form-group">' +
//                                '<label for="new-street">Street</label>' +
//                                '<input type="text" class="form-control new-street">' +
//                              '</div>' +
//                              '<div class="form-group">' +
//                                '<label for="new-city">City</label>' +
//                                '<input type="text" class="form-control new-city">' +
//                              '</div>' +
//                              '<div class="form-group">' +
//                                '<label for="new-state">State</label>' +
//                                '<input type="text" class="form-control new-state">' +
//                              '</div>' +
//                            '</div>');
// // });
//
// $("#remove-address").click(function(){
//       $("#appended-addresses").empty()
