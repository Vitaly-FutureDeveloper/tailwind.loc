import React from "react";
import iconVK from "./../../../../../assets/icons/VK.svg"
import iconEuroCar from "./../../../../../assets/icons/icon-euroCar.svg"

export const TopBlock: React.FC = () => {


  const IconFacebook: React.FC = () => {
    return <svg width="9" height="22" viewBox="0 0 9 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.35712 4.34397H9V1.11291C8.71689 1.06899 7.74194 0.970032 6.60669 0.970032C4.23728 0.970032 2.61455 2.65224 2.61455 5.74413V8.58997H0V12.202H2.61455V21.2899H5.8197V12.2026H8.32832L8.72673 8.5905H5.81923V6.10238C5.8197 5.05887 6.06859 4.34397 7.35712 4.34397Z"
        fill="white"/>
    </svg>
  };


  return (
    <div className="hidden lg:flex items-center justify-end">

      <div>
        <img src={iconEuroCar} alt=""/>
      </div>

      <div className="ml-[41%] mr-4 flex">
        <div className="m-2">
          <IconFacebook/>
        </div>

        <div className="flex items-center m-2">
          <img src={iconVK} alt=""/>
        </div>
      </div>

    </div>
  );
};

export default TopBlock;