import React from 'react';
import { User } from 'react-feather';

const Team = () => {
  return (
    <div id="team" className="p-10 md-p-l5">
      <h1 className="white fs-l3 lh-2 md-fs-xl1 md-lh-1 fw-900 text-center">НАША КОМАНДА</h1>
      <div className="flex flex-column md-flex-row mx-auto">
        <div className="w-100pc md-w-25pc">
          <div className="br-8 p-5 m-5">
            <div className="flex center justify-center items-center bg-indigo-lightest-10 white w-l10 h-l10 br-round mb-5 bg-no-repeat bg-c bg-cover programmer"></div>
            <h4 className="white fw-600 fs-m3 mb-5 text-center">Программист</h4>
            <div className="indigo-lightest fw-600 fs-m1 lh-3 opacity-50 text-center">
              Специалист, который занимается всеми техническими вопросами.
            </div>
          </div>
        </div>
        <div className="w-100pc md-w-25pc">
          <div className="br-8 p-5 m-5">
            <div className="flex center justify-center items-center bg-indigo-lightest-10 white w-l10 h-l10 br-round mb-5 bg-no-repeat bg-c bg-cover watcher"></div>
            <h4 className="white fw-600 fs-m3 mb-5 text-center">Мониторинг проектов</h4>
            <div className="indigo-lightest fw-600 fs-m1 opacity-50 text-center">
              Специалист, занимающийся мониторингом уже поставленных нод, который своевременно
              оповестит тебя про обновление ноды.
            </div>
          </div>
        </div>
        <div className="w-100pc md-w-25pc">
          <div className="br-8 p-5 m-5">
            <div className="flex center justify-center items-center bg-indigo-lightest-10 white w-l10 h-l10 br-round mb-5 bg-no-repeat bg-c bg-cover analityc"></div>
            <h4 className="white fw-600 fs-m3 mb-5 text-center">Аналитик</h4>
            <div className="indigo-lightest fw-600 fs-m1 lh-3 opacity-50 text-center">
              Человек, который ищет топовые проекты на ранних стадиях с возможностью хороших наград.
            </div>
          </div>
        </div>
        <div className="w-100pc md-w-25pc">
          <div className="br-8 p-5 m-5">
            <div className="flex center justify-center items-center bg-indigo-lightest-10 white w-l10 h-l10 br-round mb-5">
              <User size={50} />
            </div>
            <h4 className="white fw-600 fs-m3 mb-5 text-center">Ты</h4>
            <div className="indigo-lightest fw-600 fs-m1 opacity-50 text-center">
              Ты - часть нашей команды в закрытом телеграм сообществе, сможешь задать любые вопросы
              в чат и развиваться вместе с нами.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
