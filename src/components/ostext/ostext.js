import createCustomElement from "../../utils/helpers/createCustomElement ";

const operationSystemMessage = `The project is written in the system macOS Monterey`;
const systemText = createCustomElement("h3", operationSystemMessage, "ostext");
export default systemText;
