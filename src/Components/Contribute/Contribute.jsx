import { Tuple } from "@reduxjs/toolkit";
import Section_Fover from "../Section_fover/section_fover";
import { motion } from "framer-motion";

function Contribute() {
  const transition = { duration: 0.7, type: "spring " };

  return (
    <>
      <section className="contribute">
        <div className="contribute_bar">
          <div className="flex_warp container flex">
            <div className="text_contribute">
              <h1>Why Cyber World 365</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                unde aperiam ab possimus molestias reprehenderit, quaerat
                similique officiis dolorem magni, earum dolorum, provident nisi
                quasi sit laudantium beatae blanditiis inventore esse quis.
                Vitae odit, repudiandae maiores quam soluta perspiciatis
                quisquam illum sed totam quis dolorum vel ut eius eligendi
                eveniet.
              </p>
            </div>

            <div className="text_box">
              <div className="text_table flex">
                <div className="box_in">
                  <h2>In-Depth Analyses</h2>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Magni repellendus ab nemo ducimus incidunt laborum minima
                    architecto est temporibus exercitationem?
                  </p>
                </div>

                <div className="box_in">
                  <h2>In-Depth Analyses</h2>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Magni repellendus ab nemo ducimus incidunt laborum minima
                    architecto est temporibus exercitationem?
                  </p>
                </div>
              </div>

              <div className="text_table flex">
                <div className="box_in">
                  <h2>In-Depth Analyses</h2>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Magni repellendus ab nemo ducimus incidunt laborum minima
                    architecto est temporibus exercitationem?
                  </p>
                </div>

                <div className="box_in">
                  <h2>In-Depth Analyses</h2>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Magni repellendus ab nemo ducimus incidunt laborum minima
                    architecto est temporibus exercitationem?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contribute_two">
          <div className="contr_bar flex container">
            <div className="sub_text">
              <h2>Submission Requrements For Our Coumminty</h2>
              <button className="btn_your">Submit Your Ariticles</button>
            </div>

            <div className="flex flex_warp">
              <div className="flex text_box">
                <div className="sub_two">
                  <motion.div
                    initial={{ opacity: 0, translateY: "120px" }}
                    whileInView={{ opacity: 1, translateY: "0" }}
                    transition={transition}
                    viewport={{ once: true }}
                    className="line_text flex"
                  >
                    <h2>01</h2>
                    <div className="line"></div>
                  </motion.div>
                  <motion.h1
                    initial={{ opacity: 0, translateY: "160px" }}
                    whileInView={{ opacity: 1, translateY: "0" }}
                    transition={transition}
                    viewport={{ once: true }}
                  >
                    Formating
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, translateY: "160px" }}
                    whileInView={{ opacity: 1, translateY: "0" }}
                    transition={transition}
                    viewport={{ once: true }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deleniti labore voluptate numquam sunt eos itaque, aliquid
                    commodi cumque? Reiciendis, sequi!
                  </motion.p>
                </div>

                <div className="sub_two">
                  <motion.div
                    initial={{ opacity: 0, translateY: "120px" }}
                    whileInView={{ opacity: 1, translateY: "0" }}
                    transition={transition}
                    className="line_text flex"
                    viewport={{ once: true }}
                  >
                    <h2>02</h2>
                    <div className="line"></div>
                  </motion.div>
                  <motion.h1
                    initial={{ opacity: 0, translateY: "160px" }}
                    whileInView={{ opacity: 1, translateY: "0" }}
                    transition={transition}
                    viewport={{ once: true }}
                  >
                    Formating
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, translateY: "160px" }}
                    whileInView={{ opacity: 1, translateY: "0" }}
                    transition={transition}
                    viewport={{ once: true }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deleniti labore voluptate numquam sunt eos itaque, aliquid
                    commodi cumque? Reiciendis, sequi!
                  </motion.p>
                </div>
              </div>

              <div className="flex text_box">
                <div className="sub_two">
                  <motion.div
                    initial={{ opacity: 0, translateY: "120px" }}
                    whileInView={{ opacity: 1, translateY: "0" }}
                    transition={transition}
                    className="line_text flex"
                    viewport={{ once: true }}
                  >
                    <h2>03</h2>
                    <div className="line"></div>
                  </motion.div>
                  <motion.h1
                    initial={{ opacity: 0, translateY: "160px" }}
                    whileInView={{ opacity: 1, translateY: "0" }}
                    transition={transition}
                    viewport={{ once: true }}
                  >
                    Formating
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, translateY: "160px" }}
                    whileInView={{ opacity: 1, translateY: "0" }}
                    transition={transition}
                    viewport={{ once: true }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deleniti labore voluptate numquam sunt eos itaque, aliquid
                    commodi cumque? Reiciendis, sequi!
                  </motion.p>
                </div>

                <div className="sub_two">
                  <motion.div
                    initial={{ opacity: 0, translateY: "120px" }}
                    whileInView={{ opacity: 1, translateY: "0" }}
                    transition={transition}
                    className="line_text flex"
                    viewport={{ once: true }}
                  >
                    <h2>04</h2>
                    <div className="line"></div>
                  </motion.div>
                  <motion.h1
                    initial={{ opacity: 0, translateY: "160px" }}
                    whileInView={{ opacity: 1, translateY: "0" }}
                    transition={transition}
                    viewport={{ once: true }}
                  >
                    Formating
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, translateY: "160px" }}
                    whileInView={{ opacity: 1, translateY: "0" }}
                    transition={transition}
                    viewport={{ once: true }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deleniti labore voluptate numquam sunt eos itaque, aliquid
                    commodi cumque? Reiciendis, sequi!
                  </motion.p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contribute_there">
          <div className="contr_there container flex">
            <div className="pro_text">
              <motion.h2 
              initial={{opacity: 0, translateY: "120px"}}
              whileInView={{opacity: 1, translateY: "0"}}
              transition={transition}
              viewport={{once: true}}
              
              >Procedure</motion.h2>
              <motion.p 
               initial={{opacity: 0, translateY: "150px"}}
               whileInView={{opacity: 1, translateY: "0"}}
               transition={transition}
               viewport={{once: true}}
              
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
                alias quam in modi. Reiciendis, dolorum expedita? Iste odio
                mollitia corrupti.
              </motion.p>
            </div>

            <div className="num_box flex">
              <div className="num_text top_bar">
                <div className="line"></div>
                <div className="top_bar">
                <h1>01</h1>
                <h3>Notification</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam suscipit corrupti commodi sequi, sit architecto
                  laudantium fugit, delectus tempora odio ex esse eligendi
                  repellendus debitis, dolor optio molestiae assumenda enim?
                </p>
                </div>
              </div>

              <div className="num_text">
                <div className="line"></div>
                <h1>02</h1>
                <h3>Notification</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam suscipit corrupti commodi sequi, sit architecto
                  laudantium fugit, delectus tempora odio ex esse eligendi
                  repellendus debitis, dolor optio molestiae assumenda enim?
                </p>
              </div>

              <div className="num_text top_bar">
                <div className="line"></div>
                <div className="top_bar">
                <h1>03</h1>
                <h3>Notification</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam suscipit corrupti commodi sequi, sit architecto
                  laudantium fugit, delectus tempora odio ex esse eligendi
                  repellendus debitis, dolor optio molestiae assumenda enim?
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section_Fover />
    </>
  );
}

export default Contribute;
