import { Button } from "./shared/Button";
import heroBarber from "../assets/hero-barbershop.jpg";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="h-screen w-full flex items-center bg-[#0A0A0A] relative overflow-hidden"
    >

      <div className="absolute inset-0 z-0">
        <img
          src={heroBarber}
          alt="Barbearia Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#0A0A0A] via-[#0A0A0A]/95 to-[#0A0A0A]/80"></div>
        <div className="absolute inset-0 bg-[#0A0A0A]/40"></div>
      </div>

      <div className="max-w-1440px mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">

          <div className="flex flex-col gap-6 lg:gap-8">
            <h1 className="text-white drop-shadow-lg">
              Corte na régua, barba alinhada e atendimento de respeito.
            </h1>

            <p className="text-[#A0A0A0] text-lg max-w-xl drop-shadow-md">
              Transforme seu visual em nossa barbearia. Profissionais
              especializados, ambiente premium e serviço de excelência para o
              homem moderno.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                onClick={() =>
                  window.open("https://wa.me/5585999999999", "_blank")
                }
              >
                Agendar no WhatsApp
              </Button>
              <Button
                variant="secondary"
                onClick={() => scrollToSection("services")}
              >
                Ver serviços
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
