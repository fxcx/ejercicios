const modalBtn = document.getElementById("modal-btn");
const modalAcceptBtn = document.getElementById("modal-accept-btn");
const modalCloseBtn = document.getElementById("modal-close-btn");
const modal = document.getElementById("modal");

const openModal = () => {
  modal.style.display = "block";
};

const closeModal = () => {
  modal.style.display = "none";
};

modalBtn.addEventListener("click", openModal);
modalCloseBtn.addEventListener("click", closeModal);
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});
