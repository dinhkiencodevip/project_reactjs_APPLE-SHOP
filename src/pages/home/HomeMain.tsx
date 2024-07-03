import React from "react";
import Header from "./header";
import Banner from "./banner";
import Icon from "./icon";
import Menu from "./Menu";
import Products from "./Products";
import SellIcon from "./SellIcon";
import DisCount from "./DisCount";
import BestSeller from "./BestSeller";
import Footer from "./Footer";

const HomeMain = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Icon></Icon>
      <Menu></Menu>
      <Products></Products>
      <SellIcon />
      <DisCount />
      <BestSeller />
      <Footer />
    </div>
  );
};

export default HomeMain;
