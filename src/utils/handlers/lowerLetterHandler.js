import createKeys from "../helpers/createKeys";

function lowerLatterHandler(e) {
  const { target } = e;
  if (target.innerHTML === "shift left" || target.innerHTML === "shift right") {
    this.keysContainer.innerHTML = "";
    this.keysContainer.append(createKeys());
  }
}

export default lowerLatterHandler;
