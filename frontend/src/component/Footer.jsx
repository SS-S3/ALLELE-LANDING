import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-white text-2xl font-semibold mb-4">
            AlleleRank
          </h2>
          <p className="text-sm leading-relaxed">
            AlleleRank is a biotechnology analytics platform focused on
            disease-associated genetic variants, pathogen genomics, and
            evidence-driven interpretation for research and discovery.
          </p>
        </div>

        {/* Platform */}
        <div>
          <h3 className="text-white font-medium mb-4">Platform</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/platform" className="hover:text-white transition-colors cursor-pointer">Variant Analysis</Link></li>
            <li><Link to="/platform" className="hover:text-white transition-colors cursor-pointer">Disease Associations</Link></li>
            <li><Link to="/platform" className="hover:text-white transition-colors cursor-pointer">Pathogen Genomics</Link></li>
            <li><Link to="/platform" className="hover:text-white transition-colors cursor-pointer">Genome Annotation</Link></li>
            <li><Link to="/platform" className="hover:text-white transition-colors cursor-pointer">Risk Scoring Models</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white font-medium mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/resources" className="hover:text-white transition-colors cursor-pointer">Research Publications</Link></li>
            <li><Link to="/resources" className="hover:text-white transition-colors cursor-pointer">Datasets & References</Link></li>
            <li><Link to="/resources" className="hover:text-white transition-colors cursor-pointer">API Documentation</Link></li>
            <li><Link to="/resources" className="hover:text-white transition-colors cursor-pointer">Methodology</Link></li>
            <li><Link to="/resources" className="hover:text-white transition-colors cursor-pointer">FAQs</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-medium mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: contact@allelerank.bio</li>
            <li><Link to="/contact" className="hover:text-white transition-colors cursor-pointer">Collaborations</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors cursor-pointer">Research Partnerships</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors cursor-pointer">Careers</Link></li>
          </ul>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm">
        <p>
          © {new Date().getFullYear()} AlleleRank. All rights reserved.
        </p>
        <p className="mt-2 text-gray-500">
          For research and educational purposes only. Not intended for clinical
          diagnosis or treatment.
        </p>
      </div>

      {/* Team Credit */}
      <div className="mt-4 text-center text-xs text-gray-500">
        Created by <span className="text-gray-300 font-medium">Team Whoope</span>
      </div>
    </footer>
  );
}