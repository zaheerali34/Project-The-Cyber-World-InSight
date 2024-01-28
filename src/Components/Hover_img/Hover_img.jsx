import Form from "../Form/Form";

function Hover_img() {
    return (
        <>
            <section className="section_hover">
                <div className="hover_img">
                <div className="bg_img"></div>
                </div>

                <h2>Write for us</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi rerum molestias consequuntur numquam quibusdam, doloribus unde omnis impedit facere praesentium eligendi minima autem labore itaque culpa? Voluptatem architecto odit nisi!</p>
                
                <input type="submit" value={"Submit Article"}/>
            </section>
            <Form />
        </>
    )
}

export default Hover_img;