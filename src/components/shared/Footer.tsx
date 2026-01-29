import { Instagram, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className=" bg-[#0A0A0A] text-white py-8 px-6 border-t border-[rgba(212,175,55,0.2)]">
      <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex justify-around text-[#A0A0A0] text-sm text-center md:text-left">
            <p>
              © {new Date().getFullYear()} Barbearia WorkShop. Todos os direitos
              reservados.
            </p>
          </div>
          <ul className="flex flex-row items-center gap-6">
            <li>
              <a
                href="https://www.instagram.com/barbearianavalha/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex text-[#A0A0A0] hover:text-yellow-primary transition-colors duration-300"
              >
                <Instagram size={20} />
                <span className="text-sm ml-2">Instagram</span>
              </a>
            </li>

            <li>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex text-[#A0A0A0] hover:text-yellow-primary transition-colors duration-300"
              >
                <Phone size={20} />
                <span className="text-sm ml-2">WhatsApp</span>
              </a>
            </li>

            <li>
              <a
                href="https://maps.google.com/?q=Barbearia+Navalha"
                target="_blank"
                rel="noopener noreferrer"
                className="flex text-[#A0A0A0] hover:text-yellow-primary transition-colors duration-300"
              >
                <MapPin size={20} />
                <span className="text-sm ml-2">Localização</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
