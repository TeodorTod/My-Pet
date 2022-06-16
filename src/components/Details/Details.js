import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import * as petService from '../../services/petService';
import { useAuthContext } from '../../contexts/AuthContext';
import ConfirmDialog from '../Common/ConfirmDialog/ConfirmDialog';

const Details = () => {
    const navigate = useNavigate();
    const { user } = useAuthContext();
    const [pet, setPet] = useState({});
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const { petId } = useParams();

    useEffect(() => {
        petService.getOne(petId)
            .then(petResult => {
                setPet(petResult);
            })
    }, [petId]);

    const deleteHandler = (e) => {
        e.preventDefault();
        
        petService.destroy(petId, user.accessToken)
        .then(() => {
            navigate('/dashboard');
        })
        .finally(() => {
            setShowDeleteDialog(false);
        })
    };

    const deleteClickHandler = (e) => {
        e.preventDefault();
        setShowDeleteDialog(true);

    };

    const ownerButtons = (
        <>
            <Link className="button" to="edit">Edit</Link>
            <a className="button" href="#" onClick={deleteClickHandler}>Delete</a>
        </>
    );

    const userButtons = <a className="button" href="#">Like</a>;

    return (
        <>
        <ConfirmDialog show={showDeleteDialog} onClose={() => setShowDeleteDialog(false)} onSave={deleteHandler}/>
        <section id="details-page" className="details">
            <div className="pet-information">
                <h3>Name: {pet.name}</h3>
                <p className="type">Type: {pet.type}</p>
                <p className="img"><img src={pet.imageUrl} /></p>
                <div className="actions">
                    {user._id && (user._id == pet._ownerId
                        ? ownerButtons
                        : userButtons
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
        </>
    );
}

export default Details;