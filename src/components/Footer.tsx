
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <img 
              src="/lovable-uploads/677388db-d6e1-4491-9ae3-d8f9c35e6686.png" 
              alt="Sumit Electrical Logo" 
              className="h-12 w-12 object-contain"
            />
            <span className="text-xl font-bold">Sumit Electrical</span>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Sumit Electrical. All rights reserved.
            </p>
            <p className="text-gray-400 mt-1">
              Solar Panel Installation Services - Waaree Experts
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
