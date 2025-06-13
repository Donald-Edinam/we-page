import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Journey from './components/Journey';
import Solution from './components/Solution';
import Prototype from './components/Prototype';
import Reflection from './components/Reflection';
import Conclusion from './components/Conclusion';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <Journey />
        <Solution />
        <Prototype />
        <Reflection />
        <Conclusion />
      </main>
    </div>
  );
}

export default App;