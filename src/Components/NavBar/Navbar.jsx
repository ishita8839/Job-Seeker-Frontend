import React, { useEffect, useState } from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenu, setIsMenu] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", checkMobile);

    checkMobile();

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  console.log(isMobile);
  return (
    <div className="navbar flex justify-between items-center px-5 py-4 z-50">
      <div className="logoDiv">
        <h1 className="logo text-[25px] text-blueColor">
          <strong>Job</strong>Search
        </h1>
      </div>

      {isMobile ? (
        <div>
          <Menu onClick={() => setIsMenu(!isMenu)} />
        </div>
      ) : (
        <div className="menu flex gap-8">
          <li className="menuList text-[#6f6f6f] hover:text-blueColor">Jobs</li>
          <li className="menuList text-[#6f6f6f] hover:text-blueColor">
            Companies
          </li>
          <li className="menuList text-[#6f6f6f] hover:text-blueColor">
            About
          </li>
          <li className="menuList text-[#6f6f6f] hover:text-blueColor">
            Contact
          </li>
          <li className="menuList text-[#6f6f6f] hover:text-blueColor">Blog</li>
          <li className="menuList text-[#6f6f6f] hover:text-blueColor">
            Login
          </li>
          <li className="menuList text-[#6f6f6f] hover:text-blueColor">
            Register
          </li>
        </div>
      )}

      {isMenu && (
        <div className="absolute top-20 left-0 bg-white w-full shadow-md p-2">
          <div className="menu flex gap-8 flex-col">
            <li className="menuList text-[#6f6f6f] hover:text-blueColor">
              Jobs
            </li>
            <li className="menuList text-[#6f6f6f] hover:text-blueColor">
              Companies
            </li>
            <li className="menuList text-[#6f6f6f] hover:text-blueColor">
              About
            </li>
            <li className="menuList text-[#6f6f6f] hover:text-blueColor">
              Contact
            </li>
            <li className="menuList text-[#6f6f6f] hover:text-blueColor">
              Blog
            </li>
            <li className="menuList text-[#6f6f6f] hover:text-blueColor">
              Login
            </li>
            <li className="menuList text-[#6f6f6f] hover:text-blueColor">
              Register
            </li>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
