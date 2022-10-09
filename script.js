const faqheader = document.querySelectorAll(".faq-container .faq-header");

faqheader.forEach((header, i) => {
    header.addEventListener("click", () => {
        header.nextElementSibling.classList.toggle("active");

        const open = header.querySelector(".open")
        const close = header.querySelector(".close")

        if(header.nextElementSibling.classList.contains("active")){
            open.classList.remove("active");
            close.classList.add("active");
        } else{
            open.classList.add("active");
            close.classList.remove("active");
        }
    });
});

const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

const productContainers = [...document.querySelectorAll('.dosen-list')];
const nxtBtn = [...document.querySelectorAll('.nxtbtn')];
const preBtn = [...document.querySelectorAll('.prebtn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})