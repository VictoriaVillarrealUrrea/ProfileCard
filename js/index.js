/*Create the new element*/
class ProfileC extends HTMLElement {
    constructor(){
        super();
    }
}
customElements.define('profile-card', ProfileC);
var profilec= new ProfileC();
profilec.innerHTML = setInnerHTML(1);

/*showing the new element*/
document.body.appendChild(profilec);

function setInnerHTML(types){
    if(types==1){
        return `
        <div class="container">
            <div class="right" id="info">
                <div>
                    <h1 class="name text">Ana Victoria Villarreal Urrea</h1>
                    <hr size="4px" color="#ACCC7B" width="400px" >
                    <h2 class="text"> Hi, I am a newly graduated Computer Systems engineer (December 2021). <h2>
                    <li class="listSoft text">Responsable</li><li class="listSoft text">Friendly</li><li class="listSoft text">Hardworking</li>

                    <p class="loc text">
                    <img class="icon" src="src/images/l.png" align="left">Jalisco, Mexico</p>
    
                </div>
            </div>
            <div class="left">
                <div>
                    <img class="profileImage" src="src/images/profilepic.jpg">
                </div>
            </div>
        </div>
        <div id="editOptions"></div>`; 
    }
    if(types==2){
        return `
        <div>
            <div class="right" id="info">
            <div>
            <h1 class="text">To read my experience I recomend to see my cv</h1>
            <hr size="4px" color="#ACCC7B" width="400px" >
            <p class="labels text">
            <img class="icon text" src="src/images/c.png" align="left">Graduated from ITESO in 2021</p>
            <p class="labels text">
            <p class="labels text">
            <img class="icon text" src="src/images/s.png" align="left">Did an intership in 2019</p>
            <p class="bachelors text">
            <img class="icon text" src="src/images/b.png" align="left">Worked in Javascript project, Java projects (OOP)</p>
            <p class="bachelors text">
            <img class="icon" src="src/images/b.png" align="left">I little extra you may or may not wanna know,I love to teach as much as I love to learn everyday, I teach the first level of Mexican Sign Language.</p>
            <p class="labels  text">
            <img  class="icon" src="src/images/m.png" align="left">
            <a  href="src/CV_VICTORIAVILLARREAL.pdf">CLICK HERE TO GET THE CV </a>
            </p>
            <p class="labels text">
            <img class="icon" src="src/images/b.png" align="left">Java, Sql, C</p>
        </div>
            </div>
            <div class="left">
                <div>
                    <img class="profileImage"src="src/images/profilepic.jpg">
                </div>
            </div>
        </div>
        <div id="editOptions"></div>`; 
    }
    if (types==3){
        return `<div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light" data-type="HORIZONTAL" data-vanity="victoria-villarreal-75b31622b" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://mx.linkedin.com/in/victoria-villarreal-75b31622b?trk=profile-badge">Victoria Villarreal</a></div>
        `;

    }
};

function eventsHandlers() {
    let experience = document.getElementById('btnExp');
    let btnAboutMe = document.getElementById('btnAboutMe');
    let linkedin = document.getElementById('btnLink');
    let specialBtn4 = document.getElementById('darkMode');

    experience.addEventListener('click', (e) => {
        profilec.innerHTML = setInnerHTML(2);
                document.body.appendChild(profilec);
    });

    btnAboutMe.addEventListener('click', (e) => {
        profilec.innerHTML = setInnerHTML(1);
                document.body.appendChild(profilec);
    });

    linkedin.addEventListener('click', (e) => {
        profilec.innerHTML = setInnerHTML(3);
                document.body.appendChild(profilec);
    });


    specialBtn4.addEventListener('click', (e) => {
        //Dark and light mode
        let container = document.getElementById('container');
        let container2 = document.getElementById('secondB');
        let texto = document.getElementById('info');
        
        if(container.style.backgroundColor=="black"){
            container.style.backgroundColor="white";
            container2.style.backgroundColor="white";
        }else  {
            container.style.backgroundColor="black";
            container2.style.backgroundColor="black";
            texto.style.color="white";
        }

    });
}
document.addEventListener('DOMContentLoaded', () => {
    eventsHandlers();
});


