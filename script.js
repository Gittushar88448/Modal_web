const getValue = document.querySelector(".modal");
const getValueOverlay = document.querySelector(".overlay");


// Writing open Modal Method
const openModal = () =>{
    getValue.classList.add("active");
    getValueOverlay.classList.add("removeOverlay");
};

// writing close Modal Method
const closeModal = () =>{
    getValue.classList.remove("active");
    getValueOverlay.classList.remove("removeOverlay");
};