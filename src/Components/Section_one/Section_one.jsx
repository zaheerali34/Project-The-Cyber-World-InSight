import Section_Two from "../Section_Two/Section_Two";
import {motion} from "framer-motion";

function Section_one() {
    const transition = {duration: 0.7, type: 'spring '}
    return (
        <>
            <section className="section_one container flex">
                <h4>WHAT MAKES US DIFFERENT</h4>
                <h2>The values we live by</h2>

                <div className="mine_box flex">
                    <motion.div
                    initial={{opacity: 0, translateY: "100px"}}
                    whileInView={{opacity: 1, translateY: "0"}}
                    transition={transition}
                    viewport={{once: true}}

                    className="text_box">
                        <h2>Integrity and Trust</h2>
                        <p>We uphold the highest standards of honesty, transparency, and ethical conduct in all our activities. We are committed to providing accurate and unbiased information to our audience.</p>
                    </motion.div>

                    <motion.div
                    initial={{opacity: 0, translateY: "100px"}}
                    whileInView={{opacity: 1, translateY: "0"}}
                    transition={transition}
                    viewport={{once: true}}

                    className="text_box">
                        <h2>Inclusivity</h2>
                        <p>We value diversity of thought, background, and perspective. We are dedicated to creating an inclusive and welcoming environment where everyone's voice is heard and respected.</p>
                    </motion.div>

                    <motion.div
                    initial={{opacity: 0, translateY: "120px"}}
                    whileInView={{opacity: 1, translateY: "0"}}
                    transition={transition}
                    viewport={{once: true}}

                    className="text_box">
                        <h2>Excellence</h2>
                        <p>We strive for excellence in our research, content creation, and educational initiatives. We are committed to delivering the highest quality of information and resources to our community.</p>
                    </motion.div>

                    <motion.div
                    initial={{opacity: 0, translateY: "100px"}}
                    whileInView={{opacity: 1, translateY: "0"}}
                    transition={transition}
                    viewport={{once: true}}

                    className="text_box">
                        <h2>Innovation</h2>
                        <p>We embrace innovation and encourage creative thinking. We recognize that technology and politics are constantly evolving, and we aim to stay at the forefront of these changes.</p>
                    </motion.div>

                    <motion.div
                    initial={{opacity: 0, translateY: "100px"}}
                    whileInView={{opacity: 1, translateY: "0"}}
                    transition={transition}
                    viewport={{once: true}}

                    className="text_box">
                        <h2>Collaboration</h2>
                        <p>We believe in the power of collaboration and the collective wisdom of our community. We actively seek partnerships and collaborations to advance our mission and vision.</p>
                    </motion.div>

                    <motion.div
                    initial={{opacity: 0, translateY: "100px"}}
                    whileInView={{opacity: 1, translateY: "0"}}
                    transition={transition}
                    viewport={{once: true}}

                    className="text_box">
                        <h2>Going Extra Mile</h2>
                        <p>We believe in the power of collaboration and the collective wisdom of our community.</p>
                    </motion.div>
                </div>
            </section>

        <Section_Two />
        </>
    )
}

export default Section_one;