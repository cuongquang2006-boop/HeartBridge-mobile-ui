import { useState } from "react";

import {
  Heart,
  Mail,
  Phone,
  ChevronRight,
  House
} from "lucide-react";

interface LoginScreenProps {
  onLogin: () => void;
}

export function LoginScreen({ onLogin }: LoginScreenProps) {
  const [tab, setTab] = useState<"main" | "email" | "phone">("main");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "linear-gradient(160deg, #f5d0e8 0%, #ead4f5 30%, #fde8d0 70%, #ffd6c0 100%)" ,
      overflowY: "auto"
     }}>
      {/* Illustration area */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 pt-16 pb-8">
        {/* Decorative circles */}
        <div className="relative mb-8">
          <div className="w-40 h-40 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.35)", backdropFilter: "blur(8px)" }}>
            <div className="w-28 h-28 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.5)" }}>
              {/* Family illustration - SVG */}
                <div className="relative">

  <div
    className="w-24 h-24 rounded-full flex items-center justify-center"
    style={{
      background:"rgba(255,255,255,.55)"
    }}
  >

    <House
    size={54}
    color="#c2629a"
    strokeWidth={2.2}
    />

  </div>

  <Heart
    size={20}
    fill="#ff7ba5"
    color="#ff7ba5"
    className="absolute -top-2 -right-1 animate-pulse"
  />

  <Heart
    size={14}
    fill="#c2629a"
    color="#c2629a"
    className="absolute bottom-1 -left-2 animate-pulse"
  />

                </div>
            </div>
          </div>
          {/* Floating hearts */}
          <Heart
            size={22}
            fill="#ff7ba5"
            color="#ff7ba5"
            className="absolute -top-2 -right-2 animate-pulse"
          />

          <Heart
            size={16}
            fill="#c2629a"
            color="#c2629a"
            className="absolute top-4 -left-4 animate-pulse"
          />

          <Heart
            size={18}
            fill="#9060c0"
            color="#9060c0"
            className="absolute -bottom-2 right-2 animate-pulse"
          />
        </div>

        {/* Hero text */}
        <h1 className="text-center mb-3" style={{ fontFamily: "'Nunito', sans-serif", fontSize: "26px", fontWeight: 600, color: "#4a1a5e", lineHeight: 1.3 }}>
          HeartBridge
        </h1>
        <p className="text-center mb-2" style={{ fontFamily: "'Nunito', sans-serif", fontSize: "15px", color: "#7a4a7a", lineHeight: 1.5, maxWidth: "280px" }}>
          Trí tuệ nhân tạo giúp các thành viên trong gia đình thấu hiểu nhau hơn.
        </p>
        <p className="text-center mb-8" style={{ fontFamily: "'Nunito', sans-serif", fontSize: "13px", color: "#9a6a8a", lineHeight: 1.4 }}>
          Một không gian riêng, nơi yêu thương luôn được vun đắp.
        </p>

        {/* Auth buttons */}
        <div className="w-full max-w-xs space-y-3">
          {tab === "main" && (
            <>
              <button
                onClick={onLogin}
                className="w-full flex items-center justify-between px-5 py-4 rounded-2xl shadow-sm transition-all active:scale-95"
                style={{ background: "rgba(255,255,255,0.85)", fontFamily: "'Nunito', sans-serif", fontSize: "15px", fontWeight: 600, color: "#4a1a5e" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" width="22" height="22"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                  </div>
                  Đăng nhập bằng Google
                </div>
                <ChevronRight size={16} color="#c2629a" />
              </button>

              <button
                onClick={() => setTab("email")}
                className="w-full flex items-center justify-between px-5 py-4 rounded-2xl shadow-sm transition-all active:scale-95"
                style={{ background: "rgba(255,255,255,0.85)", fontFamily: "'Nunito', sans-serif", fontSize: "15px", fontWeight: 600, color: "#4a1a5e" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "#fde8f0" }}>
                    <Mail size={16} color="#c2629a" />
                  </div>
                  Đăng nhập bằng Email
                </div>
                <ChevronRight size={16} color="#c2629a" />
              </button>

              <button
                onClick={() => setTab("phone")}
                className="w-full flex items-center justify-between px-5 py-4 rounded-2xl shadow-sm transition-all active:scale-95"
                style={{ background: "rgba(255,255,255,0.85)", fontFamily: "'Nunito', sans-serif", fontSize: "15px", fontWeight: 600, color: "#4a1a5e" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "#f0e8fd" }}>
                    <Phone size={16} color="#9060c0" />
                  </div>
                  Đăng nhập bằng số điện thoại
                </div>
                <ChevronRight size={16} color="#c2629a" />
              </button>
            </>
          )}

          {tab === "email" && (
            <>
              <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Nhập vào email của bạn"
                className="w-full px-5 py-4 rounded-2xl outline-none"
                style={{ background: "rgba(255,255,255,0.85)", fontFamily: "'Nunito', sans-serif", fontSize: "15px", color: "#4a1a5e", border: "1.5px solid rgba(194,98,154,0.25)" }}
              />
              <button
                onClick={onLogin}
                className="w-full py-4 rounded-2xl transition-all active:scale-95"
                style={{ background: "linear-gradient(135deg, #c2629a, #9060c0)", fontFamily: "'Nunito', sans-serif", fontSize: "15px", fontWeight: 700, color: "#fff" }}
              >
                Tiếp tục →
              </button>
              <button onClick={() => setTab("main")} style={{ fontFamily: "'Nunito', sans-serif", fontSize: "13px", color: "#9a6a8a" }} className="w-full text-center">← Back</button>
            </>
          )}

          {tab === "phone" && (
            <>
              <input
                value={phone}
                onChange={e => setPhone(e.target.value)}
                placeholder="+84 | "
                className="w-full px-5 py-4 rounded-2xl outline-none"
                style={{ background: "rgba(255,255,255,0.85)", fontFamily: "'Nunito', sans-serif", fontSize: "15px", color: "#4a1a5e", border: "1.5px solid rgba(194,98,154,0.25)" }}
              />
              <button
                onClick={onLogin}
                className="w-full py-4 rounded-2xl transition-all active:scale-95"
                style={{ background: "linear-gradient(135deg, #c2629a, #9060c0)", fontFamily: "'Nunito', sans-serif", fontSize: "15px", fontWeight: 700, color: "#fff" }}
              >
                Gửi mã xác nhận →
              </button>
              <button onClick={() => setTab("main")} style={{ fontFamily: "'Nunito', sans-serif", fontSize: "13px", color: "#9a6a8a" }} className="w-full text-center">← Back</button>
            </>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="pb-10 text-center">
        <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "12px", color: "#9a6a8a" }}>
          Cảm xúc của bạn luôn được trân trọng và bảo vệ.
        </p>
        <p className="mt-1" style={{ fontFamily: "'Nunito', sans-serif", fontSize: "11px", color: "#b89aaa" }}>
          Ưu tiên quyền riêng tư · Bảo mật an toàn <br></br> @CuongQuang . 2026
        </p>
      </div>
    </div>
  );
}
