import React from 'react';
import Pods from '../assets/img/airpod.jpg';
import Tree from '../assets/img/tree.jpg';
import Pencil from '../assets/img/pencil.jpg';

const Card = () => {
  return (
    <div className="p-0 md-p-5">
      <div className="flex flex-wrap">
        <div className="w-100pc md-w-33pc p-10">
          <div className="block no-underline p-5 br-8 bg-indigo-lightest-10 hover-bg-indigo-lightest-20 hover-scale-up-1 ease-300">
            <div className="inline-block bg-indigo indigo-lightest br-3 px-4 py-1 mb-10 fs-s4 uppercase">
              smarthumster studio
            </div>
            <img className="w-100pc" src={Pods} alt="airpods" />
            <p className="fw-500 white fs-m3 mt-3">
              Измени формат своего взаимодействия с криптой. Участвуй в созвонах, смотри эфиры,
              брэинштормы и погрузись в крипту на 100%.
            </p>
          </div>
        </div>
        <div className="w-100pc md-w-33pc p-10">
          <div className="block no-underline p-5 br-8 bg-indigo-lightest-10 hover-bg-indigo-lightest-20 hover-scale-up-1 ease-300">
            <div className="inline-block bg-indigo indigo-lightest br-3 px-4 py-1 mb-10 fs-s4 uppercase">
              smarthumster studio
            </div>
            <img className="w-100pc" src={Tree} alt="tree" />
            <p className="fw-500 white fs-m3 mt-3">
              Расти и развивайся в сфере криптовалюты, занимаясь нетривиальным нахождением на бирже.
              Расширяй свою область влияния.
            </p>
          </div>
        </div>
        <div className="w-100pc md-w-33pc p-10">
          <div className="block no-underline p-5 br-8 bg-indigo-lightest-10 hover-bg-indigo-lightest-20 hover-scale-up-1 ease-300">
            <div className="inline-block bg-indigo indigo-lightest br-3 px-4 py-1 mb-10 fs-s4 uppercase">
              smarthumster studio
            </div>
            <img className="w-100pc" src={Pencil} alt="pencil" />
            <p className="fw-500 white fs-m3 mt-3">
              Спрашивай, интересуйся, обговаривай, предлагай идеи и участвуй в проектах вместе с
              нами , чтобы стать больше, чем просто комьюнити.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
