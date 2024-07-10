
export default function Navbar() {
    return (
        <header id="navbar">
            <div>
                <div className="menu-hamburger">
                    <a href="#"><i className="fa-solid fa-bars"></i></a>
                    <a href="#"><i className="fa-solid fa-x"></i></a>
                </div>
                <p>MENU</p>
            </div>

            <a href="/react/public"> Villagio </a>
            <nav>
                <ul>
                    <li><a href=""> Region</a></li>
                    <li><a href=""> Services</a></li>
                    <li><a href="">Activities</a></li>
                    <li><a href="">News</a></li>
                </ul>
            </nav>
            <div className="icon-container">
                <div className="icon-reseaux-social">
                    <p>
                        TRIPADVISOR
                    </p>
                </div>
                <div className="icon-reseaux-social">
                    <p className="text-reseaux-social">
                        FOURSQAURE
                    </p>
                </div>
                <div className="icon-reseaux-social">
                    <p className="text-reeaux-social">
                        INSTAGRAM
                    </p>
                </div>
                <div className="icon-reseaux-social">
                    <p className="text-reseaux-social">
                        FACEBOOK
                    </p>
                </div>
                <select className="form-select">
                    <option selected>English</option>
                    <option value="1">Français</option>
                </select>
                <select className="form-select">
                    <option selected>Euro</option>
                    <option value="1">USD</option>
                </select>
            </div>
        </header>
    )
}
