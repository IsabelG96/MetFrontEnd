import { useEffect, useState } from "react";
import ArtworkComponent from "../Components/ArtworkComponent";
import FormComponent from "../Components/FormComponent";
import Collection from "../Components/Collection";

const SERVER_URL = "https://collectionapi.metmuseum.org/public/collection/v1";


const MetContainer = () => {

    const [artObject, setArtObject] = useState([]);
    const [artCollection, setArtCollection] = useState([]);

    //Get random  artwork as object

    useEffect(()=> {
        fetch(`${SERVER_URL}/objects`)
            .then((response) => response.json())
            .then((data)=>{
                const artObjectID = data.objectIDs[Math.floor(Math.random() * data.objectIDs.length)];
                console.log(artObjectID);
                fetch(`${SERVER_URL}/objects/${artObjectID}`) 
                .then((response) => response.json())
                .then((artObjectData) => setArtObject(artObjectData))
            });
            // .then((response) => setArtwork(response))
            // .catch((err)=> setError(err.message));
    }, []);

    const getArtWork = () => {
            fetch(`${SERVER_URL}/objects`)
                .then((response) => response.json())
                .then((data)=>{
                    const artObjectID = data.objectIDs[Math.floor(Math.random() * data.objectIDs.length)];
                    console.log(artObjectID);
                    fetch(`${SERVER_URL}/objects/${artObjectID}`) 
                    .then((response) => response.json())
                    .then((artObjectData) => setArtObject(artObjectData))
                });
                // .then((response) => setArtwork(response))
                // .catch((err)=> setError(err.message));
        }

    const addToCollection = (artObject) => {
        setArtCollection([...artCollection, artObject])
    };   
    

    const removeArtWork = (id) => {
        const newCollection = artCollection.filter((artObject) => artObject.id !== id)
        setArtCollection(newCollection);
    };
    
    //Still to do 
    
    // get new artwork from "artwork," add it to "collection" via a function in container
    // add "remove" button to the artwork once it's in the list and a function in container. Best way to do that? 

    return (
        <>
        <h2>Welcome to Met Simulator</h2>
        <FormComponent/>
        <ArtworkComponent artObject={artObject} getArtWork={getArtWork} addToCollection={addToCollection}/>
        <Collection artCollection={artCollection} removeArtWork={removeArtWork}/>
        </>
    )
}

export default MetContainer;