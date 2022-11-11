import { Container, Grid } from "@mantine/core";
import { t } from "i18next";
import React from "react";
import IMG from "assets/img/mobile2.png";
import "./style.css"

function Order() {
  return (
    <>
      <Container>
        <div className="order">
          <div className="order__box">
            <Grid>
              <Grid.Col span={12} md={6} lg={6} xl={6}>
                <h3>Возможности</h3>
                <p>Отображение и хранение NFT</p>
                <p>Отображение баланса криптовалют</p>
                <p>Подключение к сети интернет при помощи Wi-Fi модуля</p>
                <p>Сканирование QR-кода</p>
                <p>
                  Защита от внешних факторов и автономная работа с аккумулятором
                </p>
              </Grid.Col>
              <Grid.Col span={12} md={6} lg={6} xl={6} className={"order__box-right"}>
                <h3>Комплектация</h3>
                <p>Камера для сканирования QR-кода</p>
                <p>Аккумулятор</p>
                <img src={IMG} alt="" />
              </Grid.Col>
            </Grid>
          </div>
        </div>
        <div className="order__show">
          <h2>Более 547 предзаказов</h2>
          <h5>получено на кошельки IceCase</h5>
        </div>
      </Container>
    </>
  );
}

export default Order;
