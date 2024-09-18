import HeroImg from "./assets/hero.svg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            I'm baby chillwave brunch JOMO, af deep v celiac paleo. Yuccie
            kinfolk master cleanse swag la croix +1 vape marfa drinking vinegar,
            helvetica ugh organic. Echo park farm-to-table freegan truffaut,
            occupy brunch palo santo typewriter gentrify cornhole pour-over
            cliche crucifix. Palo santo la croix man bun venmo bitters
            humblebrag.
          </p>
        </div>
        <div className="img-container">
          <img src={HeroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
