export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg rounded">
      <div className="container-fluid">
        {/* Left-aligned logo */}
        <a className="navbar-brand" href="/">
          <img src="./images/bg3.jpg" alt="logo" height="80" width="120" />
        </a>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Right-aligned nav items */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active text-black rounded" aria-current="page" href="/">
                <b>Home</b>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black rounded" href="/share">
                <b>Share</b>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black rounded" href="/upload">
                <b>Upload</b>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black rounded" href="/giveaccess">
                <b>Give Access</b>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black rounded" href="/cancelaccess">
                <b>Cancel Access</b>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black rounded" href="/viewcertificates">
                <b>View Files</b>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black rounded" href="/verify">
                <b>Save</b>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
