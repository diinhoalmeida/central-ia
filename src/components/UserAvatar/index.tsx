import { useState, useEffect, useRef } from "react";
import { UserMenu } from "../Header/UserMenu";

export function UserAvatar() {
  const [isLoading, setIsLoading] = useState(true);
  const [menuVisible, setMenuVisible] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      {isLoading && (
        <div className="animate-pulse bg-gray-200 rounded-full w-14 h-14"></div>
      )}
      <img
        className={`rounded-full w-14 h-14 ${isLoading ? "hidden" : "block"}`}
        src="src/assets/me.jpeg"
        alt="User Avatar"
        onLoad={handleImageLoad}
        loading="lazy"
        onClick={toggleMenu}
      />
      {menuVisible && (
        <div ref={menuRef}>
          <UserMenu onClose={() => setMenuVisible(false)} />
        </div>
      )}
    </div>
  );
}
