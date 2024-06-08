function main() {
    const leftBox = document.querySelector("#left_box");
    const rightBox = document.querySelector("#right_box");
    const dragBox = createDragBox();
    
    setListeners();
    leftBox.appendChild(dragBox);

    function createDragBox() {
        var newBox = document.createElement("div");
        newBox.setAttribute("id", "dragbox");
        newBox.setAttribute("draggable", true);
        return newBox;
    }

    function setListeners() {
        dragBox.addEventListener("dragstart", (evt) => {
            console.log(`${evt.target.id}: dragstart`);
        })
        dragBox.addEventListener("dragend", (evt) => {
            console.log(`${evt.target.id}: dragend`);
        })

        leftBox.addEventListener("dragenter", (evt) => {
            console.log(`${evt.target.id}: dragenter`);
        })
        leftBox.addEventListener("dragleave", (evt) => {
            console.log(`${evt.target.id}: dragleave`)
        })
        leftBox.addEventListener("dragover", (evt) => {
            evt.preventDefault();
            console.log(`${evt.target.id}: dragover`);
        })
        leftBox.addEventListener("drop", (evt) => {
            leftBox.appendChild(dragBox);
            console.log(`${evt.target.id}: drop`);
        })


        rightBox.addEventListener("dragenter", (evt) => {
            console.log(`${evt.target.id}: dragenter`);
        })
        rightBox.addEventListener("dragleave", (evt) => {
            console.log(`${evt.target.id}: dragleave`)
        })
        rightBox.addEventListener("dragover", (evt) => {
            evt.preventDefault();
            console.log(`${evt.target.id}: dragover`);
        })
        rightBox.addEventListener("drop", (evt) => {
            rightBox.appendChild(dragBox);
            console.log(`${evt.target.id}: drop`);
        })
    }
}
window.addEventListener("DOMContentLoaded", main())