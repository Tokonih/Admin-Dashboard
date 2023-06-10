// const view =() =>{
//     alert('working')
// }

// document.getElementById('view').onclick=()=>{
//     popup.classList.add("open-popup")
    
let popup = document.getElementById("popup")
let close = document.getElementById("close")



let view = document.querySelectorAll('.view_tbn')
for (let i = 0; i < view.length; i++){
    view[i].addEventListener('click', () =>{
        popup.classList.add('open-popup')
        // alert('working')
    })
}

if(close){
    close.onclick =()=>{
        popup.classList.remove("open-popup")

    }
}



let brandView = document.getElementById("brandView")
let brandViewclose = document.getElementById("brandViewclose")


let brand = document.querySelectorAll('.brand')
for (let i = 0; i < brand.length; i++){
    brand[i].addEventListener('click', () =>{
        brandView.classList.add('brands-open-popup')
        // alert('working')
    })
}

if(brandViewclose){
    brandViewclose.onclick =()=>{
        brandView.classList.remove("brands-open-popup")

    }
}

// edit



let editView = document.getElementById("editView")
let editViewclose = document.getElementById("editViewclose")


let edit = document.querySelectorAll('.edit')
for (let i = 0; i < brand.length; i++){
    edit[i].addEventListener('click', () =>{
        editView.classList.add('edits-open-popup')
        // alert('working')
    })
}

if(editViewclose){
    editViewclose.onclick =()=>{
        editView.classList.remove("edits-open-popup")

    }
}


