import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/app/ui/button";

export default function HomeSection() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Bienvenido a CODISCUN
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Transformando vidas a través de la educación y el apoyo comunitario. Juntos, construimos un futuro más brillante para Cancún.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-[#00BCD4] hover:bg-[#00ACC1] text-white font-semibold py-2 px-6 rounded-full transition duration-300">
                Conócenos
              </Button>
              <Button variant="outline" className="border-[#00BCD4] text-[#00BCD4] hover:bg-[#E0F7FA] font-semibold py-2 px-6 rounded-full transition duration-300">
                Donar
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <Image
              src="/images/Home.jpeg"
              alt="CODISCUN Community"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#E0F7FA] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Nuestros Programas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Educación', icon: '🎓' },
              { title: 'Salud', icon: '🏥' },
              { title: 'Medio Ambiente', icon: '🌱' },
            ].map((program) => (
              <div key={program.title} className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-4xl mb-4">{program.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{program.title}</h3>
                <p className="text-gray-600">
                  Descubre cómo estamos haciendo la diferencia en {program.title.toLowerCase()} en nuestra comunidad.
                </p>
                <Link href={`/programas/${program.title.toLowerCase()}`} className="inline-block mt-4 text-[#00BCD4] hover:underline">
                  Saber más
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

