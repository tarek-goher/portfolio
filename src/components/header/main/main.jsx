import React, { useState } from "react";
import "./main.css";
import { motion, AnimatePresence } from "framer-motion";
const myproject = [
  {
    category: ["react", ],
    link: "/src/assets/imge-1.png",
    title: "crude /Material UI",
    suptitle: "The link leads to an interactive Dashboard built with React and TypeScript, featuring a clean design for easy data organization and system management tools",
    linkproject: "https://tarek-goher.github.io/Dashboard/",
    linkgithub: "https://github.com/tarek-goher/Dashboard.git",
    more:"https://github.com/tarek-goher/Dashboard.git",
  },
  {
    category: ["html", "css", "java"],
    link: "/src/assets/imge-2.png",
    title: "crude",
    suptitle:"A Product Management System using HTML, CSS, and JavaScript for managing products and calculating total price with taxes, ads, and discounts.",
    linkproject: "https://tarek-goher.github.io/CRUDS/",
    linkgithub: "https://github.com/tarek-goher/CRUDS",
    more:"https://github.com/tarek-goher/CRUDS",
  },
  {
    category: ["react"],
    link: "/src/assets/imge-9.png",
    title: "E-commerce",
    suptitle: "An E-commerce website built with React, featuring a modern, responsive design with hover effects and easy navigation for browsing and adding items to the cart.",
    linkproject: "https://tarek-goher.github.io/E-commerce/",
    linkgithub: "https://github.com/tarek-goher/E-commerce.git",
    more:"https://github.com/tarek-goher/E-commerce.git",
  },
  {
    category: ["html", "css", "java"],
    link: "/src/assets/imge-3.png",
    title: "Animation-dark-mood",
    suptitle: "A simple website with a dark theme, dynamic background, and animated elements like stars and the moon, built with HTML, CSS, and JavaScript,ٍ",
    linkproject: "https://tarek-goher.github.io/Animation-dark-mood/",
    linkgithub: "https://github.com/tarek-goher/Animation-dark-mood",
    more:"https://github.com/tarek-goher/Animation-dark-mood",
  },
  {
    category: ["html", "css", ],
    link: "/src/assets/imge-4.png",
    title: "Website Design /Bootstrap",
    suptitle: " The website Design uses HTML, CSS, and Bootstrap for a responsive design, ensuring smooth content layout across devices. ",
    linkproject: "https://tarek-goher.github.io/Website-Design/",
    linkgithub: "https://github.com/tarek-goher/Website-Design",
    more:"https://github.com/tarek-goher/Website-Design",
  },
  {
    category: ["html", "css"],
    link: "/src/assets/imge-5.png",
    title: "YouTube Design/Bootstrap",
    suptitle: " The page mimics YouTube with HTML, CSS, and Bootstrap, featuring thumbnails, a navigation bar, and a responsive layout.",
    linkproject: "https://tarek-goher.github.io/YouTube-Design/",
    linkgithub: "https://github.com/tarek-goher/YouTube-Design.git",
    more:"https://github.com/tarek-goher/YouTube-Design.git",
  },
  {
    category: ["Component"],
    link: "/src/assets/imge-6.png",
    title: "Component/Material UI",
    suptitle: "A Material UI table displaying programming languages with images, hover effects, and animations for a dynamic, engaging experience.",
    linkproject: "https://tarek-goher.github.io/Programming-Languages/",
    linkgithub: "https://github.com/tarek-goher/Programming-Languages.git",
    more:"https://github.com/tarek-goher/Programming-Languages.git",
  },
  {
    category: ["Component"],
    link: "/src/assets/imge-7.png",
    title: "crude",
    suptitle: " Nav / Header  Responsive to all screens and simple animations",
    linkproject: "https://tarek-goher.github.io/components--HealthCareBanner/",
    linkgithub: "https://github.com/tarek-goher/components--HealthCareBanner.git",
    more:"https://github.com/tarek-goher/components--HealthCareBanner.git",

  },
  {
    category: ["html", "css", "java"],
    link: "/src/assets/imge-8.png",
    title: "project-Travel",
    suptitle: "Responsive design for all screens and simple animations",
    linkproject: "https://tarek-goher.github.io/project-Travel/",
    linkgithub: "https://github.com/tarek-goher/project-Travel.git",
    more:"https://github.com/tarek-goher/project-Travel.git",

  },

];
export default function Main() {
  const [active, setactive] = useState("all");
  const [arr, setarr] = useState(myproject);

  const click = (mycategory) => {
    setactive(mycategory);
    const newreact = myproject.filter((item) => {
      const fram = item.category.filter((myitem) => {
        return myitem === mycategory;
      });
      return fram[0] === mycategory;
    });
    setarr(newreact);
  };
  return (
    <main className="flex">
      <section className="left-section  flex">
        <button
          onClick={() => {
            setactive("all");
            setarr(myproject);
          }}
          className={active === "all" ? "active" : null}
        >
          All projects
        </button>
        <button
          onClick={() => {
            click("css");
          }}
          className={active === "css" ? "active" : null}
        >
          HTML & CSS
        </button>
        <button
          onClick={() => {
            click("java");
          }}
          className={active === "java" ? "active" : null}
        >
          JavaScript
        </button>
        <button
          onClick={() => {
            click("react");
          }}
          className={active === "react" ? "active" : null}
        >
          React & MUI
        </button>
      </section>
      <section className="right-section flex">
        <AnimatePresence>
          {arr.map((index, link) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ damping: 30, type: "spring", stiffness: 50 }}
                key={index}
                className="card"
                style={{ width: "300px" }}
              >
                <img
                  style={{ borderRadius: "5PX" }}
                  height={200}
                  width={"100%"}
                  src={index.link}
                  alt=""
                />
                <div style={{ width: "266px" }} className="box">
                  <h1 className="title">{index.title}</h1>
                  <p
                    className="sup-title"
                    style={{ height: "4rem" }}
                  >
                    {index.suptitle}
                  </p>
                  <div className="flex icons">
                    <div style={{ gap: "1rem" }} className="flex">
                      <a
                        href={index.linkproject}
                        className="icon-link icon  link-project"
                      >
                        {" "}
                      </a>
                      <a
                        href={index.linkgithub}
                        className="icon-github icon link-github "
                      />
                    </div>
                    <a className="links flex" href={index.more}>
                      More
                      <span
                        style={{ alignSelf: "end" }}
                        className="icon-arrow-right"
                      ></span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
}
