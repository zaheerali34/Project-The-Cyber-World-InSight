import Section_one from "../Section_one/Section_one";

function Home() {
  return (
    <>
      <div className="home_bar container">
        <div className="home_text flex">
          <h1>Cyber World Insigt</h1>

          <p>
          Welcome to Cyber World Insight, your premier destination at the crossroads of technology and politics. We are more than just a platform; we are a vibrant community of forward-thinkers, scholars, students, and practitioners passionate about unravelling the profound impact of technology on our societies, politics, and governance.
          </p>
        </div>

        <div className="home_box flex">
          <div className="text_box">
            <h3>Our Visoin</h3>
            <p>Our program cultivates critical thinking and effective written communication skills through thought-provoking debates, individual and collaborative projects, and opportunities to analyze diverse perspectives. Students will enhance their writing abilities and gain confidence in expressing their ideas in today's globalized world.</p>
          </div>

          <div className="text_box">
            <h3>Our Mission</h3>
            <p>We are committed to nurturing the next generation of leaders and thinkers. We believe that a well-informed and articulate generation is crucial for addressing the complex issues of the digital age. As part of this commitment,</p>
          </div>

          <div className="text_box">
            <h3>Expioring The Convergence</h3>
            <p>At Cyber World Insight, we embark on an intellectual journey to delve deep into these critical issues, fostering discussions that illuminate the challenges and opportunities technology presents in the realms of global politics and governance.</p>
          </div>
        </div>
      </div>
      <Section_one />
    </>
  );
}

export default Home;
