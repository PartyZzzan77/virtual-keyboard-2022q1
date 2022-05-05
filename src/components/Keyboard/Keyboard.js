export default class keyboard {
  constructor() {
    this.main = null;
    this.keysContainer = null;
    this.lang = {
      en: [
        "`",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0",
        "-",
        "+",
        "del",
        "tab",
        "q",
        "w",
        "e",
        "r",
        "t",
        "y",
        "u",
        "i",
        "o",
        "p",
        "[",
        "]",
        "\\",
        "|",
        "caps lock",
        "a",
        "s",
        "d",
        "f",
        "g",
        "h",
        "j",
        "k",
        "l",
        ";",
        "'",
        "return",
        "shift left",
        "z",
        "x",
        "c",
        "v",
        "b",
        "n",
        "m",
        ",",
        ".",
        "/",
        "&#9650",
        "shift right",
        "ctrl L",
        "meta",
        "alt L",
        "",
        "alt R",
        "&#9664",
        "&#9660",
        "&#9658",
        "ctrl R",
      ],
      ru: [
        "ё",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0",
        "-",
        "=",
        "del",
        "tab",
        "й",
        "ц",
        "у",
        "к",
        "е",
        "н",
        "г",
        "ш",
        "щ",
        "з",
        "х",
        "ъ",
        "\\",
        "|",
        "caps lock",
        "ф",
        "ы",
        "в",
        "а",
        "п",
        "р",
        "о",
        "л",
        "д",
        "ж",
        "э",
        "return",
        "shift left",
        "я",
        "ч",
        "с",
        "м",
        "и",
        "т",
        "ь",
        "б",
        "ю",
        ".",
        "&#9650",
        "shift right",
        "ctrl L",
        "meta",
        "alt L",
        "",
        "alt R",
        "&#9664",
        "&#9660",
        "&#9658",
        "ctrl R",
      ],
    };
    this.handlers = {
      input: null,
      close: null,
    };
    this.props = {
      value: "",
      capsLock: false,
    };
  }

  init() {
    this.main = document.createElement("div");
    this.main.classList.add(
      "keyboard",
      "1keyboard_hidden" //! delete 1
    );
    this.keysContainer = document.createElement("div");
    this.keysContainer.className = "keyboard__keys";

    this.main.append(this.keysContainer);
    this.keysContainer.append(this.createKeys());
    document.body.append(this.main);
  }

  createKeys() {
    const fragment = document.createDocumentFragment();
    console.log(fragment);
    this.lang.en.forEach((key) => {
      const keyElem = document.createElement("button");
      keyElem.classList.add("keyboard__key");
      keyElem.setAttribute("type", "button");
      keyElem.innerHTML = key;

      if (key === "tab" || key === "del") {
        keyElem.classList.add("keyboard__key_small");
      }
      if (key === "shift left" || key === "shift right") {
        keyElem.classList.add("keyboard__key_large");
      }
      if (key === "caps lock") {
        keyElem.classList.add(
          "keyboard__key_middle",
          "keyboard__key_activated"
        );
      }
      if (key === "return") {
        keyElem.classList.add("keyboard__key_middle");
      }
      if (key === "") {
        keyElem.classList.add("keyboard__key_extra-large");
      }
      if (key === "shift") {
        keyElem.classList.add("keyboard__key_large");
      }
      if (
        key === "tab" ||
        key === "caps lock" ||
        key === "shift left" ||
        key === "ctrl L"
      ) {
        const breakLine = document.createElement("br");
        fragment.append(breakLine);
      }
      fragment.append(keyElem);
    });

    return fragment;
  }

  #triggerEnents(handlerName) {
    console.log("event: ", handlerName);
  }

  #toggleCapsLock() {
    console.log("CapLock toggle!");
  }

  #open(initialValue, oninput, onclose) {}

  #close() {}
}
