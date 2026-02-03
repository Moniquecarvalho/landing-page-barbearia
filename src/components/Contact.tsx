import { MapPin, Clock, Phone } from "lucide-react";
import { Button } from "./shared/Button";

export const Contact = () => {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-[#0A0A0A]">
      <div className="text-center">
        <h2 className="text-white mb-1">Contato</h2>
        <div className="mx-auto mb-6 mt-1 h-0.5 w-22 bg-linear-to-r from-transparent via-yellow-primary to-transparent"></div>
      </div>
      <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8 bg-[#1A1A1A] rounded-lg py-8">
        <h3 className="mb-6 text-white">Informações</h3>

        <div className="flex items-start gap-4 mb-6">
          <div className="w-10 h-10 rounded-lg bg-yellow-primary/10 flex items-center justify-center text-yellow-primary shrink-0">
            <MapPin size={20} />
          </div>

          <div>
            <h4 className="text-white mb-1">Endereço</h4>
            <p className="text-[#A0A0A0]">Av. Principal, 123 - Centro</p>
          </div>
        </div>

        <div className="flex items-start gap-4 mb-6">
          <div className="w-10 h-10 rounded-lg bg-yellow-primary/10 flex items-center justify-center text-yellow-primary shrink-0">
            <Clock size={20} />
          </div>

          <div>
            <h4 className="text-white mb-1">Horário</h4>
            <p className="text-[#A0A0A0]">Seg a Sáb: 09:00–19:00</p>
          </div>
        </div>

        <div className="flex items-start gap-4 mb-6">
          <div className="w-10 h-10 rounded-lg bg-yellow-primary/10 flex items-center justify-center text-yellow-primary shrink-0">
            <Phone size={20} />
          </div>

          <div>
            <h4 className="text-white mb-1">WhatsApp</h4>
            <p className="text-[#A0A0A0]">(11) 99999-9999</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[rgba(212,175,55,0.1)]">
          <Button
            variant="primary"
            onClick={() =>
              window.open("https://wa.me/558599999999999", "_blank")
            }
            className="w-full bg-yellow-primary"
          >
            <div className="flex items-center justify-center gap-2">
              <Phone size={18} />
              Chamar no WhatsApp agora
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
};
