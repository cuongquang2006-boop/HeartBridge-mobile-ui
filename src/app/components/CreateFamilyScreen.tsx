import { useState } from "react";
import { Plus, Link, Hash, Copy, ChevronRight, Check, ArrowLeft } from "lucide-react";

interface Member {
  id: number;
  name: string;
  role: string;
  icon: React.ReactNode;
  color: string;
}

import {
  House,
  HeartHandshake,
  Home,
  UsersRound,
  Heart,
  Baby,
  Trees,
  Stars
} from "lucide-react";


const ROLES = [

{
label:"Ông",
icon:<Trees size={18}/>,
color:"#f0a860"
},

{
label:"Bà",
icon:<Heart size={18} fill="#e89878"/>,
color:"#e89878"
},

{
label:"Cha",
icon:<House size={18}/>,
color:"#7aade8"
},

{
label:"Mẹ",
icon:<HeartHandshake size={18}/>,
color:"#e87aaa"
},

{
label:"Con trai",
icon:<Baby size={18}/>,
color:"#78cca0"
},

{
label:"Con gái",
icon:<Stars size={18}/>,
color:"#c87ad8"
}

];



const FAMILY_AVATARS = [

{
id:"house",
icon:<House size={24} color="#c2629a"/>
},

{
id:"handshake",
icon:<HeartHandshake size={24} color="#9060c0"/>
},

{
id:"home",
icon:<Home size={24} color="#78cc99"/>
},

{
id:"family",
icon:<UsersRound size={24} color="#e87aaa"/>
},

{
id:"heart",
icon:<Heart size={24} color="#ff7ba5" fill="#ff7ba5"/>
},

{
id:"baby",
icon:<Baby size={24} color="#f0a860"/>
},

{
id:"tree",
icon:<Trees size={24} color="#78cc99"/>
},

{
id:"star",
icon:<Stars size={24} color="#c2629a"/>
}

];

interface Props {
  onDone: () => void;
  onBack: () => void;
}

export function CreateFamilyScreen({ onDone, onBack }: Props) {
  const [familyName, setFamilyName] = useState("Gia đình vui vẻ");
  const [selectedAvatar, setSelectedAvatar] = useState("🌸");
  const [members, setMembers] = useState<Member[]>([
  {
  id:1,
  name:"Nguyễn Văn Bình",
  role:"Cha",
  icon:<House size={20}/>,
  color:"#7aade8"
  },

  {
  id:2,
  name:"Trần Thị Diệu",
  role:"Mẹ",
  icon:<HeartHandshake size={20}/>,
  color:"#e87aaa"
  }

  ]);
  const [showInvite, setShowInvite] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [inviteTab, setInviteTab] = useState<"email" | "link" | "code">("link");
  const [inviteEmail, setInviteEmail] = useState("");

  const familyCode = "HB-7X4K9";

  const handleCopyCode = () => {
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#fdf6f0", fontFamily: "'Nunito', sans-serif"}}>
      {/* Header */}
      <div className="px-5 pt-14 pb-4 flex items-center gap-3" style={{ background: "linear-gradient(160deg, #f5d0e8 0%, #ead4f5 60%, #fde8d0 100%)" }}>
        <button onClick={onBack} className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.6)" }}>
          <ArrowLeft size={18} color="#7a4a7a" />
        </button>
        <div>
          <h1 style={{ fontSize: "20px", fontWeight: 700, color: "#4a1a5e" }}>Tạo không gian cho gia đình</h1>
          <p style={{ fontSize: "13px", color: "#9a6a8a" }}>Xây dựng không gian cảm xúc riêng.</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-5 space-y-5">
        {/* Family identity */}
        <div className="rounded-3xl p-5 shadow-sm" style={{ background: "#fff" }}>
          <p style={{ fontSize: "13px", fontWeight: 700, color: "#9a6a8a", letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: "14px" }}>Icon gia đình</p>

          {/* Avatar picker */}
          <div className="flex gap-2 flex-wrap mb-4">
            {FAMILY_AVATARS.map(a => (

            <button

            key={a.id}

            onClick={() => setSelectedAvatar(a.id)}

            className="w-11 h-11 rounded-2xl flex items-center justify-center transition-all"

            style={{

            background:

            selectedAvatar===a.id

            ? "linear-gradient(135deg,#f5d0e8,#ead4f5)"

            : "#f5ede8",

            border:

            selectedAvatar===a.id

            ? "2px solid #c2629a"

            : "2px solid transparent",

            transform:

            selectedAvatar===a.id

            ? "scale(1.1)"

            : "scale(1)"

            }}

            >

            {a.icon}

            </button>

))}

          </div>

          <input
            value={familyName}
            onChange={e => setFamilyName(e.target.value)}
            className="w-full px-4 py-3 rounded-2xl outline-none"
            style={{ background: "#fdf0f5", fontSize: "16px", fontWeight: 600, color: "#4a1a5e", border: "1.5px solid rgba(194,98,154,0.2)" }}
            placeholder="Tên của gia đình"
          />
        </div>

        {/* Members */}
        <div className="rounded-3xl p-5 shadow-sm" style={{ background: "#fff" }}>
          <div className="flex items-center justify-between mb-4">
            <p style={{ fontSize: "13px", fontWeight: 700, color: "#9a6a8a", letterSpacing: "0.04em", textTransform: "uppercase" }}>Thành viên trong gia đình</p>
            <span style={{ fontSize: "12px", color: "#c2629a", fontWeight: 600 }}>{members.length} thành viên</span>
          </div>

          <div className="space-y-3">
            {members.map(m => (
              <div key={m.id} className="flex items-center gap-3 px-4 py-3 rounded-2xl" style={{ background: "#fdf6f0" }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl" style={{ background: `${m.color}22` }}>
                  {m.icon}
                </div>
                <div className="flex-1">
                  <p style={{ fontSize: "14px", fontWeight: 700, color: "#4a1a5e" }}>{m.name}</p>
                  <p style={{ fontSize: "12px", color: "#9a6a8a" }}>{m.role}</p>
                </div>
                <div className="w-2 h-2 rounded-full" style={{ background: "#78d4a0" }} />
              </div>
            ))}
          </div>

          {/* Role picker hint */}
          <div className="flex gap-2 flex-wrap mt-4">
            {ROLES.map(r => (
              <button
                key={r.label}
                className="flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs"
                style={{ background: `${r.color}22`, color: r.color, fontWeight: 600 }}
              >
                {r.icon} {r.label}
              </button>
            ))}
          </div>
        </div>

        {/* Invite */}
        <div className="rounded-3xl p-5 shadow-sm" style={{ background: "#fff" }}>
          <div className="flex items-center justify-between mb-4">
            <p style={{ fontSize: "13px", fontWeight: 700, color: "#9a6a8a", letterSpacing: "0.04em", textTransform: "uppercase" }}>Thêm thành viên</p>
            <button onClick={() => setShowInvite(!showInvite)} style={{ fontSize: "12px", color: "#c2629a", fontWeight: 700 }}>
              {showInvite ? "Ẩn" : "Lựa chọn"}
            </button>
          </div>

          {showInvite && (
            <>
              {/* Tabs */}
              <div className="flex gap-2 mb-4">
                {(["link", "email", "code"] as const).map(t => (
                  <button
                    key={t}
                    onClick={() => setInviteTab(t)}
                    className="flex-1 py-2 rounded-xl text-sm capitalize"
                    style={{
                      background: inviteTab === t ? "linear-gradient(135deg, #c2629a, #9060c0)" : "#f5ede8",
                      color: inviteTab === t ? "#fff" : "#9a6a8a",
                      fontWeight: 600,
                      fontFamily: "'Nunito', sans-serif"
                    }}
                  >
                    {t === "link" && <span>🔗 </span>}
                    {t === "email" && <span>✉️ </span>}
                    {t === "code" && <span># </span>}
                    {t}
                  </button>
                ))}
              </div>

              {inviteTab === "link" && (
                <div className="flex items-center gap-2 px-4 py-3 rounded-2xl" style={{ background: "#f5ede8" }}>
                  <span style={{ fontSize: "13px", color: "#7a4a7a", flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>heartbridge.app/join/ABC123</span>
                  <button className="px-3 py-1.5 rounded-xl flex items-center gap-1" style={{ background: "#c2629a", color: "#fff", fontSize: "12px", fontWeight: 700 }}>
                    <Copy size={12} /> Copy
                  </button>
                </div>
              )}

              {inviteTab === "email" && (
                <div className="flex gap-2">
                  <input
                    value={inviteEmail}
                    onChange={e => setInviteEmail(e.target.value)}
                    placeholder="family@email.com"
                    className="flex-1 px-4 py-3 rounded-2xl outline-none"
                    style={{ background: "#f5ede8", fontSize: "14px", color: "#4a1a5e" }}
                  />
                  <button className="px-4 rounded-2xl" style={{ background: "linear-gradient(135deg, #c2629a, #9060c0)", color: "#fff", fontWeight: 700, fontSize: "13px", fontFamily: "'Nunito', sans-serif" }}>
                    Send
                  </button>
                </div>
              )}

              {inviteTab === "code" && (
                <div className="text-center">
                  <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl mb-2" style={{ background: "linear-gradient(135deg, #f5d0e8, #ead4f5)" }}>
                    <span style={{ fontSize: "28px", fontWeight: 800, color: "#4a1a5e", letterSpacing: "0.12em", fontFamily: "monospace" }}>{familyCode}</span>
                  </div>
                  <br />
                  <button
                    onClick={handleCopyCode}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl"
                    style={{ background: copiedCode ? "#78cc99" : "#c2629a", color: "#fff", fontSize: "13px", fontWeight: 700 }}
                  >
                    {copiedCode ? <Check size={14} /> : <Copy size={14} />}
                    {copiedCode ? "Copied!" : "Copy Code"}
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* CTA */}
      <div className="px-5 pb-10 pt-4">
        <button
          onClick={onDone}
          className="w-full py-4 rounded-3xl flex items-center justify-center gap-2 transition-all active:scale-98"
          style={{ background: "linear-gradient(135deg, #c2629a 0%, #9060c0 100%)", color: "#fff", fontSize: "17px", fontWeight: 800, fontFamily: "'Nunito', sans-serif", boxShadow: "0 8px 24px rgba(194,98,154,0.35)" }}
        >
           Tạo nhóm gia đình
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
