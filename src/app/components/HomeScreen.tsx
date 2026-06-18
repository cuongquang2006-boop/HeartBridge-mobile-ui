import { useState } from "react";

import {
  Bell,
  ChevronRight,
  Cake,
  Clapperboard,
  Camera,
  Utensils,
  Heart,
  Sparkles,
  MessageCircleHeart,
  HandHelping,
  Users,
  CircleUserRound
} from "lucide-react";

const MOODS = [
  { emoji: "😄", label: "Vui vẻ", color: "#f8d060" },
  { emoji: "😊", label: "Yên bình", color: "#78d4a0" },
  { emoji: "😐", label: "Cũng bình thường", color: "#9ab8e0" },
  { emoji: "🥹", label: "Cần được quan tâm", color: "#f0a0c0" },
  { emoji: "🤗", label: "Muốn nói chuyện", color: "#c8a0e8" },
  { emoji: "🌧", label: "Đang buồn", color: "#a0b8d8" },
  { emoji: "🌙", label: "Cần không gian riêng", color: "#8890c0" },
];

const SUGGESTIONS = [

{
  icon: MessageCircleHeart,
  text:"Hỏi mẹ cảm thấy thế nào"
},

{
  icon: Utensils,
  text:"Ăn bữa tối cùng cả nhà"
},

{
  icon: HandHelping,
  text:"Giúp đỡ mẹ công việc nhà"
},

{
  icon: Users,
  text:"Dành thời gian cùng nhau"
},

];

const UPCOMING = [
  {
    icon: Heart,
    title: "Bữa tối gia đình",
    date: "Tối nay · 7:00 PM",
    color: "#f0a0c0"
  },

  {
    icon: Cake,
    title: "Sinh nhật của bố",
    date: "Ngày 22 tháng 6",
    color: "#f8d060"
  }
];

const MEMORIES=[

{

icon:Heart,

title:"Sinh nhật của mẹ",

date:"Ngày 3 tháng 6",

color:"#f0a0c0"

},

{

icon:Utensils,

title:"Bữa tối gia đình",

date:"Ngày 28 tháng 5",

color:"#f8d060"

},

{

icon:Camera,

title:"Kì nghỉ bãi biển",

date:"Ngày 15 tháng 5",

color:"#78d4d8"

}

]

interface Props {
  onNavigate: (screen: string) => void;
}

export function HomeScreen({ onNavigate }: Props) {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [sentLove, setSentLove] = useState(false); 

  const handleSendLove = () => {
    setSentLove(true);
    setTimeout(() => setSentLove(false), 3000);
  };

  return (
    <div className="flex flex-col h-full overflow-y-auto" style={{ background: "#fdf6f0", fontFamily: "'Nunito', sans-serif" }}>
      {/* Header */}
      <div className="px-5 pt-14 pb-5" style={{ background: "linear-gradient(160deg, #f5d0e8 0%, #ead4f5 50%, #fde8d0 100%)" }}>
        <div className="flex items-center justify-between mb-4">
          <div>
            <p style={{ fontSize: "13px", color: "#9a6a8a", fontWeight: 600 }}>Xin chào thành viên của</p>
            <h1 style={{ fontSize: "22px", fontWeight: 800, color: "#4a1a5e" }}>Gia đình vui vẻ</h1>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.7)" }}>
              <Bell size={18} color="#7a4a7a" />
            </button>
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl" style={{ background: "rgba(255,255,255,0.7)" }}>👩</div>
          </div>
        </div>

        {/* Quick family circles */}
        <div className="flex gap-3">
          {[
            { name: "Ông",
              mood: "😊",
              color: "#f5d9b5" },
            { name:"Bà",
              mood:"🥰",
              color:"#f8c9d8" },
            {
            name:"Cha",
            mood:"😐",
            color:"#bfd8f8"
            },

            {
            name:"Mẹ",
            mood:"🥹",
            color:"#f7d1e8"
            },

            {
            name:"Con gái",
            mood:"😍",
            color:"#dcc8f5"
            },
          ].map(p => (
            <div key={p.name} className="flex flex-col items-center gap-1">
              <div className="relative w-12 h-12 rounded-full flex items-center justify-center text-xl" style={{ background: "rgba(255,255,255,0.75)", border: "2px solid rgba(194,98,154,0.2)" }}>
                <CircleUserRound

                  size={28}
                  color="#7a4a7a"
                  strokeWidth={1.8}

                />
                <span className="absolute -bottom-1 -right-1 text-sm">{p.mood}</span>
              </div>
              <span style={{ fontSize: "10px", color: "#9a6a8a", fontWeight: 600 }}>{p.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 py-4 space-y-4 pb-28">
        {/* Emotional Signal */}
        <div className="rounded-3xl p-5 shadow-sm" style={{ background: "#fff", border: "1.5px solid rgba(194,98,154,0.1)" }}>
          <div className="flex items-start justify-between mb-3">
            <p style={{ fontSize: "12px", fontWeight: 700, color: "#9a6a8a", letterSpacing: "0.06em", textTransform: "uppercase" }}>Lời nhắc về tâm trạng</p>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-2xl mb-3" style={{ background: "linear-gradient(135deg, #fde8f0, #f5e8fd)" }}>
            <div className="text-3xl">🥹</div>
            <div>
              <p style={{ fontSize: "15px", fontWeight: 700, color: "#4a1a5e" }}>Hôm nay mẹ cảm thấy rất mệt mỏi</p>
              <p style={{ fontSize: "13px", color: "#9a6a8a" }}>Chia sẻ 2 tiếng trước</p>
            </div>
          </div>
          <div className="flex items-start gap-2 p-3 rounded-2xl mb-3" style={{ background: "#f5ede8" }}>
            <Sparkles size={14} color="#c2629a" className="mt-0.5 flex-shrink-0" />
            <p style={{ fontSize: "13px", color: "#7a4a7a", fontStyle: "italic" }}>
              "Mẹ có thể đang cần được quan tâm nhiều hơn hôm nay. Một cái ôm ấm áp hay một lời hỏi han chân thành cũng có thể mang ý nghĩa rất lớn đó."
            </p>
          </div>
          <button
            onClick={handleSendLove}
            className="w-full py-3 rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-95"
            style={{
              background: sentLove ? "linear-gradient(135deg, #78cc99, #5bb870)" : "linear-gradient(135deg, #f5d0e8, #ead4f5)",
              color: sentLove ? "#fff" : "#c2629a",
              fontWeight: 700,
              fontSize: "15px"
            }}
          >
            {sentLove ? "Đã gửi yêu thương" : " Gửi yêu thương đến mẹ"}
          </button>
        </div>

        {/* Mood Check-In */}
        <div className="rounded-3xl p-5 shadow-sm" style={{ background: "#fff", border: "1.5px solid rgba(194,98,154,0.1)" }}>
          <p style={{ fontSize: "12px", fontWeight: 700, color: "#9a6a8a", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "4px" }}>Ngày hôm nay của bạn ra sao?</p>
          <p style={{ fontSize: "13px", color: "#c2629a", marginBottom: "16px" }}>Gia đình luôn quan tâm đến cảm xúc của bạn. Vì thế đừng ngại chia sẻ.</p>
          <div className="grid grid-cols-4 gap-2">
            {MOODS.map(m => (
              <button
                key={m.label}
                onClick={() => setSelectedMood(m.label)}
                className="flex flex-col items-center gap-1 py-3 rounded-2xl transition-all active:scale-95"
                style={{
                  background: selectedMood === m.label ? `${m.color}44` : "#f5ede8",
                  border: selectedMood === m.label ? `2px solid ${m.color}` : "2px solid transparent",
                  transform: selectedMood === m.label ? "scale(1.05)" : "scale(1)"
                }}
              >
                <span style={{ fontSize: "20px" }}>{m.emoji}</span>
                <span style={{ fontSize: "9px", color: "#9a6a8a", fontWeight: 600, textAlign: "center", lineHeight: 1.2 }}>{m.label}</span>
              </button>
            ))}
          </div>
          {selectedMood && (
            <button
              onClick={() => onNavigate("mood")}
              className="w-full py-3 rounded-2xl mt-3 transition-all active:scale-95"
              style={{ background: "linear-gradient(135deg, #c2629a, #9060c0)", color: "#fff", fontWeight: 700, fontSize: "14px" }}
            >
              Chia sẻ tâm trạng với gia đình →
            </button>
          )}
        </div>

        {/* AI Suggestions */}
        <div className="rounded-3xl p-5 shadow-sm" style={{ background: "linear-gradient(160deg, #f0e8fd, #fde8f0)", border: "none" }}>
          <div className="flex items-center justify-between mb-4">
            <p style={{ fontSize: "12px", fontWeight: 700, color: "#7a4a7a", letterSpacing: "0.06em", textTransform: "uppercase" }}> Gợi ý của trợ lý</p>
            <button onClick={() => onNavigate("ai")} style={{ fontSize: "12px", color: "#9060c0", fontWeight: 700 }}>Chi tiết</button>
          </div>

            <div className="space-y-2">

              {

              SUGGESTIONS.map((s,i)=>{

              const Icon=s.icon;

              return(

              <div

              key={i}
              className="flex items-center gap-3 px-4 py-3 rounded-2xl"
              style={{background:"rgba(255,255,255,0.7)"}}>

              <Icon
              size={18}
              color="#9060c0"/>

              <p

              style={{

              fontSize:"13px",
              color:"#4a1a5e",
              fontWeight:600

              }}>

              {s.text}
              </p>
              </div>

              )

              })

              }

</div>

        </div>

        {/* Family Moments */}
        <div className="rounded-3xl p-5 shadow-sm" style={{ background: "#fff", border: "1.5px solid rgba(194,98,154,0.1)" }}>
          <div className="flex items-center justify-between mb-4">
            <p style={{ fontSize: "12px", fontWeight: 700, color: "#9a6a8a", letterSpacing: "0.06em", textTransform: "uppercase" }}>Những dịp sắp tới</p>
            <button onClick={() => onNavigate("calendar")} style={{ fontSize: "12px", color: "#c2629a", fontWeight: 700 }}>Xem tất cả lịch</button>
          </div>
          <div className="space-y-3">
            
                {
                UPCOMING.map((e, i) => {

                const Icon = e.icon;

                return (

                <div
                key={i}
                className="flex items-center gap-3 px-4 py-3 rounded-2xl"
                style={{
                background: `${e.color}22`
                }}
                >

                <Icon

                size={20}

                color={e.color}

                strokeWidth={2.2}

                />

                <div className="flex-1">

                <p
                style={{
                fontSize:"14px",
                fontWeight:700,
                color:"#4a1a5e"
                }}
                >

                {e.title}

                </p>

                <p
                style={{
                fontSize:"12px",
                color:"#9a6a8a"
                }}
                >

                {e.date}

                </p>

                </div>

                <ChevronRight

                size={14}

                color="#c2629a"

                />

                </div>

                )

                })
                }
          </div>
        </div>

        {/* Family Memories */}
        <div className="rounded-3xl p-5 shadow-sm" style={{ background: "#fff", border: "1.5px solid rgba(194,98,154,0.1)" }}>
          <div className="flex items-center justify-between mb-4">
            <p style={{ fontSize: "12px", fontWeight: 700, color: "#9a6a8a", letterSpacing: "0.06em", textTransform: "uppercase" }}>Khoảnh khắc gia đình</p>
            <button onClick={() => onNavigate("memories")} style={{ fontSize: "12px", color: "#c2629a", fontWeight: 700 }}>Xem album</button>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
                {

                MEMORIES.map((m, i) => {

                const Icon = m.icon;

                return (

                <div
                key={i}
                className="flex-shrink-0 w-28 h-28 rounded-2xl flex flex-col items-center justify-center gap-2"

                style={{
                background:`linear-gradient(135deg, ${m.color}33, ${m.color}66)`,
                border:`1.5px solid ${m.color}44`
                }}>

                <Icon

                size={28}
                color={m.color}
                strokeWidth={2.2}

                />

                <p
                style={{
                fontSize:"11px",
                fontWeight:700,
                color:"#4a1a5e",
                textAlign:"center",
                lineHeight:1.2

                }}

                >
                {m.title}
                </p>

                <p

                style={{
                fontSize:"10px",
                color:"#9a6a8a"
                }}
                >

                {m.date}

                </p>

                </div>

                )
              }
            )
          }
          </div>
        </div>
      </div>
    </div>
  );
}
