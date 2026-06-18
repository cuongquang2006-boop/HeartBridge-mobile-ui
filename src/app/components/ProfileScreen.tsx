import { useState } from "react";

import {
  ChevronRight,
  Heart,
  LogOut,
  CircleUser
} from "lucide-react";

import {
  RiShieldCheckFill,
  RiNotification3Fill,
} from "react-icons/ri";

import {
  FaLanguage,
  FaFireFlameCurved,
} from "react-icons/fa6";

import {
  MdEdit,
} from "react-icons/md";

import {
  FaFaceSmileBeam,
  FaFaceLaughBeam,
  FaFaceSadCry,
  FaFaceGrinHearts,
  FaMoon,
} from "react-icons/fa6";

const MOOD_HISTORY = [
  {
    day: "Mon",
    icon: <FaFaceSmileBeam size={18} color="#f8d060" />,
    color: "#f8d060",
  },

  {
    day: "Tue",
    icon: <FaFaceLaughBeam size={18} color="#78cc99" />,
    color: "#78cc99",
  },

  {
    day: "Wed",
    icon: <FaFaceSadCry size={18} color="#f0a0c0" />,
    color: "#f0a0c0",
  },

  {
    day: "Thu",
    icon: <FaFaceLaughBeam size={18} color="#78cc99" />,
    color: "#78cc99",
  },

  {
    day: "Fri",
    icon: <FaFaceSmileBeam size={18} color="#f8d060" />,
    color: "#f8d060",
  },

  {
    day: "Sat",
    icon: <FaFaceGrinHearts size={18} color="#c8a0e8" />,
    color: "#c8a0e8",
  },

  {
    day: "Sun",
    icon: <FaMoon size={16} color="#8890c0" />,
    color: "#8890c0",
  },
];

const LANGUAGES = [
  { code: "vi", label: "Vietnamese", flag: "🇻🇳" },
  { code: "ar", label: "Arabic", flag: "🇸🇦" },
  { code: "en", label: "English", flag: "us" }
];

export function ProfileScreen({
  onLogout,
}: {
  onLogout: () => void;
}) {

  const [selectedLang, setSelectedLang] = useState("vi");

  const [notifOn, setNotifOn] = useState(true);

  const [showLangPicker, setShowLangPicker] = useState(false);

  return (

    <div
    className="flex flex-col min-h-full"
    style={{
    background:"#fdf6f0",
    fontFamily:"'Nunito', sans-serif"
    }}
    >

      {/* Header */}

      <div
        className="px-5 pt-14 pb-6 flex flex-col items-center"
        style={{
          background:
            "linear-gradient(160deg,#f5d0e8 0%,#ead4f5 50%,#fde8d0 100%)",
        }}
      >

        {/* Avatar */}

        <div className="relative mb-3">

          <div
            className="
            w-24
            h-24
            rounded-3xl
            flex
            items-center
            justify-center
            text-5xl
          "
            style={{
              background: "rgba(255,255,255,.7)",
              boxShadow:
                "0 4px 20px rgba(194,98,154,.2)",
            }}
          >

            <CircleUser
            size={54}
            color="#c2629a"
            strokeWidth={1.8}
            />

          </div>

          <button
            className="
            absolute
            -bottom-1
            -right-1
            w-8
            h-8
            rounded-full
            flex
            items-center
            justify-center
          "
            style={{
              background:
                "linear-gradient(135deg,#c2629a,#9060c0)",
            }}
          >

            <MdEdit
              size={16}
              color="#fff"
            />

          </button>

        </div>

        <h1
          style={{
            fontSize: "20px",
            fontWeight: 800,
            color: "#4a1a5e",
          }}
        >

          Trần Thị Diệu

        </h1>

        <div
          className="
          flex
          items-center
          gap-2
          mt-1
        "
        >

          <span
            className="
            px-3
            py-1
            rounded-full
          "
            style={{
              background:
                "rgba(255,255,255,.6)",

              fontSize: "12px",

              fontWeight: 600,

              color: "#c2629a",
            }}
          >

             Mẹ · Gia đình vui vẻ

          </span>

        </div>

        {/* Mood streak */}

        <div
          className="
          flex
          items-center
          gap-2
          mt-3
          px-4
          py-2
          rounded-2xl
        "
          style={{
            background:
              "rgba(255,255,255,.5)",
          }}
        >

          <FaFireFlameCurved
            size={16}
            color="#ff8f3f"
          />

          <span
            style={{
              fontSize: "13px",

              fontWeight: 700,

              color: "#c2629a",
            }}
          >

            Chuỗi cập nhật tâm trạng trong 7 ngày

          </span>

        </div>

      </div>

      {/* Body */}

      <div
        className="
        px-4
        py-4
        space-y-4
        pb-28
      "
      >

        {/* Mood history */}

        <div
          className="
          rounded-3xl
          p-5
          shadow-sm
        "
          style={{
            background: "#fff",
          }}
        >

          <p
            style={{
              fontSize: "12px",

              fontWeight: 700,

              color: "#9a6a8a",

              letterSpacing: ".06em",

              textTransform: "uppercase",

              marginBottom: "14px",
            }}
          >

            Tâm trạng tuần này

          </p>

          <div className="flex justify-between">

            {

              MOOD_HISTORY.map(m => (

                <div

                  key={m.day}

                  className="
                flex
                flex-col
                items-center
                gap-1"

                >

                  <div

                    className="
                  w-10
                  h-10
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  text-xl"

                    style={{

                      background:

                        `${m.color}33`,

                      border:

                        `1.5px solid ${m.color}66`

                    }}

                  >

                   {m.icon}

                  </div>

                  <span

                    style={{

                      fontSize: "10px",

                      color: "#9a6a8a",

                      fontWeight: 600

                    }}

                  >

                    {m.day}

                  </span>

                </div>

              ))

            }

          </div>

          <div

            className="
          flex
          items-center
          gap-2
          mt-4
          px-4
          py-3
          rounded-2xl"

            style={{

              background:

                "linear-gradient(135deg,#f0e8fd,#fde8f0)"

            }}

          >

            ✨

            <p

              style={{

                fontSize: "12px",

                color: "#7a4a7a",

                fontStyle: "italic"

              }}

            >

              Tuần này, cảm xúc của bạn chủ yếu là bình yên và hạnh phúc. Phát huy nhé

            </p>

          </div>

        </div>


        {/* Privacy */}

        <div

          className="
          rounded-3xl
          p-5
          shadow-sm"

          style={{

            background:"#fff"

          }}

        >

          <p

          style={{

            fontSize:"12px",

            fontWeight:700,

            color:"#9a6a8a",

            letterSpacing:".06em",

            textTransform:"uppercase",

            marginBottom:"14px"

          }}

          >

             Riêng tư

          </p>

          <div className="space-y-4">

            {[

              {

                label:"Hiển thị tâm trạng",

                value:"Người thân",

                icon:

                <Heart

                size={16}

                color="#c2629a"

                />

              },

              {

                label:"Lịch sử cảm xúc",

                value:"Mỗi ngày",

                icon:

                <RiShieldCheckFill

                size={18}

                color="#9060c0"

                />

              }

            ].map(item=>(

              <div

              key={item.label}

              className="flex items-center justify-between"

              >

                <div className="flex items-center gap-3">

                  <div

                  className="w-8 h-8 rounded-xl flex items-center justify-center"

                  style={{background:"#f5ede8"}}

                  >

                    {item.icon}

                  </div>

                  <span

                  style={{

                    fontSize:"14px",

                    fontWeight:600,

                    color:"#4a1a5e"

                  }}

                  >

                    {item.label}

                  </span>

                </div>

                <div className="flex items-center gap-1">

                  <span

                  style={{

                    fontSize:"12px",

                    color:"#9a6a8a"

                  }}

                  >

                    {item.value}

                  </span>

                  <ChevronRight

                  size={14}

                  color="#c8a8b8"

                  />

                </div>

              </div>

            ))}

          </div>

        </div>


        {/* Notifications */}

        <div

        className="rounded-3xl p-5 shadow-sm"

        style={{background:"#fff"}}

        >

          <p

          style={{

            fontSize:"12px",

            fontWeight:700,

            color:"#9a6a8a",

            letterSpacing:".06em",

            textTransform:"uppercase",

            marginBottom:"14px"

          }}

          >

             Thông báo

          </p>

          <div className="space-y-4">

          {[

            {

              label:"Cập nhật về tâm trạng gia đình",

              desc:"Khi các thành viên chia sẻ tâm trạng",

              on:notifOn,

              toggle:()=>setNotifOn(!notifOn)

            },

            {

              label:"Chia sẻ hôm nay",

              desc:"Lời nhắc nhẹ nhàng lúc 20:00",

              on:true,

              toggle:()=>{}

            },

            {

              label:"Những sự kiện gia đình",

              desc:"Lời nhắc hẹn",

              on:true,

              toggle:()=>{}

            }

          ].map(item=>(

            <div

            key={item.label}

            className="flex items-center justify-between"

            >

              <div className="flex items-center gap-3">

                <div

                className="w-8 h-8 rounded-xl flex items-center justify-center"

                style={{background:"#f5ede8"}}

                >

                  <RiNotification3Fill

                  size={18}

                  color="#c2629a"

                  />

                </div>

                <div>

                  <p style={{fontSize:"13px",fontWeight:600,color:"#4a1a5e"}}>

                    {item.label}

                  </p>

                  <p style={{fontSize:"11px",color:"#9a6a8a"}}>

                    {item.desc}

                  </p>

                </div>

              </div>

            </div>

          ))}

          </div>

        </div>


        {/* Language */}

        <div className="rounded-3xl p-5 shadow-sm" style={{background:"#fff"}}>

          <button

          onClick={()=>setShowLangPicker(!showLangPicker)}

          className="w-full flex items-center justify-between"

          >

            <div className="flex items-center gap-3">

              <div

              className="w-8 h-8 rounded-xl flex items-center justify-center"

              style={{background:"#f5ede8"}}

              >

                <FaLanguage

                size={18}

                color="#c2629a"

                />

              </div>

              <div className="text-left">

                <p style={{fontSize:"13px",fontWeight:700,color:"#9a6a8a"}}>

                  Chọn ngôn ngữ

                </p>

                <p style={{fontSize:"14px",fontWeight:600,color:"#4a1a5e"}}>

                  {

                    LANGUAGES.find(

                      l=>l.code===selectedLang

                    )?.flag

                  }

                  {" "}

                  {

                    LANGUAGES.find(

                      l=>l.code===selectedLang

                    )?.label

                  }

                </p>

              </div>

            </div>

            <ChevronRight

            size={16}

            color="#c8a8b8"

            />

          </button>

        </div>


        {/* Logout */}

        <button

        onClick={onLogout}

        className="
        w-full
        py-4
        rounded-3xl
        flex
        items-center
        justify-center
        gap-2"

        style={{

          background:"#fde8f0",

          color:"#c2629a",

          fontSize:"15px",

          fontWeight:700

        }}

        >

          <LogOut size={18}/>

          Đăng xuất

        </button>

      </div>

    </div>

  );

}