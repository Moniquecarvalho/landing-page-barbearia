import {
  Scissors,
  User,
  Package,
  Eye,
  Palette,
  Footprints,
} from "lucide-react";
import { ServiceCard } from "./ServiceCard";
import { Button } from "./shared/Button";

export const Services = () => {
  const services = [
    {
      icon: <Scissors size={24} />,
      title: "Corte Masculino",
      description:
        "Corte personalizado com técnicas modernas e acabamento impecável",
      price: "R$ 35",
    },
    {
      icon: <User size={24} />,
      title: "Barba Completa",
      description:
        "Design, aparação e hidratação para deixar sua barba perfeita",
      price: "R$ 30",
    },
    {
      icon: <Package size={24} />,
      title: "Corte + Barba",
      description: "Combo completo com corte de cabelo e barba alinhada",
      price: "R$ 60",
    },
    {
      icon: <Eye size={24} />,
      title: "Sobrancelha",
      description: "Design e alinhamento profissional de sobrancelhas",
      price: "R$ 15",
    },
    {
      icon: <Palette size={24} />,
      title: "Pigmentação",
      description: "Pigmentação capilar para cobertura de fios brancos",
      price: "R$ 40",
    },
    {
      icon: <Footprints size={24} />,
      title: "Pezinho",
      description: "Acabamento perfeito na nuca e contornos",
      price: "R$ 10",
    },
  ];
  return (
    <section className="py-16 lg:py-24 bg-[#0A0A0A]" id="services">
      <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-white mb-1">Serviços</h2>
          <div className="mx-auto mt-1 h-0.5 w-20 bg-linear-to-r from-transparent via-yellow-primary to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 ">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              price={service.price}
            />
          ))}
        </div>

        <div className="flex justify-center pt-8">
          <Button
            variant="primary"
            onClick={() =>
              window.open("https://wa.me/5511999999999", "_blank")
            }
          >
            Quero agendar
          </Button>
        </div>
      </div>
    </section>
  );
};
