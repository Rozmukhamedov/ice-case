import "./style.css";
import React from "react";
import { t } from "i18next";
import { Container, Grid } from "@mantine/core";
import Logo from "assets/img/logo-header.svg";

function Footer() {
  return (
    <div className="footer">
      <Container>
        <Grid>
          <Grid.Col span={6} xl={3}>
            <div className="hero__box-image">
              <img src={Logo} alt="mobile" />
            </div>
          </Grid.Col>
          <Grid.Col span={6} xl={3}>
            <p>
              <a href="#">{t("Privacy Policy")}</a>
            </p>
            <p>© 2022 icecase.io</p>
          </Grid.Col>
          <Grid.Col span={6} xl={3}>
            <p>ООО «ПостЭндГет»</p>
            <p>{t("address")}</p>
          </Grid.Col>
          <Grid.Col span={6} xl={3}>
            <p>sale@icecase.io</p>
            <p>+375291579147</p>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}

export default Footer;
