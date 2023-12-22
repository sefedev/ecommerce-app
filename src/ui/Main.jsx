const Main = () => {
  let element = 1;
  for (let i = 0; i < 5; i++) {
    element = element + i;
    console.log(i);
  }
  return (
    <main className="lg:flex lg:mt-16">
      <div className="lg:w-1/2 lg:flex lg:flex-col items-center gap-4">
        <div className="relative grid place-items-center">
          <img
            src="./assets/image-product-1.jpg"
            alt="product"
            className="lg:w-[63%] lg:rounded-md"
          />
          <div className="absolute flex lg:hidden justify-between inset-y-[45%] h-6 w-full px-2">
            <span className="bg-white flex w-8 h-8 justify-center items-center rounded-full">
              <img
                src="./assets/icon-previous.svg"
                alt="previous"
                className="w-2"
              />
            </span>
            <span className="bg-white flex w-8 h-8 justify-center items-center rounded-full">
              <img src="./assets/icon-next.svg" alt="next" className="w-2" />
            </span>
          </div>
        </div>
        <div className="hidden lg:flex gap-4">
          {(() => {
            const arr = [];
            const count = 4;
            for (let i = 1; i <= count; i++) {
              arr.push(
                <img
                  src={`./assets/image-product-${i}-thumbnail.jpg`}
                  alt="product-thumbnail"
                  className="rounded-md w-20"
                />
              );
            }
            console.log(arr);
            return arr;
          })()}
        </div>
      </div>

      <div className="lg:w-1/2 lg:pr-16 px-4 lg: flex flex-col justify-center">
        <h2 className="text-Orange tracking-widest font-semibold mt-4">
          SNEAKER COMPANY
        </h2>
        <h1 className="text-3xl font-semibold my-4">
          Fall Limited Edition
          <br /> Sneakers
        </h1>
        <p className="text-gray-500 my-4">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they will withstand everything
          the weather can offer.
        </p>
        <div className="flex lg:block justify-between my-2">
          <div className="flex gap-4">
            <span className="text-xl font-semibold tracking-wide">$125.00</span>
            <span className="bg-PaleOrange text-Orange p-1 text-xs font-semibold rounded-sm">
              50%
            </span>
          </div>
          <s className="text-sm text-gray-400 font-semibold mt-2 lg:mt-2">
            $250.00
          </s>
        </div>

        <div className="lg:flex gap-4 mt-4">
          <div className="flex justify-between items-center mb-4 lg:mb-0 bg-LightGrayishBlue rounded-md p-2 lg:w-[50%]">
            <img
              src="./assets/icon-minus.svg"
              alt="remove"
              role="button"
              className="cursor-pointer"
            />
            <span className="font-semibold">1</span>
            <img
              src="./assets/icon-plus.svg"
              alt="add"
              role="button"
              className="cursor-pointer"
            />
          </div>
          <button className="rounded-lg bg-Orange text-white flex justify-center gap-4 py-4 px-8 w-full">
            <svg
              width="22"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-white"
            >
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="#69707D"
                fillRule="nonzero"
              />
            </svg>
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
};

export default Main;
