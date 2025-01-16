import Incredientitem from "./Incredientitem";

export default function Incredientlist({ food, isLoading }) {
  return (
    <div>
      {isLoading
        ? (<p>Loading</p>)
        : (food.extendedIngredients &&
          food.extendedIngredients.map((item) => (
           <Incredientitem item={item}></Incredientitem>
          )))}
    </div>
  );
}
