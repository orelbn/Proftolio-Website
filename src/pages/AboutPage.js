import myselfImg from "../img/myself.svg";

const AboutPage = () => {
  return (
    <div>
      <div className="gradient"></div>
      <div className="gradient"></div>
      <div className="section-dkcyan">
        <section id="about">
          <h2> About Orel Ben Neriah </h2>

          <article>
            <div className="text">
              <h3> Who I am </h3>
              <p className="blackbox">
                My name is Orel, I am a computer science student at the
                University of British Columbia in the BCS program. I have a
                bachelors degree in Criminology from Simon Fraser University. I
                am fairly new to the world of programming and computer science!
                So far the main coding languages I utilize are C, C++, Java,
                JavaScript and Python. My interests outside of Computer Science,
                include hot chocolate, self-growth, yoga, mediation, anime,
                mixed martial arts, baking, cooking and much more.
              </p>
              <h4> Fields of Interests : </h4>
              <ul>
                <li> Cybersecurity</li>
                <li> Full Stack Development</li>
              </ul>
            </div>
            <img src={myselfImg} alt="Image of Orel" />
          </article>
        </section>
      </div>

      <div className="gradient"></div>
    </div>
  );
};

export default AboutPage;
