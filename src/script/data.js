// Main portfolio data
let data = {
    "workSet" : [
        {
            "name" : "롯데시네마",
            "info" : "화면의 크기에 따른 편의성의 차별을 주어 다양한 플랫폼의 접속을 유도하였다.",
            "keyword" : ["comfortable","simple"],
            "color" : ["#d32f2f"],
            "platform" : ["PC","Tablet(1024px)","Mobile(680px)"],
            "code_url" : "https://github.com/JOJEONGHA/renewal_lottecinema.git",
            "ori_url" : "https://www.lottecinema.co.kr/NLCHS"
        },
        {
            "name" : "카카오",
            "info" : "가로비가 넓은 점을 활용하여 부담스럽지 않게 흐름에 따라 정보를 노출하도록 하였다.",
            "keyword" : ["wide","flow"],
            "color" : ["#fcce00"],
            "platform" : ["PC"],
            "code_url" : "https://github.com/JOJEONGHA/renewal_kakao.git",
            "ori_url" : "https://www.kakaocorp.com/"
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