import template from "./HelloWorld.hbs";
import styles from "./HelloWorld.module.css";

// Note: if you don't want to use CSS modules, just create a plain
// CSS/SCSS file and import it like:
// import "./HelloWorld.css";

const selector = "#hello-world";

export default () => {
    const params = {
        styles,
        data: {
            name: "World"
        }
    };

    const html = template(params);

    document.querySelector(selector).innerHTML = html;
}
