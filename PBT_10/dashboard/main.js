const widget1 =
document.getElementById("widget1");

const widget2 =
document.getElementById("widget2");

const widget3 =
document.getElementById("widget3");

const loading =
document.getElementById("loading");

const timeEl =
document.getElementById("time");

const refreshBtn =
document.getElementById("refreshBtn");

function showWidgetLoading() {

    widget1.innerHTML = "Loading...";
    widget2.innerHTML = "Loading...";
    widget3.innerHTML = "Loading...";
}

function renderWidget(index,data) {

    if(index === 0){

        widget1.innerHTML = `
            <p><b>${data[0].name}</b></p>
            <p>${data[0].email}</p>
        `;
    }

    if(index === 1){

        const user = data.results[0];

        widget2.innerHTML = `
            <img src="${user.picture.large}">
            <p>${user.name.first}
            ${user.name.last}</p>
            <p>${user.email}</p>
        `;
    }

    if(index === 2){

        widget3.innerHTML = `
            <img src="${data.message}">
        `;
    }
}

function renderWidgetError(index,message){

    const html =
    `<p style="color:red">
        Error: ${message}
    </p>`;

    if(index===0)
        widget1.innerHTML = html;

    if(index===1)
        widget2.innerHTML = html;

    if(index===2)
        widget3.innerHTML = html;
}

async function loadDashboard(){

    showWidgetLoading();

    loading.style.display = "block";

    const startTime =
    Date.now();

    const results =
    await Promise.allSettled([

        fetch(
            "https://jsonplaceholder.typicode.com/users"
        ).then(r=>r.json()),

        fetch(
            "https://randomuser.me/api/"
        ).then(r=>r.json()),

        fetch(
            "https://dog.ceo/api/breeds/image/random"
        ).then(r=>r.json())

    ]);

    results.forEach((result,index)=>{

        if(
            result.status ===
            "fulfilled"
        ){

            renderWidget(
                index,
                result.value
            );

        }else{

            renderWidgetError(
                index,
                result.reason.message
            );
        }
    });

    const totalTime =
    Date.now() - startTime;

    timeEl.textContent =
    `Data loaded in ${totalTime} ms`;

    loading.style.display =
    "none";
}

refreshBtn.addEventListener(
    "click",
    loadDashboard
);

loadDashboard();