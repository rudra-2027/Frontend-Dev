const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const images = document.querySelectorAll(".img");

images.forEach(img => {
  img.onclick = () => {
    modal.style.display = "flex";
    modalImg.src = img.src.replace("200", "600");
  };
});

modal.onclick = () => modal.style.display = "none";

document.querySelector(".modal-content").onclick = e => {
  e.stopPropagation();
};
