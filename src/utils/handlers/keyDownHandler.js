function keyDownHandler(e) {
  if (e.key.length === 1) {
    e.preventDefault();
    this.props.value += e.key;
    this.field.value = this.props.value;
  }

  this.upperLatterHandler(e);

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
      this.addValue(e, "   ");
    }
    if (e.key === "Delete" && key.innerHTML === "del") {
      this.props.value =
        this.props.value.slice(0, this.field.selectionStart - 1) +
        this.props.value.slice(this.field.selectionStart);
    }
    if (e.key === " " && key.innerHTML === " ") {
      this.addValue(e, "");
    }
    if (e.key === "Enter" && key.innerHTML === "Enter") {
      this.addValue(e, "\n");
    }
    if (e.key === "Backspace" && key.innerHTML === "Backspace") {
      e.preventDefault();
      this.props.value = this.props.value.slice(0, this.props.value.length - 1);
      this.field.value = this.props.value;
    }
    if (e.key === "ArrowUp" && key.innerHTML === "▲") {
      this.addValue(e, "▲");
    }
    if (e.key === "ArrowLeft" && key.innerHTML === "◀") {
      this.addValue(e, "◀");
    }
    if (e.key === "ArrowRight" && key.innerHTML === "►") {
      this.addValue(e, "►");
    }
    if (e.key === "ArrowDown" && key.innerHTML === "▼") {
      e.preventDefault();
      this.addValue(e, "▼");
    }
    if (e.code === "ShiftLeft" && key.innerHTML === "shift left") {
      key.classList.add("keyboard__key_active");

      this.toggleLangsHandler();
    }
    if (
      (e.code === "ShiftRight" && key.innerHTML === "shift right") ||
      (e.code === "AltLeft" && key.innerHTML === "alt L") ||
      (e.code === "AltRight" && key.innerHTML === "alt R") ||
      (e.key === "Control" && key.innerHTML === "ctrl") ||
      (e.key === "ArrowUp" && key.innerHTML === "▲") ||
      (e.key === "ArrowLeft" && key.innerHTML === "◀") ||
      (e.key === "ArrowRight" && key.innerHTML === "►") ||
      (e.key === "ArrowDown" && key.innerHTML === "▼")
    ) {
      key.classList.add("keyboard__key_active");
    }
  });
}

export default keyDownHandler;
