import React, { useContext } from "react";
import { Context } from "../Context";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
    const { darkMode } = useContext(Context);

    return(
        <header className= {darkMode ? "header-container-dark" : "header-container"}>

            <div className="header">
                <h1 className="header-text">Where in the world?</h1>
                <ThemeSwitcher />
            </div>
       </header>
    );
};

export default Header;