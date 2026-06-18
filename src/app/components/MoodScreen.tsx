import { useState } from "react";
import { Check, ChevronRight } from "lucide-react";

const MOODS = [
  {
    emoji: "😄",
    label: "Hạnh phúc",
    desc: "Tràn đầy niềm vui và năng lượng",
    color: "#f8d060",
    bg: "#fff9e0"
  },

  {
    emoji: "😊",
    label: "Bình yên",
    desc: "Cảm thấy nhẹ nhàng và an yên",
    color: "#78cc99",
    bg: "#e8f8ee"
  },

  {
    emoji: "😐",
    label: "Bình thường",
    desc: "Một ngày diễn ra như thường lệ",
    color: "#9ab8e0",
    bg: "#e8f0fa"
  },

  {
    emoji: "🥹",
    label: "Cần quan tâm",
    desc: "Mong nhận được một chút yêu thương hôm nay",
    color: "#f0a0c0",
    bg: "#fde8f0"
  },

  {
    emoji: "🤗",
    label: "Muốn sẻ chia",
    desc: "Sẵn sàng trò chuyện và tâm sự",
    color: "#c8a0e8",
    bg: "#f0e8fd"
  },

  {
    emoji: " 🌧",
    label: " Buồn",
    desc: "  Có chút nặng lòng hôm nay",
    color: "#82a8d0",
    bg: "#e8f0f8"
  },

  {
    emoji: "🌙",
    label: "Muốn riêng tư",
    desc: "Cần một khoảng lặng cho riêng mình",
    color: "#8890c0",
    bg: "#eceefa"
  },
];

const FAMILY = [
  {  emoji: "",name: "Mẹ", checked: true },
  { emoji: "",name: "Bố", checked: true },
  { emoji: "",name: "Con gái", checked: true },
  { emoji: "",name: "Ông", checked: false },
  { emoji: "",name: "Bà", checked: false },
];

interface Props {
  onShare?: () => void;
}

export function MoodScreen({ onShare }: Props) {
  const [selectedMood, setSelectedMood] = useState<string | null>("Need Care");
  const [note, setNote] = useState("");
  const [visibility, setVisibility] = useState<Record<string, boolean>>(
    Object.fromEntries(FAMILY.map(f => [f.name, f.checked]))
  );
  const [shared, setShared] = useState(false);

  const mood = MOODS.find(m => m.label === selectedMood);

  const handleShare = () => {
    setShared(true);
    onShare?.();
    setTimeout(() => setShared(false), 3000);
  };

  return (
    <div className="flex flex-col h-full overflow-y-auto" style={{ background: "#fdf6f0", fontFamily: "'Nunito', sans-serif" }}>
      {/* Header */}
      <div className="px-5 pt-14 pb-6" style={{ background: mood ? `linear-gradient(160deg, ${mood.bg} 0%, ${mood.color}33 100%)` : "linear-gradient(160deg, #f5d0e8 0%, #ead4f5 100%)" }}>
        <h1 style={{ fontSize: "22px", fontWeight: 800, color: "#4a1a5e", marginBottom: "4px" }}>Cảm nhận của bạn ra sao?</h1>
        <p style={{ fontSize: "13px", color: "#9a6a8a" }}>Hãy thành thật sẻ chia trái tim cùng nhau.</p>
      </div>

      <div className="px-4 py-4 space-y-5 pb-28">
        {/* Mood selector */}
        <div className="rounded-3xl p-4 shadow-sm" style={{ background: "#fff" }}>
          <p style={{ fontSize: "12px", fontWeight: 700, color: "#9a6a8a", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "14px" }}>Chọn dòng tâm trạng hiện tại của bạn</p>
          <div className="space-y-2">
            {MOODS.map(m => {
              const isSelected = selectedMood === m.label;
              return (
                <button
                  key={m.label}
                  onClick={() => setSelectedMood(m.label)}
                  className="w-full flex items-center gap-4 px-4 py-3 rounded-2xl transition-all active:scale-98"
                  style={{
                    background: isSelected ? `linear-gradient(135deg, ${m.bg}, ${m.color}33)` : "#f5ede8",
                    border: isSelected ? `2px solid ${m.color}` : "2px solid transparent",
                  }}
                >
                  <span style={{ fontSize: "24px" }}>{m.emoji}</span>
                  <div className="flex-1 text-left">
                    <p style={{ fontSize: "14px", fontWeight: 700, color: "#4a1a5e" }}>{m.label}</p>
                    <p style={{ fontSize: "12px", color: "#9a6a8a" }}>{m.desc}</p>
                  </div>
                  {isSelected && (
                    <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: m.color }}>
                      <Check size={12} color="#fff" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Write feelings */}
        <div className="rounded-3xl p-5 shadow-sm" style={{ background: "#fff" }}>
          <p style={{ fontSize: "12px", fontWeight: 700, color: "#9a6a8a", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "10px" }}>Viết về cảm nhận của bạn lúc này (Tùy chọn)</p>
          <textarea
            value={note}
            onChange={e => setNote(e.target.value)}
            placeholder="Hãy chia sẻ những điều đang ở trong tim bạn... Gia đình luôn sẵn sàng lắng nghe và thấu hiểu"
            rows={4}
            className="w-full px-4 py-3 rounded-2xl outline-none resize-none"
            style={{
              background: "#fdf0f5",
              fontSize: "14px",
              color: "#4a1a5e",
              border: "1.5px solid rgba(194,98,154,0.2)",
              fontFamily: "'Nunito', sans-serif",
              lineHeight: 1.6
            }}
          />
          <p style={{ fontSize: "11px", color: "#b89aaa", textAlign: "right", marginTop: "6px" }}>{note.length}/300</p>
        </div>

        {/* Privacy */}
        <div className="rounded-3xl p-5 shadow-sm" style={{ background: "#fff" }}>
          <p style={{ fontSize: "12px", fontWeight: 700, color: "#9a6a8a", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "14px" }}>Hiển thị cảm xúc cho</p>
          <div className="space-y-3">
            <label className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span style={{ fontSize: "14px", fontWeight: 600, color: "#4a1a5e" }}>Mọi người trong gia đình</span>
              </div>
              <input
                type="checkbox"
                checked={Object.values(visibility).every(Boolean)}
                onChange={e => setVisibility(Object.fromEntries(FAMILY.map(f => [f.name, e.target.checked])))}
                style={{ accentColor: "#c2629a", width: "18px", height: "18px" }}
              />
            </label>
            <div style={{ height: "1px", background: "#f5ede8" }} />
            {FAMILY.map(f => (
              <label key={f.name} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span style={{ fontSize: "20px" }}>{f.emoji}</span>
                  <span style={{ fontSize: "14px", fontWeight: 600, color: "#4a1a5e" }}>{f.name}</span>
                </div>
                <input
                  type="checkbox"
                  checked={visibility[f.name] ?? false}
                  onChange={e => setVisibility(prev => ({ ...prev, [f.name]: e.target.checked }))}
                  style={{ accentColor: "#c2629a", width: "18px", height: "18px" }}
                />
              </label>
            ))}
          </div>
        </div>

        {/* Share button */}
        <button
          onClick={handleShare}
          disabled={!selectedMood}
          className="w-full py-4 rounded-3xl flex items-center justify-center gap-2 transition-all active:scale-95"
          style={{
            background: shared ? "linear-gradient(135deg, #78cc99, #5bb870)" : selectedMood ? "linear-gradient(135deg, #c2629a, #9060c0)" : "#e8d8e8",
            color: "#fff",
            fontSize: "17px",
            fontWeight: 800,
            fontFamily: "'Nunito', sans-serif",
            boxShadow: selectedMood && !shared ? "0 8px 24px rgba(194,98,154,0.35)" : "none"
          }}
        >
          {shared ? "Đã chia sẻ!" : `Chia sẻ tâm trạng`}
          {!shared && <ChevronRight size={20} />}
        </button>
      </div>
    </div>
  );
}
