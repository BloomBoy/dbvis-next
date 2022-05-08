function Navbar() {
    return (

        <div className="container mx-auto">
            <nav className="flex items-center justify-between flex-wrap p-6">
                
                <div>
                    <img src="dbvisualizer_logo.svg" alt="database tool" className="h-10" />
                </div>

                <div className="flex ">
                    <ul className="flex p-3">
                        <li className="mr-6 align-middle"><a href="/features/" className="menu-link">Features</a></li>
                        <li className="mr-6"><a href="/pricing/" className="menu-link">Pricing</a></li>
                        <li className="mr-6"><a href="/customers/" className="menu-link">Customers</a></li>
                        <li className="mr-6"><a href="/support/" className="menu-link">Support</a></li>
                        <li className="mr-6"><a href="/download/" className="menu-link">Download</a></li>
                        <li className="mr-6"><a href="/whatsnew/" className="menu-link">Whats New</a></li>
                    </ul>
                    <a className="btn--primary" href="https://www.dbvis.com/buy/">Buy</a>
                </div>

            </nav>
        </div>
    );
}
  
export default Navbar