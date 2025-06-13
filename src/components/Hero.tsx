import React from 'react';
import { ArrowRight, Heart, Sparkles, Star } from 'lucide-react';

const Hero = () => {
  const scrollToJourney = () => {
    document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 flex items-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-orange-300/20 to-pink-300/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm text-purple-800 rounded-full text-sm font-medium shadow-lg border border-purple-200">
              <Sparkles className="h-4 w-4 mr-2" />
              ENT 110: Introduction to Venture Creation
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                My{' '}
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                  Entrepreneurial
                </span>{' '}
                Journey
              </h1>
              
              <h2 className="text-2xl sm:text-3xl text-gray-700 font-medium leading-relaxed">
                Tackling Inequality in STEM Education in Rural Ghana
              </h2>
              
              <p className="text-xl text-gray-600">
                By <span className="font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Christabel Adu Agbenyegah</span>
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-purple-100">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">The Challenge</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Girls in rural Ghana face significant barriers to STEM education, including limited 
                    access to resources, lack of role models, and cultural challenges that discourage 
                    their participation in science and technology fields.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToJourney}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                Explore My Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="flex items-center px-8 py-4 bg-gradient-to-r from-orange-100 to-pink-100 text-orange-800 rounded-2xl font-semibold border border-orange-200">
                <Star className="mr-2 h-5 w-5" />
                Empowering Girls Through Innovation
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-white/60 to-purple-100/60 backdrop-blur-sm rounded-3xl p-12 h-96 lg:h-[500px] flex items-center justify-center shadow-2xl border border-white/50">
              <div className="text-center space-y-6">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto shadow-2xl">
                  <span className="text-5xl">📚</span>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-700 font-semibold text-lg">
                    [Hero Visual Placeholder]
                  </p>
                  <p className="text-sm text-gray-600 max-w-xs mx-auto">
                    Inspiring image of rural Ghanaian girls engaged in STEM activities and learning
                  </p>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg rotate-12">
              <span className="text-2xl">⚡</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg -rotate-12">
              <span className="text-xl">🌟</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;