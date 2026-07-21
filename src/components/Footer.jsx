const Footer = () => (
  <footer className="border-t border-paper/10 bg-ink text-paper/70">
    <div className="container-page flex flex-col items-center gap-2 py-10 text-center text-sm">
      <span className="font-display text-base font-bold tracking-widest text-paper">EVH</span>
      <p>&copy; {new Date().getFullYear()} Eastgate Venture Holdings (EVH). All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
