import React from "react";

const ThemeSwitcher = ({theme, toggletheme}) =>{
    return(
        <button onClick={toggletheme}>{theme === "light" ? "Przełacz na ciemny" : "Przełacz na jasny"}</button>
    );
};
export default ThemeSwitcher;