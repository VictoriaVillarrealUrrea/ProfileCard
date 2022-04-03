class ProfileC extends HTMLElement {
    constructor(){
        super();
    }
}
customElements.define('profile-card', ProfileC);
var profilec= new ProfileC();
profilec.innerHTML = setInnerHTML(1);
document.body.appendChild(profilec);

function setInnerHTML(types){
    if(types==1){
        return `
        <div class="container">
            <div class="left" id="info">
                <div>
                    <h1 class="name">Ana Victoria Villarreal Urrea</h1>
                    <hr size="8px" color="#D98880" width="400px" >
                    <h2> Hi, I am a newly graduated Computer Systems engineer (December 2021). <h2>
                    <h4>Responsable</h4><h5>Responsable</h5><h3>Responsable</h3>

                    <p class="loc">
                    <img class="icon" src="src/images/l.png" align="left">MEXICO</p>
    
                </div>
            </div>
            <div class="right">
                <div>
                    <img class="profileImage" src="https://randomuser.me/api/portraits/women/8.jpg">
                </div>
            </div>
        </div>
        <div id="editOptions"></div>`; 
    }
    if(types==2){
        return `
        <body class="Fondo">
        <div class="cards">
            <div class="left" id="info">
            <div>
            <h1 class="name">To read my experience I recomend to see my cv</h1>
            <hr size="8px" color="#D98880" width="400px" >
            <p class="bachelors">
            <img class="icon" src="src/images/c.png" align="left">Graduated from ITESO in 2021</p>
            <p class="labels moto">
            <p class="bachelors">
            <img class="icon" src="src/images/c.png" align="left">Started an intership in 2019</p>
            <p class="bachelors">
            <img class="icon" src="src/images/c.png" align="left">I have worked in Javascript project, Java projects (OOP)</p>
            <p class="bachelors">
            <img class="icon" src="src/images/c.png" align="left">I little extra you may or may not wanna know,I love to teach as much as I love to learn everyday, I teach the first level of Mexican Sign Language.</p>
            <p class="labels moto">
            <img  class="icon" src="src/images/m.png" align="left">
            <a  href="src/CV_VICTORIAVILLARREAL.pdf">CLICK HERE TO GET THE CV </a>
            </p>
            <p class="labels">
            <img class="icon" src="src/images/b.png" align="left">Java, Sql, C</p>
        </div>
            </div>
            <div class="right">
                <div>
                    <img class="profileImage" src="https://randomuser.me/api/portraits/women/8.jpg">
                </div>
            </div>
        </div>
        <div id="editOptions"></div>
    </body>`; 
    }
    if (types==3){
        return `<div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light" data-type="HORIZONTAL" data-vanity="victoria-villarreal-75b31622b" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://mx.linkedin.com/in/victoria-villarreal-75b31622b?trk=profile-badge">Victoria Villarreal</a></div>
        `;

    }
};

function eventsHandlers() {
    let specialBtn = document.getElementById('btnExp');
    let specialBtn2 = document.getElementById('btnAboutMe');
    let specialBtn3 = document.getElementById('btnLink');

    specialBtn.addEventListener('click', (e) => {
        console.log('FIRSTCLICKSSS');
        profilec.innerHTML = setInnerHTML(2);
                document.body.appendChild(profilec);
    });

    specialBtn2.addEventListener('click', (e) => {
        console.log('FIRSTCLICKSSS');
        profilec.innerHTML = setInnerHTML(1);
                document.body.appendChild(profilec);
    });

    specialBtn3.addEventListener('click', (e) => {
        console.log('FIRSTCLICKSSS');
        profilec.innerHTML = setInnerHTML(3);
                document.body.appendChild(profilec);
    });
}
document.addEventListener('DOMContentLoaded', () => {
    eventsHandlers();
});


