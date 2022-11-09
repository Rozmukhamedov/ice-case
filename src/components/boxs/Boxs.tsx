import { Container, Grid } from "@mantine/core";
import React from "react";
import "./style.css";

function Boxs() {
  return (
    <div className="boxs">
      <Container size="xl">
        <h3>IceCase – технология, которая защищает</h3>
        <Grid>
            <Grid.Col span={12} xl={6}>
                <div className="boxs__card">
                    <img src="" alt="" />
                    <h5>Приватный ключ</h5>
                    <p>Надежно хранится в кошельке <br /> офлайн и его можно <br /> восстановить</p>
                </div>
            </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}

export default Boxs;
