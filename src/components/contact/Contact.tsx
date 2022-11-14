import "./style.css";
import React from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import { showNotification } from "@mantine/notifications";
import { Container, Grid } from "@mantine/core";

function Contact() {
  const { t } = useTranslation();

  const sendEmail = (e: any) => {
    e.preventDefault();

    let templateParams = {
      name: e.target.name.value,
      email: e.target.email.value,
      telephone: e.target.telephone.value,
    };

    emailjs
      .send(
        "service_odgeh7z",
        "template_z5bysuj",
        templateParams,
        "FI5LjZ71ALny7J_sv"
      )
      .then(
        function (response) {
          showNotification({
            title: "Success",
            message: "",
            color: 'blue',
          },);
          e.target.reset();
        },
        function (error) {
          showNotification({
            title: "Error",
            message: "",
            color: 'red',
          },);
        }
      );
  };

  return (
    <div className="contact">
      <Container>
        <Grid>
          <Grid.Col span={12} md={5} lg={5} xl={5}>
            <div className="cotact__texts">
              <h2>{t("contact_1")}</h2>
              <h6>{t("contact_2")}</h6>
              <p>e-mail</p>
              <p style={{ marginBottom: "15px" }}>
                <span>sales@icecase.pro</span>
              </p>
              <p>{t("telephone")}</p>
              <p>
                <span>+7 (495) 123-45-67</span>
              </p>
            </div>
          </Grid.Col>
          <Grid.Col span={12} md={7} lg={7} xl={7}>
            <form onSubmit={sendEmail} className="contact__form">
              <h4>{t("contact")}</h4>
              <div className="contact__field">
                <p>{t("name")}</p>
                <input name="name" type="text" required />
              </div>
              <div className="contact__field">
                <p>E-mail</p>
                <input name="email" type="email" required />
              </div>
              <div className="contact__field">
                <p>{t("teplephone")}</p>
                <input name="telephone" type="tel" required />
              </div>
              <div className="contact__form-flex">
                <button type="submit">{t("send")}</button>
                <p>{t("contact_info")}</p>
              </div>
            </form>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}

export default Contact;
