import { useState, useEffect } from "react";
import styles from "./search.module.css";
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "284e7b39fff5470fad666e3c182a10e4";

export default function Search({ fooddata, setData }) {
  const [query, SetQuery] = useState("pizza");

  useEffect(() => {
    async function fetchfood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
      setData(data.results);
    }
    fetchfood();
  }, [query]);
  return (
    <div className={styles.searchcontainer}>
      <input
        className={styles.input}
        type="text"
        value={query}
        onChange={(e) => SetQuery(e.target.value)}
        name=""
        id=""      />
    </div>
  );
}
