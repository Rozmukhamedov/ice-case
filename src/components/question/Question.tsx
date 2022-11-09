import React from "react";
import "./style.css"
import { Accordion, Container } from "@mantine/core";

function Question() {
  return (
    <div className="question">
      <Container size="xl">
        <h3>Вопрос-ответ</h3>
        <Accordion variant="separated" defaultValue="question_1">
          <Accordion.Item value="question_1">
            <Accordion.Control className="question__title">
              Что такое IceCase?
            </Accordion.Control>
            <Accordion.Panel className="question__description">
              Tangem Wallet — это самый безопасный аппаратный кошелёк в мире. С
              Tangem Wallet ваши биткоины, эфиры и более 1000 других криптовалют
              в полной безопасности. Карта — это ключ к вашему кошельку. Чтобы
              воспользоваться средствами, вам необходимо поднести карту к
              телефону.
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="question_5">
            <Accordion.Control className="question__title">
              Что я могу с IceCase?
            </Accordion.Control>
            <Accordion.Panel className="question__description">
              С Tangem Wallet вы можете покупать криптовалюты с помощью сервисов
              Apple Pay и Google Pay, а также банковских карт. Использовать
              более сотни децентрализованных сервисов, которые позволяют
              торговать на биржах, давать ссуды, брать займы, работать с NFT и
              многое другое.
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="question_2">
            <Accordion.Control className="question__title">
              Где хранятся ключи от кошелька?
            </Accordion.Control>
            <Accordion.Panel className="question__description">
              Ключи от кошелька генерируются и хранятся на карте как строжайший
              секрет. Для любых операций с вашим кошельком вам понадобится одна
              из карт, которая привязана к вашему кошельку. Что будет, если я
              потеряю карту?
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="question_3">
            <Accordion.Control className="question__title">
              Что будет, если я потеряю кошеле?
            </Accordion.Control>
            <Accordion.Panel className="question__description">
              C Tangem Wallet вы можете привязать до 3 карт к одному кошельку.
              Все 3 карты имеют равные возможности и могут быть использованы для
              работы с вашим кошельком. Чтобы посторонние лица не могли
              воспользоваться вашими средствами, вы сможете защитить карту кодом
              доступа. И даже если вы забудете код, при наличии другой
              привязанной карты вы можете его восстановить.
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="question_4">
            <Accordion.Control className="question__title">
              Насколько это безопасно и надежно?
            </Accordion.Control>
            <Accordion.Panel className="question__description">
              Tangem Wallet — это самый безопасный и надежный криптовалютный
              кошелек в мире. Чип в карте — это микрокомпьютер. Он
              сертифицирован компанией Common Criteria уровнем EAL6+. Такой же
              уровень безопасности у чипов, которые используются для паспортов.
              Он полностью защищён от воды и пыли и абсолютно защищён от любых
              попыток взлома.
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
}

export default Question;
