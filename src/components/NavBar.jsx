import React from 'react';
import Logo from '../assets/img/logoShort.png';
import { Menu } from 'react-feather';
import { Link } from 'react-scroll';
import Wallet from './Wallet.jsx';

const tabNames = [
  { tabName: 'ГЛАВНАЯ', id: 'home' },
  { tabName: 'КУРС', id: 'about-course' },
  { tabName: 'КУПИТЬ КУРС', id: 'buy' },
  { tabName: 'ДЛЯ КОГО?', id: 'for-who' },
  { tabName: 'КОМАНДА', id: 'team' },
];

const NavBar = () => {
  const [isVisible, setIsVisble] = React.useState(true);
  const [isMobileVersion, setIsMobileVersion] = React.useState(
    window.innerWidth < 768 ? true : false,
  );

  const onClickMenu = () => {
    setIsVisble(!isVisible);
  };

  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setIsMobileVersion(true);
      } else {
        setIsMobileVersion(false);
      }
    }

    window.addEventListener('resize', handleResize);
  });

  return (
    <nav className="w-100pc flex flex-column md-flex-row md-px-10 py-5 bg-black">
      <div className="flex justify-between">
        <Link to="" className="flex items-center p-2 mr-4 no-underline">
          <img className="max-h-l4 w-auto" src={Logo} alt="logo" />
        </Link>
        <Link
          to=""
          data-toggle="toggle-nav"
          data-target="#nav-items"
          className="flex items-center ml-auto md-hidden indigo-lighter opacity-50 hover-opacity-100 ease-300 p-1 m-3"
          onClick={() => onClickMenu()}
        >
          <Menu size={40} color="white" />
        </Link>
      </div>
      <div
        id="nav-items"
        className={`${
          isVisible && 'hidden'
        } flex sm-w-100pc flex-column md-flex md-flex-row md-justify-end items-center`}
      >
        {tabNames.map((obj) => (
          <Link
            key={obj.tabName}
            to={obj.id}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={isMobileVersion ? -250 : 0}
            duration={1000}
            onClick={() => onClickMenu()}
            className="fs-m1 mx-3 py-3 white no-underline hover-underline pointer"
          >
            {obj.tabName}
          </Link>
        ))}
        <Wallet />
      </div>
    </nav>
  );
};

export default NavBar;
