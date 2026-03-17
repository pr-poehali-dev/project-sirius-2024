const features = [
  {
    label: "Народное зодчество",
    description:
      "Домик срублен из сосновых брёвен по традициям северорусского деревянного зодчества. Никаких архитектурных излишеств — только функциональность и природный материал.",
  },
  {
    label: "Голландский акцент",
    description:
      "Пётр привнёс европейские детали: двускатная крыша имитирует черепицу (на самом деле — выкрашенная доска), а фасад расписан под кирпичную кладку — дань голландской архитектуре.",
  },
  {
    label: "Скромные пропорции",
    description:
      "Длина — 12 метров, ширина — 5 метров. Два небольших помещения: рабочий кабинет и столовая. Потолки низкие — Пётр при росте 2 метра был вынужден наклонять голову.",
  },
  {
    label: "Подлинный интерьер",
    description:
      "Сохранились личные вещи царя: токарный станок, верстак, кресло, посуда. Стены обиты парусиной — лёгкий и практичный материал для временного жилья первостроителя.",
  },
  {
    label: "Каменный футляр",
    description:
      "В 1844 году по приказу Николая I вокруг домика возвели защитный каменный чехол с галереей. Он уберёг хрупкое дерево от влаги и времени — и стоит по сей день.",
  },
  {
    label: "Охра и белый",
    description:
      "Традиционный цвет фасада — тёплая охра с белыми деталями наличников. Эта палитра перекликается с ранними петербургскими постройками петровского барокко.",
  },
];

export default function Style() {
  return (
    <div className="bg-neutral-950 px-6 py-24 lg:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <h2 className="text-white text-4xl lg:text-6xl font-bold tracking-tight leading-tight">
            ОСОБЕННОСТИ<br />СТИЛЯ
          </h2>
          <p className="text-neutral-400 text-base lg:text-lg max-w-md">
            Маленький дом, в котором читается вся эпоха петровских преобразований
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-800">
          {features.map((item) => (
            <div
              key={item.label}
              className="bg-neutral-950 p-8 flex flex-col gap-4 hover:bg-neutral-900 transition-colors duration-300"
            >
              <span className="text-xs uppercase tracking-widest text-neutral-500">
                —
              </span>
              <h3 className="text-white text-lg font-semibold">{item.label}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
