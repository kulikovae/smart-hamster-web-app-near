import React from 'react';
import { sendContactMeMessageToTelegram } from '../utils/telegramNotification';

const thanksMessage = {
  title: 'Спасибо за запрос! Твоя заявка принята!',
  content: 'Совсем скоро мы свяжемся с тобой, чтобы обсудить все вопросы!',
};

const ContactMe = ({ showThanksMessage, thanksTitle, thanksContent }) => {
  const [name, setName] = React.useState('');
  const [question, setQuestion] = React.useState('');

  const onChangeName = (evant) => {
    setName(evant.target.value);
  };

  const onChangeQuestion = (evant) => {
    setQuestion(evant.target.value);
  };

  const onClickContactMe = () => {
    sendContactMeMessageToTelegram(name, question);
    thanksTitle(thanksMessage.title);
    thanksContent(thanksMessage.content);
    showThanksMessage(true);
  };

  return (
    <>
      <div className="p-10 md-p-l5">
        <div className="br-8 bg-indigo-lightest-10 p-5 md-p-l5 flex flex-wrap md-justify-between md-items-center">
          <div className="w-100pc md-w-33pc">
            <h2 className="white fs-l2 fw-800">Остались вопросы?</h2>
            <p className="fw-600 indigo-lightest opacity-40">
              Напиши нам и мы свяжемся с тобой, что бы все обсудить
            </p>
          </div>
          <div className="w-100pc md-w-50pc">
            <div className="block my-5 ">
              <p className="fw-200 white fs-s1">
                Контакты для обратной связи (telegram, email или номер телефона)
                <br />
                <input
                  type="text"
                  id="writeMeOnEmail"
                  onChange={(event) => onChangeName(event)}
                  className="mt-5 input-lg w-100pc flex-grow-1 bw-0 fw-200 bg-indigo-lightest-10 white ph-indigo-lightest focus-white opacity-80 fs-s1"
                />
              </p>
              <p className="fw-200 white fs-s1 mt-5">
                Твой вопрос
                <br />
                <textarea
                  name="comment"
                  className="mt-5 textarea-lg w-100pc flex-grow-1 bw-0 fw-200 bg-indigo-lightest-10 white ph-indigo-lightest focus-white opacity-80 fs-s1 resize-none"
                  rows="3"
                  onChange={(event) => onChangeQuestion(event)}
                ></textarea>
              </p>
              <button
                id="sendEmail"
                className={`button-lg w-70pc bg-indigo md-w-30pc indigo-lightest fw-300 fs-s3 mt-5 ${
                  name.length === 0 ? 'disabled' : ''
                }`}
                onClick={() => onClickContactMe()}
              >
                Отправить
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
