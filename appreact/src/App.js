import './css/main.css';
import Logo from './assets/logo.svg';
import Slider from './assets/slider.svg';
import Sobre from './assets/sobre.svg';
import Destaque1 from './assets/destaque1.svg';
import Destaque2 from './assets/destaque2.svg';
import Destaque3 from './assets/destaque3.svg';
import Destaque4 from './assets/destaque4.svg';
import Logocliente from './assets/clientes/logo1.svg';
import Logocliente2 from './assets/clientes/logo2.svg';
import Logocliente3 from './assets/clientes/logo3.svg';
import Logocliente4 from './assets/clientes/logo4.svg';
import Logocliente5 from './assets/clientes/logo5.svg';
import Logocliente6 from './assets/clientes/logo6.svg';
import Logocliente7 from './assets/clientes/logo7.svg';
import Logocliente8 from './assets/clientes/logo8.svg';
import Logocliente9 from './assets/clientes/logo9.svg';
import phone from './assets/phone.svg';
import cliente from './assets/clientes-img.svg';
import servicos1 from './assets/servicos/1.jpg';
import servicos2 from './assets/servicos/2.jpg';
import servicos3 from './assets/servicos/3.jpg';
import servicos4 from './assets/servicos/4.jpg';
import servicos5 from './assets/servicos/5.jpg';
import servicos6 from './assets/servicos/6.jpg';
import servicos7 from './assets/servicos/7.jpg';
import servicos8 from './assets/servicos/8.jpg';
import servicos9 from './assets/servicos/9.jpg';
import quote from './assets/quote.svg';
import user from './assets/user.svg';
import paperplane from './assets/paperplane.svg';
import instagram from './assets/instagram.svg';
import twitter from './assets/twitter.svg';
import linkedin from './assets/linkedin.svg';
import youtube from './assets/youtube.svg';
import facebook from './assets/facebook.svg';

function App() {
  return (
    <>
      <div id="header">
        <div className="container">
          <nav class="navbar navbar-expand-lg navbar-light justify-content-between">
            <a class="navbar-brand" href="#">
              <img src={Logo} class="img-fluid" alt="" />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Pagina iniciala
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Sobre
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Servicos
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#">
                    portifolio
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

      <div id="slider" class="block">
        <div class="container pt-5">
          <div class="row">
            <div class="col-lg-4 col-md-6 align-self-center mb-md-0 mb-4">
              <h1>Lorem Ipsun Dolor aondeai</h1>
              <h4 class="mb-4">Et Sumi kapa namur aondeai rocus pocus</h4>
              <a
                href="#"
                class="button btn btn-primary button-primary d-md-inline-block d-block mb-md-0 mb-2 mr-md-2"
              >
                Saiba maisa
              </a>
              <a
                href="#"
                class="button btn btn-outline-primary button-primary-outline d-md-inline-block d-block"
              >
                Contato
              </a>
            </div>
            <div class="col-lg-8 col-md-6 align-self-center text-center">
              <img src={Slider} class="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <div id="sobre" className="block">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center align-self-center order-md-1 order-2">
              <img src={Sobre} class="img-fluid" alt="" />
            </div>

            <div className="col-md-6 align-self-center mb-md-0 mb-4 order-md-2 order-1">
              <h2 className="title">At vero eos et accusamus et iusto</h2>
              <h4 className="subtitle">
                {' '}
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque{' '}
              </h4>
              <p>
                {' '}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.{' '}
              </p>

              <a href="#" class="btn btn-prmary button button-primary">
                Entre em contato
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="servicos" className="block">
        <div className="container">
          <h2 className="title text-center">Nossos Serviços</h2>
          <h4 className="subtitle text-center mb-4">
            Et sumi kapa namur aondeai rocus pocus
          </h4>
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <a href="" className="destaque">
                <div className="img-container mb-3">
                  <img src={Destaque1} className="img-fluid" alt="" />
                </div>
                <h5 className="text-uppercase">Et sumi kapo</h5>
                <p className="mb-0">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium
                </p>
              </a>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <a href="" className="destaque">
                <div className="img-container mb-3">
                  <img src={Destaque2} className="img-fluid" alt="" />
                </div>
                <h5 className="text-uppercase">Et sumi kapo</h5>
                <p className="mb-0">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium
                </p>
              </a>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <a href="" className="destaque">
                <div className="img-container mb-3">
                  <img src={Destaque3} className="img-fluid" alt="" />
                </div>
                <h5>Et sumi kapo</h5>
                <p className="mb-0">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium
                </p>
              </a>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <a href="" className="destaque">
                <div className="img-container mb-3">
                  <img src={Destaque4} className="img-fluid" alt="" />
                </div>
                <h5>Et sumi kapo</h5>
                <p className="mb-0">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="clientes" class="block">
        <div class="container">
          <div class="row">
            <div class="col-md-6 align-self-center">
              <div class="row">
                <div class="col-sm-4 col-6 mb-4">
                  <a href="#" class="link-cliente">
                    <img src={Logocliente} class="img-fluid" />
                  </a>
                </div>
                <div class="col-sm-4 col-6 mb-4">
                  <a href="#" class="link-cliente">
                    <img src={Logocliente2} class="img-fluid" />
                  </a>
                </div>
                <div class="col-sm-4 col-6 mb-4">
                  <a href="#" class="link-cliente">
                    <img src={Logocliente3} class="img-fluid" />
                  </a>
                </div>
                <div class="col-sm-4 col-6 mb-4">
                  <a href="#" class="link-cliente">
                    <img src={Logocliente4} class="img-fluid" />
                  </a>
                </div>
                <div class="col-sm-4 col-6 mb-4">
                  <a href="#" class="link-cliente">
                    <img src={Logocliente5} class="img-fluid" />
                  </a>
                </div>
                <div class="col-sm-4 col-6 mb-4">
                  <a href="#" class="link-cliente">
                    <img src={Logocliente6} class="img-fluid" />
                  </a>
                </div>
                <div class="col-sm-4 col-6 mb-4">
                  <a href="#" class="link-cliente">
                    <img src={Logocliente7} class="img-fluid" />
                  </a>
                </div>
                <div class="col-sm-4 col-6 mb-4">
                  <a href="#" class="link-cliente">
                    <img src={Logocliente8} class="img-fluid" />
                  </a>
                </div>
                <div class="col-sm-4 col-6 mb-4">
                  <a href="#" class="link-cliente">
                    <img src={Logocliente9} class="img-fluid" />
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-6 align-self-center">
              <div class="cliente-texto ml-5">
                <div class="imagem">
                  <img src={cliente} />
                  <div class="d-inline-block pl-md-0 pl-3">
                    <span>10</span>
                    Anos de Experiência
                  </div>
                </div>
                <div class="telefone">
                  <img src={phone} class="img-fluid" />
                  <div class="d-inline-block pl-3">
                    <span>(11) 99999 6699</span>
                    Atendimento de segunda a sexta, das 7h as 18h
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer id="contato">
        <div class="container">
          <div class="email">
            <img src={paperplane} />
            <h2 class="title text-center">Fique por dentro das novidades</h2>
            <h4 class="subtitle text-center mb-4">
              Et sumi kapa namur aondeai rocus pocus est talaraum
            </h4>
            <form>
              <div class="flex-md-grow-1 pr-md-3 pb-md-0 pb-3">
                <label for="email" class="sr-only"></label>
                <input
                  type="email"
                  class="form-control w-100"
                  id="email_input"
                  placeholder="seu email"
                />
              </div>
              <div class="flex-grow-1 flex-md-grow-0">
                <button
                  type="submit"
                  class="btn btn-light button mb-3 d-md-inline d-block w-100 ok2"
                >
                  cadastre-se
                </button>
              </div>
            </form>
          </div>
          <div class="logo py-4">
            <div class="row">
              <div class="col-md-6 align-self-center text-md-left text-center">
                <img src={Logo} class="img-fluid ok" />
              </div>
              <div class="col-md-6 align-self-center text-right">
                <ul>
                  <li>
                    <a href="#">
                      <img src={facebook} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={twitter} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={instagram} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={linkedin} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={youtube} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
