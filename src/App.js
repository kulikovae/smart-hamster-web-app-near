import React from 'react';
import NavBar from './components/NavBar';
import WelcomeBlock from './components/WelcomeBlock';
import AboutCourceBlock from './components/AboutCourceBlock';
import PhotoBaner from './components/PhotoBaner';
import BuyCourse from './components/BuyCourse';
import Caroucel from './components/Caroucel';
import Footer from './components/Footer';
import СourseContent from './components/СourseContent';
import ForWho from './components/ForWho';
import Card from './components/Card';
import Team from './components/Team';
import ContactMe from './components/ContactMe';
import CaseCard from './components/CaseCard';
import Login from './pages/Login';
import ThanksBlock from './components/ThanksBlock';

import { getAccount } from './utils/near';

import { CSSTransition } from 'react-transition-group';

function App() {
  const [showThanksMessage, setShowThanksMessage] = React.useState(false);
  const [tanksTitle, setThanksTitle] = React.useState('');
  const [thanksContent, setThanksContent] = React.useState('');

  const nodeRef = React.useRef(null);
  const accountId = getAccount().accountId;

  return (
    <>
      {!accountId ? (
        <Login />
      ) : (
        <>
          <NavBar />
          <WelcomeBlock />
          <AboutCourceBlock id="about-course" />
          <СourseContent />
          <PhotoBaner />
          <BuyCourse id="buy" name="buy" />
          <Caroucel />
          <ForWho />
          <Card />
          <Team />
          <CaseCard />
          <ContactMe
            showThanksMessage={setShowThanksMessage}
            thanksTitle={setThanksTitle}
            thanksContent={setThanksContent}
          />
          <Footer />
          <CSSTransition
            in={showThanksMessage}
            nodeRef={nodeRef}
            timeout={500}
            classNames="thanks"
            unmountOnExit
          >
            <ThanksBlock
              refer={nodeRef}
              closeWindow={setShowThanksMessage}
              title={tanksTitle}
              content={thanksContent}
            />
          </CSSTransition>
        </>
      )}
    </>
  );
}

export default App;
