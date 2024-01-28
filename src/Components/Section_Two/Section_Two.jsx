import Section_There from "../Section_There/Section_There";

function Section_Two() {
  return (
    <>
      <section className="section">
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

            <div className="link"></div>
            <button>Explore Now</button>
          </div>

          <div className="section_box">
            <div className="box_section_text">
              <h2>Interactive Workshops And Seminars</h2>
              <p>
              Engage with us through our interactive workshops and seminars. These sessions are designed to facilitate discussions, share expertise, and empower individuals to navigate the complexities of technology and politics effectively. Join us to enhance your knowledge and practical skills. 
              </p>
            </div>

            <div className="link"></div>
            <button>Explore Now</button>
          </div>

          <div className="section_box">
            <div className="box_section_text">
              <h2>Research & Analysis</h2>
              <p>
              We conduct surveys and research projects that shed light on public opinions, attitudes, and trends related to technology and politics. Stay informed about shifting perspectives and emerging issues through our survey findings.
              and trends related to technology and politics. Stay informed about shifting perspectives and
              </p>
            </div>

            <div className="link"></div>
            <button>Explore Now</button>
          </div>
        </div>
      </section>

      <Section_There />
    </>
  );
}

export default Section_Two;
