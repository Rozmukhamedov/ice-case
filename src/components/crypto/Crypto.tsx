import React from "react";
import { Container, Grid } from "@mantine/core";
import Image from "assets/img/cripto.png";
import "./style.css"

function Crypto() {
  return (
    <div className="crypto">
      <Container>
        <div className="crypto__box">
          <Grid>
            <Grid.Col span={12} md={7} lg={7} xl={7}>
              <h3>Сотни <br /> криптовалют</h3>
              <p>
              Аппаратный кошелек <br /> для вашего Биткойна, <br /> Эфира и сотен других <br /> криптовалют одновременно.
              </p>
              <h6>Все в одном кошельке!</h6>
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
