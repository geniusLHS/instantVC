import logo from './../images/logo.png';

function Header() {
  return (
    <nav className="mb-8 flex flex-col items-center justify-end border-b-2 border-black bg-white">
      <a href="." className="inline-flex items-center text-4xl font-bold text-black">
        {/* <img src={logo} alt="logo" className="h-6" /> */}
        INVOICE
      </a>
    </nav>
  );
}

export default Header;
