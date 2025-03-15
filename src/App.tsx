import { About } from './components/About';
import { Contact } from './components/Contact';
import { Education } from './components/Education';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer className="py-8 text-center text-gray-600 dark:text-gray-300">
        <p>© 2024 Shubham Tate. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;