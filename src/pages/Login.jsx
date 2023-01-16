import React from 'react';
import welcomeImg from '../assets/img/logo.svg';
import buttonIcon from '../assets/img/near_icon.png';
import { Button } from 'react-bootstrap';
import { login } from '../utils/near';

const Login = () => {
  const onClickLogin = () => {
    login();
  };

  return (
    <div className="welcome">
      <div>
        <img src={welcomeImg} className="welcome-logo" alt="logo" />
      </div>
      <div>
        <Button
          onClick={() => onClickLogin()}
          variant="outline-light"
          className="rounded-pill px-3 mt-3 connect-wallet-button"
        >
          <img src={buttonIcon} className="button-logo" alt="logo" />
          Подключить кошелек
        </Button>
      </div>
      <div className="footer-copyright text-center py-3 text-bottom">
        <h3 className="text-white">Powerd by KulikovaE©</h3>
      </div>
    </div>
  );
};

export default Login;
