import onigiri from "../../assets/ONIGIRI.svg";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="border-4 border-[#E56E0C] rounded-full h-16 w-16 flex items-center justify-center">
                <img src={onigiri} alt="Onigiri" className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold">Onigiri</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Making Japanese learning addictive through interactive lessons, 
              gamified experiences, and a supportive community.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-[#333F72] rounded-full flex items-center justify-center hover:bg-[#E56E0C] transition-colors">
                📘
              </a>
              <a href="#" className="w-10 h-10 bg-[#333F72] rounded-full flex items-center justify-center hover:bg-[#E56E0C] transition-colors">
                🐦
              </a>
              <a href="#" className="w-10 h-10 bg-[#333F72] rounded-full flex items-center justify-center hover:bg-[#E56E0C] transition-colors">
                📷
              </a>
              <a href="#" className="w-10 h-10 bg-[#333F72] rounded-full flex items-center justify-center hover:bg-[#E56E0C] transition-colors">
                💼
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-[#E56E0C] transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#E56E0C] transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#E56E0C] transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#E56E0C] transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#E56E0C] transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-[#E56E0C] transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#E56E0C] transition-colors">Community</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#E56E0C] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#E56E0C] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#E56E0C] transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Onigiri. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-[#E56E0C] transition-colors text-sm">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-[#E56E0C] transition-colors text-sm">Terms</a>
            <a href="#" className="text-gray-400 hover:text-[#E56E0C] transition-colors text-sm">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

