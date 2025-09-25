


import { Phone, Mail, Linkedin, Instagram, Github ,Youtube} from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="px-4 w-full min-w-[300px] md:w-[600px] sm:w-2/3 p-6 text-center">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>

        <div className="space-y-6">
          {/* Phone */}
          <a
            href="tel:+2519123342864"
            className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-lg px-6 py-4 text-white hover:bg-blue-500/10 transition"
          >
            <Phone className="w-6 h-6 text-blue-400" />
            <span className="text-lg">+251 912342864</span>
          </a>

          {/* Email */}
          <a
            href="mailto:beselamu.demissie@gmail.com"
            className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-lg px-6 py-4 text-white hover:bg-blue-500/10 transition"
          >
            <Mail className="w-6 h-6 text-red-400" />
            <span className="text-lg">beselamu.demissie@gmail.com</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/beselamu-demissie-591a37117/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-lg px-6 py-4 text-white hover:bg-blue-500/10 transition"
          >
            <Linkedin className="w-6 h-6 text-blue-500" />
            <span className="text-lg">linkedin.com/in/beselamu-demissie-591a37117/</span>
          </a>

          {/* Instagram */}
          {/* <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-lg px-6 py-4 text-white hover:bg-blue-500/10 transition"
          >
            <Instagram className="w-6 h-6 text-pink-500" />
            <span className="text-lg">@beselamu</span>
          </a> */}

          {/* GitHub */}
          <a
            href="https://youtube.com/@beselamudemissieofficial1090"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-lg px-6 py-4 text-white hover:bg-blue-500/10 transition"
          >
            <Youtube className="w-6 h-6 text-gray-300" />
            <span className="text-lg">@beselamudemissieofficial1090</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
