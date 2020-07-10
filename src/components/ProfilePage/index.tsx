import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocalitionIcon,
  CakeIcon,
  Followage,
  EditButton
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined> Editar perfil</EditButton>
        <h1>Marcos Vinicius</h1>
        <h2>@marcosudia</h2>

        <p>
          Developer at <a href="https://github.com/marcosudia">@Developer</a>
        </p>

        <ul>
          <li>
            <LocalitionIcon />
            Uberlândia, Brazil
          </li>
        </ul>

        <ul>
          <li>
            <CakeIcon />
            Nascido em 06 de maio de 1995
          </li>
        </ul>

        <Followage>
          <span>
            Seguindo <strong> 1000</strong>
          </span>
          <span>
            <strong>100 </strong>Seguidores
          </span>
        </Followage>

      </ProfileData>

      <Feed/>
    </Container>
  );
};

export default ProfilePage;
