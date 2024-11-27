import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
function ExploreMenu({ category, setCategory }) {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
        corporis id a quisquam voluptates nesciunt dicta enim.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((menu, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === menu.menu_name ? "All" : menu.menu_name
                )
              }
              className="explore-menu-list-item"
              key={index}
            >
              <img
                className={category === menu.menu_name ? "active" : ""}
                src={menu.menu_image}
                alt=""
              />
              <p>{menu.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
}

export default ExploreMenu;
