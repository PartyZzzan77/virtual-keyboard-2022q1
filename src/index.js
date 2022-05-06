import "./scss/main.scss";
import Keyboard from "./components/Keyboard/Keyboard";

window.onload = () => {
  const { body } = document;
  const createArticle = (tag, className = null, text = "") => {
    const article = document.createElement(`${tag}`);
    article.textContent = `${text}`;
    article.className = `${className}`;
    return article;
  };

  const titleMessage = "RS School Virtual keyboard";
  const messageKeyCombination = `To switch the keyboard layout, use the "shift left" + "shift right" key combination or the "EN/RU" key on the virtual keyboard.`;
  const operationSystemMessage = `The project is written in the system macOS Monterey`;

  const title = createArticle("h1", "title", titleMessage);
  const subtitle = createArticle("h3", "subtitle", messageKeyCombination);
  const entryField = createArticle(
    "textarea",
    "entryField",
    "Hello! Check this field"
  );

  const systemText = createArticle("h3", "ostext", operationSystemMessage);
  body.append(title, entryField, subtitle, systemText);

  const keyboard = new Keyboard();

  keyboard.run();
};
