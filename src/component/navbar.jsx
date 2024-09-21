import Link from "next/link";

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo">
                <Link href="/">
                    Faris&apos;s Portfolio
                </Link>
            </div>
            <a href="https://drive.google.com/file/d/1fsRBsmv1T7EP8XIL-OVsyUedR4nOHzTw/view?usp=sharing" className="cta-btn">Resume</a>
        </div>
    )
}

export default Navbar;