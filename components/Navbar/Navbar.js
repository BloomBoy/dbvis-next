/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

function Navbar() {
  return (
    <div className="container mx-auto">
      <nav className="flex items-center justify-between flex-wrap p-6">
        <div>
          <Link href="/">
            <img
              src="dbvisualizer_logo.svg"
              alt="database tool"
              className="h-10 cursor-pointer"
            />
          </Link>
        </div>

        <div className="flex ">
          <ul className="flex p-3">
            <li className="mr-6 align-middle">
              <Link href="/">
                <a className="menu-link">Home</a>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/contact/">
                <a className="menu-link">Contact</a>
              </Link>
            </li>
            <li className="mr-6 align-middle">
              <Link href="/features">
                <a className="menu-link">Features</a>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/pricing/">
                <a className="menu-link">Pricing</a>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/support/">
                <a className="menu-link">Support</a>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/download/">
                <a className="menu-link">Download</a>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/whatsnew/">
                <a className="menu-link">Whats New</a>
              </Link>
            </li>
          </ul>
          <a className="btn--primary" href="https://www.dbvis.com/buy/">
            Buy
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
