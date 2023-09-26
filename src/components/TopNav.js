import Link from "next/link";

export default function TopNav() {
  return (
    <div>
      <header id="navbar" className="flex w-full bg-[#D7F5DC] py-6">
        <div className="container mx-auto">
          <nav className="flex items-center">
            {/* Navbar Brand Logo */}
            <div className="flex text-xl font-bold">
              <Link href="/" className="flex">
                <h1 className="flex">Design</h1>
                <h1 className="text-[#F55F1D]">AGENCY</h1>
              </Link>
            </div>
            <div className="ms-auto flex justify-center items-center gap-[50px]">
              <ul className="flex gap-[40px] items-center justify-center">
                <li className="nav-item">
                  <Link className="navlink" href="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="navlink" href="#">
                    Team
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="navlink" href="#">
                    Service
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="navlink" href="#">
                    Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="navlink" href="/contact">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href={"/login"} className="btnLogin">
                    Login
                  </Link>
                </li>
                <li>
                  <Link href={"/resister"} className="btnResister">
                    Resister
                  </Link>
                </li>
              </ul>
              {/* <div>
                {!!cookieToken || !!cookieGit ? (
                  <span className="myBtn" onClick={logoutControl}>
                    Logout
                  </span>
                ) : (
                  <Link href={"/login"} className="myBtn">
                    Login
                  </Link>
                )}
              </div> */}
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}
