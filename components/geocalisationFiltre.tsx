'use client'
import { useGeolocated } from "react-geolocated";
import { useSearchParams, usePathname, useRouter  } from 'next/navigation';
import axios from "axios";
import {useState, ChangeEvent, useEffect, SetStateAction} from "react";
import { geoDistance } from "@/app/lib/getGeoDistanceBefore";


interface User {
    id: number;
    latitude: number;
    longitude: number;
    nomDeVille: string;
    nomDePays: string;
  }




export default function GeocalisationFiltre() {

    const [isLocalisationWanted, setIsLocalisationWanted] = useState(false);
    const [userLatitude, setUserLatitude]= useState<number>(0);
    const [userLongitude, setUserLongitude]= useState<number>(0);
    const [breeders, setBreeders] = useState<User[]>([]);
    const [nearbyBreeders, setNearbyBreeders] = useState<number[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [radius, setRadius]= useState<number>(0);
    
    
    // Filter gestion and getting the local user Location

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
        if (event.target.checked) {
            // if (isGeolocationAvailable && isGeolocationEnabled ) {
                navigator.geolocation.getCurrentPosition((position) => {
                    const newUserLatitude = position.coords.latitude;
                    const newUserLongitude = position.coords.longitude;
                    setUserLatitude(newUserLatitude);
                    setUserLongitude(newUserLongitude);
                    console.log(newUserLatitude, newUserLongitude);
                  });
                  
                } else {
                    console.log('La localisation n\'est plus active');
                }
                setIsLocalisationWanted(current => !current);
    }



    //Getting the data from an API
    useEffect(() => {
        axios
          .get("https://668d26f2099db4c579f1e5d1.mockapi.io/users/users")
          .then((response) => {
            // Vérifiez la structure de la réponse de l'API
            //Verify the structur of the API response
            if (Array.isArray(response.data)) {
                setBreeders(response.data);
                console.log(response.data);
  
            } else {
              setError("Les données de l'API ne sont pas sous la forme attendue");
            }
          })
          .catch((error) => setError(error.message));
      }, []);
      
      if (error) {
        return <div>Erreur: {error}</div>;
      }

      async function breedersFilter() {
        
        breeders.filter(async breeder=>{

          console.log('user Latitude:' + userLatitude,
                      'user Longitude: ' + userLongitude,
                      'breeder.latitude: '+ breeder.latitude,
                      'breeder Longitude: '+ breeder.longitude
          );
          
          geoDistance(
            userLatitude,
            userLongitude,
            breeder.latitude,
            breeder.longitude
          ).then ((res:number)=>{

            console.log(res);
          })
        })
      }
      



    return(
      <>
        <form action="submit">
            <label htmlFor="localisation">
            <input type="checkbox" name="localisation" id="localisation" checked={isLocalisationWanted} onChange={handleChange}/>
            Localisation
            </label>
            <input type="number" onChange={(e)=>{setRadius(Number(e.target.value)), console.log(radius)
            }}/>
          
            <hr />

            <button disabled={!isLocalisationWanted}>Action</button>

            {isLocalisationWanted && <h2>nathan@nathan.com</h2>}
        </form>
        <button onClick={breedersFilter}>Utiliser le Filtre</button>
        </>
    )
}
