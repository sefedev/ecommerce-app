import { useState } from "react";
import { Cart } from "../components/Cart";
import { navigation } from "../utils/constant";

const Header = () => {
  const [openCart, setOpenCart] = useState(false);

  return (
    <header className="relative flex items-center gap-12 p-4 lg:py-8">
      <div className="absolute inset-0 hidden w-full border-b lg:block -z-30 border-LightGrayishBlue"></div>
      <div className="flex items-center gap-4">
        <img src="./assets/icon-menu.svg" alt="Menu" className="lg:hidden" />
        <img
          src="./assets/logo.svg"
          alt="Menu"
          role="button"
          className="cursor-pointer"
        />
      </div>
      <nav className="flex items-center justify-end flex-1 ">
        <ul className="items-center flex-1 hidden gap-8 text-gray-600 lg:flex">
          {navigation.map((nav, id) => (
            <li key={id} className="">
              <a href="#" className="hover:text-black">
                {nav}
              </a>
            </li>
          ))}
        </ul>

        <img
          src="./assets/icon-cart.svg"
          alt="cart"
          className="mr-8 hover:stroke-black"
          role="button"
          onClick={() => setOpenCart(!openCart)}
        />

        <img
          src="./assets/image-avatar.png"
          alt="avatar"
          className="w-8 duration-150 border-2 rounded-full cursor-pointer hover:border-Orange"
        />
      </nav>
      <Cart openCart={openCart} />
    </header>
  );
};

export default Header;
