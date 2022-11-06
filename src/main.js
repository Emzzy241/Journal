// the User Interface logic

// NOTE ONLY WHEN I EXPORT A FUNCTION IN THE BUSINESS LOGIC DO I
// WANT TO SEE IT IN THE UserInterface Logic

import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import { Journal } from "./journal.js";
import { JournalEntry } from "./journal.js";


// reinstantiating the database thanks to global variable.... This basically just refreshes our database anytime we are about to start our application
// this reinstantiator also makes us able to communicate with the methods we wrote in the business logic... Its easy to interact with a variable whose datatype in an object
// than to try to make a constructor interact with a method, it might not even be possible but don't try it

let newJournal = new Journal();



// the showJournal entry method is responsible for deleting the contents from the div displaying them and returning the contents back to the form

function editJournalEntry(){
    let myJournal = newJournal.findJournalEntry(id);

    $("input#title-journal").val(myJournal.title);
    $("textarea#content-journal").val(myJournal.body);

    newJournal.deleteJournalEntry(id);
    $("#divToDisplayContentForUser").hide();
}




// displayBodyContent() function is for showing the entire story user entered.... no title gets shown, it will only show
// user all what they wrote... don't forget I have a getTeaser() method that will only show the first 8 words in the first sentence
// to user and it will represent the rest with a "..............", later when we click on the short story it will show us the entire story entered

function displayContent(journalParam) {
    let divToDispayContent = $("#divToDisplayContentForUser");
    
    let htmlForDisplayingContent = "";
    Object.keys(journalParam.journalEntries).forEach( function(key){
        let newEntry = journalParam.findJournalEntry(key);
        htmlForDisplayingContent += "<div class='entireJournal'><h4>" + newEntry.title + "</h4><p class='journals-body' id= " + newEntry.id + ">" + newEntry.getTeaser() + "<p></div>";
    });

    divToDispayContent.html(htmlForDisplayingContent);
}


// this displayContent() function is to display the content of the journal

// I first picked the place I want to show all of this contents and stored it in a variable
// after that I created a an empty string variable which I want to use later in the function
// then I used Object.keys(this is to convert each key in an object to an array of string) and then I pick the journalEntries with the displayContent function
// then I looped through it with a parameter"key"..... Next I create a newEntry variable, inside the variable I find this current key I'm in and store it in the newEntry variable
// after that I display this in a div and note I used my getTeaser() methid here because at first I don't want to show the entire story, I just want to show the first 8 words in the first sentence and represent the rest with a "........"
// finally I use the html() method to show all what I generated with my htmlForDisplayingContent variable


// Attach listener function

function attachContentListeners(){
    $("ul#divToDisplayContentForUser").on("click", "p", function(){
        showBodyContent(this.id);

    });
        // function for delete contact
        $("div#delButton").on("click", ".deleteButton", () =>{
            newJournal.deleteJournalEntry(this.id);
            $("#divToDisplayContentForUser").hide();
            displayContent(newJournal);
        });
        // function for edit contact
        $("div#edButton").on("click", ".editButtton", () =>{
            editJournalEntry(this.id);
        });

}

// a listener function is written here to run the showBodyContent function when we click on <p></p> 


// show body content functions

function showBodyContent(id){
    let myJournalEntry = newJournal.findJournalEntry(id);


    $(".all-words").html(myJournalEntry.totalWordsCount());
    $(".all-vowels").html(myJournalEntry.countMeVowels());
    $(".all-consonants").html(myJournalEntry.countMeConsonants());
    $("#" + id).html(myJournalEntry.body);



    // buttons for delete and edit journal

    let delButton = $("div#delButton");
    // emptying the delButton div of any class, elements
    delButton.empty();
    delButton.html("<button class='deleteButton btn btn-danger' id=" + myJournalEntry.id + ">Delete</button>");

    // button for edit journal

    let edButton = $("div#edButton");
    
    edButton.empty();
    edButton.html("<button class='editButton btn btn-success' id=" + myJournalEntry.id + ">Edit</button>");
    
    console.log(edButton);
    console.log(delButton);
}

// the showBodyContent function is just a function to input 3 of the methods I wrote in mybusiness logic
// I used the .html() method to show all of this in the div class' I provided for them in index.html
// and the final line



// now its time to write my document.ready function


$(document).ready( function(){
    attachContentListeners();
    
    console.log("jjjjjjj")
    $("form#journal-form").submit( function(event){
        event.preventDefault();

    
        const title = $("#title-journal").val();
        const body = $("#content-journal").val();
        let jEntry = new JournalEntry(title, body);
        newJournal.addJournalEntry(jEntry);

        console.log(jEntry);
        displayContent(newJournal);
        $("#title-journal").val("");
        $("#content-journal").val("");
    })
    })