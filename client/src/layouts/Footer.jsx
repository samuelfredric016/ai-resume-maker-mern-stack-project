import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Heart, Globe, Mail, FileText } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white font-['Outfit']">
                Resume<span className="text-indigo-400">AI</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Empowering job seekers worldwide with AI-driven, ATS-compliant resumes designed to land top interviews.
            </p>
            <div className="flex items-center gap-3 pt-2 text-slate-400">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-800 hover:text-white transition-colors" title="GitHub">
                <Globe className="w-4 h-4" />
              </a>
              <a href="mailto:support@resumeai.local" className="p-2 rounded-lg bg-slate-800 hover:text-white transition-colors" title="Email Support">
                <Mail className="w-4 h-4" />
              </a>
              <Link to="/#templates" className="p-2 rounded-lg bg-slate-800 hover:text-white transition-colors" title="Templates">
                <FileText className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Product links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Product</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/#templates" className="hover:text-white transition-colors">Resume Templates</Link></li>
              <li><Link to="/#features" className="hover:text-white transition-colors">AI Resume Enhancer</Link></li>
              <li><Link to="/#pricing" className="hover:text-white transition-colors">Pricing Plans</Link></li>
              <li><Link to="/dashboard" className="hover:text-white transition-colors">Dashboard</Link></li>
            </ul>
          </div>

          {/* AI Features */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">AI Features</h4>
            <ul className="space-y-2.5 text-sm">
              <li><span className="text-slate-400">Gemini Summary Generator</span></li>
              <li><span className="text-slate-400">Bullet Points Improver</span></li>
              <li><span className="text-slate-400">Job Description Tailoring</span></li>
              <li><span className="text-slate-400">ATS Score & Keyword Match</span></li>
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Built With MERN</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>MongoDB & Mongoose</li>
              <li>Express.js & Node.js REST API</li>
              <li>React 19 & Tailwind CSS</li>
              <li>Google Gemini AI API</li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} ResumeAI. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Crafted for developers & professionals</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          </div>
        </div>
      </div>
    </footer>
  );
}
