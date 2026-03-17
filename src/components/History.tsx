import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const timeline = [
  {
    year: "1703",
    title: "Три дня — и дом готов",
    text: "В мае 1703 года, сразу после взятия шведской крепости Ниеншанц, Пётр I лично выбрал место на Городском острове. Солдаты срубили домик всего за три дня — он стал первым жилым строением будущего Петербурга.",
  },
  {
    year: "1704",
    title: "Штаб новой столицы",
    text: "Отсюда Пётр руководил строительством Петропавловской крепости и Адмиралтейства, принимал послов и планировал военные кампании. Скромный домик был настоящим сердцем рождающегося города.",
  },
  {
    year: "1723",
    title: "Первый охранный указ",
    text: "Пётр I издал указ о сохранении домика как памятника. Вокруг была возведена деревянная галерея-«футляр» — одна из первых в России мер по охране исторического здания.",
  },
  {
    year: "1844",
    title: "Каменный чехол",
    text: "По приказу Николая I хрупкий деревянный домик заключили в каменный павильон с арочными галереями. Архитектор Роман Кузьмин создал строгое неоклассическое обрамление, сохранив оригинал нетронутым.",
  },
  {
    year: "1930",
    title: "Советский музей",
    text: "После революции домик получил статус государственного музея. В 1930-х годах была проведена масштабная реставрация: учёные восстановили первоначальный облик интерьеров по историческим описаниям.",
  },
  {
    year: "Сегодня",
    title: "Филиал Русского музея",
    text: "Домик Петра I входит в состав Государственного Русского музея. Ежегодно его посещают десятки тысяч человек — чтобы увидеть подлинные вещи царя и прикоснуться к истокам великого города.",
  },
];

export default function History() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={container} className="bg-white px-6 py-24 lg:py-32">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <p className="text-xs uppercase tracking-widest text-neutral-400 mb-4">1703 — наши дни</p>
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-neutral-900 leading-tight">
            ИСТОРИЯ<br />СОЗДАНИЯ
          </h2>
        </div>

        <div className="relative flex gap-12 lg:gap-20">
          <div className="hidden md:flex flex-col items-center pt-2">
            <div className="relative w-px bg-neutral-200 flex-1">
              <motion.div
                style={{ height: lineHeight }}
                className="absolute top-0 left-0 w-full bg-neutral-900 origin-top"
              />
            </div>
          </div>

          <div className="flex flex-col gap-0 flex-1">
            {timeline.map((item, i) => (
              <div
                key={item.year}
                className="relative flex gap-8 pb-16 last:pb-0"
              >
                <div className="hidden md:flex flex-col items-center absolute -left-[3.25rem] lg:-left-[4.25rem] top-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-900 ring-4 ring-white" />
                </div>

                <div className="flex flex-col gap-3">
                  <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                    {item.year}
                  </span>
                  <h3 className="text-xl lg:text-2xl font-semibold text-neutral-900">
                    {item.title}
                  </h3>
                  <p className="text-neutral-500 leading-relaxed max-w-2xl">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
