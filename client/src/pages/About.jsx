import React from "react";
import Navbar from "../components/NavBar";
import Footer from '../components/Footer';
import HeadSection from "../components/HeadSeaction";

import aboutImage from "../assets/images/about.jpg";
import image1 from "../assets/images/about1.jpg";
import image2 from "../assets/images/cust-service.jpg";
import map from "../assets/images/map.png";

export default function About() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar />
      <HeadSection heading="About Us" imgSrc={aboutImage} />
      <div className="text-center text-xl mt-12 mb-12 px-64 font-medium">
      PAR Global, headquartered in Georgia-USA, is your one-stop solution for high-quality synthetic and natural fibre textiles, industrial and retail packaging products, chemicals, steel, and related accessories.      
      </div>

      <div className="text-center text-3xl mb-4 px-64 font-semibold">
      Dedicated to serving our clients  </div>

      <div className="text-center text-base mb-10 px-80 font-light">
      With over 100 years of combined experience and success in manufacturing, marketing and sales, we bring world class products to you as a partner in your success to build a partnership that lasts for generations. </div>
      
      <div className="text-center text-xl mb-6 px-96 font-medium">
      <span className="text-green-800">Integrity</span>,{" "}
      <span className="text-green-800">ownership</span>,{" "}
      <span className="text-green-800">excellence</span>,{" "}
      <span className="text-green-800">passion</span>, and{" "}
      <span className="text-green-800">customer satisfaction</span> are our core values.
      </div>

      <div className="w-3/5 mb-16"><img src={image2} alt="about" className="w-full h-full object-contain object-center" /></div>
      
      <div className="text-center text-green-900 text-2xl mb-2 px-64 font-semibold">
      We help you pave the way  </div>
      <div className="text-center text-base mb-10 px-80 font-light">
      Through research and technology, we continue to foster innovation for new and improved environmentally-safe products.</div>
      
      <div className="text-center text-green-900 text-2xl mb-2 px-64 font-semibold">
      Complete solutions  </div>
      <div className="text-center text-base mb-10 px-80 font-light">
      Ranging from road construction to modern agriculture </div>
      
      <div className="text-center text-green-900 text-2xl mb-2 px-64 font-semibold">
      Large clientele base  </div>
      <div className="text-center text-base mb-10 px-80 font-light">
      Across USA, Canada, India and Australia </div>
      

      <div className=" mb-16"><img src={map} alt="about" className="w-full h-full object-contain object-center" /></div>

      <Footer />
    </div>
  );
}
