import { Container, Grid } from "@mantine/core";
import React from "react";
import "./style.css";

function Description() {
  return (
    <div className="description">
      <Container size="xl">
        <div className="description__box">
          <Grid>
            <Grid.Col span={12} xl={6}>
              <h3>
                Информация, хранящаяся <br /> онлайн, может быть взломана
              </h3>
              <p>
                Онлайн-кошельки и биржи уязвимы <br /> для атак и утечек данных.
                Хранение <br /> данных о криптовалюте онлайн <br /> увеличивает
                риск кражи финансовых <br /> средств, мошенничества с монетами и{" "}
                <br /> безвозвратной потери криптоактивов.
              </p>
            </Grid.Col>
            <Grid.Col span={12} xl={6}>
              <h3>
                Переходите в офлайн. <br />
                Храните монеты в IceCase.
              </h3>
              <p>
                Аппаратные кошельки IceCase — это самый <br /> безопасный и надежный
                способ защитить <br /> биткойн и криптовалютные активы в <br /> автономном
                режиме. Кошельки IceCase <br /> никогда не раскрывают информацию о <br />
                ваших цифровых активах в небезопасной <br /> среде, подключенной к
                Интернету.
              </p>
            </Grid.Col>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default Description;
