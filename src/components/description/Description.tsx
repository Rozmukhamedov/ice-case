import "./style.css";
import React from "react";
import { Container, Grid } from "@mantine/core";
import { useTranslation } from "react-i18next";

function Description() {
  const { t } = useTranslation();

  return (
    <div className="description">
      <Container>
        <div className="description__box">
          <Grid>
            <Grid.Col span={12} md={6} lg={6} xl={6}>
              <h3>{t("description_1")}</h3>
              <p>{t("description_2")}</p>
            </Grid.Col>
            <Grid.Col span={12} md={6} lg={6} xl={6}>
              <h3>{t("description_3")}</h3>
              <p>{t("description_4")}</p>
            </Grid.Col>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default Description;
