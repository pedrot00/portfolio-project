import React, { useState } from "react";

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    const menuItems = [
        { name: "Sobre", path: "#sobre" },
        { name: "Projetos", path: "#projetos" },
        { name: "Algoritmos", path: "#algoritmos" },
        { name: "Contato", path: "#contato" }
    ];

    return (
        <>
            <header className="bg-red-100 h-18 p-4 flex justify-between items-center md:justify-around fixed top-0 left-0 right-0 z-10">
                <img
                    src="/images/logo.png" 
                    alt="logo" 
                    className="h-10 w-auto object-contain" 
                />
                <img 
                    src="/images/menuIcon.png" 
                    alt="menu" 
                    className="cursor-pointer h-8 w-auto object-contain"
                    onClick={toggleSidebar}
                />
            </header>

            {/* Overlay para fechar o sidebar ao clicar fora */}
            {isSidebarOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-20"
                    onClick={closeSidebar}
                />
            )}

            {/* Sidebar */}
            <div 
                className={`fixed top-0 right-0 h-full w-64 bg-red-100 shadow-lg transform transition-transform duration-300 ease-in-out z-30 ${
                    isSidebarOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="p-5">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-xl font-bold">Menu</h2>
                        <button 
                            onClick={closeSidebar}
                            className="text-gray-500 hover:text-gray-800"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <nav>
                        <ul className="space-y-4">
                            {menuItems.map((item, index) => (
                                <li key={index}>
                                    <a 
                                        href={item.path} 
                                        className="block py-2 px-4 text-gray-800 hover:bg-gray-100 rounded transition-colors"
                                        onClick={closeSidebar}
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Header;