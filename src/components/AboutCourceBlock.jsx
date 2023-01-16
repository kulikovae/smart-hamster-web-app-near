import React from 'react';
import { aboutCourse } from '../assets/data';

const AboutCourceBlock = ({ id }) => {
  return (
    <>
      <div id={id} className="p-10 md-py-10">
        <div className="w-100pc md-w-70pc mx-auto py-10">
          <h2 className="white fs-l2 md-fs-xl1 fw-700 lh-3 ow">
            Действие является основополагающим ключом к{' '}
            <span className="linear-indigo bg-no-repeat bg-b bg-100-10 hover-bg-100-100 ease-100">
              успеху
            </span>
            . Спеши присоединиться к нашей команде и ты получишь{' '}
          </h2>
        </div>
      </div>
      <div className="py-l10">
        <div className="flex flex-column md-flex-row md-w-80pc mx-auto">
          {aboutCourse.map((obj) => (
            <div key={obj.title} className="w-90pc md-w-50pc center">
              <div className="br-8 p-5 m-5 bg-indigo-lightest-10 pointer hover-scale-up-1 ease-300">
                <div className="inline-block bg-indigo indigo-lightest br-3 px-4 py-1 mb-10 fs-s4 uppercase">
                  smarthumster studio
                </div>
                <div className="indigo-lightest fw-600 fs-m1">
                  {obj.title}
                  <br />
                  <span className="opacity-30">{obj.text}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutCourceBlock;
