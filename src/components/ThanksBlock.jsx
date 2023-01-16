const ThanksBlock = ({ refer, closeWindow, title, content }) => {
  setTimeout(() => closeWindow(false), 3000);

  return (
    <div className="p-10 md-p-l5">
      <div className="thanks1-popup bg-black br-8 p-5 md-p-m5 flex flex-wrap md-justify-between md-items-center show">
        <div className="box br-8 bg-black w-70pc md-w-70pc">
          <div ref={refer} className="center br-8 w-60pc md-w-60pc">
            <div className="white br-8" onClick={() => closeWindow(false)}>
              <p className="closec">&times;</p>
            </div>
            <h1 className="white fs-m4 fw-800 br-8 text-center">{title}</h1>
            <p className="fw-600 indigo-lightest opacity-40 br-8 text-center">{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThanksBlock;
