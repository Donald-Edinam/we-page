import React from 'react';
import { Lightbulb, Star, Users, Briefcase, Rocket, Zap } from 'lucide-react';

const Solution = () => {
  const features = [
    {
      icon: Users,
      title: 'Local Role Models',
      description: 'Connect girls with successful women in STEM from their communities',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Briefcase,
      title: 'Mobile Lab Kits',
      description: 'Portable STEM equipment that travels to remote rural schools',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Star,
      title: 'After-School Program',
      description: 'Structured mentorship and hands-on learning sessions',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const benefits = [
    'Increased access to STEM resources in rural areas',
    'Enhanced representation through visible role models',
    'Improved motivation and confidence in STEM subjects',
    'Community-driven sustainable approach',
    'Culturally sensitive and locally relevant content'
  ];

  const phases = [
    {
      title: 'Community Partnerships',
      description: 'Build relationships with local schools, chiefs, and women\'s groups',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Pilot Program',
      description: 'Launch in 3 communities with 50 girls per location',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Scale & Expansion',
      description: 'Expand to 10 communities based on pilot learnings',
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Sustainability',
      description: 'Establish local leadership and funding mechanisms',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="solution" className="py-24 bg-gradient-to-br from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-800 rounded-full text-sm font-medium mb-6">
            <Lightbulb className="h-4 w-4 mr-2" />
            Innovation
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            The Solution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A community-driven STEM mentorship and learning hub designed to empower rural Ghanaian girls
          </p>
        </div>

        <div className="mb-20">
          <div className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-purple-100">
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mr-6">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Community STEM Mentorship Hub</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed mb-10">
              Our solution creates a network of community-based learning centers that bring STEM education 
              directly to rural areas. By combining mobile resources, local mentorship, and structured 
              programming, we address the three key barriers: access, representation, and motivation.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className={`bg-gradient-to-br ${feature.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl transition-shadow`}>
                    <feature.icon className="h-10 w-10 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-10 rounded-3xl shadow-xl border border-green-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Key Benefits & Unique Value</h3>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-700 leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-10 rounded-3xl shadow-xl border border-blue-200">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mr-4">
                <Rocket className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Implementation Strategy</h3>
            </div>
            <div className="space-y-6">
              {phases.map((phase, index) => (
                <div key={index} className="relative">
                  <div className="flex items-start space-x-4">
                    <div className={`w-8 h-8 bg-gradient-to-br ${phase.color} rounded-full flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Phase {index + 1}: {phase.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{phase.description}</p>
                    </div>
                  </div>
                  {index < phases.length - 1 && (
                    <div className="absolute left-4 top-8 w-0.5 h-6 bg-gradient-to-b from-gray-300 to-transparent"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-12 rounded-3xl shadow-2xl border border-indigo-200">
          <div className="flex items-center justify-center h-80">
            <div className="text-center space-y-6">
              <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto shadow-2xl">
                <span className="text-4xl">🏫</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                [Solution Architecture Diagram]
              </h3>
              <p className="text-gray-600 max-w-lg mx-auto leading-relaxed">
                Interactive visual representation of the community hub model showing mobile labs, 
                mentorship connections, program flow, and impact metrics
              </p>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                <Zap className="h-4 w-4" />
                <span>Interactive • Animated • Data-Driven</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;