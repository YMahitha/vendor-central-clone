import { FiSettings } from 'react-icons/fi';

export default function SettingsMenu() {
  return (
    <div className="relative group cursor-pointer">
      <FiSettings className="text-xl" />
      <div className="absolute top-6 right-0 bg-white shadow-md rounded p-2 w-44 hidden group-hover:block z-50">
        <p className="text-sm hover:text-blue-600 cursor-pointer">Account Settings</p>
        <p className="text-sm hover:text-blue-600 cursor-pointer">Preferences</p>
        <p className="text-sm hover:text-blue-600 cursor-pointer">Sign Out</p>
      </div>
    </div>
  );
}
