import { FiHelpCircle } from 'react-icons/fi';

export default function HelpMenu() {
  return (
    <div className="relative group cursor-pointer">
      <FiHelpCircle className="text-xl" />
      <div className="absolute top-6 right-0 bg-white shadow-md rounded p-2 w-44 hidden group-hover:block z-50">
        <p className="text-sm hover:text-blue-600 cursor-pointer">Help Center</p>
        <p className="text-sm hover:text-blue-600 cursor-pointer">Contact Support</p>
        <p className="text-sm hover:text-blue-600 cursor-pointer">FAQ</p>
      </div>
    </div>
  );
}
