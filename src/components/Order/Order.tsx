import { Container, Grid } from "@mantine/core";
import { t } from "i18next";
import React from "react";
import IMG from "assets/img/mobile2.png";
import "./style.css";
import { useTranslation } from "react-i18next";

function Order() {
  const { t } = useTranslation();

  return (
    <>
      <Container>
        <div className="order">
          <div className="order__box">
            <Grid>
              <Grid.Col span={12} md={6} lg={6} xl={6}>
                <h3>{t("order_desc_1")}</h3>
                <p>{t("order_desc_2")}</p>
                <p>{t("order_desc_3")}</p>
                <p>{t("order_desc_4")}</p>
                <p>{t("order_desc_5")}</p>
                <p>{t("order_desc_6")}</p>
              </Grid.Col>
              <Grid.Col
                span={12}
                md={6}
                lg={6}
                xl={6}
                className={"order__box-right"}
              >
                <h3>{t("order_desc_7")}</h3>
                <p>{t("order_desc_8")}</p>
                <p>{t("order_desc_9")}</p>
                <img src={IMG} alt="" />
              </Grid.Col>
            </Grid>
          </div>
        </div>
        <div className="order__show">
          <h2>{t("order_desc_10")}</h2>
          <h5>{t("order_desc_11")}</h5>
        </div>
      </Container>
    </>
  );
}

export default Order;
