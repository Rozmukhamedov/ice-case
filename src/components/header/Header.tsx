import "./style.css";
import React from "react";
import { Container } from "@mantine/core";
import Logo from "assets/img/logo.svg";
import { useTranslation } from 'react-i18next';


function Header() {
  const { t } = useTranslation();

  return (
    <div className="header">
      <Container>
        <div className="header__flex">
          <div className="header__logo">
            <img src={Logo} alt="Ice Case" />
          </div>
          <div className="header__flex-end">
            <p>
              <a href="#">{t("about_product")}</a>
            </p>
            <p>
              <a href="#">{t("contacts")}</a>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;
