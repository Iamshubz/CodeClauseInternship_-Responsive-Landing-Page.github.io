export default function Widget() {
    return (
        
        
        export default function Widget() {
            return (
                <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-foreground flex">
                  <div className="w-1/5 bg-card p-4 flex flex-col justify-between">
                    <div>
                      <div className="mb-8">
                        <img src="https://openui.fly.dev/openui/40x40.svg?text=Logo" alt="Logo" className="mb-4">
                        <ul className="space-y-4">
                          <li className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-300">
                            <span className="mr-2">🏠</span> Overview
                          </li>
                          <li className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-300">
                            <span className="mr-2">🏆</span> Competition
                          </li>
                          <li className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-300">
                            <span className="mr-2">⏱️</span> Timer
                          </li>
                          <li className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-300">
                            <span className="mr-2">🔥</span> Energy
                          </li>
                          <li className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-300">
                            <span className="mr-2">📅</span> Calendar
                          </li>
                          <li className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-300">
                            <span className="mr-2">📏</span> Distances
                          </li>
                          <li className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-300">
                            <span className="mr-2">👤</span> Profile
                          </li>
                          <li className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-300">
                            <span className="mr-2">⚙️</span> Settings
                          </li>
                        </ul>
                      </div>
                      <div className="text-muted-foreground hover:text-destructive transition-colors duration-300">
                        <span className="mr-2">🚪</span> Log Out
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-4/5 p-6">
                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <h1 className="text-2xl font-extrabold text-white">Seattle, United States</h1>
                      </div>
                      <div className="flex items-center space-x-4">
                        <img src="https://openui.fly.dev/openui/40x40.svg?text=🔔" alt="Notifications" className="rounded-full border-2 border-white">
                        <img src="https://openui.fly.dev/openui/40x40.svg?text=👤" alt="User Profile" className="rounded-full border-2 border-white">
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gradient-to-r from-green-400 to-blue-500 p-4 rounded-lg shadow-lg">
                        <h2 className="text-white">Time</h2>
                        <p className="text-3xl font-extrabold text-white">56m</p>
                      </div>
                      <div className="bg-gradient-to-r from-yellow-400 to-red-500 p-4 rounded-lg shadow-lg">
                        <h2 className="text-white">Total distance</h2>
                        <p className="text-3xl font-extrabold text-white">15 h 5km</p>
                      </div>
                      <div className="bg-gradient-to-r from-purple-400 to-pink-500 p-4 rounded-lg shadow-lg">
                        <h2 className="text-white">Energy burn</h2>
                        <p className="text-3xl font-extrabold text-white">1 345 kal</p>
                      </div>
                      <div className="bg-gradient-to-r from-indigo-400 to-purple-500 p-4 rounded-lg shadow-lg">
                        <h2 className="text-white">Sleep</h2>
                        <p className="text-3xl font-extrabold text-white">56m</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="bg-gradient-to-r from-teal-400 to-cyan-500 p-4 rounded-lg shadow-lg">
                        <h2 className="text-white">Contact</h2>
                        <p className="text-2xl text-white">17 min</p>
                        <p className="text-white">Flight time</p>
                        <p className="text-2xl text-white">17 min</p>
                      </div>
                      <div className="bg-gradient-to-r from-pink-400 to-red-500 p-4 rounded-lg shadow-lg">
                        <h2 className="text-white">Symmetry</h2>
                        <p className="text-2xl text-white">95%</p>
                      </div>
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-lg shadow-lg">
                        <h2 className="text-white">Running with Kate</h2>
                        <p className="text-2xl text-white">9 July, 2022</p>
                        <p className="text-2xl text-white">Double Walking Time</p>
                        <p className="text-2xl text-white">34 min</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-gradient-to-r from-green-400 to-blue-500 p-4 rounded-lg shadow-lg">
                        <h2 className="text-white">Activity Tracking</h2>
                        <p className="text-2xl text-white">Thursday, 22 Sep</p>
                        <div className="flex justify-between items-center mt-4">
                          <div className="flex space-x-2 text-white">
                            <span>Sun</span>
                            <span>Mon</span>
                            <span>Tue</span>
                            <span>Wed</span>
                            <span className="text-primary">Thu</span>
                            <span>Fri</span>
                            <span>Sat</span>
                          </div>
                          <div className="text-primary">+</div>
                        </div>
                        <div className="mt-4">
                          <img src="https://openui.fly.dev/openui/200x100.svg?text=Graph" alt="Graph">
                        </div>
                        <div className="flex justify-between mt-4 text-white">
                          <p className="text-2xl">-5.6 Done</p>
                          <p className="text-2xl">4.4 Left</p>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-purple-400 to-pink-500 p-4 rounded-lg shadow-lg">
                        <h2 className="text-white">Total time</h2>
                        <p className="text-3xl font-extrabold text-white">2 h 45 m</p>
                        <div className="mt-4">
                          <img src="https://openui.fly.dev/openui/200x100.svg?text=Bar+Chart" alt="Bar Chart">
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-indigo-400 to-purple-500 p-4 rounded-lg shadow-lg">
                        <h2 className="text-white">Total distance</h2>
                        <p className="text-3xl font-extrabold text-white">10 km</p>
                        <div className="mt-4">
                          <img src="https://openui.fly.dev/openui/200x100.svg?text=Pie+Chart" alt="Pie Chart">
                        </div>
                        <h2 className="text-white mt-4">Average speed</h2>
                        <p className="text-3xl font-extrabold text-white">6.1 p/km</p>
                        <div className="mt-4">
                          <img src
                
            )
        }
        
    )
}