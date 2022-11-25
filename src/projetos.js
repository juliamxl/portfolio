function showProject(botão){
    if(botão == "b1"){
        const projetos = document.querySelector(".box-projetos .projetos:nth-child(1)")
        const infosProjeto = document.querySelector(".box-projetos .projetos:nth-child(1) .infos-projeto")
        infosProjeto.classList.toggle("active")
        projetos.classList.toggle("active")
    }else if(botão == "b2"){
        const projetos = document.querySelector(".box-projetos .projetos:nth-child(2)")
        const infosProjeto = document.querySelector(".box-projetos .projetos:nth-child(2) .infos-projeto")
        infosProjeto.classList.toggle("active")
        projetos.classList.toggle("active")
    }
    
    else if(botão == "b3"){
        const projetos = document.querySelector(".box-projetos .projetos:nth-child(3)")
        const infosProjeto = document.querySelector(".box-projetos .projetos:nth-child(3) .infos-projeto")
        infosProjeto.classList.toggle("active")
        projetos.classList.toggle("active")
    }
    else if(botão == "b4"){
        const projetos = document.querySelector(".box-projetos .projetos:nth-child(4)")
        const infosProjeto = document.querySelector(".box-projetos .projetos:nth-child(4) .infos-projeto")
        infosProjeto.classList.toggle("active")
        projetos.classList.toggle("active")
    }
}