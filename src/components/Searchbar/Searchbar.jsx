import React from "react";
import styles from "./Searchbar.module.scss";

const Searchbar = () => {
  let fetchedFilms;
  let createRef = React.createRef();
  const fetchInfo = () => {
    const searchTerm = createRef.current.value;
    fetch(`http://www.omdbapi.com/?apikey=414c25b6&s=${searchTerm} `)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        fetchedFilms = data;
        console.log(fetchedFilms);
      });
  };

  return (
    <>
      <form>
        <label>
          Movie Title
          <input
            type="text"
            ref={createRef}
            name="name"
            placeholder="Movie Name"
          />
        </label>
        <button type="button" onClick={fetchInfo}>
          Search
        </button>
      </form>
    </>
  );
};

export default Searchbar;
