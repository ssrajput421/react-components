import './header.css'


function Header(){

    return(
        <div className="header">
        <div className="logo">
            Shivam
        </div>

        <div className="menu">
            <input type="checkbox" id="click"></input>
            {/* <label for="click" className="menu-btn"><FontAwesomeIcon icon="fa-solid fa-bars" /></label> */}
            <ul className="menu-items">
                <li className="menu-list"><a href="#">Home</a></li>
                <li className="menu-list"><a href="#">Blog</a></li>
                <li className="menu-list"><a href="#">Services</a></li>
                <li className="menu-list"><a href="#">About Us</a></li>
                <li className="menu-list"><a href="#">Contact Us</a></li>
               
                
            </ul>
        </div>


        </div>
        
        
        
        
        );
}


export default Header;