import { useState } from "react";
import { Plus, Camera, Video } from "lucide-react";

const CATEGORIES = ["All", "Birthday", "Vacation", "Dinner", "Daily", "Special"];

const MEMORIES = [
  {
    id: 1,
    icon: "❤️",
    title: "Sinh nhật của mẹ",
    date: "June 3, 2026",
    category: "Birthday",
    description: "We surprised mom with breakfast in bed and her favorite flowers! She was so happy 💗",
    color: "#f0a0c0",
    bg: "#fde8f0",
    members: ["👩", "👨", "👧", "👴", "👵"],
    photo: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=280&fit=crop&auto=format",
  },
  {
    id: 2,
    icon: "📷",
    title: "Kì nghỉ tại bãi biển",
    date: "May 15, 2026",
    category: "Vacation",
    description: "Three perfect days by the sea. Grandpa said it was the best trip of his life 🌊",
    color: "#78d4d8",
    bg: "#e8f8fa",
    members: ["👩", "👨", "👧", "👴", "👵"],
    photo: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=280&fit=crop&auto=format",
  },
  {
    id: 3,
    icon: "🍽",
    title: "Sunday Family Dinner",
    date: "May 28, 2026",
    category: "Dinner",
    description: "Grandma made her special recipe. The whole house smelled like love and warmth 🥰",
    color: "#f8d060",
    bg: "#fefbe8",
    members: ["👩", "👨", "👧", "👴", "👵"],
    photo: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=280&fit=crop&auto=format",
  },
  {
    id: 4,
    icon: "🎥",
    title: "Movie Night",
    date: "May 10, 2026",
    category: "Special",
    description: "Blanket forts, popcorn, and laughter. Lily fell asleep before the ending 😄",
    color: "#c8a0e8",
    bg: "#f5e8fd",
    members: ["👩", "👨", "👧"],
    photo: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=280&fit=crop&auto=format",
  },
  {
    id: 5,
    icon: "🌱",
    title: "Garden Morning",
    date: "April 20, 2026",
    category: "Daily",
    description: "Dad and Lily planted sunflowers together. A small moment, a big memory 🌻",
    color: "#78cc99",
    bg: "#e8f8ee",
    members: ["👨", "👧"],
    photo: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=280&fit=crop&auto=format",
  },
];

export function MemoriesScreen() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expanded, setExpanded] = useState<number | null>(null);

  const filtered = selectedCategory === "All" ? MEMORIES : MEMORIES.filter(m => m.category === selectedCategory);

  return (
    <div className="flex flex-col" style={{ background: "#fdf6f0", fontFamily: "'Nunito', sans-serif" }}>
      {/* Header */}
      <div className="px-5 pt-14 pb-5" style={{ background: "linear-gradient(160deg, #fde8d0 0%, #f5d0e8 60%, #ead4f5 100%)" }}>
        <div className="flex items-center justify-between mb-3">
          <div>
            <h1 style={{ fontSize: "22px", fontWeight: 800, color: "#4a1a5e" }}>Family Memories</h1>
            <p style={{ fontSize: "13px", color: "#9a6a8a" }}>Moments that warm your heart 💝</p>
          </div>
          <button className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #c2629a, #9060c0)" }}>
            <Plus size={18} color="#fff" />
          </button>
        </div>

        {/* Stats */}
        <div className="flex gap-3">
          {[
            { label: "Memories", value: "48", icon: "💝" },
            { label: "Photos", value: "234", icon: "📷" },
            { label: "Years", value: "3", icon: "🌸" },
          ].map(s => (
            <div key={s.label} className="flex-1 text-center px-2 py-2 rounded-2xl" style={{ background: "rgba(255,255,255,0.6)" }}>
              <p style={{ fontSize: "18px" }}>{s.icon}</p>
              <p style={{ fontSize: "16px", fontWeight: 800, color: "#4a1a5e" }}>{s.value}</p>
              <p style={{ fontSize: "10px", color: "#9a6a8a" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Category filter */}
            <div

          className="
          flex
          gap-3
          px-4
          pt-6
          pb-3
          overflow-x-auto
          "

          style={{

          scrollbarWidth:"none",

          background:"#fdf6f0"

          }}

          >
        {CATEGORIES.map(c => (
          <button
            key={c}
            onClick={() => setSelectedCategory(c)}
            className="flex-shrink-0 min-w-[90px] px-4 py-2.5 rounded-2xl"
            style={{
              background: selectedCategory === c ? "linear-gradient(135deg, #c2629a, #9060c0)" : "#f5ede8",
              color: selectedCategory === c ? "#fff" : "#9a6a8a",
              fontSize: "13px",
              fontWeight: 600,
              fontFamily: "'Nunito', sans-serif"
            }}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Timeline */}
          <div className="px-4 pt-6 pb-40 space-y-4">

    {filtered.map((mem, i) => (

    <div key={mem.id} className="relative">

      {/* Timeline line */}

      {i < filtered.length - 1 && (

        <div

          className="absolute left-6 top-16 bottom-0 w-0.5"

          style={{

            background:
              "linear-gradient(to bottom, rgba(194,98,154,.3), transparent)",

            zIndex: 0

          }}

        />

      )}


      {/* Timeline dot */}

      <div

        className="
        absolute
        left-3
        top-10
        w-6
        h-6
        rounded-full
        flex
        items-center
        justify-center"

        style={{

          background: mem.color,

          zIndex: 10,

          boxShadow: "0 4px 12px rgba(0,0,0,.1)"

        }}

      >

        <span style={{ fontSize: "12px" }}>

          {mem.icon}

        </span>

      </div>


      <button

        className="
        ml-12
        w-[calc(100%-3rem)]
        text-left
        rounded-3xl
        overflow-hidden
        shadow-sm
        transition-all"

        onClick={() =>

          setExpanded(

            expanded === mem.id

              ? null

              : mem.id

          )

        }

        style={{

          background:"#fff",

          border:`1.5px solid ${mem.color}33`

        }}

      >

        {/* Photo */}

        <div

          className="
          w-full
          h-32
          relative
          overflow-hidden"

          style={{

            background:mem.bg

          }}

        >

          <img

            src={mem.photo}

            alt={mem.title}

            className="
            w-full
            h-full
            object-cover"

            style={{

              opacity:.9

            }}

          />

          <div

            className="absolute inset-0"

            style={{

              background:

              `linear-gradient(
                to bottom,
                transparent 50%,
                ${mem.bg}ee
              )`

            }}

          />

          <div

            className="
            absolute
            top-3
            left-3
            px-3
            py-1.5
            rounded-full"

            style={{

              background:

              "rgba(255,255,255,.85)"

            }}

          >

            <span

            style={{

              fontSize:"11px",

              fontWeight:700,

              color:"#9a6a8a"

            }}

            >

              {mem.category}

            </span>

          </div>

        </div>


        {/* Content */}

        <div className="px-4 py-4">

          <p

          style={{

            fontSize:"16px",

            fontWeight:700,

            color:"#4a1a5e"

          }}

          >

            {mem.title}

          </p>

          <p

          style={{

            fontSize:"12px",

            color:"#9a6a8a",

            marginBottom:"10px"

          }}

          >

            📅 {mem.date}

          </p>


          {

            expanded===mem.id &&

            <>

              <p

              style={{

                fontSize:"13px",

                color:"#7a4a7a",

                lineHeight:1.6,

                marginBottom:"12px",

                fontStyle:"italic"

              }}

              >

                "{mem.description}"

              </p>


              <div className="flex items-center gap-2">

                <div className="flex -space-x-2">

                  {

                    mem.members.map(

                      (m,j)=>(

                      <div

                      key={j}

                      className="
                      w-7
                      h-7
                      rounded-full
                      flex
                      items-center
                      justify-center
                      text-sm"

                      style={{

                        background:"#f5ede8",

                        border:"2px solid #fff"

                      }}

                      >

                        {m}

                      </div>

                    ))

                  }

                </div>

                <span

                style={{

                  fontSize:"12px",

                  color:"#9a6a8a"

                }}

                >

                  {mem.members.length}

                  {" "}family members

                </span>

              </div>

            </>

          }


          <div className="flex items-center gap-2 mt-3">

            <span

            style={{

              fontSize:"12px",

              color:mem.color,

              fontWeight:700

            }}

            >

              {

                expanded===mem.id

                ? "Show less"

                : "Read memory"

              }

            </span>

          </div>

        </div>

      </button>

    </div>

  ))}

          </div>



{/* Add memory */}

  <div
  className="px-4"
  style={{
    paddingBottom:"140px",
    marginTop:"40px"
  }}>

  <div

    className="
    rounded-3xl
    p-6
    flex
    flex-col
    items-center
    gap-3
    border-2
    border-dashed"

    style={{

      borderColor:

      "rgba(194,98,154,.25)"

    }}

  >

    <div className="flex gap-3">

      <div

      className="
      w-12
      h-12
      rounded-2xl
      flex
      items-center
      justify-center"

      style={{

        background:"#f5d0e8"

      }}

      >

        <Camera

        size={20}

        color="#c2629a"

        />

      </div>

      <div

      className="
      w-12
      h-12
      rounded-2xl
      flex
      items-center
      justify-center"

      style={{

        background:"#ead4f5"

      }}

      >

        <Video

        size={20}

        color="#9060c0"

        />

      </div>

    </div>

    <p

    style={{

      fontSize:"14px",

      fontWeight:600,

      color:"#9a6a8a"

    }}

    >

      Add a new memory

    </p>

    <button

    className="px-6 py-2.5 rounded-2xl"

    style={{

      background:

      "linear-gradient(135deg,#c2629a,#9060c0)",

      color:"#fff",

      fontSize:"13px",

      fontWeight:700

    }}

    >

      + Create Memory

    </button>

  </div>

</div>
    </div>
  );
}
