import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 100vw;
  height: 100vh;
`;

export const Header = styled.header`
  width: 100%;
  background-color: rgba(232, 242, 247, 0.9);
  padding: 10px;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 99;
`;

export const BoxHeader = styled.div`
  display: flex;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  padding: 15px 10px;

  img {
    max-width: 140px;
  }

  .menu-mobile {
    display: none;
  }

  @media only screen and (max-width: 990px) {
    .menu-mobile {
      display: block;
    }
  }
`;

export const Navigation = styled.nav<{ isMobile: boolean }>`
  display: flex;

  @media only screen and (max-width: 990px) {
    display: ${(props) => (props.isMobile ? 'flex' : 'none')};
    position: absolute;
    background-color: rgba(0, 0, 0, 0.8);
    justify-content: center;
    z-index: 100;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    height: 100vh;
    z-index: 9999;
    animation: sidebar-animation 200ms ease;

    @keyframes sidebar-animation {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(0);
      }
    }
  }
`;

export const BoxLinks = styled.div`
  display: flex;
  align-items: center;
  column-gap: 25px;

  a,
  .data-list {
    color: ${(props) => props.theme.colors.text};
    font-size: 0.8rem;
    transition: padding 200ms ease;
  }

  a:hover:not(.button-link, .data-list) {
    padding-bottom: 4px;
    border-bottom: 1px solid ${(props) => props.theme.colors.textHover};
    color: ${(props) => props.theme.colors.textHover};
  }

  @media only screen and (max-width: 990px) {
    flex-direction: column;
    gap: 20px;
    padding-top: 10px;
    width: 100%;

    a,
    .data-list {
      font-size: 1.2rem;
      color: #fff;
    }

    .hover-links a {
      color: #000;
    }

    span.exit {
      width: 100%;
      display: flex;
      font-size: 3rem;
      font-weight: bold;
      justify-content: right;
      color: #fff;
      padding: 0 30px;
    }
  }
`;

export const BoxLanguages = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  img {
    width: 20px;
  }

  @media only screen and (max-width: 990px) {
    gap: 40px;

    img {
      width: 30px;
    }
  }
`;

export const DataList = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;

  &:hover {
    .hover-links {
      display: flex;
    }
  }
`;

export const ContentLinks = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  flex-direction: column;
  width: 160px;
  margin-top: 16px;
  background-color: #fff;
  border-radius: 4px;
  padding: 10px;
  row-gap: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const MaxContent = styled.main<{ bg: string }>`
  background-image: url(${(props) => props.bg});
  width: 100%;
  display: flex;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding-bottom: 20px;
`;

export const SectionContent = styled.section`
  width: 100%;
  max-width: 1200px;
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 50px;

  @media only screen and (max-width: 980px) {
    padding: 10px;
  }

  @media only screen and (max-width: 568px) {
    padding: 0px;
  }
`;

export const ArticleBanner = styled.article`
  padding-top: 25px;

  img {
    width: 100%;
    max-width: 850px;

    &.banner-mobile {
      display: none;
    }

    @media only screen and (max-width: 568px) {
      &.banner-desktop {
        display: none;
      }
      &.banner-mobile {
        display: block;
      }
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 25px;

  @media only screen and (max-width: 980px) {
    grid-template-columns: 1fr;
  }

  @media only screen and (max-width: 568px) {
    padding: 10px;
  }
`;

export const ArticleTitle = styled.article`
  display: flex;
  flex-direction: column;
  row-gap: 15px;

  h1 {
    font-size: 2.8rem;
    font-weight: 600;
    color: #fff;
  }

  > div {
    max-width: 350px;
    display: flex;
    flex-direction: column;
    color: #fff;
    row-gap: 25px;
  }

  @media only screen and (max-width: 980px) {
    justify-content: center;
    align-items: center;
    text-align: center;

    h1 {
      display: none;
    }

    > div {
      max-width: 100%;
    }
  }

  @media only screen and (max-width: 770px) {
    h1 {
      display: inline;
      font-size: 2rem;
    }
  }
`;

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
  margin: 0 auto;

  h2 {
    font-size: 0.9rem;
    color: #fff;
    line-height: 1.5;
  }

  button.button-submit {
    grid-column: 1 / span 2;
    background-color: ${(props) => props.theme.colors.green};
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    padding: 13px 10px;
    border-radius: 8px;
    border: none;
    transition: filter 200ms;

    &:hover {
      filter: brightness(0.9);
    }
  }

  @media only screen and (max-width: 980px) {
    padding: 0;
    h2 {
      text-align: center;
    }
  }
`;

export const BoxForm = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  max-width: 420px;
  gap: 15px;

  input.input-name {
    grid-column: 1 / span 2;
  }

  input,
  select {
    padding: 12px;
    border-radius: 6px;
    outline: none;
    border: none;
  }

  input {
    transition: transform 200ms;

    &::placeholder {
      color: ${(props) => props.theme.colors.textHover};
      font-size: 0.6rem;
    }

    &:focus {
      transform: scaleX(1.05);
      box-shadow: inset 0px 0px 0px 2px #000;
    }
  }

  @media only screen and (max-width: 980px) {
    width: 100%;
    max-width: 100%;
    padding: 5px;

    input,
    button,
    select {
      &:focus {
        border: none;
        box-shadow: none;
        outline: 2px solid ${(props) => props.theme.colors.orangeDark};
      }
    }
  }

  @media only screen and (max-width: 445px) {
    grid-template-columns: repeat(2, minmax(100px, 1fr));
    input[name='name'] {
      width: 100%;
    }

    input[name='email'],
    input[name='tel'],
    select {
    }
  }
`;

export const ContainerCheckerBox = styled.div`
  grid-column: 1 / span 2;
  display: flex;
  padding-top: 10px;
  gap: 10px;

  input {
    appearance: none;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 20px;
    height: 20px;
    overflow: hidden;
    background-color: #fff;
    border: none;

    &:checked {
      background-color: blue;
      border: none;

      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 6px;
        height: 10px;
        display: inline-block;
        border-bottom: 4px solid #fff;
        border-right: 4px solid #fff;
        transform: rotate(35deg) translate(9px);
      }
    }
  }

  p {
    font-size: 0.7rem;
    color: #fff;
  }
`;

export const SectionFeed = styled.section`
  width: 100%;
  background-color: ${(props) => props.theme.colors.cinza};
  height: 500px;

  @media only screen and (max-width: 980px) {
    height: auto;
  }
`;

export const ContainerFeed = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  padding: 100px 30px;
  border-radius: 30px;
  position: relative;
  background-color: ${(props) => props.theme.colors.cinza};
  top: -50px;
  z-index: 99;
  column-gap: 60px;

  @media only screen and (max-width: 980px) {
    position: static;
    border-radius: 0;
    flex-wrap: wrap;
  }
`;

export const ArticleWhat = styled.article`
  width: 100%;
  max-width: 350px;
  gap: 10px;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 1.9rem;
    padding-bottom: 30px;
  }

  p {
    padding-bottom: 20px;
    font-size: 0.8rem;
  }

  button.register {
    background-color: ${(props) => props.theme.colors.yellowOrange};
    border: none;
    width: 100%;
    max-width: 250px;
    padding: 15px 30px;
    border-radius: 10px;
    color: ${(props) => props.theme.colors.backgroundButton};
    text-transform: capitalize;
    font-size: 0.99rem;
    transition: transform 200ms ease;

    &:hover {
      transform: scale(1.05);
      background-color: ${(props) => props.theme.colors.orangeDark};
    }
  }

  @media only screen and (max-width: 980px) {
    max-width: 100%;
    text-align: center;

    button.register {
      max-width: 100%;
    }

    margin-bottom: 30px;
  }
`;

export const ContainerBenefits = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;

  @media only screen and (max-width: 980px) {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding-top: 20px;

    div {
      width: 100%;
      max-width: 100%;
    }
  }
`;

export const SectionWhoIsSofia = styled.section`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 140px 0;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  overflow: hidden;

  @media only screen and (max-width: 980px) {
    flex-direction: column;

    padding: 30px;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
  }
`;

export const BoxProfileSofia = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    width: 100%;
    max-width: 300px;
  }

  > span {
    border: 1px solid ${(props) => props.theme.colors.yellowOrange};
    height: 500px;
    width: 500px;
    display: inline-block;
    border-radius: 50%;
    position: absolute;
    animation: animation-show 1.8s ease infinite;
    z-index: -1;

    &:nth-of-type(2) {
      animation-delay: 0.4s;
    }

    &:nth-of-type(3) {
      animation-delay: 0.8s;
    }
  }

  @media only screen and (max-width: 980px) {
    img {
      max-width: 250px;
    }
    > span {
      width: 400px;
      height: 400px;
    }
  }

  @keyframes animation-show {
    0% {
      opacity: 1;
      transform: scale(0.5);
    }

    100% {
      opacity: 0;
      transform: scale(1);
    }
  }
`;

export const ContentSofia = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  gap: 20px;

  h2 {
    font-size: 5rem;
    font-weight: 600;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 20px;

    p {
      font-size: 0.9rem;
    }
  }

  button.talk-sofia {
    background-color: ${(props) => props.theme.colors.yellowOrange};
    border: none;
    max-width: 250px;
    color: ${(props) => props.theme.colors.backgroundButton};
    padding: 15px 10px;
    border-radius: 8px;
    transition: transform 200ms ease;
    text-transform: none;
    font-size: 0.95rem;

    &:hover {
      transform: scale(1.05);
      background-color: ${(props) => props.theme.colors.orangeDark};
    }
  }

  @media only screen and (max-width: 980px) {
    max-width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;

    h2 {
      margin: 100px 0;
    }

    button.talk-sofia {
      width: 100%;
      max-width: 100%;
    }
  }
`;

export const SectionCompanies = styled.section`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  h2 {
    font-size: 1.8rem;
    padding: 10px 15px;
    font-weight: 400;
  }
`;

export const Company = styled.div`
  overflow: hidden;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;

  &.animation-desktop {
    display: flex;
  }

  &.animation-mobile {
    display: none;
  }

  @media only screen and (max-width: 990px) {
    gap: 300px;
  }

  @media only screen and (max-width: 568px) {
    gap: 0px;
    &.animation-mobile {
      display: flex;
    }

    &.animation-desktop {
      display: none;
    }
  }
`;

export const ContainerCompany = styled.div`
  flex-wrap: nowrap;

  min-width: 100%;

  animation: animation-company 3s ease infinite;
  animation-delay: 2s;

  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 990px) {
    img {
      max-width: 180px;
    }
  }

  @media only screen and (max-width: 445px) {
    img {
      max-width: 160px;
    }
  }

  @keyframes animation-company {
    0% {
      transform: translateX(0%);
    }
    /* 50% {
      transform: translateX(-50%);
    } */

    100% {
      display: none;
      transform: translate(-100%);
    }
  }
`;

export const SectionPleasure = styled.section`
  width: 100%;
  max-width: 100%;
  background-color: ${(props) => props.theme.colors.blueBlack};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 120px 0;
  gap: 40px;

  article {
    width: 100%;

    img {
      width: 100%;
      min-height: 500px;
      object-fit: cover;
      object-position: right;
      border-top-right-radius: 40px;
      border-bottom-right-radius: 40px;
    }
  }

  @media only screen and (max-width: 990px) {
    grid-template-columns: 1fr;
    padding: 20px;
    gap: 40px;

    > article {
      width: 100%;
      max-width: 100%;
      text-align: center;
      justify-content: center;
      align-items: center;

      img {
        max-width: 100%;
        min-height: auto;
        border-radius: 40px;
      }
    }
  }
`;

export const ArticlePleasure = styled.article`
  width: 100%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  row-gap: 25px;

  h2 {
    font-size: 2rem;
    color: #fff;
    padding-bottom: 20px;
  }

  p {
    color: #fff;
    font-size: 0.9rem;
    line-height: 1.5;
  }

  button {
    background-color: ${(props) => props.theme.colors.yellowOrange};
    border: none;
    max-width: 250px;
    color: ${(props) => props.theme.colors.backgroundButton};
    padding: 15px 10px;
    border-radius: 8px;
    transition: transform 200ms ease;
    text-transform: none;
    font-size: 0.95rem;

    &:hover {
      transform: scale(1.05);
      background-color: ${(props) => props.theme.colors.orangeDark};
    }
  }
`;

export const SectionFeedback = styled.section`
  max-width: 1100px;
  width: 100%;
  text-align: center;
  margin: 0 auto;
  padding-top: 200px;
  gap: 25px;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 1.8rem;
    padding-bottom: 50px;
  }
`;

export const BoxFeedBack = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;

  @media only screen and (max-width: 990px) {
    > article {
      max-width: 100%;
    }
  }
`;

export const SectionPartners = styled.section`
  max-width: 100%;
  width: 100%;
  background-color: ${(props) => props.theme.colors.cinza};
  text-align: center;
  padding: 60px 0;
  padding-bottom: 140px;

  > h2 {
    padding: 50px 0;
    font-size: 2rem;
  }
`;

export const ContainerCompanies = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
  justify-content: center;
  align-items: center;

  > img {
    max-width: 120px;
    filter: contrast(0.01);
  }
`;

export const SectionSubscribedBlob = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 80px 0;

  gap: 10px;

  div {
    width: 100%;
    text-align: center;
    line-height: 2;
    padding: 10px;

    > h2 {
      font-size: 1.8rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`;

export const BoxRegister = styled.form`
  padding-top: 20px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 600px;
  gap: 5%;
  padding: 10px;

  input,
  button {
    flex: 45%;
    padding: 15px;
    transition: transform 200ms ease;
    border: none;

    &::placeholder {
      text-align: center;
    }

    border-radius: 5px;

    &:focus {
      transform: scale(1.02);
    }
  }

  input {
    background-color: ${(props) => props.theme.colors.cinza};
    margin-bottom: 8px;
  }

  button {
    margin-top: 10px;
  }

  button[type='submit'] {
    background-color: ${(props) => props.theme.colors.yellowOrange};
  }
  button[type='button'] {
    border: 1px solid ${(props) => props.theme.colors.yellowOrange};
    transition: background 200ms ease, transform 200ms ease;

    a {
      color: ${(props) => props.theme.colors.yellowOrange};
    }

    &:hover {
      background-color: ${(props) => props.theme.colors.orangeDark};
      transform: scale(1.1);

      a {
        color: #fff;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    input[type='email'] {
      flex: 100%;
    }
  }
`;

export const SectionInfoTalk = styled.section`
  margin-top: 100px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.cinza};
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media only screen and (max-width: 990px) {
    grid-template-columns: 1fr;

    > article {
      &:nth-of-type(1) {
        order: 2;
      }
    }
  }
`;

export const BoxTalk = styled.article`
  display: flex;
  align-items: center;

  div {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    line-height: 1.5;

    button {
      background-color: ${(props) => props.theme.colors.yellowOrange};
      border: none;
      max-width: 250px;
      color: ${(props) => props.theme.colors.backgroundButton};
      padding: 15px 10px;
      border-radius: 8px;
      transition: transform 200ms ease;
      text-transform: none;
      font-size: 0.95rem;

      &:hover {
        transform: scale(1.05);
        background-color: ${(props) => props.theme.colors.orangeDark};
      }
    }

    @media only screen and (max-width: 990px) {
      text-align: center;
      padding: 10px;

      button {
        max-width: 100%;
      }
    }

    strong {
      font-size: 1.8rem;
    }

    span {
      font-size: 1.5rem;
      font-weight: 400;
      margin-bottom: 10px;
    }
  }
`;
export const BoxImage = styled.article`
  width: 100%;
  max-width: 800px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  img {
    width: 100%;
    position: relative;
    top: -100px;
    right: -25px;
    border-radius: 20px;
    z-index: 99;
    max-width: 900px;
    max-height: 900px;
  }

  @media only screen and (max-width: 990px) {
    justify-content: center;
    max-height: auto;
    padding: 10px;

    img {
      position: static;
    }
  }
`;

export const Footer = styled.footer`
  width: 100%;
  max-width: 100%;
  background-color: ${(props) => props.theme.colors.footer};
  padding: 80px 0;
`;

export const NavigationFooter = styled.nav`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const NaviHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  img {
    max-width: 140px;
  }

  @media only screen and (max-width: 990px) {
    justify-content: center;
    > a {
      width: 100%;
      display: flex;
      justify-content: center;
      padding-bottom: 25px;

      > img {
        margin: 0 auto;
      }
    }
  }
`;

export const BoxNav = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  a {
    color: #fff;
    font-size: 0.8rem;
    transition: padding 200ms ease;
  }

  a:hover {
    padding-bottom: 4px;
    border-bottom: 1px solid ${(props) => props.theme.colors.textHover};
    color: ${(props) => props.theme.colors.textHover};
  }

  @media only screen and (max-width: 990px) {
    width: 100%;
    padding: 0 10px;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

export const ContainerSocialNetwork = styled.div`
  width: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);

  padding: 25px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;

  a {
    &:nth-of-type(1) {
      img {
        width: 10px;
      }
    }

    &:nth-of-type(2) {
      img {
        width: 16px;
      }
    }
    &:nth-of-type(3) {
      img {
        width: 18px;
      }
    }
  }
`;

export const BoxPolicy = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 14px;

  > div {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;

    a {
      color: #fff;
      border: 1px solid transparent;
      font-size: 0.8rem;

      transition: border 200ms ease;
      &:hover {
        border-bottom: 1px solid #fff;
      }
    }
  }

  > span {
    color: #fff;
    font-size: 0.6rem;
  }
`;
