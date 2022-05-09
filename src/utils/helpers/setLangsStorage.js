const setLangsStorage = (dictionary) => {
  const langs = dictionary;
  window.localStorage.setItem("en", JSON.stringify(langs.en));
  window.localStorage.setItem("ru", JSON.stringify(langs.ru));
};

export default setLangsStorage;
