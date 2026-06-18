import { useState } from "react";

import {
  Heart,
  Camera,
  Users,
  Sparkles,
  ArrowRight,
  Calendar,
  Quote
} from "lucide-react";

import {
  FaCakeCandles,
  FaUmbrellaBeach,
  FaUtensils
} from "react-icons/fa6";

interface YearRecapScreenProps {
  onDone: () => void;
}

const MEMORIES = [
  {
    title: "Sinh nhật mẹ",
    date: "03/06/2026",
    photo:
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=1000", 
       icon: <FaCakeCandles size={24} color="#ff7ba5" />
  },

  {
    title: "Du lịch biển",
    date: "15/05/2026",
    photo:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1000",
    icon: <FaUmbrellaBeach size={24} color="#78d4d8" />
  },

  {
    title: "Bữa cơm gia đình",
    date: "28/05/2026",
    photo:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1000",
    icon: <FaUtensils size={24} color="#f8d060" />
  }
];

const TOTAL_STEPS = 8;

export function YearRecapScreen({

  onDone

}: YearRecapScreenProps) {

  const [step, setStep] = useState(0);

  const next = () => {

    if (step < TOTAL_STEPS - 1) {

      setStep(step + 1);

    }

  };

  const skip = () => {

    onDone();

  };

  return (

    <div

      className="h-full flex flex-col"

      style={{

        background:

          "linear-gradient(160deg,#fde8d0 0%,#f5d0e8 50%,#ead4f5 100%)",

        fontFamily: "'Nunito', sans-serif"

      }}

    >

      {/* Progress */}

      <div className="px-5 pt-6">

        <div className="flex gap-1">

          {

            Array.from({ length: TOTAL_STEPS }).map((_, i) => (

              <div

                key={i}

                className="flex-1 h-1 rounded-full"

                style={{

                  background:

                    i <= step

                      ? "#c2629a"

                      : "rgba(194,98,154,.18)",

                  transition: "all .35s"

                }}

              />

            ))

          }

        </div>

      </div>



      {/* Content */}

      <div

        className="flex-1 flex items-center justify-center px-6"

        style={{

          animation:

            "fadeIn .55s ease"

        }}

      >



        {/* STORY 1 */}



        {

          step === 0 && (

            <div className="text-center">

              <p

                style={{

                  fontSize: 14,

                  fontWeight: 700,

                  letterSpacing: ".2em",

                  color: "#9a6a8a"

                }}

              >

                2026

              </p>



              <h1

                style={{

                  fontSize: 38,

                  fontWeight: 900,

                  lineHeight: 1.2,

                  marginTop: 16,

                  color: "#4a1a5e"

                }}

              >

                Một năm

                <br />

                của chúng ta

              </h1>



              <div className="flex justify-center mt-5">

                <Heart

                  size={32}

                  fill="#ff7ba5"

                  color="#ff7ba5"

                />

              </div>



              <p

                style={{

                  marginTop: 22,

                  fontSize: 16,

                  lineHeight: 1.9,

                  color: "#7a4a7a"

                }}

              >

                365 ngày

                <br />

                48 kỷ niệm

                <br />

                234 bức ảnh

                <br />

                5 thành viên

              </p>

            </div>

          )

        }




        {/* STORY 2 */}



        {

          step === 1 && (

            <div className="w-full">

              <div

                className="overflow-hidden rounded-[34px]"

                style={{

                  boxShadow:

                    "0 20px 50px rgba(194,98,154,.18)"

                }}

              >

                <img

                  src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200"

                  className="w-full h-[420px] object-cover"

                />

              </div>



              <p

                className="text-center"

                style={{

                  marginTop: 22,

                  fontSize: 16,

                  color: "#7a4a7a",

                  fontStyle: "italic"

                }}

              >

                "Cảm ơn vì đã luôn ở bên nhau"

              </p>

            </div>

          )

        }




        {/* STORY 3 */}



        {
  step === 2 && (

    <div className="grid grid-cols-1 gap-5 w-full">

      {

        [

          {
            icon:<Heart fill="#ff7ba5" color="#ff7ba5" size={30}/>,
            value:"48",
            label:"Kỷ niệm"
          },

          {
            icon:<Camera color="#9060c0" size={30}/>,
            value:"234",
            label:"Bức ảnh"
          },

          {
            icon:<Users color="#78cc99" size={30}/>,
            value:"5",
            label:"Thành viên"
          }

        ].map(item => (

          <div
            key={item.label}
            className="rounded-[30px] py-7"
            style={{
              background:"rgba(255,255,255,.75)"
            }}
          >

            <div className="flex justify-center">

              {item.icon}

            </div>

            <p
              className="text-center"
              style={{
                marginTop:12,
                fontSize:30,
                fontWeight:900,
                color:"#4a1a5e"
              }}
            >

              {item.value}

            </p>

            <p
              className="text-center"
              style={{
                color:"#9a6a8a"
              }}
            >

              {item.label}

            </p>

          </div>

        ))

      }

    </div>

  )
}




        {/* STORY 4 */}



        {

          step === 3 && (

            <div

              className="overflow-hidden rounded-[34px] bg-white"

              style={{

                boxShadow:

                  "0 20px 50px rgba(194,98,154,.18)"

              }}

            >

              <img

                src={MEMORIES[0].photo}

                className="w-full h-[300px] object-cover"

              />



              <div className="p-6">

                <div

                  className="w-14 h-14 rounded-2xl flex items-center justify-center"

                  style={{

                    background:"#fde8f0"

                  }}

                >

                  {MEMORIES[0].icon}

                </div>



                <h2

                  style={{

                    fontSize:26,

                    fontWeight:900,

                    marginTop:20,

                    color:"#4a1a5e"

                  }}

                >

                  {MEMORIES[0].title}

                </h2>



                <p

                  className="flex items-center gap-2"

                  style={{

                    marginTop:10,

                    color:"#9a6a8a"

                  }}

                >

                  <Calendar size={15}/>

                  {MEMORIES[0].date}

                </p>

              </div>

            </div>

          )
        
}
{/* STORY 5 */}

{      

step===4 && (

<div className="w-full space-y-5">

{
  MEMORIES.slice(1).map(mem => (

    <div
      key={mem.title}
      className="overflow-hidden rounded-[32px] bg-white"
      style={{
        boxShadow:
          "0 18px 40px rgba(194,98,154,.15)"
      }}
    >

      <img
        src={mem.photo}
        className="w-full h-52 object-cover"
      />

      <div className="p-5">

        <div className="flex gap-4 items-center">

          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center"
            style={{background:"#fde8f0"}}
          >

            {mem.icon}

          </div>

          <div>

            <h2
              style={{
                fontSize:20,
                fontWeight:800,
                color:"#4a1a5e"
              }}
            >

              {mem.title}

            </h2>

            <p
              className="flex items-center gap-2"
              style={{
                marginTop:6,
                fontSize:13,
                color:"#9a6a8a"
              }}
            >

              <Calendar size={14}/>

              {mem.date}

            </p>

          </div>

        </div>

      </div>

    </div>

  ))
}

</div>

)

}

{

step===5 && (

<div

className="rounded-[36px] p-8"

style={{

background:

"rgba(255,255,255,.75)",

boxShadow:

"0 20px 50px rgba(194,98,154,.15)"

}}

>

<div className="flex justify-center">

<div

className="w-16 h-16 rounded-full flex items-center justify-center"

style={{

background:"#fde8f0"

}}

>

<Quote

size={28}

color="#c2629a"

/>

</div>

</div>

<p

style={{

marginTop:30,

fontSize:19,

lineHeight:2,

textAlign:"center",

color:"#5f4361"

}}

>

Có những ngày vui.

<br/>

Có những ngày buồn.

<br/>

Có những lúc tưởng như đã xa nhau.

</p>

</div>

)

}

{

step===6 && (

<div className="text-center">

<p

style={{

fontSize:20,

lineHeight:2,

color:"#5f4361"

}}

>

Nhưng rồi mọi người vẫn ở đây,

<br/>

vẫn quan tâm,

<br/>

vẫn yêu thương

theo cách riêng của mình.

</p>


<div

style={{

width:"70%",

height:"1px",

background:"#f3d8e6",

margin:"40px auto"

}}

></div>


<p

style={{

fontSize:24,

fontWeight:900,

lineHeight:1.8,

color:"#4a1a5e"

}}

>

Hạnh phúc

<br/>

không phải điều lớn lao.

</p>

</div>

)

}

{

step===7 && (

<div className="text-center">

<div className="flex justify-center">

<Sparkles

size={42}

color="#c2629a"

/>

</div>


<h1

style={{

marginTop:25,

fontSize:36,

fontWeight:900,

lineHeight:1.5,

color:"#4a1a5e"

}}

>

Mong rằng,

<br/>

chúng ta sẽ luôn

<br/>

ở bên nhau.

</h1>


<p

style={{

marginTop:25,

fontSize:15,

lineHeight:2,

color:"#7a4a7a"

}}

>

Cảm ơn vì đã cùng nhau

<br/>

viết nên câu chuyện của năm 2026.

<br/><br/>

See you in 2027 💗

</p>

</div>

)


}

      </div>

      {/* Bottom Buttons */}

      <div className="px-6 pb-8 flex justify-between">

        <button
          onClick={skip}
          style={{
            fontSize: 14,
            fontWeight: 700,
            color: "#9a6a8a"
          }}
        >
          Skip
        </button>

        <button
          onClick={
            step === TOTAL_STEPS - 1
              ? onDone
              : next
          }
          className="px-7 py-3 rounded-3xl flex items-center gap-2"
          style={{
            background:
              "linear-gradient(135deg,#c2629a,#9060c0)",
            color: "#fff",
            fontWeight: 800
          }}
        >
          {
            step === TOTAL_STEPS - 1
              ? "Bắt đầu"
              : "Next"
          }

          <ArrowRight size={18} />

        </button>

      </div>

    </div>
  );

}