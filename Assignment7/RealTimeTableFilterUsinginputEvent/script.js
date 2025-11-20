const search = document.getElementById("searchBox");
const rows = document.querySelectorAll("#tableBody tr");
const noResult = document.getElementById("noResult");

search.addEventListener("input", () => {
  const text = search.value.toLowerCase();
  let visibleCount = 0;

  rows.forEach(row => {
    const content = row.textContent.toLowerCase();
    if (content.includes(text)) {
      row.style.display = "";
      visibleCount++;
    } else {
      row.style.display = "none";
    }
  });

  noResult.style.display = visibleCount === 0 ? "block" : "none";
});
