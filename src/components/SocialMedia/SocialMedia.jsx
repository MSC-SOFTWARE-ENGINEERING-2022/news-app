import configs from "../../configs/configs";


const {fb, tw, ld, ig, yt, git} = configs.social_media;

const SocialMedia = () => {
    return <>
        <a href={git} target="_blank"><i className="fab fa-github"></i></a>
        <a href={tw} target="_blank"><i className="fab fa-twitter"></i></a>
        <a href={fb} target="_blank"><i className="fab fa-facebook-f"></i></a>
        <a href={ld} target="_blank"><i className="fab fa-linkedin-in"></i></a>
        <a href={ig} target="_blank"><i className="fab fa-instagram"></i></a>
        <a href={yt} target="_blank"><i className="fab fa-youtube"></i></a>
    </>
}

export default SocialMedia