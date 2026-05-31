const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

const reservationForm = document.getElementById("reservation-form");

if (reservationForm) {
  reservationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    event.currentTarget.querySelector(".form-message").textContent = "Merci, votre demande fictive a bien ete prise en compte.";
    event.currentTarget.reset();
  });
}
