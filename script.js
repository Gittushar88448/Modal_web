const getValue = document.querySelector(".modal");
const getValueOverlay = document.querySelector(".overlay");

const openModal = () =>{
    getValue.classList.add("active");
    getValueOverlay.classList.add("removeOverlay");
};

const closeModel = () =>{
    getValue.classList.remove("active");
    getValueOverlay.classList.remove("removeOverlay");
};