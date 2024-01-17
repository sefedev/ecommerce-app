import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { add } from "../app/features/cartSlice";

const Main = ({ setShowGallery, onSelectImage }) => {
  const [selectedImage, setSelectedImage] = useState(1);
  const [count, setCount] = useState(1);

  const { product: _product } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const product = {
    productName: "Fall Limited Edition Sneakers",
    quantity: count,
    price: 250,
    discount: 50,
  };
  const handlePrevious = () => {
    if (selectedImage === 1) return null;
    setSelectedImage((prevState) => {
      return prevState - 1;
    });
  };

  const handleNext = () => {
    if (selectedImage === 4) return null;
    setSelectedImage((prevState) => {
      return prevState + 1;
    });
  };

  const addToCart = () => {
    dispatch(add(product));
    console.log(_product);
  };

  return (
    <main className="relative lg:flex lg:mt-16">
      <div className="items-center gap-4 lg:w-1/2 lg:flex lg:flex-col">
        <div className="relative grid place-items-center">
          <img
            src={`./assets/image-product-${selectedImage}.jpg`}
            alt="product"
            className="lg:w-[63%] lg:rounded-md cursor-pointer"
            onClick={() => {
              setShowGallery(true);
              onSelectImage(selectedImage);
            }}
          />

          <div className="absolute flex lg:hidden justify-between inset-y-[45%] h-6 w-full px-2">
            <button
              onClick={handlePrevious}
              className="flex items-center justify-center w-8 h-8 bg-white rounded-full"
            >
              <img
                src="./assets/icon-previous.svg"
                alt="previous"
                className="w-2"
              />
            </button>
            <button
              onClick={handleNext}
              className="flex items-center justify-center w-8 h-8 bg-white rounded-full"
            >
              <img src="./assets/icon-next.svg" alt="next" className="w-2" />
            </button>
          </div>
        </div>
        <div className="hidden gap-4 lg:flex">
          {[1, 2, 3, 4].map((img, id) => (
            <button
              key={id}
              className="transition duration-200 bg-center bg-cover rounded-md hover:opacity-60 focus:opacity-40 size-20 focus:border-orange-500 focus:border-2"
              style={{
                backgroundImage: `url(./assets/image-product-${img}-thumbnail.jpg)`,
              }}
              onClick={() => setSelectedImage(img)}
            ></button>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-center px-4 lg:w-1/2 lg:pr-16 lg:">
        <h2 className="mt-4 font-semibold tracking-widest text-Orange">
          SNEAKER COMPANY
        </h2>
        <h1 className="my-4 text-3xl font-semibold">{product.productName}</h1>
        <p className="my-4 text-gray-500">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they will withstand everything
          the weather can offer.
        </p>
        <div className="flex justify-between my-2 lg:block">
          <div className="flex gap-4">
            <span className="text-xl font-semibold tracking-wide">
              ${product.price * (product.discount / 100)}.00
            </span>
            <span className="p-1 text-xs font-semibold rounded-sm bg-PaleOrange text-Orange">
              {product.discount}%
            </span>
          </div>
          <s className="mt-2 text-sm font-semibold text-gray-400 lg:mt-2">
            ${product.price}.00
          </s>
        </div>

        <div className="gap-4 mt-4 mb-8 lg:flex lg:mb-0">
          <div className="flex justify-between items-center mb-4 lg:mb-0 bg-LightGrayishBlue rounded-md p-2 lg:w-[50%]">
            <button
              className="w-3 h-1 bg-center bg-cover"
              style={{ backgroundImage: "url(./assets/icon-minus.svg)" }}
              onClick={() => {
                if (count === 1) setCount(1);
                else {
                  setCount(count - 1);
                }
              }}
            ></button>
            <span className="font-semibold">{count}</span>

            <button
              className="bg-center bg-cover size-3"
              style={{ backgroundImage: "url(./assets/icon-plus.svg)" }}
              onClick={() => {
                setCount(count + 1);
              }}
            ></button>
          </div>
          <button
            className="flex justify-center w-full gap-4 px-8 py-4 font-semibold text-white transition duration-150 rounded-lg shadow-2xl bg-Orange shadow-PaleOrange hover:bg-orange-300"
            onClick={addToCart}
          >
            <img src="./assets/icon-cart.svg" alt="Cart" className="" />
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
};

export default Main;
