// import { details, mssvAPI, submitGet } from "./function.js";

const idFind = document.getElementById("idFind");
idFind.addEventListener("submit", function(e) {
    e.preventDefault();

    const query_params = new URLSearchParams(new FormData(this));
    submitGet(mssvAPI, details, query_params, "details");

})