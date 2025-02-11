import Link from "next/link";

const Footer = () => {
    return (
      <footer className=" mt-4">
        <div className="w-full max-w-screen-xl mx-auto p-6 md:py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            
            {/* store information */}
            <div>
              <h2 className="text-lg font-bold text-pink-700">Scrunchies<span className="font-bold">VR</span></h2>
              <p className="mt-2 text-sm">Tu tienda de accesorios para el cabello con estilo y tendencia.</p>
              <p className="text-sm mt-1">📍 Región: Argentina</p>
            </div>
  
            {/* navigation */}
            <div>
              <h3 className="text-md font-semibold text-pink-700">Enlaces</h3>
              <ul className="mt-2 space-y-2">
                <li><Link href="/accesorios" className="hover:text-pink-500">Accesorios</Link></li>
                <li><Link href="/sobre-nosotros" className="hover:text-pink-500">Sobre Nosotros</Link></li>
                <li><Link href="/novedades" className="hover:text-pink-500">Novedades</Link></li>
              </ul>
            </div>
  
            {/* social media */}
            <div>
              <h3 className="text-md font-semibold text-pink-700">Síguenos</h3>
              <div className="flex justify-center md:justify-start gap-4 mt-2">
                <Link href="#" className="hover:text-pink-500">📸 Instagram</Link>
                <Link href="#" className="hover:text-pink-500">📘 Facebook</Link>
                <Link href="#" className="hover:text-pink-500">🐦 Twitter</Link>
              </div>
            </div>
          </div>
  
          {/* Línea separadora */}
          <div className="border-t border-gray-300 my-6"></div>
  

          <p className="text-center text-sm">
            &copy; {new Date().getFullYear()} ScrunchiesVR - Todos los derechos reservados.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  