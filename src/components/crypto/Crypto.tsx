import React from "react";
import { Container, Grid } from "@mantine/core";
import Image from "assets/img/cripto.png";
import "./style.css"
import { useTranslation } from "react-i18next";

function Crypto() {
  const { t } = useTranslation();

  return (
    <div className="crypto">
      <Container>
        <div className="crypto__box">
          <Grid>
            <Grid.Col span={12} md={7} lg={7} xl={7}>
              <h3>{t("crypto_1")}</h3>
              <p>
             {t("crypto_2")}
              </p>
              <h6>{t("crypto_3")}</h6>
            </Grid.Col>
            <Grid.Col span={12} md={5} lg={5} xl={5}>
              <div className="crypto__box-image">
                <img src={Image} alt="mobile" />
              </div>
            </Grid.Col>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default Crypto;
