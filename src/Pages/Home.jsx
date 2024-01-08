import React from "react";
import CocktailList from "../Component/CocktailList";
import SearchForm from "../Component/SearchForm";

const Home = () => {
  return (
    <main>
      <SearchForm />
      <CocktailList />
    </main>
  );
};

export default Home;
