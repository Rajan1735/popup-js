// const notesContainer=document.querySelector(".notes-container");
// const createBtn=document.querySelector(".btn");
// const notes=document.querySelector(".input-box");

// function shownNotes(){
//     notesContainer.innerHTML=localStorage.getItem("notes");
// }

// shownNotes();


// function updateStorage(){
//     localStorage.setItem("notes",notesContainer.innerHTML);
// }



// createBtn.addEventListener("click",()=>{
//     let inputBox=document.createElement("p");
//     let img=document.createElement("img");
//     inputBox.className="input-box";
//     inputBox.setAttribute("contenteditable","true");
//     img.src="images/delete.png";
//     notesContainer.appendChild(inputBox).appendChild(img);
// })

// notesContainer.addEventListener("click",function(e){
//     if(e.target.tagName==='IMG'){
//         e.target.parentElement.remove();
//         updateStorage();
//     }else if(e.target.tagName==='P'){
//         notes=document.querySelectorAll(".input-box");
//         notes.forEach(nt =>{
//             nt.onkeyup=function(){
//                 updateStorage();
//             }
//         })
//     }
// })


if (typeof Storage !== 'undefined') {
    // Function to display notes from localStorage
    function showNotes() {
        const notesContainer = document.querySelector(".notes-container");
        notesContainer.innerHTML = localStorage.getItem("notes");
    }

    // Function to update notes in localStorage
    function updateStorage() {
        const notesContainer = document.querySelector(".notes-container");
        localStorage.setItem("notes", notesContainer.innerHTML);
    }

    // Show notes when the page loads
    showNotes();

    // Create a new note when the button is clicked
    const createBtn = document.querySelector(".btn");
    createBtn.addEventListener("click", () => {
        const notesContainer = document.querySelector(".notes-container");
        const inputBox = document.createElement("p");
        inputBox.className = "input-box";
        inputBox.setAttribute("contenteditable", "true");
        const img = document.createElement("img");
        img.src = "images/delete.png";
        inputBox.appendChild(img);
        notesContainer.appendChild(inputBox);
        updateStorage();
    });

    // Delete a note when the delete button is clicked
    const notesContainer = document.querySelector(".notes-container");
    notesContainer.addEventListener("click", function (e) {
        if (e.target.tagName === 'IMG') {
            e.target.parentElement.remove();
            updateStorage();
        } else if (e.target.tagName === 'P') {
            const notes = document.querySelectorAll(".input-box");
            notes.forEach((nt) => {
                nt.onkeyup = function () {
                    updateStorage();
                }
            });
        }
    });
} else {
    alert('Your browser does not support localStorage. Please use a different browser.');
}