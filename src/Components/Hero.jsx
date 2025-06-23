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
        <h1>E N E R G Y&nbsp;&nbsp; S O C I E T Y</h1>
        <h2>Indian Institute Of Technology, Delhi </h2>
        <p className="tagline">The Energy Society, IIT Delhi is a dynamic student-led initiative committed to driving awareness, innovation, and action in the energy sector. With a strong focus on sustainable development and cutting-edge technology, the society bridges the gap between academia, industry, and policy. Through workshops, lectures, research projects, and flagship events like Energy Hackathon, we aim to foster interdisciplinary collaboration and empower students to become future leaders in the energy landscape.</p>
      </div>
    </div>
  );
};

export default Hero;