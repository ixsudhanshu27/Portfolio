export default function Navbar (){
    
    function HandleClick(l){
        console.log("clicked " + l);
    }

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    
    return(
        <nav>
            <ul className = "navbar">
                <li><button onClick={() => scrollToSection('home')}>HOME</button></li>
                <li><button onClick={() => scrollToSection('course')}>COURSES</button></li>
                <li><button onClick={() => scrollToSection('projects')}>PROJECTS</button></li>
                <li><button onClick={() => scrollToSection('resume')}>RESUME</button></li>
                <li><button onClick={() => scrollToSection('contact')}>CONTACT</button></li>
            </ul>
        </nav>
        
    )

  }
