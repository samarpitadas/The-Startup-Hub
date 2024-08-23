document.addEventListener('DOMContentLoaded', function () {
    const text = "The StartUp Sphere";
    const span = document.querySelector('.company-name');
    let index = 0;

    function type() {
        if (index < text.length) {
            span.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    }

    type();
});
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.startup-card');

    const observerOptions = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the card is visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    cards.forEach(card => {
        observer.observe(card);
    });
});

let obj={
    name:"The StartUp",
    TheyDo:"List The Startups",
    properties:["fintech","web development"],
    address : "Howra, India",
    employee_range : "1001-5000",
    founded : "2023",
    funding : "Google",
    valuation : "6340M",
    specification : "160M Series A in 2024",
    link_to : "#",
}
let obj2={
    name:"The StartUp",
    TheyDo:"Learn HTML",
    properties:["DSA","web development"],
    address : "Howra, India",
    employee_range : "0-1",
    founded : "2023",
    funding : "IIEST,Shibpur",
    valuation : "999M",
    specification : "999M Series A in 2024",
    link_to : "https://You.idot.com",
}

let listobj=[obj,obj,obj];
listobj.push(obj);


function add_card(objj=obj){
    let property="";
    for (const item of objj.properties) {
        property+=`<span>${item}</span>`;
    }
    let card = `<div class="startup-card"><div class="heading"><span class="logo"></span><span class="name">${objj.name}</span></div ><hr><h3>What they do:</h3><p>${objj.TheyDo}</p>${property}<h3>About them:</h3><p>📍HQ: ${objj.address}</p><span>${objj.employee_range} employees</span><span>Founded: ${objj.founded}</span><h3>Funding:</h3><span>${objj.funding}</span><span>$${objj.valuation} valuation</span><span>${objj.specification}</span><br><div class="link"><a href="${objj.link_to}">View Jobs</a></div></div>`
    
    let temp=document.createElement("div");
    temp.innerHTML=card;
    new_card=temp.getElementsByClassName("startup-card")[0];
    document.getElementById("statup_main_container").append(new_card);
}
// function add_card(){
//     let nameCompany = "The StartUp Sphere";
//     let TheyDo = "List The Startups";
//     let properties=["fintech","web development"];
//     let address = "Howra, India";
//     let employee_range = "1001-5000";
//     let founded = "2023";
//     let funding = "Google";
//     let valuation = "6340M";
//     let specification = "160M Series A in 2024";
//     let link_to = "#";
//     let property="";
//     for (const item of properties) {
//         property+=`<span>${item}</span>`;
//     }
//     let card = `<div class="startup-card"><div class="heading"><span class="logo"></span><span class="name">${nameCompany}</span></div ><hr><h3>What they do:</h3><p>${TheyDo}</p>${property}<h3>About them:</h3><p>📍HQ: ${address}</p><span>${employee_range} employees</span><span>Founded: ${founded}</span><h3>Funding:</h3><span>${funding}</span><span>$${valuation} valuation</span><span>${specification}</span><br><div class="link"><a href="${link_to}">View Jobs</a></div></div>`
    
//     let temp=document.createElement("div");
//     temp.innerHTML=card;
//     new_card=temp.getElementsByClassName("startup-card")[0];
//     document.getElementById("statup_main_container").append(new_card);
// }


add_card();
add_card(obj);

for (const element of listobj) {
    add_card(element);
}


// add_card();
// add_card();
// add_card();
// add_card();
// add_card();
// add_card();
// add_card();
// add_card();
// add_card();
// add_card();


