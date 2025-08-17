// =====================
// ABRIR IMAGENS (modal)
// =====================

document.addEventListener("DOMContentLoaded", () => {
  const imagensVideos = document.querySelectorAll("img:not(.ufabc_logo), video");
  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modal-content");

  imagensVideos.forEach(el => {
    el.addEventListener("click", () => {
      modal.style.display = "flex";

      // Limpa conteúdo anterior
      modalContent.innerHTML = "";

      if(el.tagName.toLowerCase() === "img") {
        const modalImg = document.createElement("img");
        modalImg.src = el.src;
        modalImg.alt = el.alt || "";
        modalContent.appendChild(modalImg);
      } else if(el.tagName.toLowerCase() === "video") {
        const modalVideo = document.createElement("video");
        modalVideo.src = el.src;
        modalVideo.controls = true;
        modalVideo.autoplay = true;
        modalContent.appendChild(modalVideo);
      }
    });

    // Previne ação no duplo clique
    el.addEventListener("dblclick", e => {
      e.preventDefault();
      e.stopPropagation();
    });
  });

  function fecharModal() {
    modal.style.display = "none";
    modalContent.innerHTML = ""; // limpa modal ao fechar
  }

  window.fecharModal = fecharModal;

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      fecharModal();
    }
  });
});


// =====================
// MENU RESPONSIVO (mobile)
// =====================
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    if (toggleButton && menu) {
        toggleButton.addEventListener("click", function () {
            menu.classList.toggle("show");
        });
    }
});