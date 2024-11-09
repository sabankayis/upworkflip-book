import React, { useState,useEffect }  from "react";
import HTMLFlipBook from "react-pageflip";
import "./flip.css";

const FlipBook = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [dimensions, setDimensions] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  
    // Ekran boyutunu kontrol etme ve boyutları güncelleme
    useEffect(() => {
      const checkIfMobile = () => {
        setIsMobile(window.innerWidth <= 768); // 768px altındaki cihazlar mobil kabul edilir
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };
  
      window.addEventListener('resize', checkIfMobile);
      checkIfMobile(); // İlk renderda boyutu kontrol et
  
      return () => window.removeEventListener('resize', checkIfMobile);
    }, []);
  return (

    <HTMLFlipBook
      width={isMobile ? dimensions.width * 0.9 : dimensions.width * 0.8} // Mobilde biraz küçültüyoruz
      height={isMobile ? dimensions.height * 1 : dimensions.height * 1} // Yüksekliği de ayarlıyoruz
      size={isMobile ? 'fixed' : 'stretch'} // Mobilde 'contain', masaüstünde 'stretch'
      maxShadowOpacity={0.6}
      pageFlipSpeed={800}
      mobileScrollSupport={true}
    >
      <div className="page">Page 1</div>
      <div className="page">Page 2</div>
      <div className="page">Page 3</div>
      <div className="page">Page 5</div>
      <div className="page">Page 6</div>
      <div className="page">Page 7</div>
      <div className="page">Page 8</div>
      <div className="page">Page 9</div>
    </HTMLFlipBook>
  );
};

export default FlipBook;
