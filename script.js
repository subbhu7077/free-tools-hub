function toggleMenu() {
  const nav = document.getElementById("navMenu");
  nav.classList.toggle("active");
}

function searchTools() {
  const input = document.getElementById("toolSearch");
  const search = input.value.toLowerCase().trim();

  const cards = document.querySelectorAll(".tool-card");

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();

    if (text.includes(search)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
}
