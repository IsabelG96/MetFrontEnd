import { useEffect, useState } from "react";
import ArtworkComponent from "../Components/ArtworkComponent";
import FormComponent from "../Components/FormComponent";
import Collection from "../Components/Collection";

const SERVER_URL = "https://collectionapi.metmuseum.org/public/collection/v1";


const MetContainer = () => {



    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);}
      

    //Get random artwork as object
    useEffect(()=> {
        fetch(`${SERVER_URL}/objects`)
            .then((response) => response.json())
            .then((data)=>{
                const artObjectID = data.objectIDs[Math.floor(Math.random() * data.objectIDs.length)];
                console.log(artObjectID);
                fetch(`${SERVER_URL}/objects/${artObjectID}`)
                .then((response) => response.json())
                .then((artObjectData) => console.log(artObjectData))
            });
            // .then((response) => setArtwork(response))
            // .catch((err)=> setError(err.message));
    }, []);


    return (
        <>
        <h2>Hello from Container</h2>
        <FormComponent/>
        <ArtworkComponent/>
        <Collection/>
        </>
    )
}

export default MetContainer;