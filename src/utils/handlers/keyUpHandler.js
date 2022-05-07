function keyUpHandler(e) {
  this.field.focus();
  const keys = [...this.keysContainer.querySelectorAll(".keyboard__key")];
  keys.forEach((key) => {
    if (e.key === key.innerHTML) {
      key.classList.remove("keyboard__key_active");
      this.props.value += "";
    }
    if (e.key === "CapsLock" && key.innerHTML === "CapsLock") {
      key.classList.remove("keyboard__key_active");
      this.toggleCapsKey(keys);
    }
    if (e.code === "ShiftLeft" && key.innerHTML === "shift left") {
      key.classList.remove("keyboard__key_active");
      this.toggleCapsKey(keys);
    }
    if (e.code === "ShiftRight" && key.innerHTML === "shift right") {
      key.classList.remove("keyboard__key_active");
      this.toggleCapsKey(keys);
    }
    if (e.code === "AltLeft" && key.innerHTML === "alt L") {
      key.classList.remove("keyboard__key_active");
    }
    if (e.code === "AltRight" && key.innerHTML === "alt R") {
      key.classList.remove("keyboard__key_active");
    }
    if (e.key === "Control" && key.innerHTML === "ctrl") {
      key.classList.remove("keyboard__key_active");
    }
    if (e.key === "ArrowUp" && key.innerHTML === "▲") {
      key.classList.remove("keyboard__key_active");
    }
    if (e.key === "ArrowLeft" && key.innerHTML === "◀") {
      key.classList.remove("keyboard__key_active");
    }
    if (e.key === "ArrowRight" && key.innerHTML === "►") {
      key.classList.remove("keyboard__key_active");
    }
    if (e.key === "ArrowDown" && key.innerHTML === "▼") {
      key.classList.remove("keyboard__key_active");
    }
  });
}
export default keyUpHandler;
