const getValue = document.querySelector(".modal");
const getValueOverlay = document.querySelector(".overlay");

const openModal = () =>{
    getValue.classList.add("active");
    getValueOverlay.classList.add("removeOverlay");
};

const closeModal = () =>{
    getValue.classList.remove("active");
    getValueOverlay.classList.remove("removeOverlay");
};