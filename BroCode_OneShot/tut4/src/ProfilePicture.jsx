function ProfilePicture(){
    const imageURL = './src/assets/profile.jpg';

    const handleClick = (e) => e.target.style.display = "none"

    return(<img onClick={(e) => handleClick(e)} src={imageURL}></img>);
}

export default ProfilePicture