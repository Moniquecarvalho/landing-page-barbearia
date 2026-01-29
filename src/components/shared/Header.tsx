import logoBarbearia from "../../assets/logo-barbearia.jpg";

const Header = () => {
  return (
    <header className="flex  justify-between items-center px-6 py-4 fixed top-0 left-0 right-0 bg-[#0A0A0A] backdrop-blur-sm border-b border-[rgba(212,175,50,0.2)] z-50">
      <div className="flex items-center gap-2">
        <img
          src={logoBarbearia}
          alt="Logo da Barbearia que é uma navalha"
          className="w-10 h-10 rounded object-cover"
        />
        <span className="text-white"> Barbearia WorkShop</span>
      </div>

      <div>
        <nav className="flex items-center">
          <ul className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 w-full md:w-auto justify-center">
            <li className="text-white hover:text-yellow-primary transition-colors duration-300 text-left md:text-center py-2 md:py-0 cursor-pointer">
              Início
            </li>
            <li className="text-white hover:text-yellow-primary transition-colors duration-300 text-left md:text-center py-2 md:py-0 cursor-pointer">
              Serviços
            </li>
            <li className="text-white hover:text-yellow-primary transition-colors duration-300 text-left md:text-center py-2 md:py-0 cursor-pointer">
              Contato
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
