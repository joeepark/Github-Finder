function Footer() {
  const footerDate = new Date().getFullYear();
  return (
    <footer className="footer items-center p-4 bg-neutral text-neutral-content footer-center">
      <div className="items-center">
        <p>Copyright © {footerDate} - All right reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
