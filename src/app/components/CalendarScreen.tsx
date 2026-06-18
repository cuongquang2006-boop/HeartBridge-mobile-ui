import { useState } from "react";
import { ChevronLeft, ChevronRight, Plus, Sparkles } from "lucide-react";

const DAYS = ["S", "M", "T", "W", "T", "F", "S"];

const EVENTS: Record<number, { icon: string; title: string; color: string; time?: string }[]> = {
  3: [{ icon: "☕", title: "Uống trà", color: "#f8d060", time: "4:00 PM" }],
  7: [{ icon: "🌱", title: "Khoảnh khắc quan tâm", color: "#78cc99", time: "7 - 8:00 AM" }],
  12: [{ icon: "❤️", title: "Bữa tối gia đình", color: "#f0a0c0", time: "7:00 PM" }],
  18: [{ icon: "🎂", title: "Sinh nhật của bố", color: "#f8d060", time: "12:00 AM" }],
  22: [{ icon: "🎥", title: "Xem phim", color: "#c8a0e8", time: "8:00 PM" }],
  25: [
    { icon: "❤️", title: "Bữa tối gia đình", color: "#f0a0c0", time: "7:00 PM" },
    { icon: "🎂", title: "Sinh nhật của bà ", color: "#f8d060", time: "8:00 PM" }
  ],
  28: [{ icon: "☕", title: "Uống trà", color: "#f8d060", time: "4:00 PM" }],
};

const MONTH_EVENTS = [
  { icon: "❤️", title: "Family Dinner", date: "Jun 12", time: "7:00 PM", members: ["👩", "👨", "👧"], color: "#f0a0c0" },
  { icon: "🎂", title: "Dad's Birthday", date: "Jun 18", time: "All day", members: ["👩", "👧", "👴", "👵"], color: "#f8d060" },
  { icon: "🎥", title: "Movie Night", date: "Jun 22", time: "8:00 PM", members: ["👩", "👨", "👧"], color: "#c8a0e8" },
  { icon: "☕", title: "Tea Time with Grandma", date: "Jun 28", time: "4:00 PM", members: ["👵", "👧"], color: "#f8d060" },
  { icon: "🌱", title: "Caring Moment for Mom", date: "Jun 7", time: "Morning", members: ["👨", "👧"], color: "#78cc99" },
];

export function CalendarScreen() {
  const [view, setView] = useState<"month" | "week">("month");
  const [selectedDay, setSelectedDay] = useState<number | null>(18);
  const today = 18;

  // Build June 2026 calendar (starts on Monday the 1st)
  // June 2026: June 1 is a Monday
  const firstDayOffset = 1; // Monday
  const daysInMonth = 30;
  const cells: (number | null)[] = [];
  for (let i = 0; i < firstDayOffset; i++) cells.push(null);
  for (let i = 1; i <= daysInMonth; i++) cells.push(i);

const selectedEvents = selectedDay
  ? EVENTS[selectedDay] ?? []
  : [];

  return (
    <div className="flex flex-col h-full" style={{ background: "#fdf6f0", fontFamily: "'Nunito', sans-serif" }}>
      {/* Header */}
      <div className="px-5 pt-14 pb-4" style={{ background: "linear-gradient(160deg, #f5d0e8 0%, #ead4f5 50%, #fde8d0 100%)" }}>
        <div className="flex items-center justify-between mb-4">
          <h1 style={{ fontSize: "22px", fontWeight: 800, color: "#4a1a5e" }}>Lịch gia đình</h1>
          <button className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, #c2629a, #9060c0)" }}>
            <Plus size={18} color="#fff" />
          </button>
        </div>

        {/* View toggle */}
        <div className="flex gap-2 p-1 rounded-2xl" style={{ background: "rgba(255,255,255,0.5)" }}>
          {(["month", "week"] as const).map(v => (
            <button
              key={v}
              onClick={() => setView(v)}
              className="flex-1 py-2 rounded-xl capitalize"
              style={{
                background: view === v ? "linear-gradient(135deg, #c2629a, #9060c0)" : "transparent",
                color: view === v ? "#fff" : "#9a6a8a",
                fontWeight: 700,
                fontSize: "14px",
                fontFamily: "'Nunito', sans-serif"
              }}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {view === "month" && (
          <>
            {/* Month navigation */}
            <div className="flex items-center justify-between px-5 py-4">
              <button className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "#f5ede8" }}>
                <ChevronLeft size={16} color="#9a6a8a" />
              </button>
              <span style={{ fontSize: "17px", fontWeight: 700, color: "#4a1a5e" }}>June 2026</span>
              <button className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "#f5ede8" }}>
                <ChevronRight size={16} color="#9a6a8a" />
              </button>
            </div>

            {/* Day headers */}
            <div className="grid grid-cols-7 px-4 mb-2">
              {DAYS.map((d, i) => (
                <div key={i} className="text-center" style={{ fontSize: "12px", fontWeight: 700, color: "#9a6a8a" }}>{d}</div>
              ))}
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-7 px-4 gap-y-1">
              {cells.map((day, i) => {
                if (!day) return <div key={i} />;
                const hasEvents = EVENTS[day];
                const isToday = day === today;
                const isSelected = day === selectedDay;
                return (
                  <button
                    key={i}
                    onClick={() => setSelectedDay(day)}
                    className="flex flex-col items-center py-1 rounded-2xl transition-all"
                    style={{
                      background: isSelected ? "linear-gradient(135deg, #c2629a, #9060c0)" : isToday ? "#f5d0e8" : "transparent",
                    }}
                  >
                    <span style={{ fontSize: "14px", fontWeight: isToday || isSelected ? 800 : 500, color: isSelected ? "#fff" : isToday ? "#c2629a" : "#4a1a5e" }}>
                      {day}
                    </span>
                    {hasEvents && (
                      <div className="flex gap-0.5 mt-0.5">
                        {hasEvents.slice(0, 2).map((e, j) => (
                          <div key={j} className="w-1.5 h-1.5 rounded-full" style={{ background: isSelected ? "rgba(255,255,255,0.8)" : e.color }} />
                        ))}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* AI Reminder */}
            <div className="mx-4 mt-4 px-4 py-3 rounded-2xl flex items-start gap-2" style={{ background: "linear-gradient(135deg, #f0e8fd, #fde8f0)" }}>
              <Sparkles size={14} color="#9060c0" className="mt-0.5 flex-shrink-0" />
              <p style={{ fontSize: "13px", color: "#7a4a7a", fontStyle: "italic" }}>
                  Đã hai tuần rồi kể từ bữa cơm gia đình gần nhất của bạn. Bạn có muốn lên kế hoạch cho một bữa ăn ấm cúng vào tuần này với gia đình không?
              </p>
            </div>

            {/* Selected day events */}
            {selectedDay && (
              <div className="px-4 mt-4 pb-28">
                <p style={{ fontSize: "13px", fontWeight: 700, color: "#9a6a8a", marginBottom: "10px" }}>June {selectedDay}</p>
                {selectedEvents.length > 0 ? (
                  <div className="space-y-2">
                    {selectedEvents.map((e, i) => (
                      <div key={i} className="flex items-center gap-3 px-4 py-3 rounded-2xl" style={{ background: `${e.color}22`, border: `1.5px solid ${e.color}66` }}>
                        <span style={{ fontSize: "20px" }}>{e.icon}</span>
                        <div>
                          <p style={{ fontSize: "14px", fontWeight: 700, color: "#4a1a5e" }}>{e.title}</p>
                          {e.time && <p style={{ fontSize: "12px", color: "#9a6a8a" }}>{e.time}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-6">
                    <p style={{ fontSize: "13px", color: "#b89aaa" }}>No events planned</p>
                    <button className="mt-2 px-4 py-2 rounded-xl" style={{ background: "#f5d0e8", color: "#c2629a", fontSize: "13px", fontWeight: 700, fontFamily: "'Nunito', sans-serif" }}>
                      + Add a moment
                    </button>
                  </div>
                )}
              </div>
            )}
          </>
        )}

        {view === "week" && (
          <div className="px-4 py-4 pb-28">
            <p style={{ fontSize: "15px", fontWeight: 700, color: "#4a1a5e", marginBottom: "16px" }}>Jun 15 – Jun 21</p>
            {["Mon 15", "Tue 16", "Wed 17", "Thu 18", "Fri 19", "Sat 20", "Sun 21"].map((d, i) => {
              const dayNum = 15 + i;
              const evts = EVENTS[dayNum] || [];
              const isToday = dayNum === today;
              return (
                <div key={d} className="flex gap-3 mb-3">
                  <div className="w-14 text-right pt-1">
                    <span style={{ fontSize: "12px", fontWeight: isToday ? 800 : 600, color: isToday ? "#c2629a" : "#9a6a8a" }}>{d}</span>
                  </div>
                  <div className="flex-1 min-h-12 rounded-2xl px-3 py-2" style={{ background: isToday ? "#fde8f0" : "#f5ede8", border: isToday ? "1.5px solid #f0a0c0" : "none" }}>
                    {evts.length > 0 ? evts.map((e, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <span>{e.icon}</span>
                        <span style={{ fontSize: "13px", fontWeight: 600, color: "#4a1a5e" }}>{e.title}</span>
                        {e.time && <span style={{ fontSize: "11px", color: "#9a6a8a" }}>{e.time}</span>}
                      </div>
                    )) : (
                      <span style={{ fontSize: "12px", color: "#c8b0b8" }}>Chưa có lịch</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
