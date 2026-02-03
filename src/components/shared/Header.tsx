import logoBarbearia from "../../assets/logo-barbearia.jpg";
import { Button } from "./Button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="flex  justify-between items-center px-6 py-4 fixed top-0 left-0 right-0 bg-[#0A0A0A] backdrop-blur-sm border-b border-[rgba(212,175,5,0.2)] z-50">
      <div className="flex items-center gap-2">
        <img
          src={logoBarbearia}
          alt="Logo da Barbearia que é uma navalha"
          className="w-10 h-10 rounded object-cover"
        />
        <span className="text-white"> Barbearia WorkShop</span>
      </div>

      <div>
        <nav className="hidden md:flex items-center">
          <ul className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 w-full md:w-auto justify-center">
            <li
              className="text-white hover:text-yellow-primary transition-colors duration-300 text-left md:text-center py-2 md:py-0 cursor-pointer"
              onClick={() => scrollToSection("hero")}
            >
              Início
            </li>
            <li
              className="text-white hover:text-yellow-primary transition-colors duration-300 text-left md:text-center py-2 md:py-0 cursor-pointer"
              onClick={() => scrollToSection("services")}
            >
              Serviços
            </li>
            <li
              className="text-white hover:text-yellow-primary transition-colors duration-300 text-left md:text-center py-2 md:py-0 cursor-pointer"
              onClick={() => scrollToSection("contact")}
            >
              Contato
            </li>
            <li>
              <Button
                variant="primary"
                onClick={() => {
                  window.open("https://wa.me/5511999999999", "_blank");
                }}
              >
                Agendar
              </Button>
            </li>
          </ul>
        </nav>

        {/* Botão Hamburguer Mobile */}
        <button
          className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Menu Mobile */}
      <nav
        className={`md:hidden absolute top-full left-0 right-0 overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-4 pb-4 gap-4 bg-[#0A0A0A]">
          <li
            className="text-white hover:text-yellow-primary transition-colors duration-300 cursor-pointer py-2 border-b border-[rgba(212,175,55,0.1)]"
            onClick={() => scrollToSection("hero")}
          >
            Inicio
          </li>
          <li
            className="text-white hover:text-yellow-primary transition-colors duration-300 cursor-pointer py-2 border-b border-[rgba(212,175,55,0.1)]"
            onClick={() => scrollToSection("services")}
          >
            Serviços
          </li>
          <li
            className="text-white hover:text-yellow-primary transition-colors duration-300 cursor-pointer py-2 border-b border-[rgba(212,175,55,0.1)]"
            onClick={() => scrollToSection("contact")}
          >
            Contato
          </li>
          <li className="pt-2">
            <Button
              variant="primary"
              className="w-full"
              onClick={() => {
                window.open("https://wa.me/5511999999999", "_blank");
              }}
            >
              Agendar
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
