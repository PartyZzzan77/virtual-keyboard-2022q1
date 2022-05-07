import createKeys from "../helpers/createKeys";

function keyDownHandler(e) {
  if (e.key.length === 1) {
    e.preventDefault();
    this.props.value += e.key;
    this.field.value = this.props.value;
  }

  const keys = [...this.keysContainer.querySelectorAll(".keyboard__key")];
  keys.forEach((key) => {
    if (e.key === key.innerHTML) {
      key.classList.add("keyboard__key_active");
    }
    if (e.key === "CapsLock" && key.innerHTML === "CapsLock") {
      e.preventDefault();
      key.classList.add("keyboard__key__active");
      this.toggleCapsKey(keys);
    }
    if (e.key === "Tab" && key.innerHTML === "Tab") {
      e.preventDefault();
      this.props.value += "   ";
      this.field.value = this.props.value;
    }
    if (e.key === "Delete" && key.innerHTML === "del") {
      this.props.value =
        this.props.value.slice(0, this.field.selectionStart - 1) +
        this.props.value.slice(this.field.selectionStart);
    }
    if (e.key === " " && key.innerHTML === " ") {
      e.preventDefault();
      this.props.value += "";
      this.field.value = this.props.value;
    }
    if (e.key === "Enter" && key.innerHTML === "Enter") {
      e.preventDefault();
      this.props.value += "\n";
      this.field.value = this.props.value;
    }
    if (e.key === "Backspace" && key.innerHTML === "Backspace") {
      e.preventDefault();
      this.props.value = this.props.value.slice(0, this.props.value.length - 1);
      this.field.value = this.props.value;
    }
    if (e.key === "ArrowUp" && key.innerHTML === "▲") {
      e.preventDefault();
      this.props.value += "▲";
      this.field.value = this.props.value;
    }
    if (e.key === "ArrowLeft" && key.innerHTML === "◀") {
      e.preventDefault();
      this.props.value += "◀";
      this.field.value = this.props.value;
    }
    if (e.key === "ArrowRight" && key.innerHTML === "►") {
      e.preventDefault();
      this.props.value += "►";
      this.field.value = this.props.value;
    }
    if (e.key === "ArrowDown" && key.innerHTML === "▼") {
      e.preventDefault();
      this.props.value += "▼";
      this.field.value = this.props.value;
    }
    if (e.code === "ShiftLeft" && key.innerHTML === "shift left") {
      key.classList.add("keyboard__key_active");
      this.toggleCapsKey(keys);
      const islang = JSON.parse(localStorage.lang);
      document.addEventListener("keyup", (evt) => {
        if (evt.code === "ShiftRight" && islang) {
          localStorage.setItem("lang", "false");
          this.keysContainer.innerHTML = " ";
          this.keysContainer.append(createKeys());
        }
        if (evt.code === "ShiftRight" && !islang) {
          window.localStorage.setItem("lang", "true");
          this.keysContainer.innerHTML = " ";
          this.keysContainer.append(createKeys());
        }
      });
    }
    if (e.code === "ShiftRight" && key.innerHTML === "shift right") {
      key.classList.add("keyboard__key_active");
      this.toggleCapsKey(keys);
    }
    if (e.code === "AltLeft" && key.innerHTML === "alt L") {
      key.classList.add("keyboard__key_active");
    }
    if (e.code === "AltRight" && key.innerHTML === "alt R") {
      key.classList.add("keyboard__key_active");
    }
    if (e.key === "Control" && key.innerHTML === "ctrl") {
      key.classList.add("keyboard__key_active");
    }
    if (e.key === "ArrowUp" && key.innerHTML === "▲") {
      key.classList.add("keyboard__key_active");
    }
    if (e.key === "ArrowLeft" && key.innerHTML === "◀") {
      key.classList.add("keyboard__key_active");
    }
    if (e.key === "ArrowRight" && key.innerHTML === "►") {
      key.classList.add("keyboard__key_active");
    }
    if (e.key === "ArrowDown" && key.innerHTML === "▼") {
      key.classList.add("keyboard__key_active");
    }
  });
}

export default keyDownHandler;
