"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { geoDistance } from "@/app/lib/utils/getGeoDistanceBefore";

interface User {
  id: number;
  latitude: number;
  longitude: number;
  cityName: string;
  countryName: string;
}

export default function GeocalisationFilter() {
  const [isLocalisationWanted, setIsLocalisationWanted] = useState(false);
  const [userLatitude, setUserLatitude] = useState<number>(0);
  const [userLongitude, setUserLongitude] = useState<number>(0);
  const [breeders, setBreeders] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [radius, setRadius] = useState<number>(0);

  //This function is use to check if the user want to be geolocated and to get his geocalistion if he want to
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
      console.log("La localisation n'est plus active");
    }
    setIsLocalisationWanted((current) => !current);
  };

  //Getting the data from an API
  useEffect(() => {
    axios
      .get("https://668d26f2099db4c579f1e5d1.mockapi.io/users/users")
      .then((response) => {
        //Verify the structur of the API response
        if (Array.isArray(response.data)) {
          setBreeders(response.data);
          console.log("Resultata fetch: " + response.data);
        } else {
          setError("Les données de l'API ne sont pas sous la forme attendue");
        }
      })
      .catch((error) => setError(error.message));
  }, []);

  //This function is used to filter the breeders by their distance between them and the user
  function getBreedersFiltred() {
    const listBreederFiltered = breeders.filter(distanceFilter);
    return listBreederFiltered;
  }
  const breedersFiltred = getBreedersFiltred();

  //This function is used to check the distance between the User and the Breeder
  function distanceFilter(breeder: User) {
    const distance = geoDistance(
      userLatitude,
      userLongitude,
      breeder.latitude,
      breeder.longitude
    );
    return distance <= radius;
  }

  return (
    <>
      <div>
        <label htmlFor="localisation">
          <input
            type="checkbox"
            name="localisation"
            id="localisation"
            checked={isLocalisationWanted}
            onChange={handleChange}
          />
          Localisation
        </label>
        <input
          type="number"
          onChange={(e) => {
            setRadius(Number(e.target.value)), console.log(radius);
          }}
        />
        <hr />
      </div>
      <button onClick={getBreedersFiltred}>Utiliser le Filtre</button>
      <div>
        {breedersFiltred.map((item, index) => {
          return (
            <div key={index}>
              <p>{item.latitude}</p>
              <p>{item.longitude}</p>
              <p>{item.cityName}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
