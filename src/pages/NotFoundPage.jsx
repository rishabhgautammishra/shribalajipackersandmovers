import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <>
      <SEOHead
        title="Page Not Found | Shiv Ganga Packers & Movers"
        description="The requested page could not be found."
        canonicalPath="/404"
      />

      <main className="min-h-[60vh] flex items-center justify-center py-20 px-4">
        <div className="text-center space-y-5 max-w-md">
          <div className="text-7xl font-extrabold text-saffron-600">404</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-navy">Page Not Found</h1>
          <p className="text-sm text-slate-600">
            The page you are looking for might have been moved or does not exist.
          </p>
          <div className="pt-2">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-navy text-white text-sm font-bold hover:bg-slate-800 transition-colors shadow-sm"
            >
              <Home className="w-4 h-4" />
              <span>Back to Homepage</span>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
