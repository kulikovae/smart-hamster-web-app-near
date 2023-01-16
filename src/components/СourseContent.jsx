import React from 'react';
import Faq from 'react-faq-component';
import { courseContent } from '../assets/data';

const СourseContent = () => {
  return (
    <div className="p-10 md-p-l5">
      <h1 className="white fs-l3 lh-2 md-fs-l1 md-lh-1 fw-600 text-center">Что в нашем курсе</h1>
      <Faq
        data={courseContent}
        styles={{
          bgColor: 'transparent',
          titleTextColor: 'white',
          rowTitleColor: 'white',
          rowTitleTextSize: 'large',
          rowContentColor: 'white',
          rowContentTextSize: '16px',
          rowContentPaddingTop: '10px',
          rowContentPaddingBottom: '10px',
          rowContentPaddingLeft: '50px',
          rowContentPaddingRight: '150px',
          arrowColor: '#5A4FCF',
        }}
        config={{
          animate: true,
          expandIcon: '+',
          collapseIcon: '-',
        }}
      />
      <div className="mt-5">
        <span className="roboto fw-500 text-fill-indigo"> ПОДДЕРЖКА НОД | ПОМОЩЬ В УСТАНОВКЕ</span>
      </div>
    </div>
  );
};

export default СourseContent;
