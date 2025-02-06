import { useState, useContext, createContext, ReactNode } from "react";

interface MenuContextType {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MenuContext = createContext<MenuContextType>({
  isOpen: false,
  toggleMenu: () => {},
});

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);
  return (
    <MenuContext.Provider value={{ isOpen, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext);
