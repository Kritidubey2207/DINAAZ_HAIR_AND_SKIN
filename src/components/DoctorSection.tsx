import doctorImg from "../assets/doc-Photoroom 1.png";
import arrow from "../icons/arrow.svg";

type Props = {
  openConsultation: () => void;
};

export default function DoctorSection({ openConsultation }: Props) {
  return (
    <section className="bg-[#f5f7f8] py-16 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <p className="text-[#0F7A7A] text-sm tracking-widest text-center mb-3">
          THE DOCTOR
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16">
          Treatment By An Award-Winning Dermatologist
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">

          {/* Left */}
          <div className="text-gray-600 text-sm leading-relaxed">
            <p className="mb-4">
              At Dinaaz Hair & Skin Clinic, every patient is treated under the leadership of Dr. Nazia Iqbal.
            </p>

            <ul className="list-disc pl-5 space-y-2">
              <li>Medical skin treatments</li>
              <li>Hair loss diagnosis</li>
              <li>Ethical dermatology</li>
            </ul>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src={doctorImg}
              className="h-[320px] sm:h-[400px] md:h-[480px] object-contain"
            />
          </div>

          {/* Card */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 shadow-sm flex flex-col justify-between min-h-[280px] md:min-h-[360px]">
            <p className="text-gray-600 text-sm">
              Every treatment decision is made by a qualified dermatologist.
            </p>

            <button
              onClick={openConsultation}
              className="mt-6 bg-[#F5A623] text-white py-3 px-6 rounded-full font-semibold hover:opacity-90 transition w-fit flex items-center gap-2"
            >
              Book A Consultation
              <img src={arrow} className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}