// script.js
function joinDiscord() {
  window.open("https://discord.gg/latorp", "_blank");
}
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Dziękujemy za kontakt! Odezwiemy się wkrótce.");
  this.reset();
});
