import { Container } from "@mantine/core";
import React from "react";
import "./style.css";

function Header() {
  return (
    <div className="header">
      <Container size={"xl"}>
        <div className="header__flex">
            <div className="header__logo">
                <img src="" alt="" />
            </div>
            <div className="header__flex-end">
                <p><a href="#">О продукте</a></p>
                <p><a href="#">Контакты</a></p>
            </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;
