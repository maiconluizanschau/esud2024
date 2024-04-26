setTimeout(()=>{
    let stringData = document.querySelector(".ts-pricing-value");
    console.log(stringData.innerHTML.replaceAll(" ", ""))
    let pText = document.querySelectorAll(".ts-pricing-value");
    let dataSemFormatacao = document.querySelectorAll(".ts-pricing-value");
    let i=0;
    let data1, data2, horario1, horario2;
    dataSemFormatacao.forEach((element)=>{
        dataSemFormatacao = element.innerHTML.replaceAll(" ", "")
        data1 = dataSemFormatacao.slice(0, 11);
        data2 = dataSemFormatacao.slice(22, 32);
        horario1 = dataSemFormatacao.slice(11, 19);
        horario2 = dataSemFormatacao.slice(32, 40);
        console.log(horario1)
        console.log(horario2)
        data1 = formataData(data1);
        data2 = formataData(data2);
    })
    /*for(let i = 0; i < dataSemFormatacao.length; i++){
        let data1 = dataSemFormatacao[i].slice(0, 11);
        let data2 = dataSemFormatacao[i].slice(22, 32);
        data1 = formataData(data1);
        data2 = formataData(data2)
        console.log(data1);
    }*/
    pText.forEach((element)=>{
        element.innerHTML = "";
        element.innerHTML = data1+ " " + horario1 + " até " + data2 +" "+ horario2
    })
    
}, 5000)

function formataData(data){
    data = data.trim()
    var partes = data.split("/");
    var dataInvertida = partes[2]+"/"+partes[1]+"/"+partes[0];
    return dataInvertida;
}