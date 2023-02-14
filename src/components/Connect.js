import './Connect.css';

function Connect (){

    return(

            <div className='connectpage'>
                <h2>Connect</h2>
                <div className='contactmepage'>
                    
                <div> <h3>Name</h3>
                    <input type='text' required='required' ></input></div> 

                    <div> <h3>Email</h3>
                    <input type='text' ></input></div> 

                    <div> <h3>Mobile</h3>
                    <input type='text' ></input></div> 

                    <div> <h3>Massage</h3>
                    <textarea></textarea></div> 

                    <div> 
                    <button>Submit</button></div> 
                   
                </div>
            </div>





    )
}

export default Connect;