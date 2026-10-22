"use client";

import React, { useState, useEffect } from "react";
import { Copy, Check, Play, Circle } from "lucide-react";

interface CodeSnippet {
  id: string;
  name: string;
  lang: string;
  code: string[];
}

const SNIPPETS: CodeSnippet[] = [
  {
    id: "gamezone",
    name: "api_bridge.py",
    lang: "Python 3.12 • WebView2",
    code: [
      "# GameZone Platform IPC Bridge (v3.1.2)",
      "import webview, sqlite3, json, asyncio",
      "",
      "class SystemBridgeAPI:",
      "    def __init__(self, db_path='gamezone.db'):",
      "        self.db = sqlite3.connect(db_path, check_same_thread=False)",
      "        self.db.execute('PRAGMA journal_mode = WAL')",
      "        self.ipc_latency_ms = 0.4",
      "",
      "    async def dispatch_payload(self, event_type, payload):",
      "        # Direct zero-overhead IPC communication",
      "        print(f'[IPC_DISPATCH] event={event_type} status=OK')",
      "        return {'status': 'ACK', 'latency': '0.4ms', 'threads': 4}",
    ],
  },
  {
    id: "network",
    name: "mikrotik_vlan.rsc",
    lang: "RouterOS • VLAN Trunk",
    code: [
      "# Enterprise VLAN & Inter-VLAN Routing",
      "/interface vlan",
      "add name=VLAN10_SERVERS vlan-id=10 interface=sfp-sfpplus1",
      "add name=VLAN20_STUDENTS vlan-id=20 interface=sfp-sfpplus1",
      "",
      "/ip address",
      "add address=10.10.10.1/24 interface=VLAN10_SERVERS",
      "add address=10.20.20.1/24 interface=VLAN20_STUDENTS",
      "",
      "/ip firewall filter add chain=forward action=accept",
      "# Fiber Link: 10 Gbps Active [TX/RX: 0 errors]",
    ],
  },
  {
    id: "laravel",
    name: "OrderTransaction.php",
    lang: "PHP 8.3 • Laravel 11",
    code: [
      "// Warkop Digital POS Transaction Engine",
      "namespace App\\Services;",
      "",
      "class PosOrderService {",
      "    public function processCheckout(array $items): Receipt {",
      "        return DB::transaction(function () use ($items) {",
      "            $order = Order::create(['status' => 'PAID']);",
      "            $order->items()->createMany($items);",
      "            ThermalPrinter::dispatch($order->id);",
      "            return new Receipt($order);",
      "        });",
      "    }",
      "}",
    ],
  },
];

export function CodeTerminal() {
  const [activeTab, setActiveTab] = useState(0);
  const [revealedCount, setRevealedCount] = useState(0);
  const [copied, setCopied] = useState(false);

  const snippet = SNIPPETS[activeTab];

  useEffect(() => {
    const interval = setInterval(() => {
      setRevealedCount((prev) => {
        if (prev < snippet.code.length) {
          return prev + 1;
        }
        clearInterval(interval);
        return prev;
      });
    }, 75);

    return () => clearInterval(interval);
  }, [activeTab, snippet.code.length]);

  const handleSelectTab = (idx: number) => {
    setActiveTab(idx);
    setRevealedCount(0);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(snippet.code.join("\n"));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReplay = () => {
    setRevealedCount(0);
  };

  const displayedLines = snippet.code.slice(0, revealedCount);

  return (
    <div className="w-full rounded-xs border border-[var(--line)] bg-[var(--surface)] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.25)] font-[var(--font-functional)] relative group">
      {/* Top OS Window Header Bar */}
      <div className="flex items-center justify-between px-3.5 py-2.5 bg-[var(--bg)] border-b border-[var(--line)] select-none">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <Circle size={10} className="fill-red-500/80 text-red-500/80" />
          <Circle size={10} className="fill-yellow-500/80 text-yellow-500/80" />
          <Circle size={10} className="fill-emerald-500/80 text-emerald-500/80" />
          <span className="text-[11px] text-[var(--muted)] font-mono ml-2 hidden md:inline">
            engine://arya@live-session:~
          </span>
        </div>

        {/* Tab Switchers */}
        <div className="flex items-center gap-1">
          {SNIPPETS.map((tab, idx) => (
            <button
              key={tab.id}
              onClick={() => handleSelectTab(idx)}
              className={`px-2 py-1 text-[10px] sm:text-[11px] font-semibold rounded-xs transition-all cursor-pointer ${
                activeTab === idx
                  ? "bg-[var(--surface-raised)] text-[var(--accent)] border border-[var(--line)] shadow-xs"
                  : "text-[var(--muted)] hover:text-[var(--fg)]"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1 sm:gap-2">
          <button
            onClick={handleReplay}
            title="Replay Code Stream"
            className="p-1 text-[var(--muted)] hover:text-[var(--accent)] transition-colors cursor-pointer"
          >
            <Play size={13} />
          </button>
          <button
            onClick={handleCopy}
            title="Copy Code"
            className="p-1 text-[var(--muted)] hover:text-[var(--fg)] transition-colors cursor-pointer"
          >
            {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
          </button>
        </div>
      </div>

      {/* Code Editor Body */}
      <div className="p-4 sm:p-5 text-xs font-mono leading-relaxed overflow-x-auto min-h-[260px] sm:min-h-[290px] bg-[var(--surface)] text-[var(--fg)] selection:bg-[var(--accent)] selection:text-black">
        {displayedLines.map((line, idx) => (
          <div key={idx} className="flex gap-3 sm:gap-4 items-start">
            <span className="select-none text-[var(--muted-soft)] text-right w-5 sm:w-6 flex-shrink-0 text-[11px]">
              {idx + 1}
            </span>
            <span className="flex-1 whitespace-pre">
              {line.startsWith("#") || line.startsWith("//") ? (
                <span className="text-[var(--muted)] italic">{line}</span>
              ) : line.includes("def ") || line.includes("class ") || line.includes("function") ? (
                <span className="text-[var(--accent)] font-semibold">{line}</span>
              ) : line.includes("import ") || line.includes("namespace") || line.includes("return") ? (
                <span className="text-cyan-400 font-semibold">{line}</span>
              ) : line.includes("sqlite3") || line.includes("VLAN") || line.includes("DB::") ? (
                <span className="text-emerald-400">{line}</span>
              ) : (
                <span>{line}</span>
              )}
            </span>
          </div>
        ))}
        {/* Blinking Live Cursor at Current Line */}
        <div className="flex gap-3 sm:gap-4 items-center mt-1">
          <span className="select-none text-[var(--muted-soft)] text-right w-5 sm:w-6 flex-shrink-0 text-[11px]">
            {displayedLines.length + 1}
          </span>
          <span className="w-2 h-4 bg-[var(--accent)] animate-terminal-blink" />
        </div>
      </div>

      {/* Terminal Footer Status Bar */}
      <div className="flex flex-wrap items-center justify-between px-3.5 py-2 bg-[var(--bg)] border-t border-[var(--line)] text-[10px] sm:text-[11px] text-[var(--muted)] select-none">
        <div className="flex items-center gap-2.5">
          <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>LIVE EXEC</span>
          </span>
          <span className="hidden sm:inline">|</span>
          <span className="truncate max-w-[150px] sm:max-w-none">RUNTIME: {snippet.lang}</span>
        </div>
        <div className="flex items-center gap-3 font-mono">
          <span className="text-[var(--accent)] font-semibold">LATENCY: 0.4ms</span>
          <span className="text-[var(--muted-soft)]">UTF-8</span>
        </div>
      </div>
    </div>
  );
}
