import React, { useState } from "react";
import "./index.css";
import Menu from "./MenuApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";
 
const uniqueList =[
  ...new Set(
    Menu.map((currElem) => {
      return currElem.category;
    })
  ),
  "All",
  
];


const Restaurant  = () => {
  const [menuItem,setMenuItem]=useState(Menu);
const   [menuList,setMenuList] =useState(uniqueList);
 

const filterItem =(category) => {
if (category === "All"){
  setMenuItem(Menu);
  return;
}

    const updatedList = Menu.filter((curElem) => {
return curElem.category === category;
    });
setMenuItem(updatedList);
  };
  return (
    <>
   <Navbar  filterItem={filterItem} menuList={menuList}/>
<MenuCard menuItem={menuItem} />




    </>
  );
};

export default Restaurant;
