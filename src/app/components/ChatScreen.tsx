import { useState } from "react";
import { Send, ChevronRight, ArrowLeft } from "lucide-react";

const STICKERS = [
  { emoji: "🥹", label: "Need Care" },
  { emoji: "🤗", label: "Want To Talk" },
  { emoji: "🌙", label: "Need Space" },
  { emoji: "🌧", label: "Feeling Sad" },
  { emoji: "😄", label: "Happy" },
  { emoji: "💗", label: "Sending Love" },
  { emoji: "🌸", label: "Peaceful" },
  { emoji: "✨", label: "Grateful" },
];

interface ChatMsg {
  id: number;
  sender: string;
  emoji: string;
  text: string;
  time: string;
  isMe: boolean;
  sticker?: string;
  aiSummary?: string;
}

const GROUP_MESSAGES: ChatMsg[] = [
  { id: 1, sender: "Mom", emoji: "👩", text: "Good morning everyone! ☀️", time: "8:02 AM", isMe: false },
  { id: 2, sender: "Dad", emoji: "👨", text: "Morning! Hope everyone has a great day 💙", time: "8:05 AM", isMe: false },
  { id: 3, sender: "You", emoji: "👧", text: "Good morning! 😊", time: "8:07 AM", isMe: true },
  { id: 4, sender: "Mom", emoji: "👩", text: "", sticker: "🥹", time: "10:30 AM", isMe: false, aiSummary: "Mom may be feeling a bit low. Consider reaching out." },
  { id: 5, sender: "Dad", emoji: "👨", text: "Are you okay? 💗", time: "10:32 AM", isMe: false },
  { id: 6, sender: "Mom", emoji: "👩", text: "Just tired, thank you for asking 🥰", time: "10:35 AM", isMe: false },
  { id: 7, sender: "Grandma", emoji: "👵", text: "Sending you all love from our garden 🌸", time: "2:00 PM", isMe: false },
];

const CHATS = [
  { id: "group", name: "Johnson Family", emoji: "🏠", last: "Grandma: Sending you love 🌸", time: "2:00 PM", unread: 0, gradient: "linear-gradient(135deg, #f5d0e8, #ead4f5)" },
  { id: "mom", name: "Mom 👩", emoji: "👩", last: "🥹 Need Care", time: "10:30 AM", unread: 2, gradient: "linear-gradient(135deg, #fde8f0, #f5d0e8)" },
  { id: "dad", name: "Dad 👨", emoji: "👨", last: "Are you okay? 💗", time: "10:32 AM", unread: 0, gradient: "linear-gradient(135deg, #e8f0fd, #d0e4f8)" },
  { id: "grandparents", name: "Grandparents 👴👵", emoji: "👴", last: "Come visit us soon!", time: "Yesterday", unread: 1, gradient: "linear-gradient(135deg, #fde8d0, #f8d8c0)" },
];

export function ChatScreen() {
  const [activeChat, setActiveChat] = useState<string | null>(null);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMsg[]>(GROUP_MESSAGES);
  const [showStickers, setShowStickers] = useState(false);

  const sendMessage = (text: string, sticker?: string) => {
    if (!text.trim() && !sticker) return;
    setMessages(prev => [...prev, {
      id: Date.now(), sender: "You", emoji: "👧", text, time: "Now", isMe: true, sticker
    }]);
    setInput("");
    setShowStickers(false);
  };

  if (activeChat) {
    const chat = CHATS.find(c => c.id === activeChat)!;
    return (
      <div className="flex flex-col h-full" style={{ background: "#fdf6f0", fontFamily: "'Nunito', sans-serif" }}>
        {/* Chat header */}
        <div className="flex items-center gap-3 px-5 pt-14 pb-4" style={{ background: chat.gradient }}>
          <button onClick={() => setActiveChat(null)} className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.6)" }}>
            <ArrowLeft size={18} color="#7a4a7a" />
          </button>
          <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl" style={{ background: "rgba(255,255,255,0.7)" }}>
            {chat.emoji}
          </div>
          <div className="flex-1">
            <p style={{ fontSize: "16px", fontWeight: 700, color: "#4a1a5e" }}>{chat.name}</p>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#78cc99" }} />
              <p style={{ fontSize: "12px", color: "#9a6a8a" }}>Active now</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
          {messages.map(msg => (
            <div key={msg.id}>
              <div className={`flex items-end gap-2 ${msg.isMe ? "justify-end" : "justify-start"}`}>
                {!msg.isMe && (
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-base flex-shrink-0" style={{ background: "#f5ede8" }}>
                    {msg.emoji}
                  </div>
                )}
                <div className="max-w-[72%]">
                  {!msg.isMe && <p style={{ fontSize: "11px", color: "#9a6a8a", marginBottom: "3px", marginLeft: "4px" }}>{msg.sender}</p>}
                  <div
                    className="px-4 py-2.5 rounded-3xl"
                    style={{
                      background: msg.isMe
                        ? "linear-gradient(135deg, #c2629a, #9060c0)"
                        : "#fff",
                      color: msg.isMe ? "#fff" : "#4a1a5e",
                      borderBottomLeftRadius: !msg.isMe ? "6px" : "24px",
                      borderBottomRightRadius: msg.isMe ? "6px" : "24px",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.06)"
                    }}
                  >
                    {msg.sticker ? (
                      <span style={{ fontSize: "40px", display: "block", lineHeight: 1.2 }}>{msg.sticker}</span>
                    ) : (
                      <p style={{ fontSize: "14px", lineHeight: 1.5 }}>{msg.text}</p>
                    )}
                  </div>
                  <p style={{ fontSize: "10px", color: "#b89aaa", marginTop: "2px", textAlign: msg.isMe ? "right" : "left" }}>{msg.time}</p>
                </div>
              </div>
              {/* AI summary for sticker */}
              {msg.aiSummary && (
                <div className="flex items-center gap-2 mx-10 mt-1 px-3 py-2 rounded-2xl" style={{ background: "linear-gradient(135deg, #f0e8fd, #fde8f0)" }}>
                  <span style={{ fontSize: "12px" }}>✨</span>
                  <p style={{ fontSize: "11px", color: "#7a4a7a", fontStyle: "italic" }}>{msg.aiSummary}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Sticker picker */}
        {showStickers && (
          <div className="px-4 py-3" style={{ background: "#fff", borderTop: "1px solid rgba(194,98,154,0.1)" }}>
            <div className="grid grid-cols-4 gap-2">
              {STICKERS.map(s => (
                <button
                  key={s.label}
                  onClick={() => sendMessage("", s.emoji)}
                  className="flex flex-col items-center gap-1 py-2 rounded-2xl"
                  style={{ background: "#f5ede8" }}
                >
                  <span style={{ fontSize: "24px" }}>{s.emoji}</span>
                  <span style={{ fontSize: "9px", color: "#9a6a8a", fontWeight: 600 }}>{s.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="px-4 pb-8 pt-3" style={{ background: "#fdf6f0", borderTop: "1px solid rgba(194,98,154,0.08)" }}>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowStickers(!showStickers)}
              className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ background: showStickers ? "linear-gradient(135deg, #c2629a, #9060c0)" : "#f5d0e8", fontSize: "18px" }}
            >
              {showStickers ? <span style={{ color: "#fff" }}>×</span> : "🥹"}
            </button>
            <div className="flex-1 flex items-center gap-2 px-4 py-2.5 rounded-3xl" style={{ background: "#fff", boxShadow: "0 2px 12px rgba(194,98,154,0.1)" }}>
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === "Enter" && sendMessage(input)}
                placeholder="Say something kind..."
                className="flex-1 outline-none bg-transparent"
                style={{ fontSize: "14px", color: "#4a1a5e", fontFamily: "'Nunito', sans-serif" }}
              />
            </div>
            <button
              onClick={() => sendMessage(input)}
              className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all active:scale-90"
              style={{ background: "linear-gradient(135deg, #c2629a, #9060c0)" }}
            >
              <Send size={16} color="#fff" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full overflow-y-auto" style={{ background: "#fdf6f0", fontFamily: "'Nunito', sans-serif" }}>
      <div className="px-5 pt-14 pb-4" style={{ background: "linear-gradient(160deg, #f5d0e8 0%, #ead4f5 50%, #fde8d0 100%)" }}>
        <h1 style={{ fontSize: "22px", fontWeight: 800, color: "#4a1a5e" }}>Family Chat</h1>
        <p style={{ fontSize: "13px", color: "#9a6a8a" }}>Stay close, even when apart 💗</p>
      </div>

      <div className="px-4 py-4 space-y-3 pb-28">
        {CHATS.map(chat => (
          <button
            key={chat.id}
            onClick={() => setActiveChat(chat.id)}
            className="w-full flex items-center gap-4 px-4 py-4 rounded-3xl transition-all active:scale-98 shadow-sm"
            style={{ background: "#fff" }}
          >
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0" style={{ background: chat.gradient }}>
              {chat.emoji}
            </div>
            <div className="flex-1 text-left">
              <div className="flex items-center justify-between mb-0.5">
                <p style={{ fontSize: "15px", fontWeight: 700, color: "#4a1a5e" }}>{chat.name}</p>
                <p style={{ fontSize: "11px", color: "#b89aaa" }}>{chat.time}</p>
              </div>
              <p style={{ fontSize: "13px", color: "#9a6a8a", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{chat.last}</p>
            </div>
            {chat.unread > 0 && (
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#c2629a" }}>
                <span style={{ fontSize: "11px", color: "#fff", fontWeight: 700 }}>{chat.unread}</span>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
