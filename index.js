const btn = document.querySelector(".btn");

const onBtnHover = (event) => {
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
