import React from 'react';

import { 
  Header,
  ContainerInfoMail,
  ImagePhone,
  Content,
  ContainerInfoFooter,
  Footer
} from './styles/app';
import CreateStylesGlobal from './styles/global';

import logo from './assets/Logo.png';
import phone from './assets/Phone.png';
import phoneLogin from './assets/phoneLogin.png';
import phoneHome from './assets/phoneHome.png';
import phonePayment from './assets/phone_payment.png';
import facebook from './assets/facebook.png';
import instagram from './assets/instagram.png';
import twitter from './assets/twitter.png';

function App() {
  return (
   <>
      <CreateStylesGlobal />
      <Header>
        <img src={logo} alt="Logo"/>

        <ul>
          <li>Home</li>
          <li>Product</li>
          <li>Faq</li>
          <li>Contact</li>
        </ul> 
      </Header>
      <ContainerInfoMail>
        <span>Food app</span>
        <h1>Why stay hungry when you can order form Bella Onojie</h1>
        <p>Download the bella onoje’s food app now on</p>
      
        <div>
          <button>Playstore</button>
          <button>App store</button>
        </div>

      </ContainerInfoMail>
      <ImagePhone src={phone} alt="Phones"/>
      <Content name="phone-login">
        <span />
        <h1>How the app works</h1>

        <section>
          <img src={phoneLogin} alt="Phone Login"/>

          <div>
            <h2>Create an account</h2>
            <h3>Create/login to an existing account to get started</h3>
            <p>An account is created with your email and a desired password</p>
          </div>
        </section>
      </Content>
      <Content name="phone-home">
        <section>
          <div>
            <h2>Explore varieties</h2>
            <h3>Shop for your favorites meal as e dey hot.</h3>
            <p>Shop for your favorite meals or drinks and enjoy while doing it.</p>
          </div>

          <img src={phoneHome} alt="Phone Home"/>
        </section>
      </Content>
      <Content name="phone-home">
        <section>
          <img src={phonePayment} alt="Phone Login"/>

          <div>
            <h2>Checkout</h2>
            <h3>When you done check out and get it delivered.</h3>
            <p>When you done check out and get it delivered with ease.</p>
          </div>
        </section>
      </Content>
      <ContainerInfoFooter>
        <h1>Download the app now.</h1>
        <span>Available on your favorite store. Start your premium experience now</span>
        <div>
          <button>Playstore</button>
          <button>App store</button>
        </div>

      </ContainerInfoFooter>
      <Footer>
        <img src={logo} alt="Logo"/>

        <div>
          <img src={twitter} alt="Twitter"/>
          <img src={facebook} alt="Facebook"/>
          <img src={instagram} alt="Instagram"/>
        </div>

        <span>Copywright 2020 Bella Onojie.com</span>

      </Footer>
   </>
  );
}

export default App;
