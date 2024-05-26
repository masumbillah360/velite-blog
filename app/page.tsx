import About from '@/section/About';
import Blogs from '@/section/Blog';
import Contact from '@/section/Contact';
import Banner from '@/section/Home';
import Projects from '@/section/Projects';
import Skill from '@/section/Skill';

export default function Home() {
    return (
        <div>
            <Banner />
            <About />
            <Skill />
            <Projects />
            <Blogs />
            <Contact />
        </div>
    );
}
