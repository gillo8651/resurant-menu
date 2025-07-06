document.addEventListener("DOMContentLoaded", function () {
  // WhatsApp and Call Buttons
  const phoneBtn = document.getElementById("call-now");
  const whatsappBtn = document.getElementById("whatsapp-now");

  if (phoneBtn) {
    phoneBtn.addEventListener("click", () => {
      window.location.href = "tel:+254758897510";
    });
  }

  if (whatsappBtn) {
    whatsappBtn.addEventListener("click", () => {
      window.open("https://wa.me/254758897510", "_blank");
    });
  }

  // Menu Filtering
  const categoryButtons = document.querySelectorAll(".category-buttons button");
  const cards = document.querySelectorAll(".card[data-category]");

  categoryButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      categoryButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.getAttribute("data-category");

      cards.forEach((card) => {
        if (category === "all" || card.dataset.category === category) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });
    });
  });
});
