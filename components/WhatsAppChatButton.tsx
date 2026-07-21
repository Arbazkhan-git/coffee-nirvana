export default function WhatsAppChatButton() {
  return (
<div className="fixed bottom-[78px] right-4 z-[60] hidden md:block">
      <a
        href="https://wa.me/919482669139?text=Hi%20Coffee%20Nirvana%2C%20I%27d%20like%20to%20know%20more%20about%20your%20stay%20options."
        target="_blank"
        rel="noreferrer"
        className="group inline-flex items-center gap-2 rounded-full bg-[#25D366] px-3.5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_28px_-12px_rgba(0,0,0,0.45)] transition duration-200 hover:-translate-y-0.5 hover:brightness-110"
        aria-label="Chat on WhatsApp with Coffee Nirvana"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white">
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-4.5 w-4.5">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.1-.472-.149-.672.15-.198.297-.768.967-.94 1.165-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.173.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.672-1.611-.92-2.206-.242-.579-.487-.5-.672-.51l-.573-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.72 2.006-1.415.248-.695.248-1.29.173-1.414-.074-.124-.273-.198-.57-.347z" />
            <path d="M20.52 3.48C18.614 1.574 16.092.5 13.423.5 6.697.5.995 6.2.995 12.926c0 2.144.56 4.214 1.624 6.045L.5 23.5l4.878-1.27c1.746.957 3.78 1.455 5.965 1.455 6.726 0 12.428-5.7 12.428-12.427 0-2.684-1.074-5.206-2.871-7.258zM13.423 21.287c-2.02 0-3.99-.54-5.718-1.559l-.407-.242-2.91.756.777-2.842-.264-.46a9.733 9.733 0 01-1.526-5.38c0-5.315 4.314-9.63 9.63-9.63 2.57 0 4.986.999 6.796 2.811a9.53 9.53 0 012.802 6.81c0 5.312-4.314 9.628-9.63 9.628z" />
          </svg>
        </span>
        <span className="pr-1">WhatsApp</span>
      </a>
    </div>
  );
}
