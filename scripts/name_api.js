// import { nameAPI, submitGet, table } from './function.js';

const nameFind = document.getElementById("nameFind");

nameFind.addEventListener("submit", function(e) {
    e.preventDefault();

    const query_params = new URLSearchParams(new FormData(this));
    submitGet(nameAPI, table, query_params, "data");
});