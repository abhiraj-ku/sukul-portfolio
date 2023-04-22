const hamburger = document.querySelector(".Hamburger");
const navLinks = document.querySelector(".nav-links");

// hamburger event listener
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});
// here event listener is added so that if you click on any nav menu item it will close the nav menu list
document.querySelectorAll(".nav-links").forEach((e) =>
  e.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
  })
);
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  loader.classList.add("loader-hidden");
});

function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "jagdishbose456@gmail.com",
    Password: "E5CC009EAC32566A3F76F6CF4878F2F24767",
    Port: 2525,
    To: "abhirajabhi312@gmail.com",
    From: document.getElementById("email").value,
    Subject: "New Enquiry for Project",
    Body:
      "Name: " +
      document.getElementById("name").value +
      "<br> Email:" +
      document.getElementById("email").value +
      "<br> message:" +
      document.getElementById("message").value,
  }).then((message) => alert(message));
}
