import { useState, useRef, useEffect } from "react";
import { Send, Sparkles, Bot } from "lucide-react";

interface Message {
  id: number;
  role: "ai" | "user";
  text: string;
  suggestions?: string[];
  time: string;
}

const QUICK_ACTIONS = [
  { icon: "", label: "Mẹ đang cảm thấy mệt mỏi", query: "Mẹ chia sẻ rằng hôm nay mẹ cảm thấy mệt. Tôi có thể làm gì để mẹ vui hơn?" },
  { icon: "", label: "Cảm xúc gia đình", query: "Tóm tắt cảm xúc gia đình tuần này." },
  { icon: "", label: "Hoạt động gia đình", query: "Gợi ý một hoạt động mới cho gia đình." },
  { icon: "", label: "Gắn kết hơn", query: "Làm thế nào để tôi kết nối tốt hơn với con gái tuổi teen?" },
];

const INITIAL_MESSAGES: Message[] = [
  {
  id: 1,
  role: "ai",
  text:
    "Xin chào 💗 Mình là HeartBridge AI - người bạn đồng hành cảm xúc của gia đình bạn.\n\nMình ở đây để giúp mọi người thấu hiểu nhau hơn, sẻ chia nhiều hơn và cùng tạo nên những khoảnh khắc ý nghĩa mỗi ngày.\n\nHôm nay mình có thể giúp gì cho gia đình bạn?",
  suggestions: [
    "Mẹ đang cảm thấy thế nào?",
    "Gợi ý một nghi thức gia đình",
    "Làm sao để gần gũi với bố hơn?"
  ],
  time: "Bây giờ"
}
];

const AI_RESPONSES: Record<string, Message> = {
  "Mẹ chia sẻ rằng hôm nay mẹ cảm thấy mệt. Tôi có thể làm gì để mẹ vui hơn?": {
    id: 0, role: "ai", time: "Bây giờ",
    text:
      `💗 Có lẽ hôm nay mẹ đang phải gánh vác khá nhiều điều.

      Đôi khi, những hành động nhỏ lại mang đến sự ấm áp lớn lao:

      ✨ Hãy hỏi mẹ: "Mẹ có mệt lắm không?"  
      Được lắng nghe luôn là món quà quý giá.

      🍳 Phụ mẹ chuẩn bị bữa tối  
      Chỉ một việc nhỏ thôi cũng giúp mẹ nhẹ lòng hơn.

      🫂 Dành cho mẹ một cái ôm  
      Sự quan tâm đôi khi không cần quá nhiều lời nói.

      ☕ Hãy để mẹ có một khoảng thời gian nghỉ ngơi yên tĩnh.

      💝 Tình yêu gia đình được tạo nên từ những điều giản dị như thế.`,

  suggestions: [
    "Gửi mẹ một lời yêu thương",
    "Lên kế hoạch buổi tối thư giãn",
    "Tôi còn có thể làm gì?"
  ]
  },
  "Tóm tắt cảm xúc gia đình tuần này.": {
    id: 0, role: "ai", time: "Bây giờ",
    text:
      `📊 Tóm tắt cảm xúc gia đình tuần này

      😊 Tổng thể: Bình yên và ấm áp

      👩 Mẹ
      Hơi mệt mỏi và cần được quan tâm nhiều hơn.

      👨 Bố
      Ổn định và luôn âm thầm chăm lo cho gia đình.

      👧 Lily
      Vui vẻ, năng động và tràn đầy năng lượng.

      👴 Ông
      Bình yên và thích những cuộc trò chuyện ngắn.

      👵 Bà
      Muốn được chia sẻ và gần gũi với mọi người hơn.

      ✨ Gợi ý:

      Cuối tuần này có thể là thời điểm thích hợp để cả nhà cùng ăn tối hoặc xem một bộ phim yêu thích.

      Những khoảnh khắc nhỏ chính là điều làm nên hạnh phúc gia đình 💗`,

  suggestions: [
    "Lên lịch ăn tối cùng nhau",
    "Gửi lời yêu thương đến mẹ",
    "Gợi ý hoạt động cuối tuần"
  ]
  },
  "Gợi ý một hoạt động mới cho gia đình.": {
  id: 0,
  role: "ai",
  time: "Bây giờ",

      text:
    `🎬 Hoạt động được gợi ý hôm nay

    🍿 Đêm xem phim gia đình

    Hãy chọn một bộ phim nhẹ nhàng mà mọi người đều yêu thích.

    💬 Sau khi xem xong, mỗi người hãy chia sẻ:

    • Điều khiến mình thích nhất.
    • Một kỷ niệm mà bộ phim gợi nhớ.
    • Một lời cảm ơn dành cho người thân.

    ✨ Những cuộc trò chuyện giản dị thường là cầu nối tuyệt vời nhất giữa các thế hệ.

    💗 Gia đình không cần những điều quá lớn lao, chỉ cần những khoảnh khắc được ở bên nhau.`,

  suggestions: [
    "Gợi ý phim phù hợp",
    "Hoạt động khác",
    "Lưu thành nghi thức gia đình"
  ]
  },

  "Làm thế nào để tôi kết nối tốt hơn với con gái tuổi teen?": {
  id: 0,
  role: "ai",
  time: "Bây giờ",

      text:
    `🌷 Tuổi teen là giai đoạn cần được thấu hiểu hơn là bị kiểm soát.

    Bạn có thể thử:

    💬 Hỏi con:

    "Hôm nay của con thế nào?"

    Thay vì:

    "Tại sao con lại làm như vậy?"

    🎵 Hãy cùng nghe một bài hát hoặc xem bộ phim mà con yêu thích.

    🤝 Tôn trọng không gian riêng của con.

    💗 Đừng cố trở thành người hoàn hảo.

    Chỉ cần bạn luôn sẵn sàng lắng nghe, bạn đã là điểm tựa rất lớn đối với con rồi.

    ✨ Những cuộc trò chuyện nhỏ mỗi ngày sẽ dần tạo nên sự gắn kết lâu dài.`,

  suggestions: [
    "Hiểu tâm lý tuổi teen",
    "Gợi ý hoạt động cùng con",
    "Tôi nên bắt đầu từ đâu?"
  ]
},
};

export function AIScreen() {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { id: Date.now(), role: "user", text, time: "Bây giờ" };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const reply = AI_RESPONSES[text] || {
        id: Date.now() + 1, role: "ai" as const, time: "Bây giờ",

        text: `💗 Mình đã hiểu điều bạn đang băn khoăn về "${text.slice(0, 40)}...".

        Mỗi gia đình đều có những câu chuyện và cảm xúc riêng. Đôi khi chỉ cần một sự lắng nghe, một lời hỏi han hay một hành động nhỏ cũng đủ để mọi người xích lại gần nhau hơn.

        ✨ Mình sẽ luôn ở đây để cùng bạn tìm ra những cách gắn kết và sẻ chia ý nghĩa nhất.`,
        
        suggestions: [
          "Cho tôi biết thêm",
          "Gợi ý khác",
          "Cảm ơn bạn"
        ]
      };
      setMessages(prev => [...prev, { ...reply, id: Date.now() + 1 }]);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-full" style={{ background: "#fdf6f0", fontFamily: "'Nunito', sans-serif" }}>
      {/* Header */}
      <div className="px-5 pt-14 pb-4" style={{ background: "linear-gradient(160deg, #f0e8fd 0%, #fde8f0 100%)" }}>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #c2629a, #9060c0)" }}>
            <Bot size={22} color="#fff" />
          </div>
          <div>
            <h1 style={{ fontSize: "18px", fontWeight: 800, color: "#4a1a5e" }}>HeartBridge AI</h1>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full" style={{ background: "#78cc99" }} />
              <p style={{ fontSize: "12px", color: "#9a6a8a" }}>Người bạn cùng đồng hành gắn kết gia đình</p>
            </div>
          </div>
        </div>

        {/* Quick actions */}
        <div className="flex gap-2 mt-4 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
          {QUICK_ACTIONS.map((a, i) => (
            <button
              key={i}
              onClick={() => sendMessage(a.query)}
              className="flex-shrink-0 flex items-center gap-2 px-3 py-2 rounded-2xl"
              style={{ background: "rgba(255,255,255,0.7)", fontSize: "12px", fontWeight: 600, color: "#7a4a7a", fontFamily: "'Nunito', sans-serif" }}
            >
              <span>{a.icon}</span>
              {a.label}
            </button>
          ))}
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        {messages.map(msg => (
          <div key={msg.id} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            {msg.role === "ai" && (
              <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-2" style={{ background: "linear-gradient(135deg, #c2629a, #9060c0)" }}>
                <Sparkles size={14} color="#fff" />
              </div>
            )}
            <div className="max-w-[78%]">
              <div
                className="px-4 py-3 rounded-3xl"
                style={{
                  background: msg.role === "ai"
                    ? "linear-gradient(160deg, #fff, #fdf0f8)"
                    : "linear-gradient(135deg, #c2629a, #9060c0)",
                  color: msg.role === "ai" ? "#4a1a5e" : "#fff",
                  borderBottomLeftRadius: msg.role === "ai" ? "6px" : "24px",
                  borderBottomRightRadius: msg.role === "user" ? "6px" : "24px",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)"
                }}
              >
                <p style={{ fontSize: "14px", lineHeight: 1.6, whiteSpace: "pre-line" }}>{msg.text}</p>
              </div>

              {/* Suggestions */}
              {msg.suggestions && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {msg.suggestions.map((s, i) => (
                    <button
                      key={i}
                      onClick={() => sendMessage(s)}
                      className="px-3 py-1.5 rounded-2xl"
                      style={{ background: "#f5d0e8", color: "#c2629a", fontSize: "12px", fontWeight: 600, fontFamily: "'Nunito', sans-serif" }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}

              <p style={{ fontSize: "10px", color: "#b89aaa", marginTop: "4px", textAlign: msg.role === "user" ? "right" : "left" }}>{msg.time}</p>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, #c2629a, #9060c0)" }}>
              <Sparkles size={14} color="#fff" />
            </div>
            <div className="px-4 py-3 rounded-3xl" style={{ background: "#fff", borderBottomLeftRadius: "6px" }}>
              <div className="flex gap-1 items-center">
                <div className="w-2 h-2 rounded-full animate-bounce" style={{ background: "#c2629a", animationDelay: "0ms" }} />
                <div className="w-2 h-2 rounded-full animate-bounce" style={{ background: "#c2629a", animationDelay: "150ms" }} />
                <div className="w-2 h-2 rounded-full animate-bounce" style={{ background: "#c2629a", animationDelay: "300ms" }} />
              </div>
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="px-4 pb-28 pt-3" style={{ background: "#fdf6f0", borderTop: "1px solid rgba(194,98,154,0.1)" }}>
        <div className="flex items-center gap-3 px-4 py-3 rounded-3xl" style={{ background: "#fff", boxShadow: "0 2px 16px rgba(194,98,154,0.12)" }}>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === "Enter" && sendMessage(input)}
            placeholder="Hãy hỏi về cảm xúc của gia đình bạn..."
            className="flex-1 outline-none bg-transparent"
            style={{ fontSize: "14px", color: "#4a1a5e", fontFamily: "'Nunito', sans-serif" }}
          />
          <button
            onClick={() => sendMessage(input)}
            disabled={!input.trim()}
            className="w-9 h-9 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all active:scale-90"
            style={{
              background: input.trim() ? "linear-gradient(135deg, #c2629a, #9060c0)" : "#f5ede8",
            }}
          >
            <Send size={16} color={input.trim() ? "#fff" : "#b89aaa"} />
          </button>
        </div>
      </div>
    </div>
  );
}
