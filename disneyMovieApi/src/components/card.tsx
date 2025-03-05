import { useNavigate } from "react-router-dom";

type CardProps = {
  id: string;
  title: string;
  image: string;
};

export default function Card({ id, title, image }: CardProps) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center p-10 w-full">
      <div className="border border-gray-300 rounded-lg shadow-md overflow-hidden h-64"> {/* Altura fixa para os cards */}
        <img 
          src={image} 
          alt={title} 
          className="w-full h-40 object-cover mb-4" 
        />
        <div className="p-2">
          <button 
            className="bg-blue-500 text-white p-2 rounded-lg w-full hover:bg-blue-600 transition"
            onClick={() => navigate(`/details/${id}`)}
          >
            {title}
          </button>
        </div>
      </div>
    </div>
  );
}
