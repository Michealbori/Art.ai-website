import '../developer/Developer.css';

export default function Developer(){

    function linkedin() {
        window.location = "www.linkedin.com/in/michael-o-655b88233";
         }
    function twitter() {
        window.location = "https://twitter.com/M11Sikat";
         }
    function instgram() {
        window.location = "https://www.instagram.com/micheal_o_sikat?igsh=YzAwZjE1ZTI0Zg%3D%3D&utm_source=qr";
         }

    return (
        <div className="Develeoper">
             <p>Developed<span style={{color: "#e50914"}}> By </span> MICHEAL. </p>
            <img onClick={instgram} src="src/Accets/instagram-alt-logo-24.png" alt="Instagram" />
            <img onClick={linkedin} src="src/Accets/linkedin-square-logo-24.png" alt="Linkedin" />
            <img onClick={twitter} src="src/Accets/twitter-logo-24.png" alt="Twitter" />
        </div>
    )
}