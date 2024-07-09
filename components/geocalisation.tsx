import { useGeolocated } from "react-geolocated";
import { useSearchParams, usePathname, useRouter  } from 'next/navigation';
import {geoDistance} from "@/app/lib/getGeoDistance";
import React from "react";




export default function GeocalisationFiltre(){
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const [geocalisationActivated, setGeocalisationActivated] = React.useState();

    
    const getDistance = (distanceRange:string)=>{

        const params = new URLSearchParams(searchParams);
        if (distanceRange) {
            params.set('geoRange', distanceRange);
        } else {
            params.delete('geoRange');
        }
        replace(`${pathname}?${params.toString()}`);

    }

    const isChecked = ()=>{
        if (geocalisationActivated) {
            console.log("Je suis activé");
            
        } else {
            console.log("Je ne suis pas activé");
        }
    }


    return (
        <>
            <input type="checkbox" id="checkTest" value="Activer la geocalisation" onChange={(e)=>{setGeocalisationActivated}}/>
        
        <input type="number" name="geocalisationRange" id="geocalisationRange" onChange={(e)=>{getDistance(e.target.value)}}/>

        </>
    )
}