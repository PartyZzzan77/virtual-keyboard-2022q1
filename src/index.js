import "./scss/main.scss";

import title from "./components/title/title";
import subtitle from "./components/subtitle/subtitle";
import systemText from "./components/ostext/ostext";
import entryField from "./components/EntryField/enryField";
import Keyboard from "./components/Keyboard/Keyboard";

window.onload = () => {
  const { body } = document;
  body.append(title, entryField, subtitle, systemText);
  const keyboard = new Keyboard();
  keyboard.run();
};
