// the business logic 

// I will be exporting functions and methods I will be using
// in my UI logic


export function Journal(){
    this.journalEntries = {}; // the place for story all journalEntries(i.e new journals)

    this.journalCurrentId = 0; // the id that will be incremented with a method later on

} 

// the assign Id for assigning a unique id to each new journalEntry
// we need this method to help us addJournalEntry and to help us findJournalEntry
// this method won't be tapering with out journalEntry's all it does is to increase the journalCurrentId which is in our datbase
// by 1 and return the updated value of journalCurrentId
Journal.prototype.assignId = function(){
    this.journalCurrentId += 1;
    return this.journalCurrentId;
}




// the first method for our mock database(journal) will be a method for adding new JournalEntry's to our database
// for this first method we can easily add a new journalEntry with the . or [''] notation but for an application a method needs to be written to make this easy


// the next method which is the first method that willl be using the assignId() function is the addJournalEntry() method
Journal.prototype.addJournalEntry = function(entry){
    entry.id = this.assignId();
    this.journalEntries[entry.id] = entry;
};

// the addJournalEntry summons the id and stores it in a new key we just created which is the entry.id(with id being the new key we created for our object manually)
// don't forget the assignId method(it only increases the journalCurrentId by 1)... So we summon this assignId() method to help us increase our mock database id by 1
// after this we store it in relationship with the id generated with this snippet of code(this.journalEntries[entry.id] = entry;) and store it in the parameter we added to 
// our function at the beginning....DON'T FORGET THAT "entry" is the parameter of our function and it has access to our journalEntry constructor


// Also I will be adding a method for finding journalEntries.... A method thata will help me out to determine a specific journalEntry all thanks to my amazing incremental  id
// let's say my journalEntries has stored 15 journal Entries(i.e 15 titles and heads for my stories or journal). If I want to access the 7th journal Entry out of the 15 my journal Entries currently store
// to do that I need a method that will help me find that specific journal Entry(which is the 7th one in this case)....This can be made possible with the id's I assigned to 15 of the stories(or journals) stored
// all I need to do is determine the id for the journal Entry I am looking for(in this case the id should be = 7 because I assign id's to each stories or journals by increasing it by 1). So the 7th story will have a unique id of 7
// and with that info I can be able to find that journal Entry

Journal.prototype.findJournalEntry = function(id){
    if(this.journalEntries[id] !== undefined){
        return this.journalEntries[id];
    }
    return false;
}


// all what I did hear is to check if the journalEntry I'm looking for is in my database, I check in relation with the unique id it has and if it is return it
// if it is not return me a boolean named "false"



// the last method for now is to delete a journalEntry

Journal.prototype.deleteJournalEntry = function(id){
    if(this.journalEntries[id] === undefined){
        return false;
    }

    delete this.journalEntries[id];
    return true
}

// first thing I did in this method is to check if the journal's id is undefined, if it is return false which will tell me that 
// that id doesn't exist, that's the if now for the else statement outside the curly I am telling Javascript to delete the journalEntry if it is 
// not undefined(if its not undefined, that means it can be found in me database) if found, use the delete keywword to delete the entire object(it deletes its keys, objects, values) 
// from the database and then return me true to confirm its been deleted



// having done the JournalEntry constructor and written some methods for it, time to work with the mock database


// the very first constructor for creating a jorunalEntry object... 
// this will be tested in README.md file(i.e manual tests) for now until I start using jest  

export function JournalEntry(title, body){
    this.title = title;
    this.body = body;

    // this will be the format for which new journalEntries will be created

}

// I can easily use a previous method I wrote that takes
// in text as parameter and I am able to determine the total amount of words but such method doesn't work with objects
// and that is why I would finetune my previous method(which only counts strings) to now be able to count numbers, and alphanumeric characters

JournalEntry.prototype.totalWordsCount =  function (){
    if(this.body.trim() === ""){
        return 0;
    }

    let entireword = 0;
    const arrayOfWords = this.body.split(" ");
    arrayOfWords.forEach( function(){ 
        entireword++
    });
    return entireword;
}

// what this is saying is: first, target this current object I'm in
// we created a new object when testing manually(object name: firstJournal)... after you've targeted this current object I'm in
// return 0 first, now I want to split with space(" ") i.e gather words( not characters) for me and store in an array
// later on I loop through this array with forEach and O increase the amount of words in the entireword variable
// A test was written and this method got successfully passed



// the next method for our journalEntry() method is a method to countMeVowels
// it will scan the entire value of the body "key" and check to see if it contains vowels and if it does, count them for me

JournalEntry.prototype.countMeVowels = function(){
    if(this.body.trim() === ""){
        return 0;
    }

    const vowelStorer = ["a", "e", "i", "o", "u"];
    const letterArray = this.body.split("");
    let vowelCounter = 0;
    letterArray.forEach( function(elements){
        if(vowelStorer.includes(elements.toLowerCase())) {
            vowelCounter++;
            return vowelCounter;
        }
    });

    return vowelCounter;
};


// the .trim() trims space outside e.g if the user enters many spaces in the code, .trim() snubs this


// what the checkMeVowels method is saying is that: 
// first trim the entire value of the "key": body and trim it without space for me and return zero if there is no single string in it(i.e "" an emoty string) 
// next I create an array detailing all vowels aeiou
// and a new letterArray variable is created to split the content of body without space("")(don't forget body is a key under the current object am in)
// then a vowelCounter is created with an initial value of 0
// finally a forEach loop is run on the letterArray to check if the already stored value of the body key contains any of my vowels
// if it includes any of my vowels, increase the vowelCounter and then return the incresed value, if not just return the vowelCounter(i.e since it will be zero if there are no vowels, then return zero for me)



// the next is a method for checkMeConsonants

JournalEntry.prototype.countMeConsonants = function(){
    if(this.body.trim() === ""){
        return 0;
    }

    const newVowelStorer = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
    const consonantLetterArray = this.body.split("");
    let consonantCounter = 0;
    consonantLetterArray.forEach( function(consonantElements){
        if(newVowelStorer.includes(consonantElements.toLowerCase())){
            consonantCounter++;
            return consonantCounter;
        }
    });

    return consonantCounter;
};


// the next is to write the getTeaser() method: a method that will 
// pick the first sentence in a story and add "....." to show the story continues
// NOTE: This method was writtten on journalEntry because its not related to our database at all but its only related 
// to the JournalEntry constructor


JournalEntry.prototype.getTeaser = function(){
    if( this.body.trim() === ""){
        return "";
    }

    const sentenceSplitter = this.body.split(".");
    let firstSplittedSentence = sentenceSplitter[0].split(" ");
    if( firstSplittedSentence.length > 8){
        firstSplittedSentence = firstSplittedSentence.slice(0, 8);
    }

    // now to join the sliced and splitted sentence into a variable

    let firstEightWordsSentence = firstSplittedSentence.join(" ");

    return firstEightWordsSentence.concat("................................");
};

// what this method is saying is that: firstly I want you to trim all spaces in this current object am in
// then return it for me with no spaces...
// next I created a constant variale sentenceSplitter and I splitted it until I got to the first "."
// me getting to the first "." tells me that its a sentence
// next I create another variable called firstSplittedSentence and the goal of this is to pick my first sentence( don't forget I have a ready made way to generate sentences)....
// All I want to do there now is to pick the first eight words before the first "."
// I used index positions to determine the first sentence[0] and then split it again with spaces to get me words
// NOTE: A FIRST . GETS ME A FIRST SENTENCE
// then I run a branch saying if the length is greater than 8 slice the remaining off and get me only 8 words
// after getting me 8 words, join them again with spaces(this converts it back to a string don't forget the .split(" ") made it an array)
// and finally I return the variable storing the joint code and concat it with "..........."

// FINALLY DONE WITH ALL THE BUSINESS LOGIC, MOVING ON TO THE UI LOgic