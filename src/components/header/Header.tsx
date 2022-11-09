import "./style.css";
import { Container } from "@mantine/core";
import React from "react";
import Logo from "assets/img/logo.svg";

function Header() {
  return (
    <div className="header">
      <Container size="xl">
        <div className="header__flex">
          <div className="header__logo">
            <img src={Logo} alt="Ice Case" />
          </div>
          <div className="header__flex-end">
            <p>
              <a href="#">О продукте</a>
            </p>
            <p>
              <a href="#">Контакты</a>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;
