import CardGame from "./components/CardGame";
import axios from "axios";
import { useState, useEffect } from "react";
import { GlobalStyled } from "./GlobalStyled";
import { BASE_URL } from "./constants/urlBase";

function App() {

  const [games, setGames] = useState([])

  useEffect(()=>{
    browserGames()
  },[])

  const browserGames = async ()=>{
      try {
        const response = await axios.get(`${BASE_URL}/gamers`)
        setGames(response.data)   
      } catch (error) {
        console.log(error)   
      }
  }

  return (
    
    <main>
      <GlobalStyled/>
        <section>
            <h1>
              Loja de Game
            </h1>
        </section>
        <section>
          {games && games.map((game)=>{return(
            <CardGame
            key={game.id}
            game={game}/>
          )})}

        </section>
        
    </main>
   
  );
}

export default App;
