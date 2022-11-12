import "./style.css";
import React from "react";
import Logo from "assets/img/logo.svg";
import { Container } from "@mantine/core";
import { useTranslation } from 'react-i18next';
import Dropdown from "components/dropdown/Dropdown";

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
            <Dropdown />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;
