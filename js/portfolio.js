 const name = document.getElementById("nameToggle");
  const dropdown = document.getElementById("contactDropdown");

  name.addEventListener("click", () => {
    dropdown.classList.toggle("hidden");
  });

  // Optional: close when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".name-container")) {
      dropdown.classList.add("hidden");
    }
  });