import React from "react";
import Hero from "../components/Hero";
import CarSearch from "../components/CarSearch";
import CarList from "../components/CarsPage";

export default function RentalCarsPage() {
  return (
    <>
      <Hero />
      <CarSearch />
      <CarList />
    </>
  );
}
