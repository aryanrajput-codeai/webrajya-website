"use client";

import React, { useState } from "react";
import {
  Car,
  ShieldCheck,
  AlertTriangle,
  FileCheck,
  Wrench,
  Fuel,
  Download,
  QrCode,
  Plus,
  CheckCircle2,
  ExternalLink
} from "lucide-react";

interface Vehicle {
  id: string;
  name: string;
  regNo: string;
  type: "Car" | "Bike" | "SUV" | "EV";
  year: number;
  odometer: number;
  fuelType: "Petrol" | "Diesel" | "EV";
  insuranceDaysLeft: number;
  pucDaysLeft: number;
  rcStatus: "Valid" | "Renewing";
  pendingChallans: number;
  lastService: string;
  monthlyExpense: number;
}

const SAMPLE_VEHICLES: Vehicle[] = [
  {
    id: "v1",
    name: "BMW 3 Series 330i",
    regNo: "MH 12 AB 4920",
    type: "Car",
    year: 2023,
    odometer: 18450,
    fuelType: "Petrol",
    insuranceDaysLeft: 42,
    pucDaysLeft: 14,
    rcStatus: "Valid",
    pendingChallans: 0,
    lastService: "15 Aug 2025",
    monthlyExpense: 14500
  },
  {
    id: "v2",
    name: "Royal Enfield Interceptor 650",
    regNo: "MH 14 EB 8810",
    type: "Bike",
    year: 2022,
    odometer: 12200,
    fuelType: "Petrol",
    insuranceDaysLeft: 120,
    pucDaysLeft: 5,
    rcStatus: "Valid",
    pendingChallans: 1,
    lastService: "02 Jun 2025",
    monthlyExpense: 4200
  },
  {
    id: "v3",
    name: "Ather 450X Gen 3",
    regNo: "MH 12 EV 9901",
    type: "EV",
    year: 2024,
    odometer: 6400,
    fuelType: "EV",
    insuranceDaysLeft: 280,
    pucDaysLeft: 999, // EV exempt
    rcStatus: "Valid",
    pendingChallans: 0,
    lastService: "10 Jan 2026",
    monthlyExpense: 850
  }
];

export function MyGarageDashboardMockup() {
  const [selectedVehicleId, setSelectedVehicleId] = useState<string>("v1");
  const [activeTab, setActiveTab] = useState<"overview" | "docs" | "ledger" | "expenses">("overview");

  const vehicle = SAMPLE_VEHICLES.find((v) => v.id === selectedVehicleId) || SAMPLE_VEHICLES[0];

  return (
    <div className="w-full rounded-2xl overflow-hidden border border-[#020C2B]/15 bg-[#FAF5EF] text-[#020C2B] shadow-2xl font-sans text-xs sm:text-sm">
      {/* Top App Header */}
      <div className="bg-[#020C2B] text-white px-4 py-3 flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-[#0EA5E9] text-white flex items-center justify-center font-bold shadow-md">
            <Car className="w-4.5 h-4.5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold tracking-tight text-sm sm:text-base text-white">MyGarage SaaS</span>
              <span className="text-[10px] bg-[#0EA5E9]/20 text-[#0EA5E9] px-2 py-0.5 rounded-full border border-[#0EA5E9]/30 font-mono font-semibold">
                v1.0 LIVE DEMO
              </span>
            </div>
            <p className="text-[11px] text-slate-400">Digital Vehicle Locker &amp; Maintenance Ledger</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] bg-slate-800 text-slate-300 px-3 py-1 rounded-lg border border-slate-700 font-mono">
            LocalStorage &amp; Supabase Ready
          </span>
        </div>
      </div>

      {/* Main Body Dashboard Grid */}
      <div className="p-4 sm:p-6 space-y-6">
        {/* Vehicle Selection Carousel / Tabs */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#020C2B]/70 flex items-center gap-1.5">
              <Car className="w-4 h-4 text-[#0EA5E9]" /> Select Active Vehicle ({SAMPLE_VEHICLES.length})
            </span>
            <span className="text-[11px] text-[#0EA5E9] font-medium hover:underline cursor-pointer flex items-center gap-1">
              <Plus className="w-3.5 h-3.5" /> Add New Vehicle
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {SAMPLE_VEHICLES.map((v) => (
              <button
                key={v.id}
                onClick={() => setSelectedVehicleId(v.id)}
                className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                  v.id === vehicle.id
                    ? "bg-white border-[#0EA5E9] shadow-md ring-2 ring-[#0EA5E9]/20"
                    : "bg-[#F2ECE1] border-[#020C2B]/10 hover:border-[#0EA5E9]/50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs sm:text-sm text-[#020C2B] truncate">{v.name}</span>
                  <span className="text-[10px] bg-[#020C2B]/10 font-mono px-2 py-0.5 rounded text-[#020C2B] font-semibold">
                    {v.regNo}
                  </span>
                </div>
                <div className="mt-2 flex items-center justify-between text-[11px] text-slate-600 font-mono">
                  <span>{v.odometer.toLocaleString()} km</span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                    v.pucDaysLeft <= 14 ? "bg-amber-100 text-amber-800" : "bg-emerald-100 text-emerald-800"
                  }`}>
                    {v.pucDaysLeft <= 14 ? `PUC: ${v.pucDaysLeft}d left` : "All Docs Valid"}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Vehicle Main Banner & Highlights */}
        <div className="bg-white rounded-xl border border-[#020C2B]/10 p-4 sm:p-5 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-black text-[#020C2B] tracking-tight">{vehicle.name}</h3>
                <span className="bg-[#0EA5E9]/10 text-[#0EA5E9] text-xs font-mono font-bold px-2.5 py-0.5 rounded-full border border-[#0EA5E9]/20">
                  {vehicle.regNo}
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5 font-mono">
                {vehicle.type} • {vehicle.fuelType} Engine • Model Year {vehicle.year}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-[#020C2B] px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors">
                <QrCode className="w-3.5 h-3.5 text-[#0EA5E9]" /> QR Emergency Card
              </button>
              <button className="flex items-center gap-1.5 bg-[#0EA5E9] hover:bg-[#0284C7] text-white px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors shadow-sm">
                <Download className="w-3.5 h-3.5" /> Export PDF Ledger
              </button>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
            <div className="bg-[#FAF5EF] p-3 rounded-lg border border-[#020C2B]/5">
              <span className="text-[11px] text-slate-500 font-medium block">Odometer Reading</span>
              <span className="text-base font-bold text-[#020C2B] font-mono">{vehicle.odometer.toLocaleString()} km</span>
            </div>

            <div className="bg-[#FAF5EF] p-3 rounded-lg border border-[#020C2B]/5">
              <span className="text-[11px] text-slate-500 font-medium block">Insurance Status</span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span className="text-xs font-bold text-emerald-700">{vehicle.insuranceDaysLeft} Days Remaining</span>
              </div>
            </div>

            <div className="bg-[#FAF5EF] p-3 rounded-lg border border-[#020C2B]/5">
              <span className="text-[11px] text-slate-500 font-medium block">PUC Expiry Alert</span>
              <div className="flex items-center gap-1.5 mt-0.5">
                {vehicle.pucDaysLeft <= 14 ? (
                  <>
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    <span className="text-xs font-bold text-amber-700">{vehicle.pucDaysLeft} Days Left</span>
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span className="text-xs font-bold text-emerald-700">Valid</span>
                  </>
                )}
              </div>
            </div>

            <div className="bg-[#FAF5EF] p-3 rounded-lg border border-[#020C2B]/5">
              <span className="text-[11px] text-slate-500 font-medium block">Traffic Challans</span>
              <div className="flex items-center gap-1.5 mt-0.5">
                {vehicle.pendingChallans > 0 ? (
                  <span className="text-xs font-bold text-rose-600">{vehicle.pendingChallans} Pending Fine</span>
                ) : (
                  <span className="text-xs font-bold text-emerald-600">0 Pending Fine</span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Feature Tabs & Active Module Display */}
        <div className="bg-white rounded-xl border border-[#020C2B]/10 p-4 sm:p-5 shadow-sm space-y-4">
          <div className="flex border-b border-slate-200 gap-4 text-xs font-bold">
            <button
              onClick={() => setActiveTab("overview")}
              className={`pb-2.5 transition-colors border-b-2 ${
                activeTab === "overview" ? "border-[#0EA5E9] text-[#0EA5E9]" : "border-transparent text-slate-500 hover:text-slate-800"
              }`}
            >
              Document Locker (5 Cards)
            </button>
            <button
              onClick={() => setActiveTab("ledger")}
              className={`pb-2.5 transition-colors border-b-2 ${
                activeTab === "ledger" ? "border-[#0EA5E9] text-[#0EA5E9]" : "border-transparent text-slate-500 hover:text-slate-800"
              }`}
            >
              Service History Ledger
            </button>
            <button
              onClick={() => setActiveTab("expenses")}
              className={`pb-2.5 transition-colors border-b-2 ${
                activeTab === "expenses" ? "border-[#0EA5E9] text-[#0EA5E9]" : "border-transparent text-slate-500 hover:text-slate-800"
              }`}
            >
              Expense Analytics &amp; CSV
            </button>
          </div>

          {/* Tab 1: Document Locker */}
          {activeTab === "overview" && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-800 text-xs flex items-center gap-1.5">
                    <FileCheck className="w-4 h-4 text-[#0EA5E9]" /> Registration Certificate (RC)
                  </span>
                  <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded">Active</span>
                </div>
                <p className="text-[11px] text-slate-500 font-mono">Reg Date: 12 Mar 2023 • Validity: 15 Yrs</p>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-800 text-xs flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#0EA5E9]" /> Comprehensive Insurance
                  </span>
                  <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded">
                    {vehicle.insuranceDaysLeft} Days
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 font-mono">Policy: HDFC ERGO Motor • #9842109</p>
              </div>

              <div className={`p-3.5 rounded-lg border space-y-2 ${
                vehicle.pucDaysLeft <= 14 ? "bg-amber-50/70 border-amber-200" : "bg-slate-50 border-slate-200"
              }`}>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-800 text-xs flex items-center gap-1.5">
                    <AlertTriangle className={`w-4 h-4 ${vehicle.pucDaysLeft <= 14 ? "text-amber-600" : "text-[#0EA5E9]"}`} /> PUC Certificate
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                    vehicle.pucDaysLeft <= 14 ? "bg-amber-200 text-amber-900" : "bg-emerald-100 text-emerald-800"
                  }`}>
                    {vehicle.pucDaysLeft <= 14 ? "Renew Soon" : "Valid"}
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 font-mono">Pollution Test Center ID: #PUC-MH12-990</p>
              </div>
            </div>
          )}

          {/* Tab 2: Service Ledger */}
          {activeTab === "ledger" && (
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between text-xs text-slate-600 font-mono bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                <span className="flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-[#0EA5E9]" /> <strong>Periodic Service #3 (15,000 km)</strong>
                </span>
                <span>Logged: {vehicle.lastService}</span>
                <span className="font-bold text-[#020C2B]">₹12,450 (Invoice Attached)</span>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-600 font-mono bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                <span className="flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-[#0EA5E9]" /> Synthetic Engine Oil &amp; Filter Change
                </span>
                <span>Logged: 10 Jan 2025</span>
                <span className="font-bold text-[#020C2B]">₹4,800</span>
              </div>
            </div>
          )}

          {/* Tab 3: Expense Analytics */}
          {activeTab === "expenses" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200 space-y-2">
                <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                  <Fuel className="w-4 h-4 text-[#0EA5E9]" /> Monthly Fuel &amp; Charge Log
                </span>
                <p className="text-xl font-black text-[#020C2B] font-mono">₹{vehicle.monthlyExpense.toLocaleString()}</p>
                <p className="text-[11px] text-slate-500 font-mono">Avg fuel cost per km: ₹7.20 / km</p>
              </div>

              <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200 space-y-2 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <Download className="w-4 h-4 text-[#0EA5E9]" /> Accounting CSV Spreadsheet Export
                  </span>
                  <p className="text-[11px] text-slate-500 mt-1">Download raw fuel, service, and tax logs formatted for Excel/Tally.</p>
                </div>
                <button className="bg-[#020C2B] text-white px-3 py-1.5 rounded text-xs font-semibold hover:bg-slate-800 transition-colors self-start">
                  Download .CSV Report
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
