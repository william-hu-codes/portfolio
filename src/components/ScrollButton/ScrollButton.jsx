import { useState, useEffect } from "react"
import { FaHandPointUp } from "react-icons/fa"
import "./ScrollButton.css"

export default function ScrollButton() {

    // const [showsScrolBtn, setShowScrolBtn] = useState(false);

    // useEffect(() => {
    //     function handleButtonVisibility() {
    //       window.pageYOffset > 300 ? setShowScrolBtn(true) : setShowScrolBtn(false);
    //     };
      
    //     window.addEventListener("scroll", handleButtonVisibility);
    //     return () => {
    //       window.addEventListener("scroll", handleButtonVisibility);
    //     };
    //   }, []);

    return (
        <div
            id="scrollToTop"
            onClick={() => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
            });
        }}
        >
        <FaHandPointUp id="scroll-up-icon" />
        </div>
    );
    
    
}