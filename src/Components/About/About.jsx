import { motion } from "framer-motion";
import Section_fover from "../Section_fover/section_fover"

function About() {
    const transition = { duration: 0.7, type: 'spring ' }

    return (
        <>
            <div className="home_bar container">
                <div className="home_text flex">
                    <h1>Cyber World Insigt</h1>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                        debitis quis odio laboriosam facilis quidem, labore autem iure?
                        Cumque, architecto eius nesciunt illo doloremque, impedit voluptas
                        deserunt unde recusandae quod, esse expedita? Provident numquam rem,
                        qui veritatis tempora nulla nam perferendis aliquid magnam iste
                        explicabo ipsam suscipit quae accusantium maiores?
                    </p>
                </div>

                <div className="home_box flex">
                    <div className="text_box">
                        <h3>Our Visoin</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis officiis veritatis est sit repudiandae alias ducimus fuga, eligendi a sunt? Nobis eum voluptatum rerum, ad ab doloribus odit incidunt ullam.</p>
                    </div>

                    <div className="text_box">
                        <h3>Our Mission</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis officiis veritatis est sit repudiandae alias ducimus fuga, eligendi a sunt? Nobis eum voluptatum rerum, ad ab doloribus odit incidunt ullam.</p>
                    </div>

                    <div className="text_box">
                        <h3>Expioring The Convergence</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis officiis veritatis est sit repudiandae alias ducimus fuga, eligendi a sunt? Nobis eum voluptatum rerum, ad ab doloribus odit incidunt ullam.</p>
                    </div>
                </div>
            </div>

            <div className="about_bar">
                <div className="img_container container flex">
                    <motion.div
                        initial={{ opacity: 0, translateY: "150px" }}
                        whileInView={{ opacity: 1, translateY: "0" }}
                        transition={transition}
                        viewport={{ once: true }}

                        className="img_box flex">
                        <motion.img
                            initial={{ opacity: 0, translateY: "150px" }}
                            whileInView={{ opacity: 1, translateY: "0", transitionDuration: 5 }}
                            transition={transition}
                            viewport={{ once: true }}

                            src="./image/img2.jpg" alt="" />
                        <motion.div
                            initial={{ opacity: 0, translateY: "150px" }}
                            whileInView={{ opacity: 1, translateY: "0", transitionDuration: 5 }}
                            transition={transition}
                            viewport={{ once: true }}

                            className="img_bg flex">
                            <h4>contact us</h4>
                            <h2>Contact Us With Your Questions</h2>
                            <p>We would love to speak with you! Feel free to reach out with any questions.</p>
                            <button className="abuot_btn">
                                Contact Us
                            </button>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, translateY: "150px" }}
                        whileInView={{ opacity: 1, translateY: "0" }}
                        transition={transition}
                        viewport={{ once: true }}

                        className="img_box flex">
                        <motion.img
                            initial={{ opacity: 0, translateY: "150px" }}
                            whileInView={{ opacity: 1, translateY: "0",  }}
                            transition={transition}
                            viewport={{ once: true }}

                            src="./image/img1.jpg" alt="" />
                        <motion.div
                            initial={{ opacity: 0, translateY: "150px" }}
                            whileInView={{ opacity: 1, translateY: "0"}}
                            transition={transition}
                            viewport={{ once: true }}

                            className="img_bg bg_two flex">
                            <h4>get in touch</h4>
                            <h2>Schedule A Free Consultation</h2>
                            <p>Schedule a free consultation with our team and let’s make things happen!</p>
                            <button className="abuot_btn">
                                Schedule Now
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

             <Section_fover />
        </>
    )
}

export default About;