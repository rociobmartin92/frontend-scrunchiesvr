"use client";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutPage = () => {
  return (
    <div className="max-w-screen-xl w-full mx-auto p-6">
      <h1 className="text-xl font-bold text-center mb-4">Sobre Mí</h1>
      <Separator className="mb-2" />

      <div className="p-6">
        <p className="text-lg">
          ¡Hola! Soy <span className="font-semibold">Rocío</span>!.
          <br /> Soy ingeniera química y desarrolladora de software.
          <br />
          Vivo en un pequeño pueblo en la{" "}
          <span className="font-semibold">Patagonia Argentina</span>, rodeada de
          montañas, lagos y aire puro. 🌿🏔
        </p>

        <p className=" text-lg mt-4">
          En mis tiempos libres hago accesorios como una forma de despejarme de
          la tecnología con la que paso largas horas y conectar con mi lado más
          artístico.
        </p>
        <br />

        <p className=" text-lg mt-4">
          Esta tienda nació como un espacio para compartir mis creaciones con el
          mundo y también mostrar mis habilidades en el desarrollo de software.
          <br />
          <br />
          Esta web esta creada con las siguientes tecnologías:
          <br />
          <p className="font-semibold">
            ✣ Front End: <span className="text-pink-700">Next.js</span>{" "}
          </p>
          <p className="font-semibold">
            ✣ Back End: <span className="text-pink-700">Strapi </span>{" "}
          </p>
          <p className="font-semibold">
            ✣ State Managment: <span className="text-pink-700">Zustand</span>{" "}
          </p>
          <br />
          Cada pieza que hago está hecha con dedicación, cariño y un toque de la
          naturaleza que me rodea. ✨
          <br />
          <br />
          ¡Espero que encuentres algo que te encante tanto como a mí me gusta
          hacerlo! 💖
        </p>
      </div>

      <div className="flex justify-center gap-4 mt-6">
        <Button className="flex items-center gap-2">
          <ShoppingBag className="w-4 h-4" />
          Ver Productos
        </Button>
      </div>

      <Card className="mt-10">
      <h2 className="text-xl font-semibold my-4 ml-5">Contacto:</h2>

        <CardContent>
          <p className="font-semibold">
            🛄 Linkedin: <span className="font-thin">https://www.linkedin.com/in/rocio-beatriz-martin-a22a26296/</span>
          </p>
          <p className="font-semibold my-4">
            🌐 Github: <span className="font-thin">https://github.com/rociobmartin92</span>
          </p>
          <p className="font-semibold">
            📧 Email: <span className="font-thin">martinrocio.1992@gmail.com</span>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutPage;
