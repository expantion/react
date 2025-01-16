import styles from "./nav.module.css"
import foodlogo from "./food.jpg"
export default function Nav(){
  
    return <div>
         
        <h1 className={styles.nav}><img src={foodlogo} alt="err"  className={styles.logo}/> <span></span>  FoodApp</h1>
    </div>
}