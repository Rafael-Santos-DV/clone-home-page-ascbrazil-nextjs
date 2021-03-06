import type { NextPage } from 'next';
import Head from 'next/head';
import {
  ArticleBanner,
  ArticlePleasure,
  ArticleTitle,
  ArticleWhat,
  BoxFeedBack,
  BoxForm,
  BoxHeader,
  BoxImage,
  BoxLanguages,
  BoxLinks,
  BoxNav,
  BoxPolicy,
  BoxProfileSofia,
  BoxRegister,
  BoxTalk,
  Company,
  Container,
  ContainerBenefits,
  ContainerCheckerBox,
  ContainerCompanies,
  ContainerCompany,
  ContainerFeed,
  ContainerForm,
  ContainerSocialNetwork,
  Content,
  ContentLinks,
  ContentSofia,
  DataList,
  Footer,
  Header,
  MaxContent,
  Navigation,
  NavigationFooter,
  NaviHeader,
  SectionCompanies,
  SectionContent,
  SectionFeed,
  SectionFeedback,
  SectionInfoTalk,
  SectionPartners,
  SectionPleasure,
  SectionSubscribedBlob,
  SectionWhoIsSofia,
} from '../styles/Pages/Home';
import logo from '../assets/logo.svg';
import logoWhite from '../assets/logobranca.png';
import Link from 'next/link';
import { ButtonComponent } from '../components/Button/Button';

import imgBr from '../assets/pt-br.png';
import imgEs from '../assets/es.png';
import imgUs from '../assets/en-us.png';
import imgBg from '../assets/background.jpg';

import banner from '../assets/banner-atendimento.png';
import { Card } from '../components/Card/Card';

import cost from '../assets/custo.svg';
import sofia from '../assets/sofia.png';
import { useState } from 'react';

import hamburger from '../assets/barra.svg';
import bannerMobile from '../assets/banner-mobile.png';

// companies images
import martins from '../assets/Martins.png';
import Petrobras from '../assets/Petrobras-logo.png';
import Sarah from '../assets/Sarah.png';
import Tribanco from '../assets/Tribanco.png';

import ascSolucoes from '../assets/soluctions.png';
import { CardFeedback } from '../components/CardFeedback/CardFeedback';

// feedback people
import ronaldoSilva from '../assets/Ronaldo-Silva.png';

// partners
import amazon from '../assets/Amazon.png';
import google from '../assets/Google.png';
import microsoft from '../assets/microsoft.png';
import facebook from '../assets/facebook.png';

import call from '../assets/contato.png';

// social network icons
import facebookIcon from '../assets/facebook-icon.svg';
import instagramIcon from '../assets/instagram-icon.png';
import linkedinIcon from '../assets/Linkedin-icon.svg';

const Home: React.FC<NextPage> = () => {
  const [isMobile, setMobile] = useState(false);

  const handleClickNavigationMobile = () => {
    const headerOverflow = document.querySelector('.header-sidebar');

    if (!isMobile) {
      headerOverflow?.classList.add('mobile-active');
      setMobile((prev) => !prev);
      return;
    }

    headerOverflow?.classList.remove('mobile-active');

    setMobile((prev) => !prev);
  };

  return (
    <Container>
      <Head>
        <title>Clone ASC Brazil</title>
        <meta name="description" content="Clone ASC Brazil" />
      </Head>

      <Header>
        <BoxHeader>
          <Link href="/">
            <a>
              <img src={logo.src} id="logo" alt="Logo" />
            </a>
          </Link>
          <img
            src={hamburger.src}
            alt="Menu"
            className="menu-mobile"
            onClick={handleClickNavigationMobile}
          />
          <Navigation isMobile={isMobile}>
            <BoxLinks>
              {isMobile && (
                <span className="exit" onClick={handleClickNavigationMobile}>
                  X
                </span>
              )}
              <Link href="/">
                <a>ASC SAC</a>
              </Link>
              <Link href="/">
                <a>Blog</a>
              </Link>
              <Link href="/">
                <a>Trabalhe Conosco</a>
              </Link>
              <Link href="/">
                <a>Fale pelo Whatsapp</a>
              </Link>
              <DataList>
                <span className="data-list">LGPD</span>
                <ContentLinks className="hover-links">
                  <Link href="">
                    <a>Canal LGPD</a>
                  </Link>
                  <Link href="">
                    <a>Pol??tica de Privacidade</a>
                  </Link>
                  <Link href="">
                    <a>Pol??tica de Cookies</a>
                  </Link>
                  <Link href="">
                    <a>Termos de Uso</a>
                  </Link>
                </ContentLinks>
              </DataList>
              <ButtonComponent>
                <Link href="/">
                  <a className="button-link">??rea do Cliente</a>
                </Link>
              </ButtonComponent>
              <BoxLanguages>
                <Link href="/">
                  <a>
                    <img src={imgBr.src} alt="pt-BR" />
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <img src={imgEs.src} alt="Es" />
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <img src={imgUs.src} alt="us" />
                  </a>
                </Link>
              </BoxLanguages>
            </BoxLinks>
          </Navigation>
        </BoxHeader>
      </Header>
      <MaxContent bg={imgBg.src}>
        <SectionContent>
          <ArticleBanner>
            <Link href="/">
              <a>
                <img
                  src={banner.src}
                  alt="Atendimento Whatsapp"
                  className="banner-desktop"
                />
                <img
                  src={bannerMobile.src}
                  alt="Atendimento Whatsapp"
                  className="banner-mobile"
                />
              </a>
            </Link>
          </ArticleBanner>

          <Content>
            <ArticleTitle>
              <h1>
                N??s cuidamos do seu atendimento. Voc?? cuida do seu neg??cio.
              </h1>
              <div>
                <p>
                  <strong>Automatize</strong> processos,{' '}
                  <strong>melhore</strong> a experi??ncia do cliente e ainda
                  <strong>economize</strong> dinheiro com isso.
                </p>
                <p>
                  Conhe??a ASC SAC, a solu????o para o atendimento ao cliente da
                  sua empresa.
                </p>
              </div>
            </ArticleTitle>
            <ContainerForm>
              <h2>
                Cadastre-se e aguarde. Em breve, um de nossos consultores
                entrar?? em contato.
              </h2>

              <BoxForm>
                <input
                  type="text"
                  name="name"
                  placeholder="Seu nome*"
                  className="input-name"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail corporativo*"
                />
                <input type="tel" name="telefone" placeholder="Celular*" />

                <select name="">
                  <option value="cargo">Cargo*</option>
                  <option value="">S??cio/Propriet??rio(a)</option>
                  <option value="">CEO/Presidente</option>
                  <option value="">Diretor(a)</option>
                  <option value="">Cargo</option>
                </select>

                <select name="">
                  <option value="">Tem CNPJ?*</option>
                  <option value="">Sim</option>
                  <option value="">N??o</option>
                </select>

                <select name="">
                  <option value="">Segmento*</option>
                  <option value="">Call Center</option>
                  <option value="">T.I</option>
                  <option value="">Servi??oes Financeiros</option>
                  <option value="">Outros</option>
                </select>

                <select name="">
                  <option value="">N?? de atendimentos/m??s*</option>
                  <option value="">0 / 500</option>
                  <option value="">501 / 2000</option>
                  <option value="">2001 / 5000</option>
                  <option value="">5000+</option>
                </select>

                <ContainerCheckerBox>
                  <input type="checkbox" name="" />
                  <p>
                    Estou ciente e concordo que esses dados sejam utilizados
                    para envio de ofertas e conte??dos personalizados de acordo
                    com os meus interesses. A qualquer momento posso voltar
                    atr??s nessa decis??o*.
                  </p>
                </ContainerCheckerBox>

                <ButtonComponent type="submit" className="button-submit">
                  Enviar
                </ButtonComponent>
              </BoxForm>
            </ContainerForm>
          </Content>
        </SectionContent>
      </MaxContent>

      <SectionFeed>
        <ContainerFeed>
          <ArticleWhat>
            <h2>
              Por que escolher <br /> a ASC Brazil?
            </h2>
            <p>
              J?? imaginou centralizar seus atendimentos via Whatsapp, Facebook,
              Instagram, Chat, Email, Telegram, SMS, Voz, Presencial, Viber,
              API, Slack, Microsoft Teams e Hangout e outros canais em uma ??nica
              plataforma? Como cliente ASC Brazil, voc?? pode! Utilize nossa
              solu????o ASC SAC.
            </p>
            <p>
              Com ASC SAC, voc?? gerencia 18 canais digitais em um ??nico painel
              com design simples e intuitivo
            </p>
            <ButtonComponent className="register">Cadastrar</ButtonComponent>
          </ArticleWhat>
          <ContainerBenefits>
            <Card src={cost.src} text="Menos custos" className="ola" />
            <Card src={cost.src} text="Menos custos" className="ola" />
            <Card src={cost.src} text="Menos custos" className="ola" />
            <Card src={cost.src} text="Menos custos" className="ola" />
          </ContainerBenefits>
        </ContainerFeed>
      </SectionFeed>
      <SectionWhoIsSofia>
        <BoxProfileSofia>
          <img src={sofia.src} alt="Sofia" />
          <span></span>
          <span></span>
          <span></span>
        </BoxProfileSofia>
        <ContentSofia>
          <h2>SOFIA</h2>
          <div>
            <p>A Sofia ?? nossa Atendente Virtual.</p>

            <p>
              Ela ?? curiosa, adora conversar e est?? sempre aprendendo coisas
              novas. A Sofia ?? respons??vel pelo atendimento aos clientes da ASC
              Brazil.
            </p>

            <p>
              Quanto mais ela conversa com as pessoas, mais ela aprende coisas e
              melhora a sua conversa????o. Sendo cliente ASC Brazil, sua empresa
              tamb??m pode criar e desenvolver seu pr??prio rob??.
            </p>
            <p>Quer saber mais? Fale com a Sofia.</p>
          </div>
          <ButtonComponent className="talk-sofia">
            Falar com a Sofia
          </ButtonComponent>
        </ContentSofia>
      </SectionWhoIsSofia>

      <SectionCompanies>
        <h2>Empresas que confiam em n??s</h2>

        <Company className="animation-desktop">
          {/* desktop */}
          <ContainerCompany>
            <img src={martins.src} alt="Martins" />
            <img src={Petrobras.src} alt="Petrobras" />
            <img src={Sarah.src} alt="Sarah" />
            <img src={Tribanco.src} alt="Tribanco" />
            <img src={Tribanco.src} alt="Tribanco" />
          </ContainerCompany>
          <ContainerCompany>
            <img src={martins.src} alt="Martins" />
            <img src={Petrobras.src} alt="Petrobras" />
            <img src={Sarah.src} alt="Sarah" />
            <img src={Tribanco.src} alt="Tribanco" />
            <img src={Tribanco.src} alt="Tribanco" />
          </ContainerCompany>

          <ContainerCompany>
            <img src={martins.src} alt="Martins" />
            <img src={Petrobras.src} alt="Petrobras" />
            <img src={Sarah.src} alt="Sarah" />
            <img src={Tribanco.src} alt="Tribanco" />
            <img src={Tribanco.src} alt="Tribanco" />
          </ContainerCompany>
        </Company>

        <Company className="animation-mobile">
          {/* mobile */}

          <ContainerCompany>
            <img src={martins.src} alt="Martins" />
            <img src={Petrobras.src} alt="Petrobras" />
          </ContainerCompany>
          <ContainerCompany>
            <img src={martins.src} alt="Martins" />
            <img src={Petrobras.src} alt="Petrobras" />
          </ContainerCompany>

          <ContainerCompany>
            <img src={martins.src} alt="Martins" />
            <img src={Petrobras.src} alt="Petrobras" />
          </ContainerCompany>

          <ContainerCompany>
            <img src={martins.src} alt="Martins" />
            <img src={Petrobras.src} alt="Petrobras" />
          </ContainerCompany>
          <ContainerCompany>
            <img src={martins.src} alt="Martins" />
            <img src={Petrobras.src} alt="Petrobras" />
          </ContainerCompany>

          <ContainerCompany>
            <img src={martins.src} alt="Martins" />
            <img src={Petrobras.src} alt="Petrobras" />
          </ContainerCompany>
        </Company>
      </SectionCompanies>

      <SectionPleasure>
        <article>
          <img src={ascSolucoes.src} alt="ASC Brazil Solu????es" />
        </article>
        <ArticlePleasure>
          <h2>Prazer, ASC Brazil</h2>
          <p>
            Somos uma empresa 100% brasileira, que desenvolve e comercializa
            solu????es de atendimento voltadas a m??dias e grandes empresas, de
            diversos segmentos.
          </p>
          <p>
            Nosso objetivo ?? otimizar os processos e reduzir os custos dos
            nossos clientes.
          </p>
          <p>
            <strong>MISS??O</strong> - Ajudar as empresas do mundo a inovar e
            evoluir na experi??ncia de atendimento ao cliente.
          </p>
          <p>
            <strong>VIS??O</strong> ??? Ser refer??ncia mundial em solu????es de
            Atendimento Digital.
          </p>
          <p>
            <strong>VALORES</strong> ??tica e Respeito; Empreendedorismo e
            Inova????o; Compromisso e Transpar??ncia; Qualidade nos processos;
            Investimento em Talentos; Responsabilidade Social.
          </p>

          <ButtonComponent>Fale com um consultor</ButtonComponent>
        </ArticlePleasure>
      </SectionPleasure>
      <SectionFeedback>
        <h2>Depoimentos de quem conhece</h2>

        <BoxFeedBack>
          <CardFeedback
            avatar={ronaldoSilva.src}
            author="Ronaldo Silva"
            charge="Administra????o de Telemarketing BV Financeira"
            content="A ASC Brazil, atrav??s de sua solu????o ASC SAC, consegue nos entregar uma interface amig??vel e ainda nos possibilita a divulga????o da nossa marca. Otimizamos nosso tempo com recursos como armazenamento e hist??rico das conversas, al??m de podermos atender mais de um cliente de forma simult??nea."
            description="Interface amig??vel e otimiza????o de tempo"
          />

          <CardFeedback
            avatar={ronaldoSilva.src}
            author="Ronaldo Silva"
            charge="Administra????o de Telemarketing BV Financeira"
            content="A ASC Brazil, atrav??s de sua solu????o ASC SAC, consegue nos entregar uma interface amig??vel e ainda nos possibilita a divulga????o da nossa marca. Otimizamos nosso tempo com recursos como armazenamento e hist??rico das conversas, al??m de podermos atender mais de um cliente de forma simult??nea."
            description="Interface amig??vel e otimiza????o de tempo"
          />

          <CardFeedback
            avatar={ronaldoSilva.src}
            author="Ronaldo Silva"
            charge="Administra????o de Telemarketing BV Financeira"
            content="A ASC Brazil, atrav??s de sua solu????o ASC SAC, consegue nos entregar uma interface amig??vel e ainda nos possibilita a divulga????o da nossa marca. Otimizamos nosso tempo com recursos como armazenamento e hist??rico das conversas, al??m de podermos atender mais de um cliente de forma simult??nea."
            description="Interface amig??vel e otimiza????o de tempo"
          />
        </BoxFeedBack>
      </SectionFeedback>

      <SectionPartners>
        <h2>Parceiros</h2>
        <ContainerCompanies>
          <img src={amazon.src} alt="Amazon" />
          <img src={google.src} alt="Google" />
          <img src={facebook.src} alt="Facebook" />
          <img src={microsoft.src} alt="Microsoft" />
          <img src={google.src} alt="Google" />
          <img src={facebook.src} alt="Facebook" />
          <img src={microsoft.src} alt="Microsoft" />
        </ContainerCompanies>
      </SectionPartners>
      <SectionSubscribedBlob>
        <div>
          <h2>Conhecimento nunca ?? demais</h2>
          <p>Cadastre-se e receba conte??dos exclusivos do nosso blog</p>
        </div>
        <BoxRegister>
          <input type="text" name="name" placeholder="Seu nome*" />
          <input type="email" name="email" placeholder="Seu e-mail*" />
          <ButtonComponent type="button">
            <Link href="">
              <a>Acessar Blog</a>
            </Link>
          </ButtonComponent>
          <ButtonComponent type="submit">Cadastrar</ButtonComponent>
        </BoxRegister>
      </SectionSubscribedBlob>

      <SectionInfoTalk>
        <BoxTalk>
          <div>
            <strong>Chegou a hora de oferecer a melhor experi??ncia</strong>
            <span>Vamos conversar?</span>
            <ButtonComponent>Fale com um consultor</ButtonComponent>
          </div>
        </BoxTalk>

        <BoxImage>
          <img src={call.src} alt="Contato" />
        </BoxImage>
      </SectionInfoTalk>
      <Footer>
        <NavigationFooter>
          <NaviHeader>
            <Link href="/">
              <a>
                <img src={logoWhite.src} id="logo" alt="Logo" />
              </a>
            </Link>

            <BoxNav>
              <Link href="/">
                <a>ASC SAC</a>
              </Link>
              <Link href="/">
                <a>Blog</a>
              </Link>
              <Link href="/">
                <a>??rea do cliente</a>
              </Link>
              <Link href="/">
                <a>Trabalhe Conosco</a>
              </Link>
            </BoxNav>
          </NaviHeader>

          <ContainerSocialNetwork>
            <Link href="/">
              <a>
                <img src={facebookIcon.src} alt="Facebook" />
              </a>
            </Link>
            <Link href="/">
              <a>
                <img src={instagramIcon.src} alt="Instagram" />
              </a>
            </Link>
            <Link href="/">
              <a>
                <img src={linkedinIcon.src} alt="Linkedin" />
              </a>
            </Link>
          </ContainerSocialNetwork>
          <BoxPolicy>
            <div>
              <Link href="/">
                <a>Canal LGPD</a>
              </Link>
              <Link href="/">
                <a>Pol??tica de privacidade</a>
              </Link>
              <Link href="/">
                <a>Pol??tica de cookies</a>
              </Link>
              <Link href="/">
                <a>Termos de uso</a>
              </Link>
            </div>

            <span>Copyright 2020 ?? ASC Brazil</span>
          </BoxPolicy>
        </NavigationFooter>
      </Footer>
    </Container>
  );
};

export default Home;
