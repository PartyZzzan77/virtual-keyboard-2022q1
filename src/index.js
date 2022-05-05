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
  const title = createArticle("h1", "title", "RS School Virtual keyboard");
  const subtitle = createArticle(
    "h3",
    "subtitle",
    `To switch the keyboard layout, use the keys " "+ " "`
  );
  const entryField = createArticle(
    "textarea",
    "entryField",
    "Hello! Check this field"
  );
  body.append(title, entryField, subtitle);

  const keyboard = new Keyboard();

  keyboard.run();
};
