import React from 'react';
import { Link } from 'react-router-dom';
import { Home as HomeIcon, AlertCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="text-center max-w-md mx-auto">
        <div className="w-16 h-16 rounded-2xl bg-rose-50 text-rose-500 border border-rose-100 flex items-center justify-center mx-auto mb-6 shadow-xs">
          <AlertCircle className="w-8 h-8" />
        </div>
        <span className="text-sm font-bold uppercase tracking-widest text-indigo-600">404 Error</span>
        <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 font-['Outfit']">
          Page Not Found
        </h1>
        <p className="mt-4 text-slate-600 text-sm leading-relaxed">
          The page you are looking for doesn't exist, has been removed, or is currently under construction.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-600/20 transition-all"
          >
            <HomeIcon className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
