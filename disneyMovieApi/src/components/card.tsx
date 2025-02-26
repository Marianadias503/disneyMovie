import imgCard from '../assets/imgcard.png';

export default function Card() {
  return (
    <div className="grid grid-cols-3 gap-4 m-10 p-10 justify-items-center h-auto mb-0 mt-0" >
      {/* Card 1 */}
      <div className="flex flex-col items-center p-4 border border-gray-300 rounded-lg ">
        <img src={imgCard} alt="divertidamente" className="w-28 mb-4" />
        <button className="bg-blue-500 text-white  p-1 rounded-lg">Divertidamente </button>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col items-center p-4 border border-gray-300 rounded-lg">
        <img src={imgCard} alt="divertidamente" className="w-28 mb-4" />
        <button className="bg-blue-500 text-white  p-1 rounded-lg">Divertidamente</button>
      </div>

      {/* Card 3 */}
      <div className="flex flex-col items-center p-4 border border-gray-300 rounded-lg">
        <img src={imgCard} alt="divertidamente" className="w-28 mb-4" />
        <button className="bg-blue-500 text-white p-1 rounded-lg">Divertidamente</button>
      </div>

      {/* Card 4 */}
      <div className="flex flex-col items-center p-4 border border-gray-300 rounded-lg">
        <img src={imgCard} alt="divertidamente" className="w-28 mb-4" />
        <button className="bg-blue-500 text-white  p-1rounded-lg">Divertidamente</button>
      </div>

      {/* Card 5 */}
      <div className="flex flex-col items-center p-4 border border-gray-300 rounded-lg">
        <img src={imgCard} alt="divertidamente" className="w-28 mb-4" />
        <button className="bg-blue-500 text-white  p-1 rounded-lg">Divertidamente</button>
      </div>

      {/* Card 6 */}
      <div className="flex flex-col items-center p-4 border border-gray-300 rounded-lg">
        <img src={imgCard} alt="divertidamente" className="w-28 mb-4" />
        <button className="bg-blue-500 text-white p p-1 rounded-lg">Divertidamente</button>
      </div>
    </div>
  );
}
