import React from "react";
import * as Mui from "@mui/material";
import FoodItem from "./FoodItem";
import OrderMenuBox from "./OrderMenuBox";
import FooterMenu from "./FooterMenu";

export default function OrderBox() {
  return (
<<<<<<< HEAD
    <section className="order-section">
      <div className="container">
        <div className="order-box bg-white p-10 my-10">
          <div className="container-row">
            <div className="col-lg-3 max-md:hidden">
=======
    <div>
      <Container className="bg-white rounded-xl p-0" sx={{ flexGrow: 1 }}>
        <Grid
          container
          direction={"row"}
          justifyContent={"center"}
          className="mt-5"
        >
          {/* <Grid item lg={3} md={3}> */}
          <Grid item xs={3}>
            <Item>
>>>>>>> 05dd14ac8d3adfb779cdbeae287f700c215529c5
              <OrderMenuBox />
            </div>
            <div className="col-lg-9 col-md-9">
              <FoodItem />
            </div>
          </div>
        </div>
      </div>

      <FooterMenu />
    </section>
  );
}
