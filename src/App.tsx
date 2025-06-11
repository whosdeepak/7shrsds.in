import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Code, Smartphone, Palette, TrendingUp, Users, Award, Clock, 
  CheckCircle, Mail, Phone, MapPin, ChevronDown, ArrowRight, Star,
  Zap, Shield, Target, Rocket
} from 'lucide-react';

import AnimatedSection from './components/AnimatedSection';
import AnimatedButton from './components/AnimatedButton';
import ServiceCard from './components/ServiceCard';
import PricingCard from './components/PricingCard';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'pricing', 'why-choose', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navigation = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Services', href: 'services' },
    { name: 'Pricing', href: 'pricing' },
    { name: 'Why Choose Us', href: 'why-choose' },
    { name: 'Testimonials', href: 'testimonials' },
    { name: 'Contact', href: 'contact' },
  ];

  const services = [
    {
      icon: Code,
      title: 'Website Development',
      description: 'Custom, responsive websites built with modern technologies. From landing pages to complex web applications that drive results.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'CMS Integration', 'E-commerce Ready']
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.',
      features: ['iOS & Android', 'Cross-Platform', 'Native Performance', 'App Store Ready', 'Push Notifications']
    },
    {
      icon: Palette,
      title: 'Logo Design',
      description: 'Professional brand identity design that captures your essence and makes a lasting impression on your audience.',
      features: ['Brand Strategy', 'Multiple Concepts', 'Vector Files', 'Brand Guidelines', 'Unlimited Revisions']
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to grow your online presence and drive measurable results.',
      features: ['SEO/SEM', 'Social Media', 'Content Strategy', 'Analytics & Reporting', 'PPC Campaigns']
    }
  ];

  const pricingPlans = [
    {
      title: 'Logo Design',
      price: '₹1,999',
      period: 'project',
      description: 'Professional brand identity design',
      features: [
        'Multiple Design Concepts',
        'Vector Files (AI, EPS, SVG)',
        'High-Resolution PNG/JPG',
        'Brand Guidelines',
        'Unlimited Revisions',
        'Commercial Usage Rights',
        'Fast 3-5 Day Delivery'
      ]
    },
    {
      title: 'Website Development',
      price: '₹9,999',
      period: 'starting from',
      description: 'Custom responsive websites',
      popular: true,
      features: [
        'Responsive Design',
        'Modern UI/UX',
        'SEO Optimized',
        'Fast Loading Speed',
        'Mobile Friendly',
        'Contact Forms',
        'Social Media Integration',
        '3 Months Free Support'
      ]
    },
    {
      title: 'Digital Marketing',
      price: '₹4,999',
      period: 'per month',
      description: 'Complete digital marketing solution',
      features: [
        'Social Media Management',
        'Content Creation',
        'SEO Optimization',
        'Google Ads Management',
        'Analytics & Reporting',
        'Brand Strategy',
        'Monthly Performance Review',
        'Dedicated Account Manager'
      ]
    }
  ];

  const whyChooseUs = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'We deliver projects quickly without compromising on quality, ensuring you get to market faster.'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Your projects are built with security in mind, using industry best practices and latest technologies.'
    },
    {
      icon: Target,
      title: 'Results Driven',
      description: 'We focus on delivering measurable results that directly impact your business growth and success.'
    },
    {
      icon: Rocket,
      title: 'Future Ready',
      description: 'Our solutions are built to scale and adapt to future needs, ensuring long-term success.'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Patel',
      company: 'Mumbai Enterprises',
      role: 'CEO',
      content: 'Working with 7shrads transformed our digital presence completely. Their attention to detail and technical expertise exceeded all our expectations. The ROI has been incredible.',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Rejesh sharam',
      company: 'Creative Solutions',
      role: 'Marketing Director',
      content: 'The team delivered a stunning website and mobile app that perfectly captured our brand essence. The user experience is phenomenal and our conversion rates have doubled.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Riya Mehta',
      company: 'Tech Innovations',
      role: 'Founder',
      content: 'From logo design to comprehensive digital marketing, 7shrads provided end-to-end solutions that drove real, measurable results for our startup.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-primary-200 border-t-primary-600 rounded-full mx-auto mb-4"
          />
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-2xl font-bold text-secondary-800 font-poppins"
          >
            7shrads
          </motion.h2>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0"
            >
              <span className="text-2xl font-bold text-secondary-800 font-poppins">7shrads</span>
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navigation.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.href)}
                    className={`px-3 py-2 text-sm font-medium transition-all duration-200 relative ${
                      activeSection === item.href
                        ? 'text-primary-600'
                        : 'text-secondary-700 hover:text-primary-600'
                    }`}
                  >
                    {item.name}
                    {activeSection === item.href && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600"
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <button
  onClick={() => scrollToSection('contact')}
  className="px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg shadow-lg hover:bg-primary-700 transition"
>
  Get Started
</button>

            <div className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-secondary-700 hover:text-primary-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-6 w-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-6 w-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
                {navigation.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.href)}
                    className={`block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200 rounded-md ${
                      activeSection === item.href
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-secondary-700 hover:text-primary-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-secondary-50 via-primary-50 to-accent-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 0.1, scale: 1 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full blur-3xl"
            />
            
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative text-4xl md:text-6xl lg:text-7xl font-bold text-secondary-800 mb-6 leading-tight font-poppins"
            >
              Crafting Digital
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600 block"
              >
                Excellence
              </motion.span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-secondary-600 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Transform your vision into reality with our comprehensive digital solutions. 
              From stunning websites to powerful apps, creative logos to strategic marketing.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <AnimatedButton
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="shadow-2xl"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </AnimatedButton>
              
              <AnimatedButton
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('services')}
              >
                View Services
              </AnimatedButton>
            </motion.div>
          </div>
        </div>
        
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-center pb-8"
        >
          <ChevronDown className="h-8 w-8 text-secondary-400 mx-auto" />
        </motion.div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-4 font-poppins">About 7shrads</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              We are a passionate team of digital innovators based in Mumbai, dedicated to bringing your ideas to life through 
              cutting-edge technology and creative excellence.
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <h3 className="text-2xl font-bold text-secondary-800 mb-6 font-poppins">Our Mission</h3>
              <p className="text-secondary-600 mb-6 leading-relaxed">
                At 7shrads, we believe in the power of digital transformation. Our mission is to empower 
                businesses and individuals with innovative solutions that drive growth, enhance user experiences, 
                and create lasting impact in the digital landscape.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl"
                >
                  <div className="text-3xl font-bold text-primary-600 mb-2 font-poppins">150+</div>
                  <div className="text-secondary-600">Projects Completed</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 bg-gradient-to-br from-accent-50 to-accent-100 rounded-xl"
                >
                  <div className="text-3xl font-bold text-accent-600 mb-2 font-poppins">98%</div>
                  <div className="text-secondary-600">Client Satisfaction</div>
                </motion.div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="right" className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-secondary-800 mb-6 font-poppins">What Sets Us Apart</h3>
              <ul className="space-y-4">
                {[
                  'Innovative solutions tailored to your unique needs',
                  'End-to-end project management and support',
                  'Cutting-edge technologies and best practices',
                  'Transparent communication throughout the process'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-secondary-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-secondary-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-4 font-poppins">Our Services</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital solutions designed to elevate your brand and drive success
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-4 font-poppins">Pricing & Packages</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              Transparent pricing for all our services. Quality solutions that fit your budget.
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={index}
                title={plan.title}
                price={plan.price}
                period={plan.period}
                description={plan.description}
                features={plan.features}
                popular={plan.popular}
                delay={index * 0.2}
                onSelect={() => scrollToSection('contact')}
              />
            ))}
          </div>

          {/* App Development Custom Quote Card */}
          <AnimatedSection className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-accent-50 to-primary-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-accent-200 text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl mb-6"
              >
                <Smartphone className="h-8 w-8 text-white" />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-secondary-800 mb-4 font-poppins">App Development</h3>
              <p className="text-accent-600 text-xl font-bold mb-4">Custom Quote</p>
              <p className="text-secondary-600 mb-6 leading-relaxed">
                Every app is unique. Get a personalized quote based on your specific requirements, features, and complexity.
              </p>
              
              <ul className="text-left space-y-3 mb-8 max-w-md mx-auto">
                {[
                  'iOS & Android Development',
                  'Custom Feature Development',
                  'UI/UX Design Included',
                  'Backend Development',
                  'App Store Deployment',
                  'Post-Launch Support'
                ].map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) }}
                    viewport={{ once: true }}
                    className="flex items-center text-secondary-700 font-inter"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    {feature}
                  </motion.li>
                ))}
              </ul>

              <AnimatedButton
                variant="primary"
                size="lg"
                onClick={() => scrollToSection('contact')}
              >
                Get Custom Quote
              </AnimatedButton>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose" className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-4 font-poppins">Why Choose 7shrads?</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              Experience the difference with our commitment to excellence and client success
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                viewport={{ once: true }}
                className="text-center group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl mb-6 group-hover:from-primary-600 group-hover:to-primary-700 transition-all duration-300"
                >
                  <item.icon className="h-8 w-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-secondary-800 mb-4 font-poppins">{item.title}</h3>
                <p className="text-secondary-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-4 font-poppins">Client Testimonials</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it - hear from clients who've experienced our excellence
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white to-primary-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: (index * 0.2) + (i * 0.1) }}
                      viewport={{ once: true }}
                    >
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </div>
                <p className="text-secondary-600 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center border-t pt-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-bold text-secondary-800 font-poppins">{testimonial.name}</div>
                    <div className="text-secondary-500 text-sm">{testimonial.role}</div>
                    <div className="text-primary-600 font-medium text-sm">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-secondary-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-4 font-poppins">Get In Touch</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              Ready to start your next project? Let's discuss how we can bring your vision to life
            </p>
          </AnimatedSection>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection direction="left">
              <h3 className="text-2xl font-bold text-secondary-800 mb-8 font-poppins">Contact Information</h3>
              <div className="space-y-6">
                {[
                  { icon: Mail, title: 'Email', value: '7shardstech@gmail.com' },
                  { icon: Phone, title: 'Phone', value: '+91 720-868-9986' },
                  { icon: MapPin, title: 'Location', value: 'Bandra West, Mumbai - 400050' }
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    viewport={{ once: true }}
                    className="flex items-center bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div className="p-3 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg mr-4">
                      <contact.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-secondary-800 font-poppins">{contact.title}</div>
                      <div className="text-secondary-600">{contact.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="right" className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-secondary-800 mb-6 font-poppins">Send us a message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="group"
                  >
                    <label className="block text-sm font-medium text-secondary-700 mb-2 font-poppins">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 group-hover:border-primary-300"
                      placeholder="Your name"
                    />
                  </motion.div>
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="group"
                  >
                    <label className="block text-sm font-medium text-secondary-700 mb-2 font-poppins">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 group-hover:border-primary-300"
                      placeholder="your@email.com"
                    />
                  </motion.div>
                </div>
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="group"
                >
                  <label className="block text-sm font-medium text-secondary-700 mb-2 font-poppins">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 group-hover:border-primary-300"
                    placeholder="Project inquiry"
                  />
                </motion.div>
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="group"
                >
                  <label className="block text-sm font-medium text-secondary-700 mb-2 font-poppins">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none group-hover:border-primary-300"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </motion.div>
                <AnimatedButton
                  size="lg"
                  className="w-full"
                >
                  Send Message
                </AnimatedButton>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold mb-4 font-poppins">7shrads</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Crafting digital excellence through innovative solutions, creative design, and strategic marketing.
            </p>
            <div className="border-t border-secondary-700 pt-8">
              <p className="text-gray-400">
                © 2024 7shrads. All rights reserved. Built with passion and precision.
              </p>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

export default App;