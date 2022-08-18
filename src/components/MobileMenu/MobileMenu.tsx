const MobileMenu = () => {
  return (
    <nav className="absolute top-[5.5rem] right-8 flex items-center w-56 h-[11.625rem] bg-dark-blue text-white text-btn">
      <div className="w-full h-[6.625rem] flex flex-col justify-between items-center">
        <a href="/">HOME</a>
        <a href="#">PORTFOLIO</a>
        <a href="#">CONTACT ME</a>
      </div>
    </nav>
  );
};

export default MobileMenu;
