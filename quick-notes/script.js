const addNoteButton = document.querySelector("#add-note-btn");

const main = document.querySelector("#main");

const saveNotes = () => {
    const notes = document.querySelectorAll(".note textarea");
    console.log(notes);
    const data = [];
    notes.forEach((note) => {
        data.push(note.value);
    });
    //console.log(data);
    localStorage.setItem("notes", JSON.stringify(data));
}




addNoteButton.addEventListener(
    "click",
    function(){
        addNote();
    }
);



const addNote = (text = "") =>{
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
    <div class="toolbar">
                <i class=" save fa-solid fa-floppy-disk"></i>
                <i class="trash fa-solid fa-trash"></i>
            </div>

            <textarea>${text}</textarea>
            `;

    note.querySelector(".trash").addEventListener(
        "click",
        function() {
            note.remove();
            saveNotes();
        }
    );

    note.querySelector(".save").addEventListener(
        "click",
        function() {
             saveNotes();
        }
    );
    main.appendChild(note);

};

(
    function() {
        const lsNotes = JSON.parse(localStorage.getItem("notes"));
        lsNotes.forEach((lsNotes) => {
            addNote(lsNotes)
        })
    }
)()
