let primeiraFaixa = 1212;
let segundaFaixa = 2427.35;
let terceiraFaixa = 3641.03;
let quartaFaixa = 7087.22;
let texto = document.querySelector("#result");
let title = document.querySelector("#title");

const btn = document.querySelector(".calc-btn");

btn.addEventListener("click", function (e) {
    var valor = document.querySelector("#input").value;
    x = parseFloat(valor);
    calcINSS(x);
})


function calcINSS(salario) {
    title.innerHTML = "Salário Bruto: R$" + salario.toFixed(2);

    rs1 = primeiraFaixa * 0.075;
    rs2 = (segundaFaixa - primeiraFaixa) * 0.09;
    rs3 = (terceiraFaixa - segundaFaixa) * 0.12;
    rs4 = (quartaFaixa - terceiraFaixa) * 0.14;
    let res;

    if (salario <= primeiraFaixa) {
        texto.innerHTML = "Isento de imposto";
    }
    if (salario > primeiraFaixa && salario < segundaFaixa) {
        res = (salario - primeiraFaixa) * 0.09;

        texto.innerHTML = "Primeira faixa: R$ " + rs1.toFixed(2) + "</br>" +
            "Segunda faixa: R$" + res.toFixed(2) + "</br>" +
            "</br>Contribuição INSS Total: R$" + (res + rs1);

    }
    if (salario > segundaFaixa && salario < terceiraFaixa) {
        res = (salario - segundaFaixa) * 0.12;
        texto.innerHTML = "Primeira faixa: R$" + rs1.toFixed(2) + "</br>" +
            "Segunda faixa: R$" + rs2.toFixed(2) + "</br>" +
            "Terceira faixa: R$" + res.toFixed(2) + "</br>" +
            "</br>Contribuição INSS Total: R$" + (res + rs1 + rs2).toFixed(2);

    }
    if (salario > terceiraFaixa && salario < quartaFaixa) {
        res = (salario - terceiraFaixa) * 0.14;
        texto.innerHTML = "Primeira faixa: R$" + rs1.toFixed(2) + "</br>" +
            "Segunda faixa: R$" + rs2.toFixed(2) + "</br>" +
            "Terceira faixa: R$" + rs3.toFixed(2) + "</br>" +
            "Quarta faixa: R$" + res.toFixed(2) + "</br>" +
            "</br>Contribuição INSS Total: R$" + (res + rs1 + rs2 + rs3).toFixed(2);
    }
    if (salario > quartaFaixa) {
        texto.innerHTML = "Primeira faixa: R$" + rs1.toFixed(2) + "</br>" +
            "Segunda faixa: R$" + rs2.toFixed(2) + "</br>" +
            "Terceira faixa: R$" + rs3.toFixed(2) + "</br>" +
            "Quarta faixa: R$" + rs4.toFixed(2) + "</br>" +
            "</br>Contribuição INSS Total: R$" + (rs1 + rs2 + rs3 + rs4).toFixed(2);

    }
}

