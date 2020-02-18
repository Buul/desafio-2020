import React from 'react';
import { Typography, Link } from '@material-ui/core';
import AnnouncementIcon from 'assets/img/announcement.png';
import RegisterIcon from 'assets/img/register.png';
import MediaIcon from 'assets/img/media.png';
import { Container } from './Container';
import { ItemInfo } from './ItemInfo';
import { ContentInfo } from './ContentInfo';

const Info = () => (
  <Container>
    <ItemInfo>
      <img src={AnnouncementIcon} alt="anuncio" />
      <Typography variant="subtitle2" color="primary">
        COMO ANUNCIAR
      </Typography>
      <ContentInfo>
        <Typography variant="body2">
          Tudo o que você precisa saber para anunciar sua mídia.
        </Typography>
        <Typography variant="body2">
          Tudo o que você precisa saber para anunciar sua mídia.
        </Typography>
      </ContentInfo>
      <Link href="#" onClick={(event) => event.preventDefault()}>
        Saiba Mais
      </Link>
    </ItemInfo>
    <ItemInfo>
      <img src={RegisterIcon} alt="cadastrar" />
      <Typography variant="subtitle2" color="primary">
        CADASTRAR
      </Typography>
      <ContentInfo>
        <Typography variant="body2">
          Tudo o que você precisa saber para anunciar sua mídia.
        </Typography>
        <Typography variant="body2">
          Tudo o que você precisa saber para anunciar sua mídia.
        </Typography>
      </ContentInfo>
      <Link href="#" onClick={(event) => event.preventDefault()}>
        Saiba Mais
      </Link>
    </ItemInfo>
    <ItemInfo>
      <img src={MediaIcon} alt="midias" />
      <Typography variant="subtitle2" color="primary">
        MIDIAS
      </Typography>
      <ContentInfo>
        <Typography variant="body2">Tipos de mídia para cadastrar.</Typography>
        <Typography variant="body2">Medidas padrões de mídia.</Typography>
        <Typography variant="body2">Medidas padrões de mídia.</Typography>
      </ContentInfo>
      <Link href="#" onClick={(event) => event.preventDefault()}>
        Saiba Mais
      </Link>
    </ItemInfo>
  </Container>
);

export default Info;
