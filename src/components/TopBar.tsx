import arrow from "../icons/arrow.svg";
import logo from "../assets/logo (1).png";

type Props = {
  openConsultation: () => void;
};

export default function TopBar({ openConsultation }: Props) {
  return (
    <div className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between flex-wrap gap-3">

        {/* Logo */}
        <img
          src={logo}
          alt="Dinaaz"
          className="h-8 sm:h-10 object-contain"
        />

        {/* Button */}
          <button
          onClick={openConsultation}
          className="bg-[#F5A623] text-white px-5 sm:px-6 py-2 rounded-full font-medium hover:opacity-90 transition flex items-center gap-2 whitespace-nowrap"
        >
          Book a Consultation
          <img src={arrow} alt="arrow" className="w-4 h-4" />
        </button>


      </div>
    </div>
  );
}