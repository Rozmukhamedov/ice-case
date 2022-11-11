import "./style.css";
import React from "react";
import { useTranslation } from "react-i18next";
import { Accordion, Container } from "@mantine/core";

function Question() {
  const { t } = useTranslation();
  return (
    <div className="question">
      <Container>
        <h3>{t("question")}</h3>
        <Accordion variant="separated" defaultValue="question_1">
          <Accordion.Item value="question_1">
            <Accordion.Control className="question__title">
              {t("accordion_1")}
            </Accordion.Control>
            <Accordion.Panel className="question__description">
              {t("accordion_2")}
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="question_5">
            <Accordion.Control className="question__title">
              {t("accordion_3")}
            </Accordion.Control>
            <Accordion.Panel className="question__description">
              {t("accordion_4")}
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="question_2">
            <Accordion.Control className="question__title">
              {t("accordion_5")}
            </Accordion.Control>
            <Accordion.Panel className="question__description">
              {t("accordion_6")}
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="question_3">
            <Accordion.Control className="question__title">
              {t("accordion_7")}
            </Accordion.Control>
            <Accordion.Panel className="question__description">
              {t("accordion_8")}
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="question_4">
            <Accordion.Control className="question__title">
            {t("accordion_9")}
            </Accordion.Control>
            <Accordion.Panel className="question__description">
            {t("accordion_10")}
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
}

export default Question;
