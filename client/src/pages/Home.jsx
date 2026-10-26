import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  FileCheck, 
  Layers, 
  DownloadCloud, 
  Zap, 
  ShieldCheck, 
  Briefcase, 
  Code,
  LayoutTemplate
} from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: <Sparkles className="w-6 h-6 text-indigo-500" />,
      title: 'Google Gemini AI Powered',
      description: 'Generate high-impact professional summaries, rewrite experience bullet points, and tailor phrasing to match job descriptions.'
    },
    {
      icon: <Layers className="w-6 h-6 text-violet-500" />,
      title: 'Real-Time Side-by-Side Preview',
      description: 'See every keystroke instantly rendered on a live A4 resume layout. Toggle between templates anytime without losing data.'
    },
    {
      icon: <FileCheck className="w-6 h-6 text-emerald-500" />,
      title: '100% ATS Optimized',
      description: 'Formatted and structured specifically to pass Applicant Tracking Systems (ATS) used by top employers and Fortune 500 companies.'
    },
    {
      icon: <DownloadCloud className="w-6 h-6 text-blue-500" />,
      title: 'Pixel-Perfect PDF Export',
      description: 'High-resolution PDF generation with standard A4 dimensions, smart page break handling, and clean printable typography.'
    },
    {
      icon: <LayoutTemplate className="w-6 h-6 text-amber-500" />,
      title: '4 Distinct Templates',
      description: 'Modern Professional, Classic ATS, Minimal Clean, and Developer Portfolio tailored for tech specialists and creators.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-rose-500" />,
      title: 'Secure JWT Authentication',
      description: 'Protected routes, password encryption with bcrypt, and secure HTTP-only cookies safeguarding your personal data.'
    }
  ];

  const templatesPreview = [
    {
      name: 'Modern Professional',
      role: 'Best for Corporate & Tech',
      color: 'from-blue-600 to-indigo-600',
      badge: 'Popular',
    },
    {
      name: 'Classic ATS',
      role: 'Standard ATS-Optimized',
      color: 'from-slate-700 to-slate-900',
      badge: 'High Score',
    },
    {
      name: 'Minimal Clean',
      role: 'Designers & Writers',
      color: 'from-teal-600 to-emerald-600',
      badge: 'Clean',
    },
    {
      name: 'Developer Portfolio',
      role: 'Software Engineers',
      color: 'from-violet-600 to-purple-800',
      badge: 'Tech',
    },
  ];

  return (
    <div className="relative overflow-hidden">
      
      {/* Background Glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-br from-indigo-100/60 via-violet-100/40 to-transparent blur-3xl -z-10 pointer-events-none" />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 text-center">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs sm:text-sm font-semibold mb-8 shadow-xs">
          <Sparkles className="w-4 h-4 text-indigo-600 animate-spin" style={{ animationDuration: '4s' }} />
          <span>Integrated with Google Gemini 2.0 AI</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 font-['Outfit'] max-w-4xl mx-auto leading-tight sm:leading-none">
          Land Your Dream Job with an{' '}
          <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">
            AI-Engineered
          </span>{' '}
          Resume
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
          Create ATS-beating resumes in minutes. Leverage cutting-edge Gemini AI to draft executive summaries, enhance bullet points, and download recruiter-ready PDFs.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/register"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-600/30 hover:shadow-xl hover:shadow-indigo-600/40 transition-all hover:-translate-y-0.5"
          >
            <span>Create Your Free Resume</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href="#templates"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-xs"
          >
            <LayoutTemplate className="w-5 h-5 text-slate-500" />
            <span>Explore Templates</span>
          </a>
        </div>

        {/* Trust Points */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-500">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>4 Distinct ATS Templates</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>One-Click PDF Export</span>
          </div>
        </div>

        {/* Live Mockup Teaser */}
        <div className="mt-14 max-w-5xl mx-auto rounded-2xl bg-white p-3 shadow-2xl ring-1 ring-slate-900/10">
          <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-900 text-left p-6 sm:p-8 text-white">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500" />
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-xs text-slate-400 font-mono ml-2">resume-builder-engine.tsx</span>
              </div>
              <span className="text-xs text-indigo-400 font-medium flex items-center gap-1">
                <Zap className="w-3.5 h-3.5" /> Live Sync Active
              </span>
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="space-y-4">
                <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded bg-indigo-500/20 text-indigo-300">
                  AI Enhancement In Progress
                </span>
                <h3 className="text-xl font-bold font-['Outfit'] text-slate-100">
                  Instant Gemini Summary Rewriting
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  "Senior Full Stack Engineer with 4+ years spearheading scalable MERN architectures, cutting API latency by 38% and deploying production AI integrations."
                </p>
                <div className="flex items-center gap-2 pt-2">
                  <span className="text-xs text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded font-medium">
                    +42% ATS Match Score
                  </span>
                  <span className="text-xs text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded font-medium">
                    Strong Action Verbs
                  </span>
                </div>
              </div>
              <div className="bg-slate-800/80 rounded-xl p-5 border border-slate-700/60 font-mono text-xs text-slate-300 space-y-2">
                <div className="text-indigo-400 font-semibold">// Resume State Preview</div>
                <div>Name: "Alex Morgan"</div>
                <div>Role: "Senior Software Engineer"</div>
                <div>Skills: ["React", "Node.js", "MongoDB", "Express", "Tailwind"]</div>
                <div className="text-emerald-400 pt-2">// Ready for instantaneous PDF export</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-t border-slate-200/60">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-3">Architected For Success</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-['Outfit']">
            Engineered with Every Feature Modern Job Seekers Need
          </p>
          <p className="mt-4 text-slate-600 text-base">
            No more fighting with Microsoft Word margins or outdated resume builders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-indigo-200 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                {feat.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 font-['Outfit']">
                {feat.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Template Showcase Section */}
      <section id="templates" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-t border-slate-200/60">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-3">Professional Styles</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-['Outfit']">
            Choose From 4 Recruiter-Approved Layouts
          </p>
          <p className="mt-4 text-slate-600 text-base">
            Switch styles dynamically at any time. Your content seamlessly maps across templates.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {templatesPreview.map((tmpl, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col group"
            >
              <div className={`h-40 bg-gradient-to-br ${tmpl.color} p-4 flex flex-col justify-between text-white relative`}>
                <span className="self-end text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-xs">
                  {tmpl.badge}
                </span>
                <div>
                  <div className="text-xs text-white/80 font-medium">Template #{idx + 1}</div>
                  <h4 className="font-bold text-lg font-['Outfit']">{tmpl.name}</h4>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-medium text-slate-500 mb-3">{tmpl.role}</p>
                  <ul className="text-xs text-slate-600 space-y-1.5">
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Clean Section Hierarchy
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> ATS Scanner Verified
                    </li>
                  </ul>
                </div>
                <Link
                  to="/register"
                  className="mt-5 w-full py-2 text-center text-xs font-semibold rounded-lg bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                >
                  Use Template
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="rounded-3xl bg-gradient-to-r from-indigo-900 via-indigo-800 to-slate-900 p-8 sm:p-14 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl font-extrabold font-['Outfit'] tracking-tight">
              Ready to Upgrade Your Career?
            </h2>
            <p className="text-indigo-200 text-base sm:text-lg">
              Join candidates crafting impactful resumes with Gemini AI. Build, polish, and download your resume in minutes.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/register"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold bg-white text-indigo-950 hover:bg-indigo-50 shadow-lg hover:shadow-xl transition-all"
              >
                Start Building Now — Free
              </Link>
              <Link
                to="/login"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold bg-indigo-700/50 hover:bg-indigo-700 text-white border border-indigo-500/30 transition-all"
              >
                Sign In to Account
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
