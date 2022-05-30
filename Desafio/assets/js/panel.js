import { clientes } from "./clientes.js";
import { produtos } from "./produtos.js";

const menu = document.querySelectorAll("[data-action]");
const secClient = document.querySelector("#client");
const secProduct = document.querySelector("#product");
const secOrder = document.querySelector("#order");
const buttonCloseModal = document.querySelectorAll(".form__header > span");
const allModals = document.querySelectorAll(".form");

//modal interaction
const getDataset = (action) => {
    switch (action) {
        case "client":
            return secClient;
        case "product":
            return secProduct;
        case "order":
            return secOrder;
    }
};

const closeAllModals = () => {
    allModals.forEach((item) => {
        item.classList.remove("form-active");
    });
};

menu.forEach((item) => {
    item.addEventListener("click", () => {
        closeAllModals();
        const action = item.dataset.action;
        const modal = getDataset(action);
        modal.classList.add("form-active");
    });
});

buttonCloseModal.forEach((item) => {
    item.addEventListener("click", () => {
        closeAllModals();
    });
});

//Modal client
const formClient = document.querySelector("#formClient");
const buttonForm = document.querySelectorAll(".button__client");
const { inputCodeClient, inputNameClient, inputDateClient } =
    formClient.elements;

let indexClient = 0;
inputCodeClient.value = clientes[indexClient].codCliente;
inputNameClient.value = clientes[indexClient].nomeCliente;
inputDateClient.value = clientes[indexClient].dataCadCli;

formClient.addEventListener("submit", (event) => {
    event.preventDefault();
});

buttonForm.forEach((item) => {
    item.addEventListener("click", () => {
        switch (item.value) {
            case "<":
                indexClient == 0 ? (indexClient = 0) : indexClient--;
                inputCodeClient.value = clientes[indexClient].codCliente;
                inputNameClient.value = clientes[indexClient].nomeCliente;
                inputDateClient.value = clientes[indexClient].dataCadCli;
                break;

            case ">":
                indexClient >= clientes.length - 1
                    ? (indexClient = clientes.length - 1)
                    : indexClient++;
                inputCodeClient.value = clientes[indexClient].codCliente;
                inputNameClient.value = clientes[indexClient].nomeCliente;
                inputDateClient.value = clientes[indexClient].dataCadCli;
                break;

            case "Novo":
                inputCodeClient.value = "";
                inputNameClient.value = "";
                inputDateClient.value = "";
                indexClient++;
                break;

            case "Salvar":
                clientes.push({
                    codCliente: inputCodeClient.value,
                    nomeCliente: inputNameClient.value,
                    dataCadCli: inputDateClient.value,
                });
                break;
        }
    });
});

//Modal product
const formProduct = document.querySelector("#formProduct");
const buttonProduct = document.querySelectorAll(".button__product");
const {
    inputCodeProduct,
    inputDescriptionProduct,
    inputPriceProduct,
    inputAmountProduct,
} = formProduct.elements;

let indexProduct = 0;
inputCodeProduct.value = produtos[indexProduct].codProduto;
inputDescriptionProduct.value = produtos[indexProduct].descProduto;
inputPriceProduct.value = produtos[indexProduct].precoProduto;
inputAmountProduct.value = produtos[indexProduct].qtdEstoqueProd;

formProduct.addEventListener("submit", (event) => {
    event.preventDefault();
});

buttonProduct.forEach((item) => {
    item.addEventListener("click", () => {
        switch (item.value) {
            case "<":
                indexProduct == 0 ? (indexProduct = 0) : indexProduct--;
                inputCodeProduct.value = produtos[indexProduct].codProduto;
                inputDescriptionProduct.value =
                    produtos[indexProduct].descProduto;
                inputPriceProduct.value = produtos[indexProduct].precoProduto;
                inputAmountProduct.value =
                    produtos[indexProduct].qtdEstoqueProd;
                break;

            case ">":
                indexProduct >= produtos.length - 1
                    ? (indexProduct = produtos.length - 1)
                    : indexProduct++;
                inputCodeProduct.value = produtos[indexProduct].codProduto;
                inputDescriptionProduct.value =
                    produtos[indexProduct].descProduto;
                inputPriceProduct.value = produtos[indexProduct].precoProduto;
                inputAmountProduct.value =
                    produtos[indexProduct].qtdEstoqueProd;
                break;

            case "Novo":
                inputCodeProduct.value = "";
                inputDescriptionProduct.value = "";
                inputPriceProduct.value = "";
                inputAmountProduct.value = "";
                indexProduct++;
                break;

            case "Salvar":
                produtos.push({
                    codProduto: inputCodeClient.value,
                    descProduto: inputNameClient.value,
                    precoProduto: inputDateClient.value,
                    qtdEstoqueProd: inputAmountProduct.value,
                });
                break;
        }
    });
});
