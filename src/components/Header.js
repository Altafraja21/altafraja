import './Header.css';




function Header (){

    return(
        <div className='header1'>
            <div className='logo'>Altaf Raja</div>
            <div className='menu'>
                <ul>
                <li>About</li>
                <li>Qualification</li>
                <li>Projects</li>
                <li>Blogs</li>
                <li className='connect'>Connect</li>
                
                </ul>
            </div>
       
        </div>
    )
}

export default Header;