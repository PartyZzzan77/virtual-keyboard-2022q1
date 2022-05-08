function keyUpHandler(e) {
  this.field.focus();
  const keys = [...this.keysContainer.querySelectorAll(".keyboard__key")];

  this.lowerLatterHandler(e);

  keys.forEach((key) => {
    if (e.key === key.innerHTML) {
      key.classList.remove("keyboard__key_active");
      this.props.value += "";
    }
    if (e.key === "CapsLock" && key.innerHTML === "CapsLock") {
      key.classList.remove("keyboard__key_active");
      this.toggleCapsKey(keys);
    }
    if (
      (e.code === "ShiftLeft" && key.innerHTML === "shift left") ||
      (e.code === "ShiftRight" && key.innerHTML === "shift right") ||
      (e.code === "AltLeft" && key.innerHTML === "alt L") ||
      (e.code === "AltRight" && key.innerHTML === "alt R") ||
      (e.key === "Control" && key.innerHTML === "ctrl") ||
      (e.key === "ArrowUp" && key.innerHTML === "▲") ||
      (e.key === "ArrowLeft" && key.innerHTML === "◀") ||
      (e.key === "ArrowRight" && key.innerHTML === "►") ||
      (e.key === "ArrowDown" && key.innerHTML === "▼")
    ) {
      key.classList.remove("keyboard__key_active");
    }
  });
}
export default keyUpHandler;
