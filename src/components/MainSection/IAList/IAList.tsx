import { ReactNode } from "react";
import { FaArrowRight } from "react-icons/fa";

interface IAItem {
  name: string;
  company?: string;
  image?: string;
  icon?: ReactNode;
}

interface IAListProps {
  title: string;
  items: IAItem[];
}

export function IAList({ title, items }: IAListProps) {
  return (
    <div className="bg-white rounded-lg p-5 shadow-lg flex flex-col justify-between">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li
            key={index}
            className="p-4 flex items-center justify-between hover:shadow-xl transition-shadow duration-200 cursor-pointer rounded-lg"
          >
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                {item.icon ? (
                  <span className="text-2xl text-blue-600">{item.icon}</span>
                ) : item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <span className="text-lg font-bold text-blue-600">
                    {item.name[0]}
                  </span>
                )}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.name}
                </h3>
                {item.company && (
                  <p className="text-sm text-gray-500">{item.company}</p>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
      <button className="mt-4 w-full border border-gray-300 bg-transparent text-darkGray font-semibold py-2 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors">
        VER TODAS <FaArrowRight className="ml-2" />
      </button>
    </div>
  );
}
