function Navbar() {
  return (
    <header>
      <a className="logo-link" href="/">
        <img
          className="logo-image"
          src={`${process.env.PUBLIC_URL}/luto-icon.png`}
        />
        <div className="logo-title-section centered">
          <h1 className="logo-title">Lincoln</h1>
          <h2 className="logo-subtitle">Memórias</h2>
        </div>
      </a>

      <button className="music-button">
        Música <i class="fa-solid fa-play music-icon"></i>
      </button>
    </header>
  );
}

export default Navbar;
