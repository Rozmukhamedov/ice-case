import { Container, Grid } from "@mantine/core";
import React from "react";
import "./style.css";

function Contact() {
  return (
    <div className="contact">
      <Container size="xl">
        <Grid>
          <Grid.Col span={12} xl={6}>
            <div className="cotact__texts">
              <h2>Хотите приобрести IceCase?</h2>
              <h6>Оставьте свои контактные данные и мы с вами свяжемся</h6>
              <p>e-mail</p>
              <p style={{marginBottom: "15px"}}>
                <span>sales@icecase.pro</span>
              </p>
              <p>телефон</p>
              <p>
                <span>+7 (495) 123-45-67</span>
              </p>
            </div>
          </Grid.Col>
          <Grid.Col span={12} xl={6}>
            <div className="contact__form">
              <h4>Контактные данные</h4>
              <div className="contact__field">
                <p>Имя</p>
                <input type="text" required/>
              </div>
              <div className="contact__field">
                <p>E-mail</p>
                <input type="email" required/>
              </div>
              <div className="contact__field">
                <p>E-mail</p>
                <input type="number" required/>
              </div>
              <div className="contact__form-flex">
                <button type="submit">Отправить</button>
                <p>Нажимая на кнопку, вы даете согласие на обработку персональных данных </p>
              </div>
            </div>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}

export default Contact;
