
import './About.css';


function About(){

    return(

        <div className='about'>
            
            <div className='sec1'>
                <h3>I Build Custom </h3><h3 className='bluecolor'>Website Solutions </h3>
                <h3>That Help Your </h3><h3 className='bluecolor'>Business Grow</h3>
                <p>I help you increase conversion and performance in every possible way.</p>
                
              <div className='btn'>  <button className='btn-color'>See My Work</button>
                <button className='btn2'>Start A Project</button> </div>
            </div>
            <div className='sec2'>

                <img src='./Profile.png' alt='Altaf Raja'></img>
            </div>
        </div>

    )
    
}

export default About;