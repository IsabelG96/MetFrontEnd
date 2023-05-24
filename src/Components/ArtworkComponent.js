const ArtworkComponent = ({ artObject, getArtWork, addToCollection }) => {

const id = artObject.primaryImageSmall ? 1 : null



    return(
        <>
        
        
        <h3>Artwork</h3>
        
            {id ? 
            
                <>
                <img src={artObject.primaryImageSmall}/>
                <p>{artObject.title}</p>
                <p>{artObject.artistDisplayName}</p>
                
                    <>
                    {addToCollection ? <button className="my-button" onClick={()=>addToCollection(artObject)}>Add to Collection</button> : null}
                    </>
                </>
            :
            "no image available :( please try again"}

        <>{addToCollection ? <button className="my-button" onClick={getArtWork}>New Art Please</button> : null}</>
        </>
    );

}

export default ArtworkComponent; 