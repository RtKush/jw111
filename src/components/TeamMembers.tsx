import { useState } from "react";
import { Instagram, Linkedin, MessageCircle } from "lucide-react";

interface Member {
  name: string;
  title: string;
  subtitle: string;
  image: string;
  about: string;
  instagram?: string;
  linkedin?: string;
  facebook?: string;
  youtube?: string;
  whatsapp?: string;
}

const teamMembers: Member[] = [
  {
    name: "Rt Kush",
    title: "Team Lead",
    subtitle: "Full-Stack Developer & Software Engineer, NIT Raipur",
    image: "/src/assets/passport.jpg",
    about:
      "Leading modern web development with scalable architecture, performance optimization, and AI-driven solutions.",
    instagram: "#",
    linkedin: "#",
  },
  {
    name: "Ashvini",
    title: "Frontend Dev",
    subtitle: "UI/UX Designer & Frontend Specialist",
    image: "/src/assets/ash.png",
    about:
      "Crafting high-performance, intuitive interfaces that seamlessly blend speed, design, and exceptional user experience.",
    instagram: "#",
    linkedin: "#",
  },
];

export default function TeamMembers() {
  const [selected, setSelected] = useState<Member | null>(null);

  return (
    <section className="bg-gradient-to-b from-background to-muted/30">
      <div className="section-container text-center">

        {/* Horizontal Cards */}
        <div className="flex justify-center gap-6 overflow-x-auto pb-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              onClick={() => setSelected(member)}
              className="min-w-[260px] h-24 flex items-center gap-4 px-5
              rounded-2xl bg-white shadow-md cursor-pointer
              transition-all duration-300
              hover:shadow-xl hover:-translate-y-1 hover:border hover:border-primary/30"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-16 h-16 rounded-full object-cover ring-2 ring-primary/20"
              />
              <div className="text-left">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selected && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white w-[90%] max-w-md rounded-3xl p-8 text-center shadow-2xl relative">

              {/* Close */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-5 text-gray-400 hover:text-black text-xl"
              >
                ✕
              </button>

              <img
                src={selected.image}
                alt={selected.name}
                className="w-28 h-28 mx-auto rounded-full object-cover mb-4 shadow-md"
              />

              <h3 className="text-2xl font-bold">{selected.name}</h3>
              <p className="text-primary font-medium">{selected.title}</p>
              <p className="text-sm text-gray-500 mb-3">{selected.subtitle}</p>

              <p className="text-gray-600 whitespace-pre-line mb-6 leading-relaxed">
                {selected.about}
              </p>

              {/* Social Icons */}
              <div className="flex justify-center gap-4">
                {selected.instagram && (
                  <a
                    href={selected.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-full bg-pink-100 hover:bg-pink-200 transition"
                  >
                    <Instagram className="w-5 h-5 text-pink-600" />
                  </a>
                )}

                {selected.linkedin && (
                  <a
                    href={selected.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-full bg-blue-100 hover:bg-blue-200 transition"
                  >
                    <Linkedin className="w-5 h-5 text-blue-600" />
                  </a>
                )}

                {selected.whatsapp && (
                  <a
                    href={selected.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-full bg-green-100 hover:bg-green-200 transition"
                  >
                    <MessageCircle className="w-5 h-5 text-green-600" />
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
