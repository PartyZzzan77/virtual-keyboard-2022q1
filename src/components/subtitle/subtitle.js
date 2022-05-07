import createCustomElement from "../../utils/helpers/helpers";

const messageKeyCombination = `To switch the keyboard layout, use the "shift left" + "shift right" key combination or the "EN/RU" key on the virtual keyboard.`;

const subtitle = createCustomElement("h3", "subtitle", messageKeyCombination);

export default subtitle;
