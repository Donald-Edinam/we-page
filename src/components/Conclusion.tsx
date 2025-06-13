import React from 'react';
import { CheckCircle2, Rocket, Heart, Mail, Linkedin, Github, Star, Zap } from 'lucide-react';

const Conclusion = () => {
  return (
    <section id="conclusion" className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6 border border-white/20">
            <Rocket className="h-4 w-4 mr-2" />
            Next Steps
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Moving Forward
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            From prototype to impact: The journey continues
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-white/10 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-white/20">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mr-4">
                <CheckCircle2 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">MVP Status</h3>
            </div>
            <p className="text-purple-100 leading-relaxed mb-8">
              The current prototype successfully demonstrates the core value proposition and has 
              received positive validation from our target community. Key features have been tested 
              and refined based on user feedback, establishing a strong foundation for full development.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full shadow-lg"></div>
                <span className="text-sm text-purple-100">Community validation completed</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full shadow-lg"></div>
                <span className="text-sm text-purple-100">Core features prototyped and tested</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full shadow-lg"></div>
                <span className="text-sm text-purple-100">Stakeholder partnerships established</span>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-white/20">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mr-4">
                <Rocket className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Future Plans</h3>
            </div>
            <p className="text-purple-100 leading-relaxed mb-8">
              The next phase focuses on securing funding, building strategic partnerships, and 
              transitioning from prototype to a fully functional platform. We're actively seeking 
              investors and grants to support our mission.
            </p>
            <div className="space-y-6">
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400 to-orange-400 rounded-full"></div>
                <div className="pl-6">
                  <h4 className="font-bold mb-2">Q1 2024: Funding & Partnerships</h4>
                  <p className="text-sm text-purple-200">Secure initial funding and formalize community partnerships</p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full"></div>
                <div className="pl-6">
                  <h4 className="font-bold mb-2">Q2 2024: Platform Development</h4>
                  <p className="text-sm text-purple-200">Build full-featured platform with mobile optimization</p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 to-emerald-400 rounded-full"></div>
                <div className="pl-6">
                  <h4 className="font-bold mb-2">Q3 2024: Pilot Launch</h4>
                  <p className="text-sm text-purple-200">Launch pilot program in 3 rural communities</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm p-12 rounded-3xl mb-20 shadow-2xl border border-white/10">
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-6">Join Me in Supporting Girls in STEM</h3>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              Together, we can break down barriers and create opportunities for the next generation 
              of female scientists, engineers, and innovators in rural Ghana.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-10 py-4 bg-gradient-to-r from-white to-gray-100 text-gray-900 rounded-2xl font-bold hover:from-gray-100 hover:to-gray-200 transition-all duration-300 shadow-xl hover:shadow-2xl">
              Support Our Mission
            </button>
            <button className="px-10 py-4 border-2 border-white/30 text-white rounded-2xl font-bold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              Partner With Us
            </button>
          </div>
        </div>

        <div className="border-t border-white/20 pt-12">
          <div className="text-center">
            <div className="mb-8">
              <h4 className="text-2xl font-bold mb-2">Christabel Adu Agbenyegah</h4>
              <p className="text-purple-200 mb-4">ENT 110: Introduction to Venture Creation</p>
              <div className="flex items-center justify-center space-x-2 text-sm text-purple-300">
                <Star className="h-4 w-4" />
                <span>Empowering the next generation through innovation</span>
                <Zap className="h-4 w-4" />
              </div>
            </div>
            
            <div className="flex justify-center space-x-8">
              <a href="mailto:christabel@example.com" className="flex items-center space-x-3 text-purple-200 hover:text-white transition-colors group">
                <div className="w-10 h-10 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <span className="font-medium">Email</span>
              </a>
              <a href="#" className="flex items-center space-x-3 text-purple-200 hover:text-white transition-colors group">
                <div className="w-10 h-10 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </div>
                <span className="font-medium">LinkedIn</span>
              </a>
              <a href="#" className="flex items-center space-x-3 text-purple-200 hover:text-white transition-colors group">
                <div className="w-10 h-10 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Github className="h-5 w-5" />
                </div>
                <span className="font-medium">Portfolio</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conclusion;