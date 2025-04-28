
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Check } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const CYBERBULLYING_KEYWORDS = [
  "stupid", "idiot", "dumb", "ugly", "loser", "hate", "kill",
  "die", "pathetic", "worthless", "fat", "shut up", "ugly"
];

const DetectionForm = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState<null | boolean>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  
  const analyzeBullying = (text: string): boolean => {
    const lowercaseText = text.toLowerCase();
    // Simple detection algorithm - if it contains any of the words, it's bullying
    return CYBERBULLYING_KEYWORDS.some(word => lowercaseText.includes(word));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!text.trim()) {
      toast.warning("Please enter some text to analyze");
      return;
    }
    
    setIsAnalyzing(true);
    
    // Simulate AI processing time
    setTimeout(() => {
      const isBullying = analyzeBullying(text);
      setResult(isBullying);
      setIsAnalyzing(false);
      
      toast.info(
        isBullying 
          ? "Potential cyberbullying content detected. This is just a demo." 
          : "No cyberbullying content detected. This is just a demo."
      );
    }, 1500);
  };
  
  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Textarea
          placeholder="Enter a message to analyze for cyberbullying content..."
          className="min-h-[120px] focus:border-cyberbullying"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        
        <Button 
          type="submit" 
          className="w-full sm:w-auto bg-cyberbullying hover:bg-cyberbullying-dark"
          disabled={isAnalyzing || !text.trim()}
        >
          <Check className="mr-2 h-4 w-4" />
          {isAnalyzing ? "Analyzing..." : "Check Text"}
        </Button>
      </form>
      
      {result !== null && !isAnalyzing && (
        <div className={cn(
          "mt-6 p-4 rounded-lg text-center slide-up",
          result 
            ? "bg-red-50 text-red-800 border border-red-200" 
            : "bg-green-50 text-green-800 border border-green-200"
        )}>
          <h3 className="text-lg font-medium">
            {result ? "Cyberbullying" : "Not Cyberbullying"}
          </h3>
          <p className="mt-1">
            {result 
              ? "This text may contain harmful content. This is a basic demo detection." 
              : "This text appears to be safe. This is a basic demo detection."}
          </p>
        </div>
      )}
      
      {isAnalyzing && (
        <div className="mt-6 p-6 rounded-lg bg-cyberbullying-light border border-cyberbullying/20 flex justify-center items-center">
          <div className="animate-pulse-light">Analyzing text...</div>
        </div>
      )}
    </div>
  );
};

export default DetectionForm;
