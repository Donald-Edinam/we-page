import React from 'react';
import { Play, FileText, Layers, CheckCircle, Monitor, Smartphone } from 'lucide-react';

const Prototype = () => {
  const features = [
    'Community mapping and needs assessment tool',
    'Mentor-mentee matching system',
    'Mobile lab scheduling and tracking',
    'Progress monitoring dashboard',
    'Resource sharing platform',
    'Parent and community engagement features'
  ];

  const testingResults = [
    {
      percentage: '85%',
      label: 'User Satisfaction',
      description: 'Found the platform intuitive and helpful',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      percentage: '92%',
      label: 'Feature Relevance',
      description: 'Said features address their real needs',
      color: 'from-green-500 to-emerald-500'
    },
    {
      percentage: '78%',
      label: 'Likelihood to Use',
      description: 'Would actively participate in the program',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="prototype" className="py-24 bg-gradient-to-br from-gray-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-800 rounded-full text-sm font-medium mb-6">
            <Layers className="h-4 w-4 mr-2" />
            Development
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            The Prototype
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A low-fidelity prototype demonstrating the core functionality of our community STEM hub platform
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-blue-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-4">
                  <Layers className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Prototype Overview</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our low-fidelity prototype focuses on the essential user flows that demonstrate how rural 
                communities can access STEM resources, connect with mentors, and track progress. The prototype 
                was designed with input from potential users to ensure cultural relevance and usability.
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-200">
                <h4 className="font-bold text-blue-900 mb-4">Target Users Tested:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Rural secondary school girls (14-18)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Local teachers & administrators</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Community leaders & parents</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Potential STEM mentors</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-green-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mr-4">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Key Features Demonstrated</h3>
              </div>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <span className="text-gray-700 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-10 rounded-3xl shadow-xl border-2 border-dashed border-yellow-300">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto shadow-2xl">
                  <Play className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  [Prototype Demo Video]
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  5-minute interactive walkthrough showing user interaction with the community STEM hub platform
                </p>
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Monitor className="h-4 w-4" />
                    <span>Desktop</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Smartphone className="h-4 w-4" />
                    <span>Mobile</span>
                  </div>
                </div>
                <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-2xl font-bold hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Play Demo Video
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-10 rounded-3xl shadow-xl border-2 border-dashed border-purple-300">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto shadow-2xl">
                  <FileText className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  [Prototype Wireframes]
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Hand-drawn concept diagrams and digital wireframes showing user interface design and user flows
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-gray-200">
          <h3 className="text-3xl font-bold text-gray-900 mb-10 text-center">User Testing Results</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testingResults.map((result, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className={`w-24 h-24 bg-gradient-to-br ${result.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl transition-shadow`}>
                  <div className="text-2xl font-bold text-white">{result.percentage}</div>
                </div>
                <div className="text-xl font-bold text-gray-900 mb-2">{result.label}</div>
                <div className="text-gray-600 text-sm leading-relaxed">{result.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prototype;