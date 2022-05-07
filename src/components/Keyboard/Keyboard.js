export default class keyboard {
  constructor() {
    this.main = null;
    this.keysContainer = null;

    this.props = {
      value: "",
      capsLock: false,
    };
  }

  run() {
    const langs = {
      en: [
        "EN",
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
        "=",
        "Backspace",
        "Tab",
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
        "CapsLock",
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
        "Enter",
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
        "ctrl",
        "hide 🥷🏻",
        "alt L",
        " ",
        "alt R",
        "&#9664",
        "&#9660",
        "&#9658",
        "del",
      ],
      ru: [
        "RU",
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
        "Backspace",
        "Tab",
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
        "CapsLock",
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
        "Enter",
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
        "ctrl",
        "hide 🥷🏻",
        "alt L",
        " ",
        "alt R",
        "&#9664",
        "&#9660",
        "&#9658",
        "del",
      ],
    };
    window.localStorage.setItem("en", JSON.stringify(langs.en));
    window.localStorage.setItem("ru", JSON.stringify(langs.ru));

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

      if (target.closest(".keyboard__key")) {
        field.focus();
      }

      if (target.innerHTML === "Enter") {
        this.props.value += "\n";
      }
      if (target.innerHTML === " ") {
        this.props.value += "";
      }
      if (target.innerHTML === "Tab") {
        e.preventDefault();
        this.props.value += "   ";
      }
      if (target.innerHTML === "Backspace") {
        const { value } = this.props;
        this.props.value = value.slice(0, value.length - 1);
      }
      if (target.innerHTML === "del") {
        this.props.value =
          this.props.value.slice(0, field.selectionStart - 1) +
          this.props.value.slice(field.selectionStart);
      }
      if (target.innerHTML === "CapsLock") {
        target.classList.toggle("keyboard__key_active");
        const keys = [...this.keysContainer.querySelectorAll(".keyboard__key")];
        this.#toggleCapsKey(keys);
      }

      if (target.innerHTML === "EN") {
        localStorage.setItem("lang", "false");
        this.keysContainer.innerHTML = " ";
        this.keysContainer.append(this.#createKeys());
      }
      if (target.innerHTML === "RU") {
        window.localStorage.setItem("lang", "true");
        this.keysContainer.innerHTML = " ";
        this.keysContainer.append(this.#createKeys());
      }

      if (
        target.innerHTML === "hide 🥷🏻" ||
        target === document.body ||
        target.closest(".title") ||
        target.closest(".subtitle") ||
        target.closest(".ostext")
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

    document.addEventListener("keydown", (e) => {
      if (e.key.length === 1) {
        e.preventDefault();
        this.props.value += e.key;
        field.value = this.props.value;
      }

      const keys = [...this.keysContainer.querySelectorAll(".keyboard__key")];
      keys.forEach((key) => {
        if (e.key === key.innerHTML) {
          key.classList.add("keyboard__key_active");
        }
        if (e.key === "CapsLock" && key.innerHTML === "CapsLock") {
          e.preventDefault();
          key.classList.add("keyboard__key__active");
          this.#toggleCapsKey(keys);
        }
        if (e.key === "Tab" && key.innerHTML === "Tab") {
          e.preventDefault();
          this.props.value += "   ";
          field.value = this.props.value;
        }
        if (e.key === "Delete" && key.innerHTML === "del") {
          this.props.value =
            this.props.value.slice(0, field.selectionStart - 1) +
            this.props.value.slice(field.selectionStart);
        }
        if (e.key === " " && key.innerHTML === " ") {
          e.preventDefault();
          this.props.value += "";
          field.value = this.props.value;
        }
        if (e.key === "Enter" && key.innerHTML === "Enter") {
          e.preventDefault();
          this.props.value += "\n";
          field.value = this.props.value;
        }
        if (e.key === "Backspace" && key.innerHTML === "Backspace") {
          e.preventDefault();
          this.props.value = this.props.value.slice(
            0,
            this.props.value.length - 1
          );
          field.value = this.props.value;
        }
        if (e.key === "ArrowUp" && key.innerHTML === "▲") {
          e.preventDefault();
          this.props.value += "▲";
          field.value = this.props.value;
        }
        if (e.key === "ArrowLeft" && key.innerHTML === "◀") {
          e.preventDefault();
          this.props.value += "◀";
          field.value = this.props.value;
        }
        if (e.key === "ArrowRight" && key.innerHTML === "►") {
          e.preventDefault();
          this.props.value += "►";
          field.value = this.props.value;
        }
        if (e.key === "ArrowDown" && key.innerHTML === "▼") {
          e.preventDefault();
          this.props.value += "▼";
          field.value = this.props.value;
        }
        if (e.code === "ShiftLeft" && key.innerHTML === "shift left") {
          key.classList.add("keyboard__key_active");
          this.#toggleCapsKey(keys);
          const islang = JSON.parse(localStorage.lang);
          document.addEventListener("keyup", (evt) => {
            if (evt.code === "ShiftRight" && islang) {
              localStorage.setItem("lang", "false");
              this.keysContainer.innerHTML = " ";
              this.keysContainer.append(this.#createKeys());
            }
            if (evt.code === "ShiftRight" && !islang) {
              window.localStorage.setItem("lang", "true");
              this.keysContainer.innerHTML = " ";
              this.keysContainer.append(this.#createKeys());
            }
          });
        }
        if (e.code === "ShiftRight" && key.innerHTML === "shift right") {
          key.classList.add("keyboard__key_active");
          this.#toggleCapsKey(keys);
        }
        if (e.code === "AltLeft" && key.innerHTML === "alt L") {
          key.classList.add("keyboard__key_active");
        }
        if (e.code === "AltRight" && key.innerHTML === "alt R") {
          key.classList.add("keyboard__key_active");
        }
        if (e.key === "Control" && key.innerHTML === "ctrl") {
          key.classList.add("keyboard__key_active");
        }
        if (e.key === "ArrowUp" && key.innerHTML === "▲") {
          key.classList.add("keyboard__key_active");
        }
        if (e.key === "ArrowLeft" && key.innerHTML === "◀") {
          key.classList.add("keyboard__key_active");
        }
        if (e.key === "ArrowRight" && key.innerHTML === "►") {
          key.classList.add("keyboard__key_active");
        }
        if (e.key === "ArrowDown" && key.innerHTML === "▼") {
          key.classList.add("keyboard__key_active");
        }
      });
    });

    document.body.addEventListener("keyup", (e) => {
      field.focus();
      const keys = [...this.keysContainer.querySelectorAll(".keyboard__key")];
      keys.forEach((key) => {
        if (e.key === key.innerHTML) {
          key.classList.remove("keyboard__key_active");
          this.props.value += "";
        }
        if (e.key === "CapsLock" && key.innerHTML === "CapsLock") {
          key.classList.remove("keyboard__key_active");
          this.#toggleCapsKey(keys);
        }
        if (e.code === "ShiftLeft" && key.innerHTML === "shift left") {
          key.classList.remove("keyboard__key_active");
          this.#toggleCapsKey(keys);
        }
        if (e.code === "ShiftRight" && key.innerHTML === "shift right") {
          key.classList.remove("keyboard__key_active");
          this.#toggleCapsKey(keys);
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
    });

    this.main.append(this.keysContainer);
    document.body.append(this.main);
  }

  #createKeys() {
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
        keyElem.classList.add(
          "keyboard__key_middle",
          "keyboard__key_activated"
        );
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
        keyElem.classList.add(
          "keyboard__key_small",
          "keyboard__key_small_dark"
        );
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
  }

  #toggleCapsKey(keys) {
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
