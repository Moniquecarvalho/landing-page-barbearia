

const Footer = () => {
    return (
        <footer className=" bg-[#0A0A0A] text-white py-8 px-6 border-t border-[rgba(212, 175, 50, 0.2)]">
            <div className="max-w-1440px mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex justify-around text-[#A0A0A0] text-sm text-center md:text-left">
                        <p>© {new Date().getFullYear()} Barbearia WorkShop. Todos os direitos reservados.</p>
                    </div>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-[#D4AF37] transition-colors duration-300">Instagram</a>
                        <a href="#" className="hover:text-[#D4AF37] transition-colors duration-300">Facebook</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;