import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold text-gray-900 mb-8">
            Welcome to{" "}
            <span className="text-blue-600">Chloe Autio Strategies</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Empowering businesses with strategic solutions and innovative approaches. 
            We help organizations navigate complex challenges and achieve sustainable growth 
            through data-driven insights and proven methodologies.
          </p>
          
          <div className="flex gap-4 justify-center mb-12">
            <Button size="lg">
              Get Started
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Strategic Planning</h3>
              <p className="text-gray-600">
                Comprehensive strategic planning services to align your business goals 
                with market opportunities and competitive advantages.
              </p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Market Analysis</h3>
              <p className="text-gray-600">
                Deep-dive market research and competitive analysis to inform your 
                business decisions and identify growth opportunities.
              </p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Business Development</h3>
              <p className="text-gray-600">
                Proven strategies for business expansion, partnership development, 
                and market entry to accelerate your growth trajectory.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
