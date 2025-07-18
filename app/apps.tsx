import React from 'react';

const apps = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `App ${i + 1}`,
  description: `Description for App ${i + 1}. This is a sample app to showcase your portfolio projects.`,
  technologies: ['Flutter', 'GetX', 'API'],
  platforms: ['iOS', 'Android'],
}));

export default function AllAppsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16 px-4">
      <div className="container mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-10 text-center">All Apps</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {apps.map(app => (
            <div key={app.id} className="group bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl p-1">
              <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl overflow-hidden p-4 relative h-full flex flex-col">
                <h2 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{app.name}</h2>
                <p className="text-gray-400 mb-4">{app.description}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {app.technologies.map(tech => (
                    <span key={tech} className="px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-400 border border-gray-700/50 group-hover:border-gray-600/50 group-hover:text-gray-300 transition-colors whitespace-nowrap">{tech}</span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {app.platforms.map(platform => (
                    <span key={platform} className="px-2 py-0.5 rounded-full text-xs bg-blue-500/10 text-blue-400 border border-blue-500/20 whitespace-nowrap">{platform}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 