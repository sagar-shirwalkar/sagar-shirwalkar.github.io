const Header = () => (
    <header className="bg-blue-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Jane Doe</h1>
        <nav>
          <a href="#about" className="text-white px-4 hover:underline">About</a>
          <a href="#skills" className="text-white px-4 hover:underline">Skills</a>
          <a href="#experience" className="text-white px-4 hover:underline">Experience</a>
          <a href="#contact" className="text-white px-4 hover:underline">Contact</a>
        </nav>
      </div>
    </header>
  );
  
  export default Header;