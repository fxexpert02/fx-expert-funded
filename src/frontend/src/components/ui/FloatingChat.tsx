import { MessageCircle, Send } from "lucide-react";

export default function FloatingChat() {
  const whatsappUrl =
    "https://wa.me/1234567890?text=Hello%2C%20I%27m%20interested%20in%20FX%20Expert%20Funded%20accounts";
  const telegramUrl = "https://t.me/fxexpertfunded";

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-center gap-3">
      {/* Telegram */}
      <a
        href={telegramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-12 h-12 rounded-full flex items-center justify-center bg-[#229ED9] shadow-lg hover:shadow-glow-gold hover:scale-110 transition-smooth"
        aria-label="Chat on Telegram"
        data-ocid="floating.telegram_button"
      >
        <Send className="w-5 h-5 text-white" />
        <span className="absolute right-14 bg-brand-black/90 text-white text-xs font-medium px-2.5 py-1.5 rounded-lg whitespace-nowrap border border-white/10 opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none">
          Chat on Telegram
        </span>
      </a>

      {/* WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-14 h-14 w-14 h-14 rounded-full flex items-center justify-center bg-[#25D366] shadow-lg animate-pulse-glow-green hover:scale-110 transition-smooth"
        aria-label="Chat on WhatsApp"
        data-ocid="floating.whatsapp_button"
      >
        <MessageCircle className="w-6 h-6 text-white" />
        <span className="absolute right-16 bg-brand-black/90 text-white text-xs font-medium px-2.5 py-1.5 rounded-lg whitespace-nowrap border border-white/10 opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}
