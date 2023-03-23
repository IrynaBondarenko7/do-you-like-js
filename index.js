const btn = document.querySelector(".btn");
const btnAgree = document.querySelector(".btn-agree");
const modalLabel = document.querySelector("#exampleModalLabel");
const modalText = document.querySelector(".modal-text");
const modalImg = document.querySelector(".modal-img");

const onBtnHover = (event) => {
  btn.style.position = "absolute";
  const { target: button } = event;

  button.style.top = `${Math.floor(
    Math.random() * (window.innerHeight - button.clientHeight)
  )}px`;
  button.style.left = `${Math.floor(
    Math.random() * (window.innerWidth - button.clientWidth)
  )}px`;
};

function onClick(event) {
  console.log("Hey");
}
btn.addEventListener("mouseover", onBtnHover);
btn.addEventListener("click", onClick);

btnAgree.addEventListener("shown.bs.modal", () => {
  myInput.focus();
});

var myModal = new BSN.Modal("#exampleModal");

btnAgree.addEventListener("click", onBtnAgreeClick);
function onBtnAgreeClick() {
  modalLabel.textContent = "Congratulations!";
  modalText.textContent = "You made the right choice!";
  modalImg.src =
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWZiM2QyNDg2YTg1ZmU1ZGIwMDUxZjc4MjA1NDI2MzBjZmViNWQ5MiZjdD1n/WtOkaikiwaR87ZvAFH/giphy.gif";
  myModal.show();
}

btn.addEventListener("click", onBtnDisagreeClick);

function onBtnDisagreeClick() {
  modalLabel.textContent = "Oh, it's so sad(";
  modalText.textContent = "Maybe you'll give Java Script another chance?";
  modalImg.src = "https://thumbs.gfycat.com/HotGrossApe-size_restricted.gif";
  myModal.show();
}
