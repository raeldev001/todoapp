let addButton = 
document.getElementById("add-button");

// code below is to attach event listener
addButton.addEventListener(
    "click", function() {
        // code below is to get typed text
        let typedText = 
        document.getElementById("text").value;

        // below is to create a list tag
        let listItem = 
        document.createElement("li");

        // below is to put typed text in li tag
        listItem.innerText = typedText;
        // create delete btn
        let deleteBtn = 
        document.createElement("button");

        // add a class of delete-button
        deleteBtn.classList.add("delete-button")

        // add a content of delete to the delete-button
        deleteBtn.innerText = "delete";

        // put delete button inside list item
        listItem.appendChild(deleteBtn)

        // get ordered list
        let orderedList =
        document.getElementById("ordered-list");

        // put list item inside ordered list
        orderedList.appendChild(listItem)

        // clear your input field
        document.getElementById("text").value = ""

        // add event listener to delete button
        deleteBtn.addEventListener(
            "click", function(){

                // remove list item
                listItem.remove()
            }
        )
    }
)