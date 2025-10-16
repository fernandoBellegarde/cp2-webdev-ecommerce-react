import { useEffect, useState } from "react";

export default function Card() {

    const API_URL = import.meta.env.VITE_API_URL

    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        fetch(`${API_URL}/products`)
        .then((response) => response.json())
        .then((data) => {
            setProdutos(data);
        })
        .catch((error) => {
            console.error("Erro ao buscar produtos:", error);
        }, [API_URL])
})
    return (
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {produtos.map(prod => (
        <div key={prod.id} className="bg-white p-4 rounded shadow">
          <img src={prod.image} className="w-16 h-16 rounded-full mb-4" />
            <h2 className="text-xl font-bold mb-2">{prod.title}</h2>
            <p className="text-gray-800 mb-2">R$ {prod.price}</p>
        </div>
      ))}
    </div>
    );
}