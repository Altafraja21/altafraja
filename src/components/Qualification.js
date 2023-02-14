import './Qualification.css';

function Qualification (){

    return(
    
    <div className='Qualification'>
        <h1>Qualification:-</h1>
      <div className='skillbox'>


        <div>
            <p>Html</p>
            <div className='container1'>
               
                <div className='html skillset'>85%</div> </div>
        </div> 


            <div>
                <p>CSS</p>
                <div className='container1'>
                    <div className='css skillset'>70%</div>
                </div>

                <div>
                    <p>Javascript</p>
                    <div className='container1'>
                        <div className='javascript skillset'>65%</div>
                    </div>

                    <div>
                    <p>React</p>
                    <div className='container1'>
                    <div className='react skillset'>70%</div>
                    </div>

                    <div>
                    <p>SEO</p>
                    <div className='container1'>
                    <div className='seo skillset'>75%</div>
                    </div>
                    </div>




                    </div>


                </div>



            </div>

            </div>  
        

    </div>
    
    
    )
}

export default Qualification;