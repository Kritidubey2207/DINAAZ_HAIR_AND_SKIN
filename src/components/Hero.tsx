import heroImg from "../assets/hero.jpg";
import arrow from "../icons/arrow.svg";

type Props = {
  openConsultation: () => void;
};

export default function Hero({ openConsultation }: Props) {
  const handleCall = () => {
    alert("Calling clinic...");
  };

  return (
    <section className="relative overflow-hidden">
      <div
        className="relative min-h-[600px] md:min-h-[720px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F7A7A]/90 via-[#0F7A7A]/60 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-white">
          <div className="max-w-xl text-center md:text-left">

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
              Dermatologist-Led <br />
              Hair & Skin Treatments <br />
              You Can Trust
            </h1>

            <p className="text-base sm:text-lg text-white/90 mb-8">
              Medical-grade diagnosis and personalized treatment for hair loss,
              skin conditions, and aesthetic concerns.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={handleCall}
                className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-[#0F7A7A] transition flex items-center justify-center gap-2"
              >
                Call The Clinic
                <img src={arrow} className="w-4 h-4" />
              </button>

              <button
                onClick={openConsultation}
                className="bg-[#F5A623] px-6 py-3 rounded-full font-semibold shadow-md hover:opacity-90 transition flex items-center justify-center gap-2"
              >
                Book A Consultation
                <img src={arrow} className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="relative -mt-10 bg-white shadow-md transform -skew-y-2 py-4 z-20">
        <div className="skew-y-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-sm sm:text-base font-medium">
          <span>✓ Award-Winning Dermatologist</span>
          <span>✓ 10+ Years Ethical Practice</span>
          <span>✓ Nationally Recognized</span>
        </div>
      </div>
    </section>
  );
}