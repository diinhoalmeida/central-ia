import { FaUser, FaCog, FaStar, FaSignOutAlt } from "react-icons/fa";
import { useAppContext } from "../../../context/AppContext";

interface UserMenuProps {
  onClose: () => void;
}

export function UserMenu({ onClose }: UserMenuProps) {
  const { handleLogout } = useAppContext(); 

  const handleLogoutClick = () => {
    handleLogout();
    onClose();
  };

  return (
    <div className="absolute right-0 mt-2 w-72 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
      <ul className="p-3">
        <li
          className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
          onClick={onClose}
        >
          <FaUser className="mr-2" />
          Minha Central IA
        </li>
        <li
          className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
          onClick={onClose}
        >
          <FaCog className="mr-2" />
          Personalizar Central IA
        </li>
        <li
          className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
          onClick={onClose}
        >
          <FaStar className="mr-2" />
          Configurações
        </li>
        <li
          className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
          onClick={onClose}
        >
          <FaStar className="mr-2" />
          Fazer Upgrade do Plano
        </li>
        <li
          className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
          onClick={handleLogoutClick} // Use a função aqui
        >
          <FaSignOutAlt className="mr-2" />
          Sair
        </li>
      </ul>
    </div>
  );
}
