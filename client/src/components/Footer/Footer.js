function Footer() {
  return (
    <div className="Footer">
      <div className="upper-footer">
        <div className="footer-wrapper">
          <div className="footer-fraction">
            <h1 className="footer-column">Client</h1>
            <a
              className="footer-column"
              href="https://github.com/HarryHagelberg404/code-trial/blob/main/CLIENT.md"
            >
              Assumptions
            </a>
          </div>
          <div className="footer-fraction">
            <h1 className="footer-column">Backend</h1>
            <a
              className="footer-column"
              href="https://github.com/HarryHagelberg404/code-trial/blob/main/BACKEND.md"
            >
              Assumptions
            </a>
          </div>
          <div className="footer-fraction">
            <h1 className="footer-column">Persistence</h1>
            <a
              className="footer-column"
              href="https://github.com/HarryHagelberg404/code-trial/blob/main/BACKEND.md"
            >
              Assumptions
            </a>
          </div>
          <div className="footer-fraction">
            <h1 className="footer-column">Testing</h1>
            <a
              className="footer-column"
              href="https://github.com/HarryHagelberg404/code-trial/blob/main/TESTING.md"
            >
              Assumptions
            </a>
          </div>
        </div>
      </div>
      <div className="lower-footer">
        <img id="footer-logo" src="./fortnox_logo_vit.svg" />
      </div>
    </div>
  );
}

export default Footer;
