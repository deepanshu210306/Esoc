import "./Hero.css";
import headerClip from "./header_clip.mp4";

const Hero = () => {
  return (
    <div className="hero">
      <video
        autoPlay
        muted
        loop
        className="hero-video"
      >
        <source src={headerClip} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content">
        <h1>E N E R G Y   S O C I E T Y</h1>
        <h2>IIT Delhi</h2>
        <p className="tagline">Energy society is a .....................</p>
      </div>
    </div>
  );
};

export default Hero;