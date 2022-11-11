import { Container, Grid } from "@mantine/core";
import { t } from "i18next";
import React from "react";
import "./style.css";

function Description() {
  return (
    <div className="description">
      <Container size="xl">
        <div className="description__box">
          <Grid>
            <Grid.Col span={12} xl={6}>
              <h3>{t("description_1")}</h3>
              <p>{t("description_2")}</p>
            </Grid.Col>
            <Grid.Col span={12} xl={6}>
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
