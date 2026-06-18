import { useState } from "react";
import { LoginScreen } from "./components/LoginScreen";
import { CreateFamilyScreen } from "./components/CreateFamilyScreen";
import { HomeScreen } from "./components/HomeScreen";
import { CalendarScreen } from "./components/CalendarScreen";
import { MoodScreen } from "./components/MoodScreen";
import { AIScreen } from "./components/AIScreen";
import { ChatScreen } from "./components/ChatScreen";
import { MemoriesScreen } from "./components/MemoriesScreen";
import { ProfileScreen } from "./components/ProfileScreen";
import { YearRecapScreen } from "./components/YearRecapScreen";

{/* MARKER-MAKE-KIT-INVOKED */}

type AppState = "login" | "create-family" | "year-recap" | "app";
type Tab = "home" | "calendar" | "mood" | "ai" | "chat" | "memories" | "profile";

import {
  House,
  CalendarHeart,
  Heart,
  Sparkles,
  UserRound,
  Wifi
} from "lucide-react";

const NAV_ITEMS = [
  {
    id: "home",
    icon: House,
    label: "Trang chính",
  },
  {
    id: "calendar",
    icon: CalendarHeart,
    label: "Kỉ niệm",
  },
  {
    id: "mood",
    icon: Heart,
    label: "Cảm xúc",
  },
  {
    id: "ai",
    icon: Sparkles,
    label: "Trợ lý",
  },
  {
    id: "profile",
    icon: UserRound,
    label: "Thông tin",
  },
];

export default function App() {
  const [appState, setAppState] = useState<AppState>("login");
  const [activeTab, setActiveTab] = useState<Tab>("home");

  // Render the correct inner screen
  const renderScreen = () => {
    switch (activeTab) {
      case "home": return <HomeScreen onNavigate={(s) => setActiveTab(s as Tab)} />;
      case "calendar": return <CalendarScreen />;
      case "mood": return <MoodScreen />;
      case "ai": return <AIScreen />;
      case "chat": return <ChatScreen />;
      case "memories": return <MemoriesScreen />;
      case "profile": return <ProfileScreen onLogout={() => setAppState("login")} />;
      default: return <HomeScreen onNavigate={(s) => setActiveTab(s as Tab)} />;
    }
  };

  if (appState === "login") {
    return (
      <div className="size-full flex items-center justify-center" style={{ background: "#1a0a1e" }}>
          <div
            style={{
              width: "390px",
              height: "844px",
              borderRadius: "40px",
              overflow: "hidden",
              background: "#fff",
              position: "relative",
              boxShadow: "0 30px 70px rgba(0,0,0,.35)"
            }}
            >
          <LoginScreen onLogin={() => setAppState("create-family")} />
        </div>
      </div>
    );
  }

  if (appState === "create-family") {
      return (
        <div
          className="size-full flex items-center justify-center"
          style={{ background: "#1a0a1e" }}
        >
          <div
            style={{
              width: "390px",
              height: "844px",
              borderRadius: "40px",
              overflow: "auto",
              background: "#fff",
              position: "relative",
              boxShadow: "0 30px 70px rgba(0,0,0,.35)"
            }}
          >
            <CreateFamilyScreen
              onDone={() => setAppState("year-recap")}
              onBack={() => setAppState("login")}
            />
          </div>
        </div>
      );
      }

    if (appState === "year-recap") {
      return (
        <div
          className="size-full flex items-center justify-center"
          style={{ background: "#1a0a1e" }}
        >
          <div
            style={{
              width: "390px",
              height: "844px",
              overflow: "hidden",
              borderRadius: "40px",
              background:"#fff"
            }}
          >
            <YearRecapScreen
              onDone={() => setAppState("app")}
            />
          </div>
        </div>
      );
    }
  

  return (
    <div className="size-full flex items-center justify-center" style={{ background: "#1a0a1e" }}>
      {/* Phone shell */}
      <div
        className="relative flex flex-col overflow-hidden"
        style={{
          width:"390px",
          height:"844px",
          background: "#fdf6f0",
          borderRadius: "clamp(0px, 4vw, 40px)",
          boxShadow: "0 40px 80px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.1)"
        }}
      >
        {/* Status bar */}
        <div
          className="flex items-center justify-between px-6 flex-shrink-0"
          style={{ height: "44px", background: "transparent", position: "absolute", top: 0, left: 0, right: 0, zIndex: 50 }}
        >
          <span style={{ fontSize: "12px", fontWeight: 700, color: "#4a1a5e", fontFamily: "'Nunito', sans-serif" }}>9:41</span>
          <div className="flex items-center gap-1.5">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="rounded-sm" style={{ width: "3px", height: `${5 + i * 2}px`, background: "#4a1a5e", opacity: i <= 3 ? 1 : 0.3 }} />
              ))}
            </div>
              <Wifi
                size={16}
                color="#4a1a5e"
                strokeWidth={2}
              />
            <div className="flex items-center gap-0.5">
              <div style={{ width: "22px", height: "11px", borderRadius: "3px", border: "1.5px solid #4a1a5e", padding: "1.5px" }}>
                <div style={{ width: "70%", height: "100%", background: "#4a1a5e", borderRadius: "1px" }} />
              </div>
            </div>
          </div>
        </div>

        {/* Screen content */}
        <div className="flex-1 overflow-y-auto relative">
          {renderScreen()}
        </div>

        {/* Bottom navigation */}
        <div
          className="flex-shrink-0 flex items-center px-2 pb-2 pt-2"
          style={{
            background: "rgba(255,255,255,0.92)",
            backdropFilter: "blur(20px)",
            borderTop: "1px solid rgba(194,98,154,0.1)",
            boxShadow: "0 -4px 20px rgba(194,98,154,0.08)"
          }}
        >
          {NAV_ITEMS.map(item => {
            const isActive = activeTab === item.id;
            const Icon=item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as Tab)}
                className="flex-1 flex flex-col items-center gap-0.5 py-2 rounded-2xl transition-all"
                style={{
                  background: isActive ? "linear-gradient(135deg, #f5d0e8, #ead4f5)" : "transparent",
                  fontFamily: "'Nunito', sans-serif"
                }}
              >
                <span style={{ fontSize: isActive ? "22px" : "20px", transition: "font-size 0.2s" }}><Icon size={isActive?22:20} color={isActive?"#c2629a":"#b89aaa"}/></span>
                <span style={{ fontSize: "9px", fontWeight: isActive ? 800 : 600, color: isActive ? "#c2629a" : "#b89aaa" }}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Home indicator */}
        <div className="flex justify-center pb-2 flex-shrink-0" style={{ background: "rgba(255,255,255,0.92)" }}>
          <div className="w-32 h-1 rounded-full" style={{ background: "rgba(194,98,154,0.25)" }} />
        </div>
      </div>
    </div>
  );
}
