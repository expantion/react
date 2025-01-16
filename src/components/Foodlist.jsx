import Fooditem from "./Fooditem";
export default function Foodlist({ foodlist, Setfoodid }) {
  return (
    <div>
      {foodlist.map((food) => (
        <Fooditem key={food.id} food={food} Setfoodid={Setfoodid} />
      ))}
    </div>
  );
}
