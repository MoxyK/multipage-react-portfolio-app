// * This should be a welcome landing page that contains:
    // *  Your Name
    // *  A Headshot of you
    // *  Your brand statement
    // *  Some indication that this is your portfolio site
    const Home = ({ name, title}) => {

        return <div>
            <section className="home">
                <section>
                    <img src="src\profilePic.jpg" alt="profile portrait img of Keanu"/>
                </section>
                <section>
                    <h1>{name}</h1>
                    <p>Profession: {title} </p>
                </section>
            </section>
        </div>
    }
    
    export default Home;