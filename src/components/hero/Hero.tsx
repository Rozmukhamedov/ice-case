import "./style.css";
import React from "react";
import Image from "assets/img/mobile1.png";
import { useTranslation } from "react-i18next";
import { Container, Grid } from "@mantine/core";

function Hero() {
  const { t } = useTranslation();
  return (
    <div className="hero">
      <Container>
        <div className="hero__box">
          <Grid>
            <Grid.Col order={2} orderMd={1} span={12} md={7} xl={7}>
              <div className="hero__box-flex">
                <h3>
                  {" "}
                  {t("cryptosafe_1")} <br /> {t("cryptosafe_2")}
                </h3>
                <p>
                  {t("cryptosafe_3")} <br /> {t("cryptosafe_4")} <br />{" "}
                  {t("cryptosafe_5")}
                </p>
                <button type="button">{t("buy")}</button>
              </div>
            </Grid.Col>
            <Grid.Col order={1} orderMd={2} span={12} md={5} xl={5}>
              <div className="hero__box-image">
                <img src={Image} alt="mobile" />
              </div>
            </Grid.Col>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default Hero;
