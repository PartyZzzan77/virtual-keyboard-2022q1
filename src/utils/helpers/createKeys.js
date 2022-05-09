const createKeys = () => {
  const lang = JSON.parse(localStorage.getItem("lang"));
  const en = JSON.parse(localStorage.getItem("en"));
  const ru = JSON.parse(localStorage.getItem("ru"));

  const currentLang = lang ? en : ru;

  const fragment = document.createDocumentFragment();
  currentLang.forEach((key) => {
    const keyElem = document.createElement("button");
    keyElem.classList.add("keyboard__key");
    keyElem.setAttribute("type", "button");
    keyElem.innerHTML = key;

    if (key === "Tab" || key === "Backspace") {
      keyElem.classList.add("keyboard__key_small");
    }
    if (key === "shift left" || key === "shift right") {
      keyElem.classList.add("keyboard__key_large");
    }
    if (key === "CapsLock") {
      keyElem.classList.add("keyboard__key_middle", "keyboard__key_activated");
    }
    if (key === "Enter") {
      keyElem.classList.add("keyboard__key_middle");
    }
    if (key === " ") {
      keyElem.classList.add("keyboard__key_extra-large");
    }
    if (key === "shift") {
      keyElem.classList.add("keyboard__key_large");
    }
    if (key === "hide 🥷🏻") {
      keyElem.classList.add("keyboard__key_small", "keyboard__key_small_dark");
    }
    if (
      key === "Tab" ||
      key === "CapsLock" ||
      key === "shift left" ||
      key === "ctrl"
    ) {
      const breakLine = document.createElement("div");
      breakLine.className = "breakline";
      fragment.append(breakLine);
    }
    fragment.append(keyElem);
  });

  return fragment;
};
export default createKeys;
