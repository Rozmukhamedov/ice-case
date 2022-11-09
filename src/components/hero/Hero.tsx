import "./style.css";
import React from "react";
import { Container, Grid } from "@mantine/core";
import Image from "assets/img/mobile1.png"

function Hero() {
  return (
    <div className="hero">
      <Container size="xl">
        <div className="hero__box">
          <Grid>
            <Grid.Col span={12} xl={7}>
              <h3>Криптосейф <br /> в твоем кармане</h3>
              <p>IceCase позволяет хранить <br /> криптовалюту просто и <br /> безопасно</p>
              <button type="button">Купить</button>
            </Grid.Col>
            <Grid.Col span={12} xl={5}>
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
