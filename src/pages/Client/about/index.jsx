import { useRef, useState } from "react";
import "../../../styles/client/navbar.css";

const About = () => {
  const [isActive, setIsActive] = useState(true);
  const inputRef = useRef();

  const handleClick = () => {
    setIsActive(!isActive);
    inputRef.current.focus();
  };

  return (
    <div className="bg-[#221E1F] pt-20">
      <div className="max-w-[1180px] mx-auto">
        <div className="flex flex-col gap-10 justify-center items-start border">
          <div className="flex gap-4">
            <img
              className="w-[50px]"
              src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Netflix_2015_N_logo.svg"
              alt=""
            />
            <p className="text-white text-4xl ">
              THE NETFLIX <br /> TECH BLOG
            </p>
          </div>
          <div className="flex justify-between w-full">
            <div className="navbar-search flex gap-2">
              <button className="text-white" onClick={handleClick}>
                Search
              </button>
              <input
                className={isActive ? "h" : "active"}
                ref={inputRef}
                type="text"
              />
            </div>
            <button className="text-gray-400 border border-gray-400 px-3 text-xs rounded-2xl">
              Follow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
