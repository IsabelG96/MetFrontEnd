import ArtworkComponent from "./ArtworkComponent";
const Collection = ({artCollection, removeArtWork}) => {

    const collectionComponents = artCollection.map((artObject) => 
    <><ArtworkComponent artObject={artObject}/><button onClick={()=>removeArtWork(artObject.id)}>Remove Artwork</button></>)

    return(
        <><h3>My Collection</h3>
        {collectionComponents}
        </>

    );

}

export default Collection; 