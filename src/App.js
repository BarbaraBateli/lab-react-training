import React from 'react';
import IdCard from './IdCard';
import logo from './logo.svg';
import './style.css';
import Greetings from './Greetings';
import 'bootstrap/dist/css/bootstrap.min.css';
import Random from './Random';
import BoxColor from './BoxColor';
import CreditCard from './CreditCard';
import Rating from './Rating';
import DriverCard from './DriverCard';

function App() {
  return (
    <div>
    <div className="div-idCard"></div>
    <h1 className="title-idCard">IdCard</h1>
    <IdCard 
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date('1988-05-11')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date('1988-05-11')}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <div className="div-greetins">
      <h1>Greetings</h1>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <div className="div-random">
      <h1>Random</h1>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <div className="div-boxColor">
      <h1>BoxColor</h1>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <div className="div-creditCard">
      <h1>CreditCard</h1>
      <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white"
      />
      <CreditCard
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222"
      />
      <CreditCard
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white"/>
        </div>
      </div>
    </div>
    </div> 
    </div>     
  );
}

export default App;
