"use client";

import React, { useState } from "react";
import { MapPin, Navigation, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface JabalpurLocationMapProps {
  className?: string;
}

export function JabalpurLocationMap({ className = "" }: JabalpurLocationMapProps) {
  const [mapLoaded, setMapLoaded] = useState(false);

  // Jabalpur, Madhya Pradesh Coordinates: 23.1815, 79.9864
  const osmEmbedUrl =
    "https://www.openstreetmap.org/export/embed.html?bbox=79.9000%2C23.1400%2C80.0400%2C23.2200&layer=mapnik&marker=23.1815%2C79.9864";
  const directionsUrl =
    "https://www.openstreetmap.org/?mlat=23.1815&mlon=79.9864#map=14/23.1815/79.9864";

  return (
    <div
      className={`relative w-full rounded-3xl overflow-hidden border border-[#020C2B]/10 bg-white shadow-sm transition-all ${className}`}
    >
      {/* Map Header Pill */}
      <div className="p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-[#FAF6F0] border-b border-[#020C2B]/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#020C2B] text-white flex items-center justify-center shrink-0 shadow-xs">
            <MapPin className="w-5 h-5 text-[#E58145]" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#020C2B]">WebRajya Technology Hub</h4>
            <p className="text-xs text-[#525866]">
              Jabalpur, Madhya Pradesh, India • Central Engineering HQ
            </p>
          </div>
        </div>

        <Button
          href={directionsUrl}
          variant="outline"
          size="sm"
          className="text-xs rounded-xl border-[#020C2B]/20 hover:bg-[#020C2B]/5 text-[#020C2B]"
          icon={<ExternalLink className="w-3.5 h-3.5" />}
        >
          View Full Map
        </Button>
      </div>

      {/* Lazy-Loaded Responsive OpenStreetMap Embed */}
      <div className="relative w-full h-64 sm:h-80 bg-[#F1EFEA]">
        {!mapLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-xs font-mono text-[#525866]">
            <Navigation className="w-5 h-5 text-[#E58145] animate-bounce" />
            <span>Loading interactive map...</span>
          </div>
        )}
        <iframe
          title="WebRajya Jabalpur HQ Location"
          width="100%"
          height="100%"
          loading="lazy"
          src={osmEmbedUrl}
          onLoad={() => setMapLoaded(true)}
          className="w-full h-full border-0 grayscale-[20%] contrast-[105%]"
        />
      </div>

      {/* Map Attribution Footer */}
      <div className="px-4 py-2 bg-white text-[11px] text-[#525866] flex items-center justify-between font-mono border-t border-[#020C2B]/5">
        <span>WebRajya Engineering &amp; Operations Center</span>
        <a
          href="https://www.openstreetmap.org/copyright"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#E58145] hover:underline"
        >
          © OpenStreetMap contributors
        </a>
      </div>
    </div>
  );
}
