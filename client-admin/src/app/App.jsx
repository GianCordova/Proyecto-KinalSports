import { useState } from "react";

export const App = () => {

  const [contar, setContar] = useState(0); //contador

    return (
        <>
          <h1 onClick={()=>{
            setContar(contar + 1);
          }}>Hola Mundo {contar}</h1>
        </>
  );
}

export default App;