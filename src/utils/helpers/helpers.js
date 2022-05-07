const createCustomElement = (tag, className = null, text = "") => {
  const article = document.createElement(`${tag}`);
  article.textContent = `${text}`;
  article.className = `${className}`;
  return article;
};

export default createCustomElement;
