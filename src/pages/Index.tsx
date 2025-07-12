
import { Link } from 'react-router-dom';
import { Sun, Zap, Shield, Users, CheckCircle, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Index = () => {
  const features = [
    {
      icon: Sun,
      title: 'Clean Energy',
      description: 'Harness the power of the sun with our premium solar solutions'
    },
    {
      icon: Zap,
      title: 'High Efficiency',
      description: 'Waaree Tier-1 solar panels for maximum energy generation'
    },
    {
      icon: Shield,
      title: 'Reliable Systems',
      description: '5+ years of experience delivering dependable solar installations'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Certified electrical engineers providing end-to-end service'
    }
  ];

  const stats = [
    { number: '5+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Completed' },
    { number: '100%', label: 'Customer Satisfaction' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Power Your Future with
              <span className="block text-yellow-300">Solar Energy</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
              Join the sustainable energy revolution with SolarTech Solutions. 
              We provide premium solar installations using Tier-1 Waaree panels for maximum efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center"
              >
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors duration-200"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose SolarTech Solutions?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We bring expertise, quality, and commitment to every solar installation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 solar-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-green-100 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Solar Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive solar services tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-primary">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">On-Grid Systems</h3>
              <p className="text-gray-600 mb-4">
                Connect to the grid and enjoy net metering benefits while reducing your electricity bills.
              </p>
              <div className="flex items-center text-primary font-medium">
                <CheckCircle className="h-5 w-5 mr-2" />
                Grid-tied solutions
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-primary">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Off-Grid Systems</h3>
              <p className="text-gray-600 mb-4">
                Complete energy independence with battery backup for uninterrupted power supply.
              </p>
              <div className="flex items-center text-primary font-medium">
                <CheckCircle className="h-5 w-5 mr-2" />
                Energy independence
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-primary">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Hybrid Systems</h3>
              <p className="text-gray-600 mb-4">
                Best of both worlds - grid connectivity with battery backup for maximum reliability.
              </p>
              <div className="flex items-center text-primary font-medium">
                <CheckCircle className="h-5 w-5 mr-2" />
                Maximum reliability
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              to="/services"
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 inline-flex items-center"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Go Solar?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your solar needs and create a customized solution that's perfect for you.
          </p>
          <Link
            to="/contact"
            className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors duration-200 inline-flex items-center"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-6 w-6" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
