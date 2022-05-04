import "./scss/main.scss";

window.onload = function () {
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
  const entryField = createArticle("textarea", "entryField", "Enter yor text");
  body.append(title, subtitle, entryField);
};
