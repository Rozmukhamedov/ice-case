import "./style.css";
import React from "react";
import Img1 from "assets/img/box1.png";
import Img2 from "assets/img/box2.png";
import Img3 from "assets/img/box3.png";
import { Container, Grid } from "@mantine/core";
import { useTranslation } from "react-i18next";

function Boxs() {
  const { t } = useTranslation();
  return (
    <div className="boxs">
      <Container>
        <h3>{t("box")}</h3>
        <Grid>
          <Grid.Col span={12} md={4} lg={4} xl={4}>
            <div style={{ background: "#6B3BF6" }} className="boxs__card">
              <img className="img-1" src={Img1} alt="" />
              <h5>{t("box_desc_1")}</h5>
              <p>{t("box_desc_2")}</p>
            </div>
          </Grid.Col>
          <Grid.Col span={12} md={4} lg={4} xl={4}>
            <div style={{ background: "#3E51F9" }} className="boxs__card">
              <img className="img-2" src={Img2} alt="" />
              <h5>{t("box_desc_3")}</h5>
              <p>{t("box_desc_4")}</p>
            </div>
          </Grid.Col>
          <Grid.Col span={12} md={4} lg={4} xl={4}>
            <div style={{ background: "#0E8EFD" }} className="boxs__card">
              <img className="img-3" src={Img3} alt="" />
              <h5>{t("box_desc_5")}</h5>
              <p>{t("box_desc_6")}</p>
            </div>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}

export default Boxs;
