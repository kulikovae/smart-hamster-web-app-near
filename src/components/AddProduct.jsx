import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const AddProduct = ({ save, products }) => {
  const [name, setName] = React.useState('');
  const [price, setPrice] = React.useState(0);
  const [option1, setOption1] = React.useState('');
  const [isActiveOption1, setIsActiveOption1] = React.useState(false);
  const [option2, setOption2] = React.useState('');
  const [isActiveOption2, setIsActiveOption2] = React.useState(false);
  const [option3, setOption3] = React.useState('');
  const [isActiveOption3, setIsActiveOption3] = React.useState(false);
  const [option4, setOption4] = React.useState('');
  const [isActiveOption4, setIsActiveOption4] = React.useState(false);
  const [option5, setOption5] = React.useState('');
  const [isActiveOption5, setIsActiveOption5] = React.useState(false);

  const isFormFilled = () => name && price;

  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangePrice = (event) => {
    setPrice(event.target.value);
  };

  const onChangeOption1 = (event) => {
    setOption1(event.target.value);
  };

  const onChangeActiveOption1 = (event) => {
    setIsActiveOption1(event.target.checked);
  };

  const onChangeOption2 = (event) => {
    setOption2(event.target.value);
  };

  const onChangeActiveOption2 = (event) => {
    setIsActiveOption2(event.target.checked);
  };

  const onChangeOption3 = (event) => {
    setOption3(event.target.value);
  };

  const onChangeActiveOption3 = (event) => {
    setIsActiveOption3(event.target.checked);
  };

  const onChangeOption4 = (event) => {
    setOption4(event.target.value);
  };

  const onChangeActiveOption4 = (event) => {
    setIsActiveOption4(event.target.checked);
  };

  const onChangeOption5 = (event) => {
    setOption5(event.target.value);
  };

  const onChangeActiveOption5 = (event) => {
    setIsActiveOption5(event.target.checked);
  };

  const onClickSave = async () => {
    const options = [];

    if (option1) {
      options.push({ optionName: option1, active: isActiveOption1 });
    }
    if (option2) {
      options.push({ optionName: option2, active: isActiveOption2 });
    }
    if (option3) {
      options.push({ optionName: option3, active: isActiveOption3 });
    }
    if (option4) {
      options.push({ optionName: option4, active: isActiveOption4 });
    }
    if (option5) {
      options.push({ optionName: option5, active: isActiveOption5 });
    }

    const isWhite = products.length > 1 ? !products[products.length - 1].isWhite : true;
    const product = { title: name, price, options, isWhite };
    await save(product);
  };

  return (
    <>
      <Button
        onClick={handleShow}
        variant="dark"
        className="rounded-pill px-3"
        style={{ width: '50px', height: '50px' }}
      >
        <i className="bi bi-plus" style={{ width: '100px', height: '100px' }}></i>
      </Button>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Добавление нового куруса</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <div className="col-md-12 text-container">
              <input
                type="text"
                className="form-control input-md"
                placeholder="Название курса"
                onChange={(event) => onChangeName(event)}
              />
            </div>
            <div className="col-md-12 text-container">
              <input
                type="text"
                className="form-control input-md"
                placeholder="Цена курса"
                onChange={(event) => onChangePrice(event)}
              />
            </div>
            <div className="col-md-12 text-container">
              <input
                type="text"
                className="form-control input-md"
                placeholder="Опция курса (активна/нет)"
                onChange={(event) => onChangeOption1(event)}
              />
              <span id="btn" className="check">
                <input type="checkbox" onChange={(event) => onChangeActiveOption1(event)} />
              </span>
            </div>
            <div className="col-md-12 text-container">
              <input
                type="text"
                className="form-control input-md"
                placeholder="Опция курса (активна/нет)"
                onChange={(event) => onChangeOption2(event)}
              />
              <span id="btn" className="check">
                <input type="checkbox" onChange={(event) => onChangeActiveOption2(event)} />
              </span>
            </div>
            <div className="col-md-12 text-container">
              <input
                type="text"
                className="form-control input-md"
                placeholder="Опция курса (активна/нет)"
                onChange={(event) => onChangeOption3(event)}
              />
              <span id="btn" className="check">
                <input type="checkbox" onChange={(event) => onChangeActiveOption3(event)} />
              </span>
            </div>
            <div className="col-md-12 text-container">
              <input
                type="text"
                className="form-control input-md"
                placeholder="Опция курса (активна/нет)"
                onChange={(event) => onChangeOption4(event)}
              />
              <span id="btn" className="check">
                <input type="checkbox" onChange={(event) => onChangeActiveOption4(event)} />
              </span>
            </div>
            <div className="col-md-12 text-container">
              <input
                type="text"
                className="form-control input-md"
                placeholder="Опция курса (активна/нет)"
                onChange={(event) => onChangeOption5(event)}
              />
              <span id="btn" className="check">
                <input type="checkbox" onChange={(event) => onChangeActiveOption5(event)} />
              </span>
            </div>
          </Modal.Body>
        </Form>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="dark"
            disabled={!isFormFilled()}
            onClick={() => {
              onClickSave();
              console.log('product');
            }}
          >
            Save product
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddProduct;
