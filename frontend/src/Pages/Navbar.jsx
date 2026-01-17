import "../Page-styling/Navbar.css";    
export default function Navbar() { 
    return(<>   
    <div className="navbar">
        <div className="logo">
            <a href="/">MyPortfolio</a>
        </div>
        <div className="nav-links">
            <a href="/Projects">Projects</a>
            <a href="/About">About</a>
            <a href="/Skills">Skills</a>        
            <a href="/Contact">Contact</a>
        </div>
        <div className="nav-cta">
            <a href="/Contact" className="btn-contact">Get in Touch</a> 
        </div>
        </div>
    </>)
}