import React from "react";
import { MapPin, Navigation, ExternalLink } from "lucide-react";
import { LAUNCH_CONFIG } from "@/config/launch";

interface NagpurLocationMapProps {
  className?: string;
}

/**
 * Lightweight, lazy-loaded Google Map / OpenStreetMap container for Nagpur, Maharashtra.
 * Zero heavy tracking scripts on page load.
 */
export function NagpurLocationMap({ className = "" }: NagpurLocationMapProps) {
  // Nagpur coordinates: 21.1458° N, 79.0882° E
  const mapEmbedUrl =
    "https://www.openstreetmap.org/export/embed.html?bbox=79.0500%2C21.1200%2C79.1200%2C21.1700&layer=mapnik&marker=21.1458%2C79.0882";
  const googleMapsDirectionsUrl =
    "https://www.google.com/maps/search/?api=1&query=Nagpur+Maharashtra";

  return (
    <div
      className={`rounded-2xl border border-slate-200 bg-white shadow-xs overflow-hidden ${className}`}
    >
      <div className="p-4 border-b border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-orange-50 text-[#E58145] flex items-center justify-center border border-orange-100">
            <MapPin className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900">Nagpur Onboarding Hub</h4>
            <p className="text-[11px] text-slate-500 font-mono">
              {LAUNCH_CONFIG.TARGET_CITY}, {LAUNCH_CONFIG.TARGET_STATE}
            </p>
          </div>
        </div>

        <a
          href={googleMapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[11px] font-bold text-[#2563EB] hover:text-[#020C2B] transition-colors"
        >
          <Navigation className="w-3 h-3" />
          <span>Get Directions</span>
          <ExternalLink className="w-2.5 h-2.5 opacity-70" />
        </a>
      </div>

      <div className="relative w-full h-56 sm:h-64 bg-slate-100">
        <iframe
          title="WebRajya Nagpur Location Map"
          width="100%"
          height="100%"
          className="border-0 w-full h-full"
          loading="lazy"
          src={mapEmbedUrl}
          aria-label="Interactive map showing WebRajya location in Nagpur, Maharashtra"
        />
      </div>

      <div className="p-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-600 font-mono">
        <span>Address: {LAUNCH_CONFIG.NAGPUR_ADDRESS}</span>
        <span className="text-slate-400">© OpenStreetMap</span>
      </div>
    </div>
  );
}
