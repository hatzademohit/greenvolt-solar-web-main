
import { Sun, Battery, Zap, Search, BarChart3, Wrench, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Services = () => {
  const services = [
    {
      icon: Sun,
      title: 'On-Grid/Grid-Tied Solar Systems',
      description: 'Connect your solar system to the electricity grid and benefit from net metering. Reduce your electricity bills while contributing clean energy back to the grid.',
      features: [
        'Net metering support',
        'Grid synchronization',
        'Maximum cost savings',
        'No battery required'
      ]
    },
    {
      icon: Battery,
      title: 'Off-Grid Solar Installations',
      description: 'Achieve complete energy independence with standalone solar systems that include battery storage for uninterrupted power supply.',
      features: [
        'Complete energy independence',
        'Battery backup included',
        'Remote location friendly',
        'Uninterrupted power supply'
      ]
    },
    {
      icon: Zap,
      title: 'Hybrid Systems with Battery Backup',
      description: 'Combine the best of both worlds with systems that can operate on-grid or off-grid, providing maximum flexibility and reliability.',
      features: [
        'Grid-tie capability',
        'Battery backup available',
        'Automatic switching',
        'Maximum reliability'
      ]
    },
    {
      icon: Search,
      title: 'Solar Consultation & Site Survey',
      description: 'Professional assessment of your energy needs and site conditions to design the optimal solar solution for your property.',
      features: [
        'Detailed site analysis',
        'Energy audit',
        'Custom system design',
        'ROI calculations'
      ]
    },
    {
      icon: BarChart3,
      title: 'Net Metering Support',
      description: 'Complete assistance with net metering applications, documentation, and grid connection procedures with local electricity boards.',
      features: [
        'Documentation support',
        'MSEDCL liaison',
        'Grid connection assistance',
        'Compliance management'
      ]
    },
    {
      icon: Wrench,
      title: 'Annual Maintenance Contracts (AMC)',
      description: 'Comprehensive maintenance packages to ensure your solar system operates at peak efficiency throughout its lifetime.',
      features: [
        'Regular system cleaning',
        'Performance monitoring',
        'Preventive maintenance',
        'Quick repair services'
      ]
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
              Comprehensive Solar Services
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
              From consultation to maintenance, we provide end-to-end solar solutions 
              tailored to your energy needs and budget.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border hover:shadow-xl transition-shadow duration-200">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Solar Installation Process
            </h2>
            <p className="text-xl text-gray-600">
              A systematic approach to deliver the perfect solar solution
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Consultation</h3>
              <p className="text-gray-600">Site survey and energy audit to understand your requirements</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Design</h3>
              <p className="text-gray-600">Custom system design with detailed technical specifications</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Installation</h3>
              <p className="text-gray-600">Professional installation by certified electrical engineers</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Support</h3>
              <p className="text-gray-600">Ongoing maintenance and monitoring for optimal performance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Premium Waaree Solar Technology
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            All our installations feature Tier-1 Waaree Solar Panels & Inverters for unmatched efficiency, 
            reliability, and performance. Experience the difference that quality makes.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white/10 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">High Efficiency Panels</h3>
              <p className="text-green-100">22%+ efficiency mono-crystalline panels for maximum energy generation</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">Advanced Inverters</h3>
              <p className="text-green-100">Smart inverters with monitoring capabilities and high conversion efficiency</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">Long-term Warranty</h3>
              <p className="text-green-100">25-year panel warranty and comprehensive product support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Your Solar Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let our experts design a customized solar solution that meets your energy needs and budget. 
            Get started with a free consultation today.
          </p>
          <Link
            to="/contact"
            className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors duration-200 inline-flex items-center"
          >
            Get Free Consultation
            <ArrowRight className="ml-2 h-6 w-6" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
