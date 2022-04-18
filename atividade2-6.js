//6. Refaça o exercício 5 usando a construção async/await.

var temperatura = {
    ligada: true
}

while (temperatura.ligada) {
    operacao = prompt(`SELECIONE UMA OPÇÃO:
    1 - Digitar latitude e longitude
    2 - Sair`)

    switch (operacao) {
        case '1':
            var latitude = parseFloat(prompt('Informe um valor para a latitude'));
            var longitude = parseFloat(prompt('Informe um valor para a longitude'));
            if (isNaN(latitude) || isNaN(longitude)) {
                alert('Numero informado invalido!')
            }
            else{
                const resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.API_KEY}&units=${process.env.UNITS}`);
                const json = await resp.json();
                alert(`\nTEMPERATURA: ${json.main.temp}ºC\n`);
            }
            break;
        case '2':
            temperatura.ligada = false
            break;
        default:
            alert("Digite uma opção valida!")
    }
}