// ---- Gallery popup ----
const pushBtn = document.getElementById("pushBtn");
const galleryModal = document.getElementById("galleryModal");
const closeModal = document.getElementById("closeModal");

function openGallery() {
  galleryModal.classList.add("open");
  galleryModal.setAttribute("aria-hidden", "false");
  try { document.getElementById("bgMusic").play().catch(() => {}); } catch (e) {}
}

function hideGallery() {
  galleryModal.classList.remove("open");
  galleryModal.setAttribute("aria-hidden", "true");
}

pushBtn.addEventListener("click", openGallery);
closeModal.addEventListener("click", hideGallery);
galleryModal.addEventListener("click", (e) => {
  if (e.target === galleryModal) hideGallery();
});

// ---- Music button (autoplay our song) ----
const musicBtn = document.getElementById("musicBtn");
const musicBox = document.getElementById("musicBox");
const SONG_ID = "8lbRDzhjqeM";

function playOurSong() {
  musicBox.innerHTML =
    `<iframe src="https://www.youtube.com/embed/${SONG_ID}?autoplay=1&mute=0&rel=0"
       height="320" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
}

musicBtn.addEventListener("click", playOurSong);

// ---- Letter popup ----
const letterBtn = document.getElementById("letterBtn");
const letterModal = document.getElementById("letterModal");
const closeLetter = document.getElementById("closeLetter");

function openLetter() {
  letterModal.classList.add("open");
  letterModal.setAttribute("aria-hidden", "false");
}
function hideLetter() {
  letterModal.classList.remove("open");
  letterModal.setAttribute("aria-hidden", "true");
}
letterBtn.addEventListener("click", openLetter);
closeLetter.addEventListener("click", hideLetter);
letterModal.addEventListener("click", (e) => {
  if (e.target === letterModal) hideLetter();
});

// Close modals with Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") { hideGallery(); hideLetter(); }
});
