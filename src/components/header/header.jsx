import React, { useEffect, useState } from "react";
import "./header.css";
const Header = () => {
  const [showModel, setshowModel] = useState(false);
  const [theme, settheme] = useState(
    localStorage.getItem("showmode") ?? "dark"
  );
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);
  return (
    <header className="">
      <button
        onClick={() => {
          setshowModel(true);
        }}
        className="menu icon-menu"
      />

      <div />
      <nav>
        <ul className="flex">
          <li>
            <a  href="">About</a>
          </li>
          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a  href="">Contact</a>
          </li>
        </ul>
      </nav>
      <button
        onClick={() => {
          localStorage.setItem("showmode", theme === "dark" ? "light" : "dark");

          settheme(localStorage.getItem("showmode"));
        }}
        className="mood"
      >
        {theme === "dark" ? (  <span className="icon-moon-o" />) : (<span className="icon-sun sun" />) }

      </button>

      {showModel && (
        <div className=" fixed">
          <ul className=" ">
            <li>
              <button
                className="icon-close"
                onClick={() => {
                  setshowModel(false);
                }}
              />
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Articles</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
