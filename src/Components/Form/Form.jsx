import {motion} from "framer-motion";
import Section_Fover from "../Section_fover/section_fover";

function Form(){
    const transition = {duration: 0.7, type: 'spring '}

    return (
        <>
            <section className="from_bg">
               <div className="form_bar">
               <div className="border container flex">
                    <motion.h3 
                    initial={{opacity: 0, translateY: "150px"}}
                    whileInView={{opacity: 1, translateY: "0"}}
                    viewport={{once: true}}
                    transition={transition}  
                    
                    >Train with the best</motion.h3>
                    <motion.h1 
                    initial={{opacity: 0, translateY: "150px"}}
                    whileInView={{opacity: 1, translateY: "0"}}
                    viewport={{once: true}}
                    transition={transition}  

                    >Stay tuned</motion.h1>
                    <motion.p
                    initial={{opacity: 0, translateY: "150px"}}
                    whileInView={{opacity: 1, translateY: "0"}}
                    viewport={{once: true}}
                    transition={transition}  
                    >Subscribe to our newsletter to hear the lates news</motion.p>
                    
                    <motion.form 
                    initial={{opacity: 0, translateY: "150px"}}
                    whileInView={{opacity: 1, translateY: "0"}}
                    viewport={{once: true}}
                    transition={transition}  

                    className="flex">
                        <div className="input_bar flex">
                        <input type="text" placeholder="Frist Name" />
                        <input type="text" placeholder="*Email Address" />
                        </div>
                        <input type="submit" value="Subscribe" className="sub_btn" />
                    </motion.form>
                </div>
               </div>
            
            
                <div className="contact_bar flex container">
                    <motion.p
                    initial={{opacity: 0, translateY: "150px"}}
                    whileInView={{opacity: 1, translateY: "0"}}
                    transition={transition}
                    viewport={{once: true}}
                    
                    >We'd Love To Hear From You</motion.p>
                    <motion.h1
                    initial={{opacity: 0, translateY: "150px"}}
                    whileInView={{opacity: 1, translateY: "0", transitionDuration: 3}}
                    transition={transition}
                    viewport={{once: true}}

                    >contact us</motion.h1>
                    
                    <div className="contact_box flex">
                        <div className="box_text flex">
                            <div className="line"></div>
                            <h2>Find Us Here</h2>
                            <p>Office #401 Omega Heights E-11/3 Islamabad, Pakistan</p>
                        </div>

                        <div className="box_text flex">
                            <div className="line"></div>
                            <h2>Find Us Here</h2>
                            <p>Office #401 Omega Heights E-11/3 Islamabad, Pakistan</p>
                        </div>

                        <div className="box_text flex">
                            <div className="line"></div>
                            <h2>Find Us Here</h2>
                            <p>Office #401 Omega Heights E-11/3 Islamabad, Pakistan</p>
                        </div>
                    </div>
                </div>

                <form className="form_bar">
                    <div className="input flex">
                        <input type="text" placeholder="Frist Name" />
                        <input type="text" placeholder="Last Name" />
                        <input type="text" placeholder="*Phone Number" />
                    </div>

                    <div className="input flex">
                        <input type="text" placeholder="*Email Address" />
                        <textarea name="" id="" cols="30" rows="10" placeholder="Leave a messege"></textarea>
                        <input type="submit" value="Send" className="sub_btn" />
                    </div>
                </form>
            </section>
            <Section_Fover />
        </>
    )
}

export default Form;