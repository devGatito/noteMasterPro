import React, { useState } from "react";
import SliderBar from "./SliderBar"; 
import Navbar from "./NavBar";
import CommentSlider from "./CommentSlider";  
const Layout: React.FC = () => {
  const [isSliderOpen, setSliderOpen] = useState(true);
  const [isCommentSliderOpen, setCommentSliderOpen] = useState(true);

  const toggleSlider = () => {
    setSliderOpen(!isSliderOpen);
    if (isCommentSliderOpen) setCommentSliderOpen(false);
     
  };

  const toggleCommentSlider = () => {
    setCommentSliderOpen(!isCommentSliderOpen);
    if (isSliderOpen) setSliderOpen(false); 
    
  };

  return (
    <div className="h-screen flex flex-col">
      <Navbar/>
      <SliderBar
        isOpen={isSliderOpen}
        toggleSidebar={toggleSlider}
      />
      <CommentSlider
        isOpen={isCommentSliderOpen}
        toggleSlider={toggleCommentSlider}
      />
    </div>
  );
};

export default Layout;
