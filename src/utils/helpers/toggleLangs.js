import createKeys from "./createKeys";

function toggleLangs() {
  const islang = JSON.parse(localStorage.lang);
  document.addEventListener("keyup", (event) => {
    if (event.code === "ShiftRight" && islang) {
      localStorage.setItem("lang", "false");
      this.keysContainer.innerHTML = "";
      this.keysContainer.append(createKeys());
    }
    if (event.code === "ShiftRight" && !islang) {
      window.localStorage.setItem("lang", "true");
      this.keysContainer.innerHTML = "";
      this.keysContainer.append(createKeys());
    }
  });
}
export default toggleLangs;
