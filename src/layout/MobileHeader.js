import Link from "next/link";
import { useState } from "react";
import { Blog, Courses, Home, Pages } from "./Menu";

const MobileHeader = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  return (
    <ul className="navigation clearfix d-block d-lg-none mobile-header">
        <li>
        <Link href="/about">
          <a>Home</a>
        </Link>
     
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>Past Papers</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>Topical Past Papers</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>MCQ Past Papers</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>Pricing</a>
        </Link>
      </li>
    </ul>
  );
};
export default MobileHeader;
