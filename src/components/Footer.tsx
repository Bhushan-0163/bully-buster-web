
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 border-t mt-12">
      <div className="container mx-auto px-4 text-center text-sm text-gray-500">
        <p>© {currentYear} Cyberbullying Detection Project</p>
        <p className="mt-1">Helping identify harmful content online through AI.</p>
      </div>
    </footer>
  );
};

export default Footer;
