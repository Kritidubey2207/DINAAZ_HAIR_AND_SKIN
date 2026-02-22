import ellipseLeft from "../assets/Group 9 (2).png";
import ellipseRight from "../assets/Group 8 (1).png";
import arrow from "../icons/arrow.svg"

type Props = {
  openConsultation: () => void;
};

export default function ConsultSection({ openConsultation }: Props) {
  return (
    <section className="bg-[#f5f7f8] py-16 sm:py-20 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Left Ellipse */}
        <img
          src={ellipseLeft}
          alt=""
          className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-48 lg:w-60"
        />

        {/* Right Ellipse */}
        <img
          src={ellipseRight}
          alt=""
          className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-48 lg:w-60"
        />

        {/* Center Content */}
        <div className="max-w-lg mx-auto text-center relative z-10">

          <p className="text-[#1f9ca3] text-sm tracking-widest mb-2">
            CONSULT US
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Not Sure What <br className="hidden sm:block" />
            Treatment You Need?
          </h2>

          <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
            Hair and skin concerns can be confusing. A proper diagnosis can save
            time, money, and prevent unnecessary procedures.
          </p>

          {/* Form */}
          <form className="flex flex-col gap-3 w-full">
            <input
              className="bg-[#eef3f4] p-3 rounded w-full"
              placeholder="Full Name"
            />
            <input
              className="bg-[#eef3f4] p-3 rounded w-full"
              placeholder="Phone Number"
            />
            <input
              className="bg-[#eef3f4] p-3 rounded w-full"
              placeholder="Email ID"
            />

            <button
              type="button"
              onClick={openConsultation}
              className="bg-[#F5A623] text-white py-3 rounded-full font-semibold hover:opacity-90 transition w-full sm:w-auto sm:mx-auto"
            >
              Book A Consultation <img src={arrow} className="w-4 h-4" />
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}