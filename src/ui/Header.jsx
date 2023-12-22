import { navigation } from "../utils/constant";

const Header = () => {
  return (
    <header className="flex items-center gap-8 p-4 lg:py-8 lg:border-b lg:border-LightGrayishBlue">
      <div className="flex items-center gap-4">
        <img src="./assets/icon-menu.svg" alt="Menu" className="lg:hidden" />
        <img src="./assets/logo.svg" alt="Menu" />
      </div>
      <nav className="flex items-center flex-1 justify-end">
        <ul className="hidden lg:flex items-center flex-1 gap-8 text-gray-600">
          {navigation.map((nav, id) => (
            <li key={id}>{nav}</li>
          ))}
        </ul>

        <img src="./assets/icon-cart.svg" alt="cart" className="mr-8" />
        <img src="./assets/image-avatar.png" alt="avatar" className="w-8" />
      </nav>
    </header>
  );
};

export default Header;
