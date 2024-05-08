import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({catagory,setCatalory}) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our Menu</h1>
      <p className="explore-menu-text">
        choose ffrom adiverse menu featuring a delectaable array of dishes
        crafted with the finest ingrediant and culinary expertise. our mission
        is to satisfy your craving and elevate your dining experience ,one
        delicious meal at a time.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div onClick={()=>setCatalory(prev=>prev===item.menu_name?'All':item.menu_name)} key={index} className="explore-menu-list-item">
              <img className={catagory===item.menu_name ?"active":""} src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
