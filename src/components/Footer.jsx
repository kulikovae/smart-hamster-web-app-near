import React from 'react';
import { Instagram, Send, Youtube } from 'react-feather';
import SmartHamsterIcon from '../assets/img/logoShort.png';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="p-4 md-p-l2 bg-indigo-lightest-10">
      <div className="flex flex-wrap">
        <div className="md-w-25pc">
          <img src={SmartHamsterIcon} className="w-l10" alt="" />
        </div>
        <div className="w-100pc md-w-50pc">
          <div className="flex justify-around">
            <div className="w-50pc md-px-10 mb-1">
              <h5 className="white">Компания</h5>
              <ul className="list-none mt-5 fs-s2">
                <li className="my-3">
                  <Link
                    activeClass="active"
                    className="white opacity-70 no-underline hover-underline pointer"
                    to="for-who"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    О Нас
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-50pc md-px-10 mb-1">
              <h5 className="white">Продукт</h5>
              <ul className="list-none mt-5 fs-s2">
                <li className="my-3">
                  <Link
                    activeClass="active"
                    className="white opacity-70 no-underline hover-underline pointer"
                    to="about-course"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    О Курсе
                  </Link>
                </li>
                <li className="my-3">
                  <Link
                    activeClass="active"
                    className="white opacity-70 no-underline hover-underline pointer"
                    to="buy"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    Купить Курс
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-100pc md-w-25pc">
          <div className="flex justify-around my-8">
            <a href="https://youtube.com/channel/UCOkLO7sSLDJehdq2p0ATgaQ">
              <Youtube size={30} color="white" />
            </a>
            <a href="https://t.me/SmartHamsterTG">
              <Send size={30} color="white" />
            </a>
            <a href="https://instagram.com/sergey_lapa?igshid=YmMyMTA2M2Y=">
              <Instagram size={30} color="white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
