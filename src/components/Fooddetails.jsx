import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";
import Incredientlist from "./Incredientlist";
export default function Fooddetails({ foodid }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodid}/information`;
  const API_KEY = "284e7b39fff5470fad666e3c182a10e4";
  useEffect(() => {
    async function fetchfood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchfood();
  }, [foodid]);
  return (
    <div>
      <div className={styles.recipecard}>
        <h1 className={styles.recipename}>{food.title}</h1>
        <img className={styles.recipeimage} src={food.image} alt="" />
        <div className={styles.recipedetails}>
          <span>
            ⌚ <strong>{food.readyInMinutes}</strong>
          </span>
          <span>
          👨‍👩‍👧‍👦<strong> Service {food.servings}</strong>
          </span>
          <span>{food.vegetarian ? "🥕Vegitarian" : "🍖 Non-Vegitarian"}</span>
          <span>{food.vegan ? "vegan " : ""}</span>
        </div>
      </div>
      <div>
       💲 <span>{food.pricePerServing / 100} per serving</span>
      </div>
      <h2>Incrediants</h2>
     <Incredientlist food={food} isLoading={isLoading}></Incredientlist>
      <div>
        <h2>Instructions</h2>
        <div className={styles.recipeinstruction}>
          <ol>
            {isLoading
              ? "loading "
              : food.analyzedInstructions[0].steps.map((steps) => (
                  <li> {steps.step}</li>
                ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
