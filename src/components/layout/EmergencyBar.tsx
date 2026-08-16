import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export function EmergencyBar() {
  return (
    <div className="bg-navy text-white/80 text-xs">
      <div className="container-page flex items-center justify-between gap-4 py-1.5">
        <Link to="/emergency" className="font-mono-label tracking-wide hover:text-white transition-colors">
          24/7 EMERGENCY CARE — <span className="text-white underline underline-offset-2">GET HELP NOW</span>
        </Link>
        <a href="tel:09047028189" className="flex items-center gap-1.5 font-semibold shrink-0 hover:text-white transition-colors">
          <Phone className="w-3 h-3" aria-hidden="true" /> 09047028189
        </a>
      </div>
    </div>
  );
}
