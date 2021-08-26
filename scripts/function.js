const nameAPI = "https://hust-api.herokuapp.com/student/name/";
const mssvAPI = "https://hust-api.herokuapp.com/student/index/";

function table(data) {
    var temp = "";

    data.data.forEach((item) => {
        temp += "<tr>";
        temp += "<td>" + item.id + "</td>";
        temp += "<td>" + item.fullname + "</td>";
        temp += "<td>" + item.lop_id + "</td>";
        if (item.fb_link != null && item.fb_link != "") {
            temp +=
                "<td><a href='" +
                item.fb_link +
                "'>" +
                item.fb_link +
                "</a></td>";
        } else {
            temp += "<td>None</td>";
        }
        temp +=
            "<td><img src='" +
            item.image_url +
            "' class='small-img' ></td>";
    });

    return temp;


};


function details(data) {
    var temp = "";
    temp += "<h1 class=\"mt-4 align-self-center\">Thông tin về sinh viên</h1>";
    temp += "<div class=\"mb-3\">Họ và tên : " + data.fullname + "</div>";
    temp += "<div class=\"mb-3\">MSSV :" + data.id + "</div>";
    temp += "<a class=\"mb-3\" href=\"" + data.fb_link + "\">Link Facebook</a>";
    temp += "<br />";
    temp += "<div class=\"mb-3\">Ảnh:</div>";
    temp += "<img src=\"" + data.image_url + "\" alt=\"image\" height=\"600\" />"
    return temp;
};

function submitGet(api, f, query_params, put_id) {
    var url = new URL(api);
    url.search = query_params;
    fetch(url, {
        method: "GET",
    }).then((res) => {
        res.json().then((data) => {
            var put_data = f(data);
            document.getElementById(put_id).innerHTML = put_data;
        })
    })
};

try {
    const idFind = document.getElementById("idFind");
    idFind.addEventListener("submit", function(e) {
        e.preventDefault();

        const query_params = new URLSearchParams(new FormData(this));
        submitGet(mssvAPI, details, query_params, "details");

    })
} catch (error) {
    console.log(error);
}

try {
    const nameFind = document.getElementById("nameFind");

    nameFind.addEventListener("submit", function(e) {
        e.preventDefault();

        const query_params = new URLSearchParams(new FormData(this));
        submitGet(nameAPI, table, query_params, "data");
    });
} catch (error) {
    console.log(error);
}