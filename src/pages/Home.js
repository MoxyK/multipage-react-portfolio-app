import React from "react";
// * This should be a welcome landing page that contains:
    // *  Your Name
    // *  A Headshot of you
    // *  Your brand statement
    // *  Some indication that this is your portfolio site
    const Home = ({ name, title}) => {

        return (
        <div>
            <section className="home">

                <section>
                    <h1>{name}</h1>
                    <p>Profession: {title} </p>
                </section>

            </section>
        </div>
        );
    };

    const Image = () => {
        return <img src="src\profilePic.jpg" />;
    };
    
    export default Home;