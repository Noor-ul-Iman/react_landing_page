
function showsidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hidesidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}


function Navbar(){
return(
    <nav className="custom-nav">
    <ul className="sidebar">
        <li onClick={hidesidebar}>
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                    fill="white">
                    <path
                        d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                </svg></a>
        </li>
        <li><a href="#">Home</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Works</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
    <ul className="horizontal-bar">
        <li className="logo-img"><img src={require("../images/Kallyas-Logo.png")} alt="Logo" /></li>
        <li className="hideon"><a href="#">Home</a></li>
        <li className="hideon"><a href="#">Services</a></li>
        <li className="hideon"><a href="">Works</a></li>
        <li className="hideon"><a href="#">About Us</a></li>
        <li className="hideon"><a href="#">Contact</a></li>
        <li onClick={showsidebar} className="menu-button">
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                    fill="white">
                    <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                </svg></a>
        </li>
    </ul>
</nav>
)
}

export default Navbar;