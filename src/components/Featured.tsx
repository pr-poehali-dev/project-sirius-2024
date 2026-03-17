export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/cf9ed0c2-01ef-4f1b-a4f3-6f9ab817eb00/files/2f5ed9dd-2628-4274-8962-cb186a6ea682.jpg"
          alt="Интерьер Домика Петра I"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Архитектура и интерьер · 1703 год</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Небольшой деревянный дом, срубленный солдатами всего за три дня. Внутри — подлинные вещи Петра: стол, кресло, верстак. Скромное жилище человека, строившего флот и империю.
        </p>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Узнать историю
        </button>
      </div>
    </div>
  );
}