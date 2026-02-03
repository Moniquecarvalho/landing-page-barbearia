import { useState } from "react";

export default function Hours() {
  // Quantos dias a partir de hoje serão mostrados
  const daysAhead = 7;

  // Horários de segunda a sexta (sem 12:00 para almoço)
  const weekdaySlots = [
    "09:00",
    "10:00",
    "11:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
  ];
  // Horários de sábado (até 16:00)
  const saturdaySlots = ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00"];

  // Retorna a lista de horários de acordo com o dia da semana
  const getSlotsForDay = (day: number) => {
    // 0 = domingo, 6 = sábado
    if (day === 0 || day === 1) return [];
    if (day === 6) return saturdaySlots;
    return weekdaySlots;
  };

  // Gera os próximos dias com textos já formatados
  const dates = Array.from({ length: daysAhead }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);

    const weekday = new Intl.DateTimeFormat("pt-BR", { weekday: "long" }).format(d);
    const dateText = new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "2-digit" }).format(d);
    const key = d.toISOString().split("T")[0];

    return { key, weekday, dateText, day: d.getDay() };
  });

  // Guarda horários já escolhidos para bloquear no front-end
  const [unavailable, setUnavailable] = useState<string[]>([]);

  // Quando o usuário clica, marca indisponível e abre o WhatsApp
  const handleSelect = (dateKey: string, weekday: string, dateText: string, time: string) => {
    const id = `${dateKey}_${time}`;
    if (unavailable.includes(id)) return;

    setUnavailable((prev) => [...prev, id]);

    const msg = `Olá! Quero agendar ${weekday} (${dateText}) às ${time}.`;
    const url = `https://wa.me/5511999999999?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="hours" className="py-16 bg-[#0A0A0A]">
      <div className="text-center mb-6">
        <h2 className="text-white">Horários disponíveis</h2>
        <div className="mx-auto mt-1 h-0.5 w-42 bg-gradient-to-r from-transparent via-yellow-primary to-transparent"></div>
      </div>

      <div className="max-w-360 mx-auto px-4 grid gap-6">
        {/* Cada card representa um dia */}
        {dates.map((date) => (
          <div
            key={date.key}
            className="bg-[#1A1A1A] border border-[rgba(212,175,55,0.2)] rounded-lg p-6
            hover:border-yellow-primary transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]
            group"
          >
            <h3 className="text-white mb-4 capitalize">
              {date.weekday} ({date.dateText})
            </h3>

            {/* Se não tiver horários, mostra "Fechado" */}
            {getSlotsForDay(date.day).length === 0 ? (
              <p className="text-[#A0A0A0] text-sm">Fechado</p>
            ) : (
              <div className="grid grid-cols-3 gap-2">
                {getSlotsForDay(date.day).map((time) => {
                  const id = `${date.key}_${time}`;
                  const disabled = unavailable.includes(id);

                  return (
                    <button
                      key={id}
                      onClick={() =>
                        handleSelect(date.key, date.weekday, date.dateText, time)
                      }
                      disabled={disabled}
                      className={`py-2 rounded text-sm ${
                        disabled ? "bg-[#333] text-[#777]" : "bg-yellow-primary text-black"
                      }`}
                    >
                      {time}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
