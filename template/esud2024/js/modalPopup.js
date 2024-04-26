function modalShow(element){
    let modal_ref = element.classList[3]
    console.log(element)
    let modal_element = document.getElementById(element.classList[3])
    console.log(modal_element);
    modal_element.style.display = "block";
    console.log(modal_element.style.display);
}

function closeModal(element){
    let modal_element = document.getElementById(element.id)
    modal_element.style.display = "none";
}