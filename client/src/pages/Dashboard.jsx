import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  FileText, 
  Plus, 
  Sparkles, 
  FolderKanban, 
  ShieldCheck, 
  User, 
  Mail, 
  Calendar,
  Crown
} from 'lucide-react';

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-slate-900 rounded-2xl p-6 sm:p-8 text-white shadow-xl mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-indigo-200 text-xs font-semibold mb-3 backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Authenticated Session Active</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold font-['Outfit']">
            Welcome back, {user?.name || 'Candidate'} 👋
          </h1>
          <p className="text-sm text-indigo-200 mt-1 max-w-xl">
            Signed in with <span className="font-mono text-white font-medium">{user?.email}</span>. Your session is securely stored with HTTP-only cookies.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => alert('Resume Creation form will be activated in Phase 3!')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-900 bg-white hover:bg-indigo-50 shadow-md transition-all hover:-translate-y-0.5"
          >
            <Plus className="w-4 h-4 text-indigo-600" />
            <span>Create New Resume</span>
          </button>
        </div>
      </div>

      {/* User Information & System Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Account Role</div>
          <div className="text-2xl font-bold font-['Outfit'] text-slate-900 mt-2 capitalize flex items-center gap-2">
            <span>{user?.role || 'User'}</span>
            {user?.role === 'admin' && (
              <span className="text-[10px] bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded font-mono uppercase">Admin</span>
            )}
          </div>
          <div className="text-xs text-indigo-600 font-medium mt-1">Role-based Access Active</div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Membership</div>
          <div className="text-2xl font-bold font-['Outfit'] text-slate-900 mt-2 flex items-center gap-1.5">
            <span>{user?.isPremium ? 'Premium' : 'Standard'}</span>
            {user?.isPremium ? (
              <Crown className="w-4 h-4 text-amber-500 fill-amber-500" />
            ) : null}
          </div>
          <div className="text-xs text-emerald-600 font-medium mt-1">Free Tier Active</div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Saved Resumes</div>
          <div className="text-2xl font-bold font-['Outfit'] text-slate-900 mt-2">0</div>
          <div className="text-xs text-indigo-600 font-medium mt-1">Ready for Phase 3</div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">AI Assistant</div>
          <div className="text-2xl font-bold font-['Outfit'] text-slate-900 mt-2">Gemini 2.0</div>
          <div className="text-xs text-violet-600 font-medium mt-1">Ready for Phase 6</div>
        </div>
      </div>

      {/* Empty State Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-2xl mx-auto my-6">
        <div className="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto mb-4">
          <FolderKanban className="w-8 h-8" />
        </div>
        <h3 className="text-lg font-bold font-['Outfit'] text-slate-900">Phase 2 Authentication Complete!</h3>
        <p className="text-sm text-slate-500 mt-2 max-w-lg mx-auto leading-relaxed">
          Your account is registered in MongoDB and authenticated with secure HTTP-only cookies. When we proceed to <strong>Phase 3</strong>, you'll be able to create, edit, live preview, and save multiple resumes here.
        </p>
      </div>

    </div>
  );
}
