import React from 'react';
import SSVLogo from '../assets/img/ssv.png';
import FortaLogo from '../assets/img/forta.svg';
import MoonbeamLogo from '../assets/img/moonbeam.svg';
import StreamerLogo from '../assets/img/streamr.png';

const goodCases = [
  {
    name: 'SSV',
    logo: SSVLogo,
    caseInfo: (
      <>
        затраты = $70 <br /> срок = 6 месяцев <br /> награды = $450
      </>
    ),
    isBig: true,
  },
  {
    name: 'Forta',
    logo: FortaLogo,
    caseInfo: (
      <>
        затраты = $300 <br /> срок = 5 месяцев <br /> награды = от $2000 до $10000
      </>
    ),
    isBig: false,
  },
  {
    name: 'Streamer',
    logo: StreamerLogo,
    caseInfo: (
      <>
        затраты $30 <br /> срок = 3 месяца <br /> награды = $2.5
      </>
    ),
    isBig: true,
  },
  {
    name: 'Moonbeam',
    logo: MoonbeamLogo,
    caseInfo: (
      <>
        затраты = $600 <br /> срок = 9 месяцев <br /> награды = от $7250 + аллокация на сейл
      </>
    ),
    isBig: false,
  },
];

const CaseCard = () => {
  return (
    <div className="p-0 md-p-5">
      <h2 className="white fs-l3 fw-900 text-center">Кейсы</h2>
      <div className="flex flex-wrap p-0 md-p-3 case-card container">
        {goodCases.map((obj) => (
          <div key={obj.name} className="card">
            <div className="face face1">
              <div className="content">
                {obj.isBig ? (
                  <img className="imgSmall" src={obj.logo} alt={obj.name} />
                ) : (
                  <img src={obj.logo} alt={obj.name} />
                )}
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <h2 className="text-center">{obj.name}</h2>
                <p>{obj.caseInfo}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseCard;
