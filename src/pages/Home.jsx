import Hero from "../components/Hero"
import CodeStack from "../components/CodeStack"
import Projects from "../components/Projects"
import Experience from "../components/Experience"

function Home() {
    return (
        <div 
        className="bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200
        dark:from-neutral-900 dark:via-neutral-600 dark:to-neutral-900
        flex flex-col gap-5 !py-5">
            <Hero />
            <CodeStack />
            <Projects />
            <Experience />
        </div>
    )
  }
  
  export default Home