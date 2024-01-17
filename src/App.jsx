import { useState } from "react";
import Header from "./ui/Header";
import Main from "./ui/Main";

const App = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [selectedImage, setSelectedImage] = useState(1);

  const onSelectImage = (selected) => {
    setSelectedImage(selected);
  };

  return (
    <div className="relative lg:px-24">
      <div
        className={`absolute inset-0 z-50 flex-col items-center w-screen h-screen gap-4 py-4 overflow-hidden bg-black/70 ${
          showGallery ? "flex" : "hidden"
        }`}
      >
        <div className="flex justify-end w-full px-8">
          <img
            src={`./assets/icon-close.svg`}
            alt="close"
            className="cursor-pointer"
            onClick={() => setShowGallery(false)}
          />
        </div>
        <div className="flex-1 flex items-center h-[80%] ">
          <img
            src={`./assets/image-product-${selectedImage}.jpg`}
            alt="product"
            className="h-full"
          />
        </div>
      </div>
      <Header />
      <Main setShowGallery={setShowGallery} onSelectImage={onSelectImage} />
    </div>
  );
};

export default App;
