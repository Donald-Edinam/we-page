import React from 'react';
import { MessageSquare, TrendingUp, AlertCircle, Users2, Brain, Target } from 'lucide-react';

const Reflection = () => {
  const lessons = [
    {
      icon: MessageSquare,
      title: 'The Power of Listening',
      description: 'Direct engagement with rural communities revealed needs that differed from my initial assumptions',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users2,
      title: 'Stakeholder Collaboration',
      description: 'Success requires buy-in from parents, teachers, community leaders, and the girls themselves',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: TrendingUp,
      title: 'Iterative Design',
      description: 'User feedback led to significant improvements in the prototype design and functionality',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const challenges = [
    {
      challenge: 'Limited Access to Target Users',
      solution: 'Partnered with local NGOs and used mobile data collection methods',
      color: 'from-red-500 to-pink-500'
    },
    {
      challenge: 'Cultural Sensitivity Requirements',
      solution: 'Involved community elders in the design process and cultural validation',
      color: 'from-orange-500 to-yellow-500'
    },
    {
      challenge: 'Language and Communication Barriers',
      solution: 'Worked with local translators and used visual prototyping methods',
      color: 'from-green-500 to-teal-500'
    },
    {
      challenge: 'Technology Infrastructure Limitations',
      solution: 'Designed offline-capable features and low-bandwidth alternatives',
      color: 'from-blue-500 to-indigo-500'
    }
  ];

  return (
    <section id="reflection" className="py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 rounded-full text-sm font-medium mb-6">
            <Brain className="h-4 w-4 mr-2" />
            Learning
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Reflection & Learning
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Key insights and lessons learned throughout the entrepreneurial journey
          </p>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Lessons Learned</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {lessons.map((lesson, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-gray-100 hover:scale-105 transition-transform duration-300">
                <div className={`bg-gradient-to-br ${lesson.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-xl`}>
                  <lesson.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{lesson.title}</h4>
                <p className="text-gray-600 leading-relaxed">{lesson.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <div className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-yellow-200">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mr-4">
                <AlertCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Challenges & Solutions</h3>
            </div>
            <div className="grid gap-8">
              {challenges.map((item, index) => (
                <div key={index} className="relative">
                  <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${item.color} rounded-full`}></div>
                  <div className="pl-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-2xl border border-red-100">
                        <h4 className="font-bold text-red-800 mb-3 flex items-center">
                          <Target className="h-5 w-5 mr-2" />
                          Challenge
                        </h4>
                        <p className="text-gray-700 leading-relaxed">{item.challenge}</p>
                      </div>
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-100">
                        <h4 className="font-bold text-green-800 mb-3 flex items-center">
                          <MessageSquare className="h-5 w-5 mr-2" />
                          Solution
                        </h4>
                        <p className="text-gray-700 leading-relaxed">{item.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-cyan-100 via-blue-100 to-indigo-100 p-10 rounded-3xl shadow-2xl border border-cyan-200">
          <h3 className="text-3xl font-bold text-gray-900 mb-10 text-center">Research Insights</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-blue-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-4">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">Interview Findings</h4>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">12 in-depth interviews with rural families</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">89% of parents support girls' STEM education</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Main barrier is lack of visible career paths</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Strong community network willingness to help</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-purple-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">Survey Results</h4>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">150 responses from target demographic</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">73% interested in STEM mentorship programs</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Mobile accessibility is crucial requirement</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Peer support highly valued by participants</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reflection;