
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8 sm:py-12">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm border p-6 sm:p-8">
          <h1 className="text-3xl font-bold mb-6 gradient-text">About This Project</h1>
          
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-2">Our Goal</h2>
              <p className="text-gray-700">
                Helping identify harmful content online through AI.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-2">What We Do</h2>
              <p className="text-gray-700">
                This project uses natural language processing and machine learning techniques to identify potential cyberbullying content in text. 
                By analyzing patterns, word choices, and context, our system can flag potentially harmful messages.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-2">How It Works</h2>
              <p className="text-gray-700">
                Simply input a message or text into our system, click "Check", and our AI will analyze the content for signs of cyberbullying.
                The current version is a demonstration that uses a basic keyword detection method, but a full implementation would use 
                more advanced machine learning techniques.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-2">Why It Matters</h2>
              <p className="text-gray-700">
                Cyberbullying has become increasingly prevalent in today's digital world. It can have serious negative effects on mental health,
                especially for young people. By creating tools that help identify harmful content, we hope to contribute to safer online communities.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
