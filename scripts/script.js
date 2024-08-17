document.addEventListener('DOMContentLoaded', function () {
    const text = "The StartUp Hub";
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

function add_card(){
    let nameCompany = "Company Name";
    let TheyDo = "What They Do";
    let address = "Howra, India";
    let employee_range = "1001-5000";
    let founded = "2023";
    let funding = "Google";
    let valuation = "6340M";
    let specification = "160M Series A in 2024";
    let link_to = "#";
    let card = `<div class="startup-card"><div class="heading"><span class="logo"></span><span class="name">${nameCompany}</span></div ><hr><h3>What they do:</h3><p>${TheyDo}</p><span>Fintechee</span><span>Down Payments</span><h3>About them:</h3><p>📍HQ: ${address}</p><span>${employee_range} employees</span><span>Founded: ${founded}</span><h3>Funding:</h3><span>${funding}</span><span>$${valuation} valuation</span><span>${specification}</span><br><div class="link"><a href="${link_to}">View Jobs</a></div></div>`
    
    // let cardlist = document.getElementsByClassName("startup-card");
    // let card_temp = cardlist[0].cloneNode(true);
    // card_temp.innerHTML = card;
    let card_temp = document.getElementsByClassName("startup-card")[0].cloneNode();
    card_temp.innerHTML = card;

    document.getElementById("statup_main_container").append(card_temp);
}

add_card();
add_card();
add_card();
add_card();
add_card();
add_card();
add_card();
add_card();
add_card();
add_card();
add_card();
// document.getElementById("statup_main_container").append(card_temp);
// let card_temp2 = card_temp.cloneNode(true);
// document.getElementById("statup_main_container").prepend(card_temp2);
