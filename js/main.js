//header scroll
let navbar = document.querySelector(".navbar");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 50) {
    navbar.classList.add("header-scrolled");
  } else {
    navbar.classList.remove("header-scrolled");
  }
};


//jquery starting
//navbar hide
$(".nav-link").click(function () {
  $(".navbar-collapse.collapse").slideUp("slow", function () {
    $(this).removeClass("show");
  });
});

// Confrimation button jQuery
$(document).ready(function () {
  $("#avaiblity").click(function () {
    var startDate = $('input[placeholder="Start-Date"]').val();
    var endDate = $('input[placeholder="End-Date"]').val();
    var adults = $("select.form-select:eq(0)").val();
    var children = $("select.form-select:eq(1)").val();

    if (
      startDate &&
      endDate &&
      adults !== "Adults" &&
      children !== "Children"
    ) {
      $("#alertConfirmation").fadeIn().delay(2000).fadeOut();
    } else {
      $("#elseConfirmation").fadeIn().delay(2000).fadeOut();
      // alert("Please fill all required fields first.");
    }
  });
});

$(document).ready(function () {
  // Scroll to the top when .reservation-btn is clicked
  $(".reservation-btn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

  // Show the form when "Book Now" button is clicked
  $("#submit").click(function () {
    $("#popupForm").fadeIn();
  });

  // Show confirmation message when "Confirmed" button is clicked
  $("#submitform").click(function () {
    $("#popupForm").fadeOut();
    $("#alertMessage").fadeIn();
    $("#alertMessage").fadeOut(2000);
  });
});
