
import { CheckCircle, Award, Users, Zap, Sun } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About = () => {
  const achievements = [
    { icon: CheckCircle, text: 'Over 5 years of experience in solar industry' },
    { icon: Award, text: 'Certified electrical engineering professionals' },
    { icon: Users, text: '50+ successful solar projects completed' },
    { icon: Zap, text: 'Expert electrical planning and installation' }
  ];

  const values = [
    {
      title: 'Quality First',
      description: 'We use only Tier-1 Waaree solar panels and premium components to ensure maximum efficiency and longevity.'
    },
    {
      title: 'Custom Solutions',
      description: 'Every project is unique. We design customized solar solutions tailored to your specific energy needs and budget.'
    },
    {
      title: 'Expert Engineering',
      description: 'Our certified electrical engineers ensure proper system design, installation, and compliance with all safety standards.'
    },
    {
      title: 'Ongoing Support',
      description: 'From consultation to maintenance, we provide comprehensive support throughout your solar journey.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sumit Electrical - Your Trusted Solar Partner
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
              Combining electrical engineering expertise with premium Waaree solar technology 
              to deliver sustainable energy solutions that exceed expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Powering India's Solar Revolution
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Sumit Electrical was founded with a vision to make clean, renewable energy 
                accessible to everyone. With over 5 years of experience in the solar industry, 
                we have established ourselves as a trusted partner for residential, commercial, 
                and industrial solar installations.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our team of certified electrical engineers brings deep technical expertise to 
                every project, ensuring optimal system design, efficient installation, and 
                long-term reliability. We exclusively use Waaree's high-efficiency solar panels, 
                recognized as India's leading Tier-1 solar manufacturer.
              </p>
              <p className="text-lg text-gray-600">
                From small rooftop installations to large-scale commercial projects, we deliver 
                customized solar solutions that maximize energy generation while minimizing costs.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-green-50 p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <achievement.icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-gray-700 font-medium">{achievement.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Comprehensive Services
            </h2>
            <p className="text-xl text-gray-600">
              End-to-end solar solutions for all your energy needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-primary">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Site Survey</h3>
              <p className="text-gray-600">Comprehensive assessment of your property to determine optimal solar panel placement and system configuration.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-primary">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Installation & Commissioning</h3>
              <p className="text-gray-600">Professional installation of complete solar projects with proper commissioning and testing.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-primary">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Operation & Maintenance</h3>
              <p className="text-gray-600">Ongoing operational support and maintenance services to ensure peak system performance.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-primary">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Solar Module Cleaning</h3>
              <p className="text-gray-600">Regular cleaning and maintenance services to keep your solar panels operating at maximum efficiency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Track Record
            </h2>
            <p className="text-xl text-gray-600">
              Numbers that speak for our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Sun className="h-10 w-10 text-white" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            
            <div className="text-center">
              <div className="bg-primary p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-600">Successful Projects</div>
            </div>
            
            <div className="text-center">
              <div className="bg-primary p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-10 w-10 text-white" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-gray-600">Certified Engineers</div>
            </div>
            
            <div className="text-center">
              <div className="bg-primary p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-10 w-10 text-white" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-xl text-gray-600">
              Our commitment to excellence in every aspect of solar solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-primary">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waaree Partnership */}
      <section className="py-16 bg-gradient-to-br from-primary to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Certified Waaree Experts
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            As certified Waaree experts, we exclusively use Waaree's high-efficiency Tier-1 solar panels and inverters, 
            ensuring our customers receive the most advanced and reliable solar technology available in India.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">25+ Years</div>
              <div className="text-green-100">Panel Warranty</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">Tier-1</div>
              <div className="text-green-100">Manufacturing Quality</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">22%+</div>
              <div className="text-green-100">Panel Efficiency</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
