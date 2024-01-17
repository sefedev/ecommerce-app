import { useDispatch, useSelector } from "react-redux";
import { remove } from "../app/features/cartSlice";

export const Cart = ({ openCart }) => {
  const { product } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    dispatch(remove(id));
    console.log(product);
  };

  return (
    <div
      className={`${
        openCart ? "block" : "hidden"
      } absolute bg-white rounded-md duration-700 transition shadow-2xl lg:w-80 w-[95%] inset-x-2 h-[22rem] lg:min-h-64 lg:inset-y-20 lg:inset-x-[75%] inset-y-20 z-40 `}
    >
      <h3 className="p-4 font-semibold">Cart</h3>
      <hr />
      {product.length === 0 && (
        <div className="h-[18rem] grid place-items-center">
          Your cart is empty.
        </div>
      )}
      <div className="overflow-scroll h-[18rem] py-4">
        {product.map(({ productName, price, discount, quantity }, id) => (
          <div
            key={id}
            className="flex gap-4 p-2 transition duration-200 cursor-pointer hover:bg-gray-200"
          >
            <img
              src="./assets/image-product-1-thumbnail.jpg"
              alt="product"
              className="rounded-md size-10"
            />
            <div className="flex-1">
              <p>{productName}</p>
              <p>
                {price * (discount / 100)} x {quantity}{" "}
                <strong>${price * (discount / 100) * quantity}</strong>
              </p>
            </div>
            <button onClick={() => removeFromCart(id)} className="mr-4">
              <img src="./assets/icon-delete.svg" alt="Delete Item" />
            </button>
          </div>
        ))}
        {product.length > 0 && (
          <>
            <hr />
            <div className="flex justify-between p-4 text-xl font-bold">
              <span>Total</span>
              <span className="">
                $
                {product
                  .map(
                    (item) => item.price * (item.discount / 100) * item.quantity
                  )
                  .reduce((acc, val) => acc + val, 0)}
                .00
              </span>
            </div>
            <div className="grid px-4 my-2 place-items-center">
              <button className="w-full px-6 py-2 text-white rounded-md bg-Orange">
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
