import React from "react";
import Projeto from "./Projeto";

import projeto1 from "../assets/projeto1.png"
import projeto2 from "../assets/projeto2.png"
import projeto3 from "../assets/projeto3.png"
import projeto4 from "../assets/projeto4.png"
import projeto5 from "../assets/projeto5.png"
import projeto6 from "../assets/projeto6.png"

const Projetos = () =>{
    return(
        <section
         id="projetos"
         className="bg-gray-800  md:mt-56 "
        >
            <div className="flex items-center flex-col justify-center">
                <div className="text-xs text-white text-opacity-50 mt-12 font-bold ml-2 mb-4 flex md:self-center md:ml-14 mr-4 md:mr-16">
                    PROJECTS
                </div>
                <div className="text-5xl">Done projects</div>
                <div className="mt-8 w-16 h-1 bg-white bg-opacity-50 rounded-full mb-8"></div>

                <div className="p-6 text-center flex flex-col items-center">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    <p>Nulla, aliquam.</p>
                </div>      
            </div>

            <div className=" md:grid md:grid-cols-2 md:p-32 md:pt-12 ">
                <Projeto 
                    imagem={projeto1}
                    descricao={"projeto1"}
                    githubLink={"https://github.com/pedrot00/interactive-card-details-form-tree-main"}
                    siteLink={"https://interactive-card-details-form-tree-main.vercel.app/"}
                />
                 <Projeto 
                    imagem={projeto2}
                    descricao={"projeto2"}
                    githubLink={"https://github.com/pedrot00/easybank-landing-page-master"}
                    siteLink={"https://easybank-landing-page-master-ruddy-theta.vercel.app/"}
                />
                 <Projeto 
                    imagem={projeto3}
                    descricao={"projeto3"}
                    githubLink={"https://github.com/pedrot00/ecommerce-product-page-main"}
                    siteLink={"https://ecommerce-product-page-main-iota.vercel.app/"}
                />
                <Projeto 
                    imagem={projeto4}
                    descricao={"projeto4"}
                    githubLink={"https://github.com/pedrot00/cientec-challenge-node"}
                />
                 <Projeto 
                    imagem={projeto5}
                    descricao={"projeto5"}
                    githubLink={"https://github.com/pedrot00/dashboard"}
                    siteLink={"https://dashboard-six-wine.vercel.app/"}
                />
                 <Projeto 
                    imagem={projeto6}
                    descricao={"projeto6"}
                    githubLink={"https://github.com/pedrot00/digital-clock"}
                    siteLink={"https://clock-iota-six.vercel.app/"}
                />
            </div>
    </section>
    )
    
};


export default Projetos;