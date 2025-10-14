import onigiri from "../../assets/ONIGIRI.svg";

export default function DashboardHeader() {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center">
            <img src={onigiri} alt="Onigiri" className="w-full h-full"/>
          </div>
          <span className="text-2xl font-bold text-[#333F72]">Onigiri</span>
        </div>
        <nav className="flex gap-8 text-[#333F72]/70">
          <button className="hover:text-[#333F72] transition-colors">Dashboard</button>
          <button className="hover:text-[#333F72] transition-colors">Lessons</button>
          <button className="hover:text-[#333F72] transition-colors">Progress</button>
          <button className="hover:text-[#333F72] transition-colors">Community</button>
          <button className="hover:text-[#333F72] transition-colors">Settings</button>
        </nav>
        <div className="flex items-center gap-4">
          <button className="w-10 h-10 bg-[#E56E0C] rounded-full flex items-center justify-center text-white font-bold">
            U
          </button>
        </div>
      </div>
    </header>
  );
}
