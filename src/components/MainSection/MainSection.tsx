import { useEffect, useState } from "react";
import { IAList } from "./IAList";
import api from "../../config/axiosInstance";
import { FaLightbulb, FaPaintBrush, FaKeyboard, FaFilePdf } from "react-icons/fa";


interface IAData {
  name: string;
  description?: string;
  image?: string;
}
interface IATransformedItem {
  name: string;
  company?: string;
  image?: string;
}

export function MainSection() {
  const [apiIAs, setApiIAs] = useState([]);
  const [mostAccessedIAs, setMostAccessedIAs] = useState<IATransformedItem[]>(
    []
  );

  useEffect(() => {
    api
      .get("/ias")
      .then((response) => {
        setApiIAs(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar a lista de IAs:", error);
      });
  }, []);

  useEffect(() => {
    if (apiIAs.length > 0) {
      setMostAccessedIAs(
        apiIAs.map((ia: IAData) => ({
          name: ia.name,
          company: ia.description,
          image: ia.image,
        }))
      );
    }
  }, [apiIAs]);

  const categories = [
    { name: "Produtividade", icon: <FaLightbulb /> },
    { name: "Geração de Imagens", icon: <FaPaintBrush /> },
    { name: "Geração de Texto", icon: <FaKeyboard /> },
    { name: "Análise de PDF", icon: <FaFilePdf /> },
    { name: "Análise de PDF", icon: <FaFilePdf /> },
  ];
  

  return (
    <section className="bg-transparent relative z-10 top-[-170px] py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md-1:grid-cols-3 gap-12">
        <IAList title="IAs Mais Acessadas" items={mostAccessedIAs} />
        <IAList title="IAs Recentes" items={mostAccessedIAs} />
        <IAList title="Categorias Mais Acessadas" items={categories} />
      </div>
    </section>
  );
}
