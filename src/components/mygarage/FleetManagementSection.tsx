"use client";

import React from "react";
import { Car, Bike, Truck, Zap, Search, Shield, Filter } from "lucide-react";

const VEHICLE_TYPES = [
  {
    icon: Car,
    title: "Passenger Cars",
    count: "Sedans, Hatchbacks & SUVs",
    description: "Full service logs, insurance tracking, oil change interval alerts, and tyre wear counters.",
    badge: "Cars & SUVs"
  },
  {
    icon: Bike,
    title: "Motorcycles & Scooters",
    count: "Cruisers, Commuters & Superbikes",
    description: "Chain lubrication logs, battery health records, and helmet/accessory receipt storage.",
    badge: "Two-Wheelers"
  },
  {
    icon: Zap,
    title: "Electric Vehicles (EV)",
    count: "Ather, Ola, Tata EV & Nexon",
    description: "Battery degradation percentage tracking, charging cost logs, and EV tax exemption status.",
    badge: "Zero Emission"
  },
  {
    icon: Truck,
    title: "Commercial & Fleets",
    count: "Pickups, Vans & Multi-axle",
    description: "Fitness certificates, national permit renewals, road tax alerts, and driver logbooks.",
    badge: "Commercial Fleet"
  }
];

export function FleetManagementSection() {
  return (
    <section id="mygarage-features" className="py-20 bg-white border-t border-[#020C2B]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-5xl font-black text-[#020C2B] tracking-tight">
            Multi-Vehicle Support Built for Every Ride in Your Garage.
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Whether you own a single commuter bike, a luxury car, or manage a fleet of commercial vans—MyGarage organizes your entire garage under one unified dashboard.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VEHICLE_TYPES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#FAF5EF] p-6 rounded-2xl border border-[#020C2B]/10 hover:border-[#0EA5E9] hover:shadow-lg transition-all group space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0EA5E9]/15 text-[#0EA5E9] flex items-center justify-center font-bold group-hover:bg-[#0EA5E9] group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold text-[#0EA5E9] uppercase tracking-wider">
                    {item.badge}
                  </span>
                  <h3 className="text-xl font-bold text-[#020C2B]">{item.title}</h3>
                  <p className="text-xs font-mono text-slate-500">{item.count}</p>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
