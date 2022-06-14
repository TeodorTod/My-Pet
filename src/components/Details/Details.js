import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import * as petService from "../../services/petService";
import { AuthContext } from "../../contexts/AuthContext";

const Details = () => {
    const { user } = useContext(AuthContext);
    const [pet, setPet] = useState({});
    const { petId } = useParams();

    useEffect(async () => {
        let petResult = await petService.getOne(petId);

        setPet(petResult);
    }, []);

    const ownerButtons =    
        <>
            <a className="button" href="#">Edit</a>
            <a className="button" href="#">Delete</a>
        </>

    const userButtons = <a className="button" href="#">Like</a>;


    return (
        <section id="details-page" className="details">
            <div className="pet-information">
                <h3>Name: {pet.name}</h3>
                <p className="type">Type: {pet.type}</p>
                <p className="img"><img src={pet.imageUrl} /></p>
                <div className="actions">
                    
                    {user._id && (user._id == pet._ownerId
                        ?   ownerButtons
                        :   userButtons
                    )}
                  
                    
                    
                    
                    <div className="likes">
						<img className="hearts" src="/images/heart.png" />
						<span id="total-likes">Likes: {pet.likes?.length}</span>
					</div>
                </div>
            </div>
            <div className="pet-description">
                <h3>Description:</h3>
                <p>{pet.description}</p>
            </div>
        </section>
    );
}

export default Details;