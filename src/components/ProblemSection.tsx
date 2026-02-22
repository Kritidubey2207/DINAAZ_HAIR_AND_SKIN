import problem1 from "../assets/Frame 1707335240.png";
import problem2 from "../assets/Frame 1707335242.png";
import problem3 from "../assets/Frame 1707335243.png";

import card1 from "../assets/Frame 1707335244.png";
import card2 from "../assets/Frame 1707335248.png";
import card3 from "../assets/Frame 1707335249.png";
import card4 from "../assets/Frame 1707335250.png";

import frame from "../assets/Group 9.png";

export default function ProblemSection() {
  const handleConsult = () => {
    alert("Book Consultation clicked");
  };

  return (
    <>
      {/* ================= PROBLEM SECTION ================= */}
      <section className="bg-[#E9F2F3] pt-24 pb-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative">

          <p className="text-[#0F7A7A] text-sm tracking-widest mb-3">
            THE REAL PROBLEM
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-10 leading-tight">
            Why Most Hair & Skin <br /> Treatments Fail
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* Left Text */}
            <div className="text-gray-600 space-y-4 max-w-xl">
              <p>Many patients come to us after trying:</p>

              <ul className="list-disc pl-5 space-y-2">
                <li>Salon treatments with no diagnosis</li>
                <li>One-size-fits-all packages</li>
                <li>Expensive procedures without understanding the root cause</li>
              </ul>

              <p>
                Skin and hair problems often look similar but require very different
                medical treatments. Without proper diagnosis, results are unpredictable.
              </p>
            </div>

            {/* Right Floating Visuals */}
            <div className="relative h-[520px]">

              {/* Center Circle */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                              w-64 h-64 rounded-full bg-[#DCEFF2] 
                              flex items-center justify-center text-center px-6 shadow-md z-10">
                <p className="text-gray-700 text-sm">
                  At <span className="text-[#0F7A7A] font-semibold">Dinaaz</span>, we start with
                  medical understanding,<br />
                  <span className="text-[#D88A2D] font-semibold">not assumptions.</span>
                </p>
              </div>

              {/* Image 1 */}
              <div className="absolute top-[0%] right-[8%] w-40 text-center">
                <img
                  src={problem1}
                  className="w-40 h-40 object-cover rounded-full shadow-lg mx-auto"
                />
                <p className="text-xs text-gray-600 mt-2">
                  Salon treatments with no diagnosis
                </p>
              </div>

              {/* Image 2 */}
              <div className="absolute bottom-[0%] left-[8%] w-40 text-center">
                <img
                  src={problem2}
                  className="w-40 h-40 object-cover rounded-full shadow-lg mx-auto"
                />
                <p className="text-xs text-gray-600 mt-2">
                  Expensive procedures without understanding the root cause
                </p>
              </div>

              {/* Image 3 */}
              <div className="absolute bottom-[12%] right-[0%] w-40 text-center">
                <img
                  src={problem3}
                  className="w-40 h-40 object-cover rounded-full shadow-lg mx-auto"
                />
                <p className="text-xs text-gray-600 mt-2">
                  One-size-fits-all packages
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* ================= WHAT SETS US APART ================= */}
      <section className="bg-[#E9F2F3] pt-10 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative">

          {/* Floating Frame Circle */}
          <img
            src={frame}
            alt="highlight"
            className="absolute left-0 top-0 w-64 opacity-90 pointer-events-none"
          />

          <p className="text-[#0F7A7A] text-sm tracking-widest text-center mb-2">
            KEY DIFFERENCES
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-center mb-14">
            What Sets Us Apart
          </h2>

          {/* Cards */}
          <div className="grid md:grid-cols-4 gap-8 mb-14 items-stretch">

            {/* Card 1 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col">
              <img src={card1} className="mb-4 w-full h-44 object-cover rounded-lg" />
            
            
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col">
              <img src={card2} className="mb-4 w-full h-44 object-cover rounded-lg" />
             
             
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col">
              <img src={card3} className="mb-4 w-full h-44 object-cover rounded-lg" />
             
             
            </div>

            {/* Card 4 (Right aligned content) */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col text-right">
              <img src={card4} className="mb-4 w-full h-44 object-cover rounded-lg" />
              
              
            </div>

          </div>

          {/* CTA */}
          <div className="flex justify-center">
            <button
              onClick={handleConsult}
              className="bg-[#D88A2D] text-white px-12 py-4 rounded-full font-medium text-lg shadow-md hover:opacity-90 transition"
            >
              Book A Consultation ↗
            </button>
          </div>

        </div>
      </section>
    </>
  );
}