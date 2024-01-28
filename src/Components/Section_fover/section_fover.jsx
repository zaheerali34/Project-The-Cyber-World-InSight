import Footer from "../Footer/Footer";

function Section_Fover() {
  return (
    <>
      <section className="section section_fover_bg">
        <div className="mine_bar flex container">
          <div className="section_box">
            <div className="box_section_text">
              <h2>Expert In-Depth Analysis</h2>
              <p>
                Our team of seasoned experts provides in-depth analysis of the
                ever-evolving landscape where cyber, artificial intelligence and
                politics intersect. We dissect complex issues, decode emerging
                trends, and offer insightful perspectives contributing to
                informed decision-making and policy formulation.
              </p>
            </div>

            <input type="button" value="Explore Now" className="btn_nows"/>
          </div>

          <div className="section_box">
            <div className="box_section_text">
              <h2>Interactive Workshops Seminar</h2>
              <p>
                Engage with us through our interactive workshops and seminars.
                These sessions are designed to facilitate discussions, share
                expertise, and empower individuals to navigate the complexities
                of technology and politics effectively. Join us to enhance your
                knowledge and practical skills.
              </p>
            </div>
            <input type="button" value="Explore Now" className="btn_nows"/>
          </div>

          <div className="section_box">
            <div className="box_section_text">
              <h2>Research & Analysis</h2>
              <p>
                We conduct surveys and research projects that shed light on
                public opinions, attitudes, and trends related to technology and
                politics. Stay informed about shifting perspectives and emerging
                issues through our survey findings.
              </p>
            </div>
            <input type="button" value="Explore Now" className="btn_nows"/>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Section_Fover;
