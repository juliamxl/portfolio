function showProject(botão){
    if(botão == "b1"){
        const projetos = document.querySelector(".box-projetos .projetos:nth-child(1)")
        const infosProjeto = document.querySelector(".box-projetos .projetos:nth-child(1) .infos-projeto")
        infosProjeto.classList.toggle("active")
        projetos.classList.toggle("active")
    }else{
        const projetos = document.querySelector(".box-projetos .projetos:nth-child(2)")
        const infosProjeto = document.querySelector(".box-projetos .projetos:nth-child(2) .infos-projeto")
        infosProjeto.classList.toggle("active")
        projetos.classList.toggle("active")
    }
    
}