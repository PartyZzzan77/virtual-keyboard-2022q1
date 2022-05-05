export default class keyboard {
  constructor() {
    this.main = null;
    this.keysContainer = null;
    this.keys = null;
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
        "hide 🥷🏻",
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
        "hide 🥷🏻",
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
    this.main.classList.add("keyboard", "keyboard_hidden");
    this.keysContainer = document.createElement("div");
    this.keysContainer.className = "keyboard__keys";

    this.keysContainer.append(this.#createKeys());

    const field = document.querySelector(".entryField");

    field.addEventListener("focus", () => {
      this.main.classList.remove("keyboard_hidden");
      field.value = this.props.value;
    });

    document.body.addEventListener("click", (e) => {
      const { target } = e;

      if (target.innerHTML === "return") {
        this.props.value += "\n";
      }
      if (target.innerHTML === "") {
        this.props.value += " ";
      }
      if (target.innerHTML === "tab") {
        this.props.value += "  ";
      }
      if (target.innerHTML === "del") {
        const { value } = this.props;
        this.props.value = value.slice(0, value.length - 1);
      }
      if (target.innerHTML === "caps lock") {
        target.classList.toggle("keyboard__key_active");
        const keys = [...this.keysContainer.querySelectorAll(".keyboard__key")];
        this.#toggleCapsLock(keys);
      }
      if (
        target.innerHTML === "hide 🥷🏻" ||
        target === document.body ||
        target.closest(".title") ||
        target.closest(".subtitle")
      ) {
        this.main.classList.add("keyboard_hidden");
      }

      if (target.innerHTML.length === 1) {
        this.props.value += this.props.capsLock
          ? target.innerHTML.toUpperCase()
          : target.innerHTML.toLowerCase();
      }
      field.value = this.props.value;
    });

    this.main.append(this.keysContainer);

    document.body.append(this.main);
  }

  #createKeys() {
    const fragment = document.createDocumentFragment();
    this.lang.en.forEach((key) => {
      const keyElem = document.createElement("button");
      keyElem.classList.add("keyboard__key");
      keyElem.setAttribute("type", "button");
      keyElem.innerHTML = key;

      if (key === "tab") {
        keyElem.classList.add("keyboard__key_small");
      }
      if (key === "shift left" || key === "shift right" || key === "del") {
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
      if (key === "hide 🥷🏻") {
        keyElem.classList.add(
          "keyboard__key_small",
          "keyboard__key_small_dark"
        );
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

  #toggleCapsLock(keys) {
    this.props.capsLock = !this.props.capsLock;
    keys.forEach((key) => {
      const keyNode = key;
      if (keyNode.innerHTML.length === 1) {
        keyNode.innerHTML = this.props.capsLock
          ? keyNode.innerHTML.toUpperCase()
          : keyNode.innerHTML.toLowerCase();
      }
    });
  }
}
