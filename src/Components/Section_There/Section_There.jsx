import {motion} from "framer-motion";
import Hover_img from "../Hover_img/Hover_img";

function Section_There() {
  const transition = {duration: 0.7, type: 'spring '}

  return (
    <>
      <section className="section section_there">
        <motion.h4
          initial={{opacity: 0, translateY: "100px"}}
          whileInView={{opacity: 1, translateY: "0"}}
          viewport={{once: true}}
          transition={transition}

        >Train with the best</motion.h4>
        <motion.h1 
          initial={{opacity: 0, translateY: "100px"}}
          whileInView={{opacity: 1, translateY: "0", transitionDuration: 3}}
          viewport={{once: true}}
          transition={transition}
          
        >trainings</motion.h1>
        <div className="mine_bar flex container">
          <motion.div 
             initial={{opacity: 0, translateY: "100px"}}
             whileInView={{opacity: 1, translateY: "0", transitionDuration: 3}}
             viewport={{once: true}}
             transition={transition}
             
          className="section_box">
            <div className="box_section_text">
              <h2>AI TRAINING</h2>
              <p>
              Invest in your future with our training programs. Whether you’re a student looking to develop a strong foundation in cyber and AI politics or a professional seeking to expand your expertise, our training initiatives are tailored to meet your needs.
              </p>
            </div>

            <div className="link"></div>
            <button>Explore Now</button>
          </motion.div>

          <motion.div 
             initial={{opacity: 0, translateY: "100px"}}
             whileInView={{opacity: 1, translateY: "0", transitionDuration: 3}}
             viewport={{once: true}}
             transition={transition}
             
          className="section_box">
            <div className="box_section_text">
              <h2>ACADEMIC WRITING</h2>
              <p>
              Initial one-to-one consultation, Health & Fitness Assasments Bespoke training program planing, Custom Nutrition plan & recipes. Weekly Progress Reviews
              </p>
            </div>

            <div className="link"></div>
            <button>Explore Now</button>
          </motion.div>

          <motion.div 
             initial={{opacity: 0, translateY: "100px"}}
             whileInView={{opacity: 1, translateY: "0", transitionDuration: 3}}
             viewport={{once: true}}
             transition={transition}
             
          className="section_box">
            <div className="box_section_text">
              <h2>RESEARH</h2>
              <p>
              Initial one-to-one consultation, Health & Fitness Assasments Bespoke training program planing, Custom Nutrition plan & recipes. Weekly Progress Reviews
              </p>
            </div>

            <div className="link"></div>
            <button>Explore Now</button>
          </motion.div>
        </div>

        <motion.div
         initial={{opacity: 0, translateY: "100px"}}
         whileInView={{opacity: 1, translateY: "0"}}
         viewport={{once: true}}
         transition={transition}
        
        className="border">
          <div className="border_text">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, quae vitae officiis vel iste quidem.</p>            

            <motion.h1 
            initial={{opacity: 0, translateY: "120px"}}
            whileInView={{opacity: 1, translateY: "0"}}
            viewport={{once: true}}
            transition={transition}
            >cyberworld</motion.h1>

            <motion.h1 
            initial={{opacity: 0, translateY: "120px"}}
            whileInView={{opacity: 1, translateY: "0"}}
            viewport={{once: true}}
            transition={transition}
            >365</motion.h1>

            <motion.div
            initial={{opacity: 0, translateY: "120px"}}
            whileInView={{opacity: 1, translateY: "0"}}
            viewport={{once: true}}
            transition={transition}

            className="border_bar flex">
              <div className="border_box">
                <h2>Lorem, ipsum dolor.</h2>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci laudantium dicta beatae cumque! Asperiores sit, sed
                  totam iusto veniam unde fuga facilis earum amet illum.
                </p>
              </div>

              <div className="border_box">
                <h2>Lorem, ipsum dolor.</h2>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci laudantium dicta beatae cumque! Asperiores sit, sed
                  totam iusto veniam unde fuga facilis earum amet illum.
                </p>
              </div>

              <div className="border_box">
                <h2>Lorem, ipsum dolor.</h2>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci laudantium dicta beatae cumque! Asperiores sit, sed
                  totam iusto veniam unde fuga facilis earum amet illum.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <Hover_img />
      </section>
    </>
  );
}

export default Section_There;
