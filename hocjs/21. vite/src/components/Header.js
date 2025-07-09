import moment from "moment";
import "../styles/header.scss";
export const Header = () => {
  return `
    <header>
        <h2>Header</h2>
        ${moment().format("DD/MM/YYYY HH:mm:ss")}
    </header>
    `;
};
