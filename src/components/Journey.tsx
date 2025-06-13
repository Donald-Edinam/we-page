import React from 'react';
import { Target, Users, TrendingUp, Clock, Zap } from 'lucide-react';

const Journey = () => {
  const timelineItems = [
    {
      phase: 'Problem Identification',
      description: 'Recognized the underrepresentation of girls in STEM in rural Ghana',
      status: 'completed'
    },
    {
      phase: 'Empathy Research',
      description: 'Conducted interviews and surveys with rural communities',
      status: 'completed'
    },
    {
      phase: 'Solution Design',
      description: 'Developed community STEM mentorship hub concept',
      status: 'completed'
    },
    {
      phase: 'Prototype Development',
      description: 'Created low-fidelity prototype and tested with users',
      status: 'completed'
    },
    {
      phase: 'Future Implementation',
      description: 'Seek funding and partnerships for full deployment',
      status: 'pending'
    }
  ];

  return (
    <section id="journey" className="py-24 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 rounded-full text-sm font-medium mb-6">
            <Zap className="h-4 w-4 mr-2" />
            The Process
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            My Entrepreneurial Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From identifying the problem to developing a sustainable solution for STEM education equality
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-purple-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">SMART Goals</h3>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
                  <p className="text-gray-700"><span className="font-semibold text-purple-700">Specific:</span> Increase girls' participation in STEM in rural Ghanaian communities</p>
                </div>
                <div className="p-4 bg-gradient-to-r from-pink-50 to-orange-50 rounded-2xl border border-pink-100">
                  <p className="text-gray-700"><span className="font-semibold text-pink-700">Measurable:</span> Reach 200+ girls in the first year</p>
                </div>
                <div className="p-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl border border-orange-100">
                  <p className="text-gray-700"><span className="font-semibold text-orange-700">Achievable:</span> Partner with local schools and community leaders</p>
                </div>
                <div className="p-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl border border-green-100">
                  <p className="text-gray-700"><span className="font-semibold text-green-700">Relevant:</span> Addresses critical gender gap in STEM education</p>
                </div>
                <div className="p-4 bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl border border-teal-100">
                  <p className="text-gray-700"><span className="font-semibold text-teal-700">Time-bound:</span> Launch pilot program within 12 months</p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-green-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Empathy Map Insights</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
                  <h4 className="font-bold text-blue-800 mb-3">What They Think & Feel</h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Curious about technology</li>
                    <li>• Worried about career prospects</li>
                    <li>• Motivated to succeed</li>
                  </ul>
                </div>
                <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
                  <h4 className="font-bold text-purple-800 mb-3">What They Hear</h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Limited career guidance</li>
                    <li>• Cultural discouragement</li>
                    <li>• Peer influence</li>
                  </ul>
                </div>
                <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100">
                  <h4 className="font-bold text-green-800 mb-3">What They See</h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Few female STEM role models</li>
                    <li>• Limited resources</li>
                    <li>• Male-dominated fields</li>
                  </ul>
                </div>
                <div className="p-4 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border border-orange-100">
                  <h4 className="font-bold text-orange-800 mb-3">What They Do & Say</h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Express interest privately</li>
                    <li>• Seek learning opportunities</li>
                    <li>• Support each other</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-gray-200">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Journey Timeline</h3>
              <p className="text-gray-600">Progress through the entrepreneurial process</p>
            </div>
            
            <div className="space-y-6">
              {timelineItems.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`w-6 h-6 rounded-full mt-2 flex-shrink-0 shadow-lg ${
                    item.status === 'completed' 
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
                      : 'bg-gradient-to-r from-gray-300 to-gray-400'
                  }`} />
                  <div className="flex-grow">
                    <h4 className="font-bold text-gray-900 mb-1">{item.phase}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-bold shadow-sm ${
                    item.status === 'completed' 
                      ? 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border border-green-200' 
                      : 'bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800 border border-yellow-200'
                  }`}>
                    {item.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 p-12 rounded-3xl shadow-xl border border-indigo-200">
          <div className="flex items-center justify-center h-64">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto shadow-2xl">
                <Clock className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                [Interactive Timeline Graphic]
              </h3>
              <p className="text-gray-600 max-w-md mx-auto">
                Dynamic timeline visualization showing key milestones, progress indicators, and future goals
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;