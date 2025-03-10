import React, { useState, useEffect } from "react";

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
            <header 
                className={`bg-gray-700 h-18 p-3 flex justify-between md:justify-between items-center fixed top-0 left-0 right-0 z-10 transition-all duration-300 ${
                    isScrolled ? "bg-opacity-20 shadow-md" : "bg-opacity-80"
                }`}
            >   
                <i className="fi fi-sr-copyright text-3xl flex md:ml-20 text-black"></i>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex justify-around absolute left-90 right-20 mx-auto">
                    <ul className="flex space-x-8">
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <a 
                                    href={item.path} 
                                    className="relative text-white hover:text-white font-medium py-2 px-1 group"
                                >
                                    {item.name}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile Menu Icon */}
                <img 
                    src="/images/menuIcon.png" 
                    alt="menu" 
                    className="cursor-pointer h-8 w-auto object-contain md:hidden"
                    onClick={toggleSidebar}
                />
            </header>

            {/* Mobile menu overlay */}
            {isSidebarOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-20"
                    onClick={closeSidebar}
                />
            )}

            {/* Mobile sidebar */}
            <div 
                className={`fixed bg-gray-700 top-0 right-0 h-full w-64 shadow-lg transform transition-transform duration-300 ease-in-out z-30 ${
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
                                        className="block py-2 px-4 text-white hover:bg-gray-100 rounded transition-colors"
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