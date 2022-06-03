const PetCard = ({
    pet
}) => {
    return (
    <li className="otherPet">
        <h3>Name: Buddy</h3>
        <p>Type: dog</p>
        <p className="img"><img src="/images/dog2.png" /></p>
        <a className="button" href="#">Details</a>
    </li>
    );
}

export default PetCard;