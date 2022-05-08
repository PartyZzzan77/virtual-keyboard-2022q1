import createKeys from "../helpers/createKeys";

function clickHandler(e) {
  const { target } = e;
  this.keysCollection = [
    ...this.keysContainer.querySelectorAll(".keyboard__key"),
  ];

  if (target.closest(".keyboard__key")) {
    this.field.focus();
  }

  if (target.innerHTML === "Enter") {
    this.props.value += "\n";
  }
  if (target.innerHTML === " ") {
    this.props.value += "";
  }
  if (target.innerHTML === "Tab") {
    e.preventDefault();
    this.props.value += "   ";
  }
  if (target.innerHTML === "Backspace") {
    const { value } = this.props;
    this.props.value = value.slice(0, value.length - 1);
  }
  if (target.innerHTML === "del") {
    const start = this.field.selectionStart - 1;
    const end = this.field.selectionStart;
    this.props.value =
      this.props.value.slice(0, start) + this.props.value.slice(end);
  }
  if (target.innerHTML === "CapsLock") {
    target.classList.toggle("keyboard__key_active");
    this.toggleCapsKey(this.keysCollection);
  }

  if (target.innerHTML === "EN") {
    localStorage.setItem("lang", "false");
    this.keysContainer.innerHTML = " ";
    this.keysContainer.append(createKeys());
  }
  if (target.innerHTML === "RU") {
    window.localStorage.setItem("lang", "true");
    this.keysContainer.innerHTML = " ";
    this.keysContainer.append(createKeys());
  }
  if (
    target.innerHTML === "hide 🥷🏻" ||
    target === document.body ||
    target.closest(".title") ||
    target.closest(".subtitle") ||
    target.closest(".ostext")
  ) {
    this.main.classList.add("keyboard_hidden");
  }

  if (target.innerHTML.length === 1) {
    this.props.value += this.props.capsLock
      ? target.innerHTML.toUpperCase()
      : target.innerHTML.toLowerCase();
  }
  this.field.value = this.props.value;
}

export default clickHandler;
