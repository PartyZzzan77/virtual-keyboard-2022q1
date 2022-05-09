import upperCharsRU from "../data/upperCharsRU";
import upperCharsEN from "../data/upperCharsEN";

function upperLatter(e) {
  const { target } = e;

  if (
    target.innerHTML === "shift left" ||
    target.innerHTML === "shift right" ||
    e.code === "ShiftLeft" ||
    e.code === "ShiftRight"
  ) {
    this.keysCollection = this.keysContainer.querySelectorAll(".keyboard__key");

    const upperChars =
      this.keysCollection[0].innerHTML === "RU" ? upperCharsRU : upperCharsEN;

    let i = 1;
    while (i < 14) {
      this.keysCollection[i].innerHTML = upperChars[i];
      i += 1;
    }
    this.keysCollection.forEach((key) => {
      const keyNode = key;
      if (keyNode.innerHTML === "[") {
        keyNode.innerHTML = "{";
      }
      if (keyNode.innerHTML === "]") {
        keyNode.innerHTML = "}";
      }
      if (keyNode.innerHTML === ";") {
        keyNode.innerHTML = ":";
      }
      if (keyNode.innerHTML === "'") {
        keyNode.innerHTML = '"';
      }
      if (keyNode.innerHTML === ",") {
        keyNode.innerHTML = "<";
      }
      if (keyNode.innerHTML === ".") {
        keyNode.innerHTML = ">";
      }
      if (keyNode.innerHTML === "/") {
        keyNode.innerHTML = "?";
      }
      if (keyNode.innerHTML.length === 1) {
        keyNode.innerHTML = keyNode.innerHTML.toUpperCase();
      }
    });
  }
}
export default upperLatter;
