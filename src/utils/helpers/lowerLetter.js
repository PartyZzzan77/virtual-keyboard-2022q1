import createKeys from "./createKeys";

function lowerLatter(e) {
  const { target } = e;
  if (
    target.innerHTML === "shift left" ||
    target.innerHTML === "shift right" ||
    e.code === "ShiftLeft" ||
    e.code === "ShiftRight"
  ) {
    this.keysContainer.innerHTML = "";
    this.keysContainer.append(createKeys());
  }
}

export default lowerLatter;
