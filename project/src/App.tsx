import React, { useRef } from 'react';
import { ArrowDown, Code2, BookOpen, MessageSquare, Mail, Home, Info, GraduationCap, ChevronRight } from 'lucide-react';

function App() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const coursesRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img 
                src="https://i.imgur.com/YourLogoURL.png" 
                alt="TaskVedha Logo" 
                className="h-10"
              />
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
                className="flex items-center space-x-1 text-gray-700 hover:text-orange-500">
                <Home size={18} />
                <span>Home</span>
              </button>
              <button onClick={() => scrollToSection(aboutRef)}
                className="flex items-center space-x-1 text-gray-700 hover:text-orange-500">
                <Info size={18} />
                <span>About</span>
              </button>
              <button onClick={() => scrollToSection(coursesRef)}
                className="flex items-center space-x-1 text-gray-700 hover:text-orange-500">
                <GraduationCap size={18} />
                <span>Courses</span>
              </button>
              <button onClick={() => scrollToSection(testimonialsRef)}
                className="flex items-center space-x-1 text-gray-700 hover:text-orange-500">
                <MessageSquare size={18} />
                <span>Testimonials</span>
              </button>
              <button onClick={() => scrollToSection(contactRef)}
                className="flex items-center space-x-1 text-gray-700 hover:text-orange-500">
                <Mail size={18} />
                <span>Contact</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Connect with Top Employers
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            TaskVedha bridges the gap between talented professionals and leading companies.
            Start your journey to success today.
          </p>
          <div className="animate-bounce mt-12">
            <ArrowDown className="mx-auto text-orange-500" size={32} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">About Us</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="Team collaboration" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <p className="text-lg text-gray-600 leading-relaxed">
                TaskVedha is a revolutionary platform that connects talented professionals 
                with leading employers across industries. We believe in creating meaningful 
                connections that drive career growth and business success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section ref={coursesRef} className="py-20 px-6 bg-orange-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Our Courses</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Java Course Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105 border border-orange-200">
              <div className="p-6">
                <Code2 className="text-orange-500 mb-4" size={32} />
                <h3 className="text-xl font-bold mb-2 text-gray-900">Java Programming</h3>
                <p className="text-gray-600 mb-4">
                  Master Java programming from basics to advanced concepts.
                  Learn enterprise development and Spring framework.
                </p>
                <button className="flex items-center text-orange-500 hover:text-orange-600">
                  Learn More <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* Python Course Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105 border border-orange-200">
              <div className="p-6">
                <BookOpen className="text-orange-500 mb-4" size={32} />
                <h3 className="text-xl font-bold mb-2 text-gray-900">Python Development</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive Python training covering data science, web development,
                  and automation.
                </p>
                <button className="flex items-center text-orange-500 hover:text-orange-600">
                  Learn More <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* Additional Course Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105 border border-orange-200">
              <div className="p-6">
                <GraduationCap className="text-orange-500 mb-4" size={32} />
                <h3 className="text-xl font-bold mb-2 text-gray-900">Web Development</h3>
                <p className="text-gray-600 mb-4">
                  Full-stack web development with modern frameworks and tools.
                </p>
                <button className="flex items-center text-orange-500 hover:text-orange-600">
                  Learn More <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">What Our Users Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
              <p className="text-gray-600 italic mb-4">
                "TaskVedha helped me land my dream job at a top tech company. The courses
                were comprehensive and practical."
              </p>
              <p className="font-semibold text-gray-900">- Karthik</p>
              <p className="text-sm text-orange-500">Software Engineer</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
              <p className="text-gray-600 italic mb-4">
                "The Python course was exactly what I needed to transition into data science.
                Excellent content and support."
              </p>
              <p className="font-semibold text-gray-900">- Ganesh</p>
              <p className="text-sm text-orange-500">Data Scientist</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
              <p className="text-gray-600 italic mb-4">
                "As an employer, we've found great talent through TaskVedha. The candidates
                are well-trained and job-ready."
              </p>
              <p className="font-semibold text-gray-900">- Rahul</p>
              <p className="text-sm text-orange-500">HR Director</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-20 px-6 bg-orange-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Contact Us</h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input type="text" className="w-full px-4 py-2 rounded-lg bg-white border border-orange-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-2 rounded-lg bg-white border border-orange-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea className="w-full px-4 py-2 rounded-lg bg-white border border-orange-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500" rows={4}></textarea>
              </div>
              <button type="submit" className="w-full bg-orange-500 text-white py-2 px-6 rounded-lg hover:bg-orange-600 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-gray-600 py-12 border-t border-orange-100">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-orange-500">TaskVedha</h3>
            <p className="text-gray-500">Connecting Talent with Opportunity</p>
            <p className="mt-8 text-gray-500">© 2024 TaskVedha. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;