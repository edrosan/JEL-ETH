import { BentoElement } from "./BentoElement";

function Bento() {
    return (
      <div className="w-[800px] mx-auto grid  grid-cols-2 gap-4">
        <BentoElement
          alt="Logo Vara Network"
          src="/recursos/img/logo-vara.png"
          className="col-span-2 bg-gradient-to-r from-cyan-200 to-teal-300"
        />
        <BentoElement
          alt="Logo Gear"
          src="/recursos/img/logo-gear.png"
          className="bg-gradient-to-r from-blue-400 to-green-400"
        />
        <BentoElement
          alt="Logo ETH 5 de mayo"
          src="/recursos/img/logo-eth.png"
          className="bg-gradient-to-r from-gray-100 to-stone-100"
        />
        <BentoElement
          alt="Logo JEL: Team"
          src="/recursos/webp/logo.webp"
          className="col-span-2 bg-gradient-to-r from-fuchsia-400 to-indigo-500"
        />
      </div>
    );
  }

  export { Bento }