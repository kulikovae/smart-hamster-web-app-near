import React from 'react';
import { Check, X } from 'react-feather';
import AddProduct from './AddProduct';
import { utils } from 'near-api-js';
import { getProductList, createProduct, buyProduct } from '../utils/marketplace';

const BuyCourse = ({ id }) => {
  const [products, setProducts] = React.useState([]);

  const getProducts = React.useCallback(async () => {
    try {
      let products = await getProductList();
      setProducts(products);
    } catch (error) {
      console.log({ error });
    }
  }, []);

  const addProduct = async (data) => {
    try {
      createProduct(data).then((resp) => {
        getProducts();
      });
    } catch (error) {
      console.log({ error });
    }
  };

  React.useEffect(() => {
    getProducts();
  }, [getProducts]);

  const onClickBuy = async (id, price) => {
    console.log(id + '  ' + price);
    try {
      await buyProduct({
        id,
        price,
      }).then((resp) => getProducts());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div id={id}>
        <div className="p-10 flex flex-wrap">
          <div className="w-100pc md-w-25pc">
            <div className="p-5">
              <h4 className="white fw-800 fs-l3 mb-5">Курсы</h4>
              <div className="indigo-lightest fw-600 fs-m1 opacity-50">
                Выбирай подходящий тебе тариф и скорей присоединяйся к нам!
              </div>
            </div>
            <div className="p-5">
              <p className="white fw-800 fs-m2 mb-5">Добавляй свой собственный курс</p>
              <AddProduct save={addProduct} products={products} />
            </div>
          </div>
          {products.map((obj) => (
            <div key={obj.id} className="w-100pc md-w-25pc">
              <div
                className={`m-3 p-5 br-8 ${
                  obj.isWhite ? 'bg-white' : 'bg-indigo-lightest-10'
                } overflow-hidden`}
              >
                <div className="p-3">
                  <h3 className="indigo">{obj.title}</h3>
                  <div className={`${obj.isWhite ? 'black' : 'white'} flex items-center`}>
                    NEAR
                    <span className="fs-l5 lh-1">{utils.format.formatNearAmount(obj.price)}</span>
                  </div>
                </div>
                <div
                  className={`p-3 ${obj.isWhite ? 'black' : 'indigo-lightest'} fw-400 fs-s1 lh-5`}
                >
                  {obj.options.map((option, i) =>
                    option.active ? (
                      <div key={i}>
                        <Check className="h-3 indigo" strokeWidth="4" />
                        <span className="opacity-50">{option.optionName}</span>
                      </div>
                    ) : (
                      <div key={i}>
                        <X className="h-3 indigo" strokeWidth="4" />
                        <span className="opacity-50">{option.optionName}</span>
                      </div>
                    ),
                  )}
                </div>
                <div className="p-3">
                  <button
                    className="button full bg-black white hover-opacity-100 hover-scale-up-1 ease-300"
                    onClick={() => onClickBuy(obj.id, obj.price)}
                  >
                    Купить
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BuyCourse;
