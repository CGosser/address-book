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
