import "./style.css";
import React from "react";
import { Container, Grid } from "@mantine/core";
import { useTranslation } from "react-i18next";

function Description() {
  const { t } = useTranslation();

  return (
    <div className="description">
      <Container>
        <div className="description__box">
          <Grid>
            <Grid.Col span={12} md={6} lg={6} xl={6}>
              <h3>Unaffected by sanctions</h3>
              <p>No third-party software controlled by outsiders</p>
            </Grid.Col>
            <Grid.Col span={12} md={6} lg={6} xl={6}>
              <h3>Direct connection to the blockchain</h3>
              <p>The device has its own operating system and software thet connects directly to the blockchain</p>
            </Grid.Col>
            <Grid.Col span={12} md={6} lg={6} xl={6}>
              <h3>Transaction security</h3>
              <p>All transactions are signed with a private key that is securely encrypted and stored the device's dedicated chip</p>
            </Grid.Col>
            <Grid.Col span={12} md={6} lg={6} xl={6}>
              <h3>All in one wallet</h3>
              <p>IceCase support 100+ coins, tokens and NFTs simultaneously</p>
            </Grid.Col>
            <Grid.Col span={12} md={6} lg={6} xl={6}>
              <h3>Anonymity of the owner</h3>
              <p>The device does not require any user details to transact with crypto assets</p>
            </Grid.Col>
            <Grid.Col span={12} md={6} lg={6} xl={6}>
              <h3>Future step: Artificial intelligence</h3>
              <p>Autointegration with new and updates blockchains</p>
            </Grid.Col>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default Description;
