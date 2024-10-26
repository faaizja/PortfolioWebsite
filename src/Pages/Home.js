import Hero from "../Hero"
import Projects from "../Projects"
import Experience from "../Experience"

// below is the landing page sequence

export const Home = () => {
    return (
        <div>
            <section><Hero /></section>
            <section><Projects /></section>
            <section><Experience /> </section>
        </div>
    )
}