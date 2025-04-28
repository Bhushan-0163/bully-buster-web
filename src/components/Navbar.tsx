
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Home, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-medium text-lg gradient-text">Cyberbullying Detection</span>
        </Link>
        
        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="flex items-center space-x-1 text-gray-700 hover:text-cyberbullying transition-colors">
            <Home size={18} />
            <span>Home</span>
          </Link>
          <Link to="/about" className="flex items-center space-x-1 text-gray-700 hover:text-cyberbullying transition-colors">
            <Info size={18} />
            <span>About</span>
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <Menu />
          </Button>
        </div>
      </div>
      
      {/* Mobile menu panel */}
      {isOpen && (
        <div className="md:hidden border-t">
          <div className="container mx-auto px-4 py-3 space-y-3">
            <Link 
              to="/" 
              className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              <Home size={18} />
              <span>Home</span>
            </Link>
            <Link 
              to="/about" 
              className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              <Info size={18} />
              <span>About</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
