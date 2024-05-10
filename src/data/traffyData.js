

let idCoord = [];
let idDetail = [];
let lastestFetchTime = 0;


async function fetchTraffyPartial(keyword, off){

    const name = "นายณัฐพงษ์ ดิสสานนท์"
    const org = "นิสิตชั้นปีที่ 2 ภาควิชาวิศวกรรมคอมพิวเตอร์ จุฬาลงกรณ์มหาวิทยาลัย"
    const purpose = "ใช้ประกอบการทำโครงงานรายวิชา Embedded System Lab"
    const email = "tontooey@gmail.com"
    const problem_type = "ต้นไม้";
    const sort = "DESC";
    const start = "2024-01-01";
    const text = keyword;
    const limit = 1000;
    const offset = off;

    const url = encodeURI(`https://publicapi.traffy.in.th/teamchadchart-stat-api/geojson/v1?
    output_format=json&limit=${limit}&name=${name}&org=${org}
    &purpose=${purpose}&email=${email}&problem_type=${problem_type}&text=${text}&sort=${sort}&start=${start}&offset=${offset}`);
    
    const result = await fetch(url).then((r) => r.json());
    return result.features;
}

async function fetchTraffyFull(keyword, lim){

    const name = "นายณัฐพงษ์ ดิสสานนท์"
    const org = "นิสิตชั้นปีที่ 2 ภาควิชาวิศวกรรมคอมพิวเตอร์ จุฬาลงกรณ์มหาวิทยาลัย"
    const purpose = "ใช้ประกอบการทำโครงงานรายวิชา Embedded System Lab"
    const email = "tontooey@gmail.com"
    const problem_type = "ต้นไม้";
    const sort = "DESC";
    const start = "2024-01-01";
    const text = keyword;
    const limit = Math.min(25000, lim);

    const url = encodeURI(`https://publicapi.traffy.in.th/teamchadchart-stat-api/geojson/v1?
    output_format=json&limit=${limit}&name=${name}&org=${org}
    &purpose=${purpose}&email=${email}&problem_type=${problem_type}&text=${text}&sort=${sort}&start=${start}`);
    
    const result = await fetch(url).then((r) => r.json());
    return result.features;
}

export async function getTraffyData(){


    const currentTime = Math.floor(Date.now()/1000);
    if (currentTime - lastestFetchTime < 600){
        return idDetail;
    }

    lastestFetchTime = currentTime;
    let problemCount = 0;
    const newIdCoord = [];
    (await fetchTraffyFull("",25000)).forEach(i => {
        problemCount++;
        if (i.state != 'finish'){
            newIdCoord.push({ticket_id: i.ticket_id, coords: i.coords, state: i.state})
        }
    });;
    idCoord = newIdCoord;

    const newIdDetail = [];
    for (let i = 0; i < Math.ceil(problemCount/1000); i++) {
        (await fetchTraffyPartial("",i * 1000)).forEach(e => {
            if (e.properties.state != 'เสร็จสิ้น'){
                newIdDetail.push({ticket_id: e.properties.ticket_id, description: e.properties.description,
                    timestamp: e.properties.timestamp, photo_url: e.properties.photo_url, 
                    address: e.properties.address, state: e.properties.state, lat: e.geometry.coordinates[0],
                    long: e.geometry.coordinates[1]
                })
            }
        });;
    }

    idDetail = newIdDetail;
    return idDetail;

}







