import styled, { css } from 'styled-components';

import {
  Home,
  Notifications,
  Email,
  FavoriteBorder,
  Person,
  // eslint-disable-next-line
  ExitToApp,
  Rocketseat,
} from '../../styles/icons';

export const Container = styled.div`
  display: none;

  @media (min-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: sticky;
    top: 0;
    left: 0;

    padding: 9px 19px 20px;

    max-height: 100vh;
    overflow-y: auto;
  }
`;

export const TopSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1280px) {
    align-items: flex-start;
  }
`;

export const Logo = styled(Rocketseat)`
  width: 41px;
  height: 41px;

  > path {
    fill: var(--twitter);
  }

  margin-bottom: 20px;
`;
export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  > span {
    display: none;
  }

  @media (min-width: 1280px) {
    > span {
      display: inline;
      margin-left: 19px;

      font-weight: bold;
      font-size: 19px;
    }
    padding-right: 15px;
  }

  padding: 8.25px 0;
  outline: 0;

  & + button {
    margin-top: 16.5px;
  }

  & + button:last-child {
    margin-top: 33px;

    width: 40;
    height: 40;

    > span {
      display: none;
    }

    @media (min-width: 1280px) {
      width: 100%;
      height: unset;

      > span {
        display: inline;
      }
    }
  } /**Continuar a a partir do 2:01:44  */

  cursor: pointer;
  border-radius: 25px;
  &:hover {
    background-color: var(--twitter-dark-hover);
  }

  &:hover {
    background: var(--twitter-dark-hover);
  }
  &:hover,
  &.active {
    span,
    svg {
      color: var(--twitter);
      fill: var(--twitter);
    }
  }
`;

const iconCSS = css`
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  color: var(--white);
`;

export const HomeIcon = styled(Home)`
  ${iconCSS}
`;
export const BellIcon = styled(Notifications)`
  ${iconCSS}
`;
export const EmailIcon = styled(Email)`
  ${iconCSS}
`;
export const FavoriteIcon = styled(FavoriteBorder)`
  ${iconCSS}
`;
export const ProfileIcon = styled(Person)`
  ${iconCSS}
`;

export const Botside = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
`;
export const Avatar = styled.div`
  width: 39px;
  height: 39px;

  flex-shrink: 0;
border-radius: 50%;
background: var(--gray);
`;
export const ProfileData = styled.div`
  display: none;

  @media (min-width:1280px){
    display: flex;
    flex-direction: column;

    margin-left: 10px;
    font-size: 14px;

    > span {
      color:var(--gray);
    }
  }
`;

export const ExitIcon = styled(ExitToApp)`
  display: none;

  @media (min-width:1280px){
    display: inline-block;
    width:25;
    height: 25;
    color: var(--white);
    margin-left:30px;
    cursor : pointer;
  }
`;
