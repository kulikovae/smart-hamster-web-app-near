import React from 'react';
import { Link } from 'react-scroll';

const WelcomeBlock = () => {
  return (
    <div id="home">
      <div className="mx-5 md-mx-l5 main-div h-75vh">
        <h1 className="white fs-l3 lh-2 md-fs-xl1 md-lh-1 fw-900">
          Smart
          <br />
          Hamster
          <br />
          Nodes
          <br />
          Studio
        </h1>
        <p className="white p-4">in nodes we trust.</p>
        <Link activeClass="active" to="buy" spy={true} smooth={true} offset={0} duration={500}>
          <div className="button bg-indigo indigo-lightest white p-6 md-p-l2 fs-m4 hover-opacity-100 hover-scale-up-1 ease-300">
            Купить
          </div>
        </Link>
      </div>
    </div>
  );
};

export default WelcomeBlock;
