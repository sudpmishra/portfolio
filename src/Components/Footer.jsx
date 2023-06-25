const Footer = () => {
    return <div className="footer">
        <small>© Copyright {new Date().getFullYear()} - Sudeep Mishra. All rights reserved.</small>
        <div className="socials">
            <a href="https://www.facebook.com/SudeepMishra014" target="_blank"><i className="fab fa-facebook-f"></i></a>
            <a href="https://github.com/sudpmishra" target="_blank"><i className="fab fa-github"></i></a>
            <a href="https://www.instagram.com/_sudp.mishra" target="_blank"><i className="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/sudeep014" target="_blank"><i className="fab fa-linkedin-in"></i></a>
        </div>
    </div>
}

export default Footer