import { Link, Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-[#232f3e] text-white px-4 py-2 flex items-center justify-between">
        <div className="text-lg font-semibold">amazon <span className="text-gray-300">vendor central</span></div>
        <div className="bg-white text-black px-3 py-1 rounded text-sm">US - Sportsman Supply Inc.</div>
      </header>

      <nav className="bg-white border-b flex px-6 space-x-6 text-sm font-medium">
        <Link to="/" className="py-3 border-b-2 border-transparent hover:border-black">Home</Link>
        <Link to="/sales" className="py-3 border-b-2 border-transparent hover:border-black">Sales</Link>
        <Link to="/inventory" className="py-3 border-b-2 border-transparent hover:border-black">Inventory</Link>
        <Link to="/catalog" className="py-3 border-b-2 border-transparent hover:border-black">Catalog</Link>
      </nav>

      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}
