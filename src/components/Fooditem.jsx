import styles from "./food.module.css";
export default function Fooditem({ food, Setfoodid }) {
  return (
    <div className={styles.itemcontainer}>
      <h2 className={styles.itemimage}>
        <img src={food.image} alt="" />
      </h2>
      <div className={styles.itemcontent}>
        <p className={styles.itemname}>{food.title}</p>
      </div>
      <div className={styles.buttoncontainer}>
        <button
          onClick={() => {
            console.log(food.id);
            Setfoodid(food.id);
          }}
          className={styles.itembutton}
        >
          view recipe
        </button>
      </div>
    </div>
  );
}
