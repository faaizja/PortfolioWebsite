import Hero from "../Hero"
import Projects from "../Projects"
import Experience from "../Experience"
import Footer from "../Footer"

// below is the landing page sequence

export const Home = () => {
    return (
        <div >
            <section> <Hero /> </section>
            <section> <Projects /> </section>
            <section> <Experience /> </section>
            <section> <Footer /> </section>
        </div>
    )
}