import { Instagram, MessageSquare, Pin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Logo and Copyright */}
          <div className="md:col-span-4">
          <h3 className="text-[2rem] tracking-wide mb-2">
  <span className="font-light text-[#A3A3A3]">Study</span>
  <span className="font-medium text-[#A3A3A3]">table</span>
</h3>

            <p className="text-sm text-gray-400">© Copyright 2025 Studytable</p>
          </div>

          {/* Notice Board and Socials - Aligned */}
          <div className="md:col-span-4 flex flex-row gap-6">
            {/* Notice Board Button */}
            <button className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-md shadow-md hover:bg-gray-200 transition-colors self-start ">
              <Pin className="w-4 h-4 fill-black" />
             
              <span className="text-sm font-medium">Notice Board</span>
            </button>

            {/* Socials Section */}
            <div>
              <h3 className="text-xl font-normal mb-2">Socials</h3>
              <div className="space-y-2">
                <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                  <span className="text-sm">Instagram</span>
                </a>
                <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <MessageSquare className="w-5 h-5" />
                  <span className="text-sm">What's App</span>
                </a>
              </div>
            </div>
          </div>

          {/* Blogs */}
          <div className="md:col-span-4">
            <h3 className="text-xl font-normal mb-4">Blogs</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                  How we plan learning session ?
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                  How we plan assessment session ?
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                  How we manage student life ?
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                  The effective student
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
