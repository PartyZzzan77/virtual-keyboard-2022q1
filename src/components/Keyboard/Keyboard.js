import createCustomElement from "../../utils/helpers/createCustomElement ";
import open from "../../utils/helpers/open";
import langsDictionary from "../../utils/data/langsDictionary";
import clickHandler from "../../utils/handlers/clickHandler";
import keyDownHandler from "../../utils/handlers/keyDownHandler";
import keyUpHandler from "../../utils/handlers/keyUpHandler";
import toggleCapsKey from "../../utils/helpers/toggleCapsKey";
import createKeys from "../../utils/helpers/createKeys";
import setLangsStorage from "../../utils/helpers/setLangsStorage";
import upperLatterHandler from "../../utils/handlers/upperLatterHandler";
import lowerLatterHandler from "../../utils/handlers/lowerLetterHandler";
import toggleLangs from "../../utils/helpers/toggleLangs";
import addValue from "../../utils/helpers/addValue";

export default class keyboard {
  constructor() {
    this.main = null;
    this.keysContainer = null;
    this.field = null;
    this.keysCollection = null;
    this.props = {
      value: "",
      capsLock: false,
    };
    this.clickHandler = clickHandler.bind(this);
    this.keyDownHandler = keyDownHandler.bind(this);
    this.keyUpHandler = keyUpHandler.bind(this);
    this.upperLatterHandler = upperLatterHandler.bind(this);
    this.lowerLatterHandler = lowerLatterHandler.bind(this);

    this.open = open.bind(this);
    this.toggleCapsKey = toggleCapsKey.bind(this);
    this.toggleLangsHandler = toggleLangs.bind(this);
    this.addValue = addValue.bind(this);
  }

  run() {
    setLangsStorage(langsDictionary);

    this.main = createCustomElement("div", "", "keyboard", "keyboard_hidden");

    this.keysContainer = createCustomElement("div", "", "keyboard__keys");
    this.keysContainer.append(createKeys());

    this.field = document.querySelector(".entryField");
    this.field.addEventListener("focus", () => {
      this.open();
    });

    document.body.addEventListener("click", (e) => {
      this.clickHandler(e, this.field);
    });

    document.body.addEventListener("mousedown", this.upperLatterHandler);

    document.body.addEventListener("mouseup", this.lowerLatterHandler);

    document.addEventListener("keydown", (e) => {
      this.keyDownHandler(e);
    });

    document.body.addEventListener("keyup", (e) => {
      this.keyUpHandler(e);
    });

    this.main.append(this.keysContainer);
    document.body.append(this.main);
  }
}
