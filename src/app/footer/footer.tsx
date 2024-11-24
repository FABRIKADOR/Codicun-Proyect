import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#00BCD4] text-white py-8">
      <div className="container mx-auto px-4">
        {/* Diseño para Desktop y Tablets Grandes */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center lg:text-left">
          {/* Logo */}
          <div className="flex flex-col items-center lg:items-start">
            <Image
              src="/images/codiscun.png"
              alt="CODISCUN Logo"
              width={150}
              height={150}
              className="rounded-full mx-auto lg:mx-0"
            />
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="text-xl lg:text-2xl font-bold mb-4">Contáctanos</h2>
            <div className="flex items-start gap-2 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 mt-1"
              >
                <path
                  fillRule="evenodd"
                  d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
              <Link
                href="https://www.google.com/maps/place/Calle+Ponce+El+Pobre+63,+Cancún"
                target="_blank"
                className="text-sm hover:underline"
              >
                Calle Ponce El Pobre 63<br />
                Fraccionamiento Villas Del Mar 1<br />
                Cancún Quintana Roo
              </Link>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              <a
                href="mailto:Codiscun@gmail.com"
                className="text-sm hover:underline"
              >
                Codiscun@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>
              <a href="tel:+529981975159" className="text-sm hover:underline">
                99-81-97-51-59
              </a>
            </div>
          </div>

          {/* Redes Sociales */}
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="text-xl lg:text-2xl font-bold mb-4">Síguenos en</h2>
            <div className="grid grid-cols-6 gap-x-[10px] gap-y-6">
              {[
                { name: "Facebook", icon: "/images/facebook.png" },
                { name: "Instagram", icon: "/images/logotipo-de-instagram.png" },
                { name: "Twitter", icon: "/images/medios-de-comunicacion-social.png" },
                { name: "TikTok", icon: "/images/tik-tok.png" },
                { name: "Youtube", icon: "/images/youtube.png" },
                { name: "Spotify", icon: "/images/spotify.png" },
              ].map((social) => (
                <div key={social.name} className="flex flex-col items-center">
                  <Link href="#" className="hover:opacity-80 transition-opacity">
                    <Image
                      src={social.icon}
                      alt={social.name}
                      width={35}
                      height={35}
                      className="w-[35px] h-[35px]"
                    />
                  </Link>
                  <span className="text-[8px] mt-2 mx-5">CODISCUN</span>
                </div>
              ))}
            </div>
          </div>

          {/* About Links */}
          <div className="flex flex-col items-center lg:items-center">
            <h2 className="text-xl lg:text-2xl font-bold mb-4">Acerca de</h2>
            <Link
              href="/aviso-de-privacidad"
              className="text-sm hover:underline underline mb-2"
            >
              Aviso de Privacidad
            </Link>
            <Link
              href="/terminos-y-condiciones"
              className="text-sm hover:underline underline"
            >
              Términos y Condiciones
            </Link>
          </div>
        </div>

        {/* Footer para Mobile */}
        <div className="md:hidden grid grid-cols-1 gap-6 text-center mt-8">
          <div>
            <Image
              src="/images/codiscun.png"
              alt="CODISCUN Logo"
              width={120}
              height={120}
              className="mx-auto rounded-full"
            />
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">Contáctanos</h2>
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
                <Link
                  href="https://www.google.com/maps/place/Calle+Ponce+El+Pobre+63,+Cancún"
                  target="_blank"
                  className="text-sm hover:underline"
                >
                  Calle Ponce El Pobre 63<br />
                  Fraccionamiento Villas Del Mar 1<br />
                  Cancún Quintana Roo
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                <a
                  href="mailto:Codiscun@gmail.com"
                  className="text-sm hover:underline"
                >
                  Codiscun@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                  />
                </svg>
                <a href="tel:+529981975159" className="text-sm hover:underline">
                  99-81-97-51-59
                </a>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Síguenos en</h2>
            <div className="grid grid-cols-3 gap-4">
              {[
                { name: "Facebook", icon: "/images/facebook.png" },
                { name: "Instagram", icon: "/images/logotipo-de-instagram.png" },
                { name: "Twitter", icon: "/images/medios-de-comunicacion-social.png" },
                { name: "TikTok", icon: "/images/tik-tok.png" },
                { name: "Youtube", icon: "/images/youtube.png" },
                { name: "Spotify", icon: "/images/spotify.png" },
              ].map((social) => (
                <Link key={social.name} href="#">
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={35}
                    height={35}
                    className="mx-auto"
                  />
                </Link>
              ))}
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-xl font-bold mb-4">Acerca de</h2>
            <Link
              href="/aviso-de-privacidad"
              className="block text-sm hover:underline underline mb-2"
            >
              Aviso de Privacidad
            </Link>
            <Link
              href="/terminos-y-condiciones"
              className="block text-sm hover:underline underline"
            >
              Términos y Condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
