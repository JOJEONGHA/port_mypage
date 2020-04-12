// Main portfolio data
let data = {
    "workSet" : [
        {
            "name" : "롯데시네마",
            "info" : "화면의 크기에 따른 편의성의 차별을 주어 다양한 플랫폼의 접속을 유도하였다.",
            "keyword" : ["comfortable","simple"],
            "color" : ["#d32f2f"],
            "platform" : ["PC","Tablet(1024px)","Mobile(680px)"]
        }
    ]
}

jsonParsing(data);

// data load
let law_json = localStorage.getItem("data");
let obj = JSON.parse(law_json);

// json parsing operation
function jsonParsing(data) {
    let dataJSON = JSON.stringify(data);
    localStorage.setItem("data", dataJSON);
}