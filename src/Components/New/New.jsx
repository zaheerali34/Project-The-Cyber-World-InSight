import { motion } from "framer-motion";
import Section_Fover from "../Section_fover/section_fover";

function New() {
  const transition = { duration: 0.7, type: "spring " };

  return (
    <>
      <section className="new_bar">
        <h1>Category: News</h1>
        <motion.p
          initial={{ opacity: 0, translateY: "150px" }}
          whileInView={{ opacity: 1, translateY: "0" }}
          transition={transition}
          viewport={{ once: true }}
        >
          EXPLORING THE CYBER WORLD: A DIVE INTO DIGITAL REALMS
        </motion.p>

        <div className="new_text flex">
          <div className="cyber_box container">
            <div className="hover_cyber flex">
              <img src="./image/cyber image.webp" alt="" />
              <h3>The Cyber World Insight</h3>
              <h4>
                where we embark on a journey through the vast and ever-evolving
                landscape of the digital realm. In this blog, we unravel the
                mysteries of cyberspace, shedding light on the intricate web of
                technologies, trends, and innovations that shape our online
                existence.
              </h4>
              <button className="btn_explore">Explore</button>
            </div>
          </div>
          <div className="cyber_icon flex">
            <motion.img 
            initial={{rotate: "0"}}
            whileInView={{rotate: "550deg"}}
            transition={transition}
            viewport={{once: true}}
            
            src="./image/icon 1.png" alt="" className="icon-1" />
            <motion.img 
            initial={{translateY: "100"}}
            whileInView={{translateY: "0"}}
            transition={transition}
            viewport={{once: true}}

            src="./image/icon 2.png" alt="" className="icon-2" />
          </div>
        </div>
        <div className="bg_blog flex">
          <h3>Access Our Blog</h3>
          <motion.img
            initial={{ opacity: 0, translateY: "-50px" }}
            whileInView={{ opacity: 1, translateY: "0" }}
            transition={transition}
            viewport={{ once: true }}
            src="./image/icon 1.png"
            alt=""
          />
        </div>

        <div className="blog_card flex container">
          <div className="card_box">
            <img src="./image/new 1.jpg" alt="" />

            <div className="card_text flex">
              <img src="./image/add.jpg" alt="" />
                <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit</h3>
                <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis fugit beatae culpa, nulla esse aliquam. Placeat nesciunt commodi dolorem voluptate, amet laborum nam dolore pariatur obcaecati</h4>
                <span>READ MORE -</span>
                <div className="line"></div>
                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, eaque.</h5>          
            </div>
          </div>

          <div className="card_box">
            <img src="./image/new 2.png" alt="" />

            <div className="card_text flex">
              <img src="./image/add.jpg" alt="" />
                <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit</h3>
                <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis fugit beatae culpa, nulla esse aliquam. Placeat nesciunt commodi dolorem voluptate, amet laborum nam dolore pariatur obcaecati</h4>
                <span>READ MORE -</span>
                <div className="line"></div>
                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, eaque.</h5>          
            </div>
          </div>
        </div>
      </section>

      <Section_Fover />
    </>
  );
}

export default New;
