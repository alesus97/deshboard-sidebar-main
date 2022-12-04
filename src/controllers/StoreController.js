import StoreView from "../pages/DrawerPages/StoreView"
import ErrorPage from "../pages/ErrorPage";
import { useState, useEffect } from "react";
import { APIService } from "../apis/APIService";
import Premio from "../models/Premio"

export default function StoreController(){
    const [prizes, setPrizes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [onDeleteIndex,setOnDeleteIndex] = useState();

    const [errorMessage, setErrorMessage] = useState("");
    const [error, setError] = useState();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const postData = {
            descrizione: data.get("premio"),
            costo: data.get("crediti"),
          };
    
          try {
            const response = await APIService.createPrize(postData);
    
            const newPrize = {
              codice_premio: response.data.codice_premio,
              ...postData,
             
            };
      
            const newPrizes = [...prizes];
            newPrizes.push(newPrize);
            setPrizes(newPrizes);
        } catch(error) {
          throw error
        } 

    };


    useEffect(() => {
       APIService.getAllPrizes().then((res) => {
        const newPrizes = res.data.map((prize) => new Premio(prize));
        console.log(newPrizes);
        setPrizes(newPrizes);
         setLoading(false);
      }).catch((err) => {
        console.log(err);
      setError(true);
      setErrorMessage(err);
      });


        
      }, []);

      const handleDelete = async (event) => {
        event.preventDefault();
        const codicePremio = prizes[onDeleteIndex].codice_premio;
    
        try {
          const response = await APIService.deletePrize(codicePremio)
  
            const dataDelete = [...prizes];
            dataDelete.splice(onDeleteIndex, 1);
            setPrizes([...dataDelete]);
            console.log("Premio cancellato correttamente");
    
        } catch(error) {
          throw error
        } 
       
       };

    return(
      error ?  
      <ErrorPage error={errorMessage}/> :
        <StoreView handleSubmit={handleSubmit} handleDelete={handleDelete} loading={loading} prizes={prizes} setOnDeleteIndex={setOnDeleteIndex}/>
    );
}