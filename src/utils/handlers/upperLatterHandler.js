import upperCharsRU from "../data/upperCharsRU";
import upperCharsEN from "../data/upperCharsEN";

function upperLatterHandler(e) {
  console.log("test");
  const { target } = e;
  if (target.innerHTML === "shift left" || target.innerHTML === "shift right") {
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
      if (keyNode.innerHTML.length === 1) {
        keyNode.innerHTML = keyNode.innerHTML.toUpperCase();
      }
    });
  }
}
export default upperLatterHandler;
