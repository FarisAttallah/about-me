const Footer = () => {
    return (
        <>
            <hr />
            <div className="footer-container">
                <p>
                    &copy; {new Date().getFullYear()} Faris&apos;s Portfolio
                </p>
                <div className="social_icons">
                    <a
                        href="https://www.linkedin.com/in/faris-attallah-618075244/"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
            
        </>
    )
}

export default Footer;