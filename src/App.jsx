import { useState } from "react";
import Search from "./components/Search";
import Foodlist from "./components/Foodlist";
import Nav from "./components/Nav";
import Container from "./components/Container";
import Innercontainer from "./components/Innercontainer";
import Fooddetails from "./components/Fooddetails";
import "./App.css";

function App() {
  const [foodid,Setfoodid]=useState("715415")
  const [fooddata, setData] = useState([]);
  return (
    <div className="App">
     
      <Search fooddata={fooddata} setData={setData} />
      <Container>
        <Innercontainer>
          <Foodlist  key={foodid} Setfoodid={Setfoodid} foodlist={fooddata}></Foodlist>
        </Innercontainer>

        <Innercontainer>
          <Fooddetails key={foodid} foodid={foodid}></Fooddetails>
        </Innercontainer>
      </Container>
    </div>
  );
}

export default App;
