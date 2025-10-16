import { useEffect, useState } from "react";

export default function Card({tipo}) {

    const API_URL = import.meta.env.VITE_API_URL

    const [eletronics, setEletronics] = useState([])
    const [jewelery, setJewelery] = useState([])
    const [clothing, setClothing] = useState([])


    useEffect(() => {
        fetch(`${API_URL}/category/electronics`)
        .then((response) => response.json())
        .then((data) => {
            setEletronics(data);
        })
        .catch((error) => {
            console.error("Erro ao buscar produtos:", error);
        })

        fetch(`${API_URL}/category/jewelery`)
        .then((response) => response.json())
        .then((data) => {
            setJewelery(data);
        })
        .catch((error) => {
            console.error("Erro ao buscar produtos:", error);
         })

        fetch(`${API_URL}/category/men's clothing`)
        .then((response) => response.json())
        .then((data) => {
            setClothing(data);
        })
        .catch((error) => {
            console.error("Erro ao buscar produtos:", error);
        })
}, [API_URL])

    return (
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {eletronics.map(eletronics => (
        <div key={eletronics.id} className="bg-white p-4 rounded shadow">
          <img src={eletronics.image} className="w-16 h-16 rounded-full mb-4" />
            <h2 className="text-xl font-bold mb-2">{eletronics.title}</h2>
            <h2 className="text-xl font-bold mb-2">{eletronics.category}</h2>
            <p className="text-gray-800 mb-2">R$ {eletronics.price}</p>
        </div>
      ))}
    </div>
    );
}