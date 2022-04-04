/*starting some tests*/
describe('DOM Testing for SEO Factors', function(){
        let Dom;
        beforeEach(function(){
          Dom = new DomManipulation();
        })
    it('Check for Title', function(){
      expect(Dom.init().title).not.toBe(null)
    });
})

describe('Testing Index', function(){
    it('Testing setInnerHTML with type 1...', function(){
        expect(setInnerHTML(1)).toBe(`
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
        <div id="editOptions"></div>`);
    });
    it('Testing setInnerHTML with type 2...', function(){
        expect(setInnerHTML(2)).toBe(`
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
    </body>`);
    });
})