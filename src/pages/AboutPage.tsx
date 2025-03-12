import myselfImg from "../img/myself.svg";

const AboutPage = () => {
  return (
    <div>
      <div className="gradient"></div>
      <div className="gradient"></div>
      <div className="section-dkcyan">
        <section id="about">
          <h2> About Orel </h2>

          <article>
            <div className="text">
              <h3> Who I am </h3>
              <p className="blackbox">
                I'm Orel, your friendly neighborhood mad scientist, ready to
                unleash my diabolical technology on an unsuspecting world
                &#x1F608;! By day, I'm a working on Stride, but by night, I'm
                plotting world domination one line of code at a time!
                <br />
                <br />
                The main coding languages I utilize are TypeScript, C++, Python
                and Java. My interests outside of Computer Science, include Hot
                Chocolate &#x2615;, Physical Fitness &#x1F3CB;, Mixed Martial
                Arts &#x1F94B;, Mediation &#x1F9D8;, and Cooking &#x1F95E;.
              </p>
              <h4> Fields of Interests : </h4>
              <ul>
                <li> Entrepreneurship </li>
                <li> Web Development</li>
                <li> Cyber Security</li>
              </ul>
            </div>
            <img
              src={myselfImg}
              width="500px"
              height="500px"
              alt="Image of Orel"
            />
          </article>
        </section>
      </div>

      <div className="gradient"></div>
    </div>
  );
};

export default AboutPage;
