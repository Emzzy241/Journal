# THE JOURNAL APP 1.0

#### made by Mojiboye Emmanuel

### An application where users can add in multiple journals with titles and have it saved for them in my amazing mock database

### Technologies Used
* Git
* Html
* CSS
* Webpack
* Javscript 
* jQuery
* JavaScript Mock database
* Jest

### Description
_In this app you get a lot of fun and its all thanks to JavaScript, imagine if you have a really long essay on your computer and you want to have it saved somewhere, look no further as this applicaion can help achieve that goal_

## Setup/Installation
* _Clone the Project(git clone _REPOSITORY NAME_)_
* _RUn "npm install" in the git bash Terminal_
* _RUn "npm run build" in the git bash Terminal_
* _Application will be run on a localhost_
* _And then voila you cn now play the game_
_Note: the website is designed to run on a web browser just be sure you have one. _

## Known Bugs
* _No detected bugs_
_Note: as at the launch of this Application(15/10/22) there are no bugs but this is not the finished product as I will be adding more features if anyone comes in contact with a bug, be sure to hit me up on social media or email me @emzzyoluwoe@gmail.com WATCH OUT FOR VERSION 1.1 WHICH IS COMING SOON  _

## WEBSITE LINK
https://emzzy241.github.io/ToDo-List/

## License 
Licensed under the GNU General Public License 
© 2022 _by Mojiboye Emmanuel_ All Rights Reserved.

## Contact
_Connect with me @Emmanuel.9944 on instagram and on all other social media pages all @Emmanuel Oluwole_





















































































































### ALL MANUAL TESTS FOR MY APPLICATION


<!-- so here is how my application goes, I will need to write a constructor and inside that constructor I will add the following

1) In cremental id's: this is to differentiate one journal from another

2) a place where all of this journal's gets stored: this will be a mock database. Thanks to the help of global variables, this can be done

Now having considered the two keys I will be adding to my mock database, I will like to highlight all of the methods that will be written for the constructor

1) A method for assigning id's: what this will be doing is to increase the id inside of the mock database by one every single time the user adds in another journalentry

2) A method for finding id's: this method will be very useful in the sense that it will be helping me find a journalentry's id..... Let's say user enters in 5 journalentrys(It can be story or anything) and then user says he/she wants to view the 3rd journalentry with this method I am able to find a specific id which is the 3rd id for the user and show user the contents of that id

3) A method for adding journalentry's: this is essential as it helps users to add in more journal's which is really fun :)

4) A method for editing a journalentry: this makes it possible for users to be able to edit a specific journalentry... Don't forget a journalentry in my code just means every new journal's added to my amazing mock database

5) A method for deleting a journalEntry: this method will be able to delete a specific journalEntry. So when a user made a mistake and wants to edit a journalEntry, With a button I will be configuring later deleting can be made possible



NOW AFTER I HAVE OUTLINED ALL THE METHODS I NEED FOR MY CONSTRUCTOR, LET ME START OUTLINING THE METHODS NEEDED FOR MY JOURNALENTRY

1) A method for counting the total words: with this method I am able to show user some amazing things like the total amount of words user's journal contains

2) The second method will be to count vowels: in the task I am told to write methods that will count the total amount of vowels in a journal for my users

3) The third method will be to count vowels: in the task I was also asked to do this and I will be doing it for my users

4) The third will be a method to getTeaser: and this method is responsible for picking out the first sentence in a journal(To be really specific the method picks out the first 8 words in a journal), show it to user and then add "....." when user then click on the "...." it will display the entire journal


I WILL STILL BE ADDING MORE FUNCTIONALITIES LIKE BUILDING OUT A FULLY FLEDGED ENVIRONMENT FOR MY USERS SO THEY CAN GET ACCESS TO MY SITE EASILY AND ADD MANY OTHER FEATURES ALONG THE WAY AS I LEARN MORE


  -->

  <!-- HAVING OUTLINED ALL METHODS TO BE WRITTEN LET'S TEST THOSE METHOD MANUALLY FOR NOW UNTIL WE USE THE TESTING FRAMEWORK(JEST) -->

Describe: JournalEntry() function

Test: it will test if we can create new journalEntries and view them with the dot notation

Code: 
    let firstJournal = new JournalEntry("The story of my life", "Once upon a time in the land of the living I experienced a shocker in my life although....");

ExpectedOutput:
    when we type 
    firstJournal.title it must be equal to  "The story of my life"

    and when we type: 
    firstJournal.body it must be equal to "Once upon a time in the land of the living I experienced a shocker in my life although...."

<!-- First test written and code written to pass, moving on to the next test -->

<!-- the next is a method on the JournalEntry constructor for counting the total words stored in the key(body).... i.e this method will count the entire value stored in the key: "body" -->

Describe: totalWordsCount() method

Test: a method that will count the entire value stored in the body key of the constructor: JournalEntry()

Code:
    let firstJournal = new JournalEntry("The story of my life", "Once upon a time in the land of the living I experienced a shocker in my life although");

    firstJournal.totalWordsCount();

Expected Output: It will return 18 which is the total amount of words in the body(note, body here is a key and this method is to count the amount of value(words) inside this key) value


<!-- Second test written and code written to pass, moving on to the next test -->


<!-- THe next test is to check for vowels in the key "body" for this current object I'm in irrespective of case sensitivity(i.e it will count both capital letter I and small letter i) -->

Describe: countMeVowels() method

Test: a method that will be able to access this current object I'm in and then check the value of the body key to find out if there are any vowels in there 

Code:
    let thirdJournal = new JournalEntry("The story of my life", "Yo yo yo Once upon a time");
    
    thirdJournal.countMeVowels();


Expected Output:
    It should return me 10 which is the total number of vowels characters in my "body" key
    

<!-- Third test written and code written to pass, moving on to the next test -->


<!-- The next test is a test to check for consonants in the body key of my JournalEntry... i.e I want to write and test a method that will countMeVowels -->



Describe countMeConsonants() method

Test: A method that will scrutinize the body of my JournalEntry and check to see how many consonant characters are in there 

Code:
    let thirdJournal = new JournalEntry("The story of my life", "Yo yo yo Once upon a time");
    
    thirdJournal.countMeConsonants();

Expected Output:
    It should return the number of consonants which is 9
    
<!-- Yay my method works, Im moving on to the next test.... -->


<!-- the next test is to check if the getTeaser method works and can be called on the JournalEntry constructor -->

Describe: getTeaser() method

Test: a method to pick the first sentence in a story, and if the first sentence has more than 8 words, it picks the first 8 words alone and the other words are represented with a "......."

Code: 
    let secondJournal = new JournalEntry("The story of my life", "Once upon a time in the land of the living I experienced a shocker in my life although. When I say shocker I really do mean a big big big shocker, I got blocked by some guys in a Street that were armed and I was scared");

    secondJournal.getTeaser();

Expected Output:
    I expect my code to return 'Once upon a time in the land of ........'
    
<!-- Fourth test written and code written to pass, moving on to the next test -->

<!-- Now I am finally done with all the methods for my JournalEntry constructor, off to the methods for my journal database -->

<!-- The first method for my mock database is the method for adding new journal Entries, let me now write a test to be very sure my method's working -->


Describe: addJournalEntry();

Test: It will check to see if the method can really assign id to a specific JournalEntry(to access that JournalEntry we need to do so with the incremental id's we instantiates), after it assigns a specific journalEntry an id like the name suggests, it will add that journalEntry to the this.journalEntries(a.k.a our mock database real location) which is the place where we will be storing each JournalEntries

Code:
    let secondJournal = new JournalEntry("The story of my life", "Once upon a time in the land of the living I experienced a shocker in my life although. When I say shocker I really do mean a big big big shocker, I got blocked by some guys in a Street that were armed and I was scared");

     let thirdJournal = new JournalEntry("The story of my life", "Yo yo yo Once upon a time");

     let firstJournal = new JournalEntry("The story of my life", "Once upon a time in the land of the living I experienced a shocker in my life although");

<!-- To test this we need to instantiate our journal all thanks to global variable(this makes the creation of a mock database easy) -->
    let newJournal = new Journal();

<!-- adding all of the journals to our database now -->
    newJournal.addJournalEntry(secondJournal);
    newJournal.addJournalEntry(thirdJournal);
    newJournal.addJournalEntry(firstJournal);

<!-- both the Journal constructor and the JournalEntry constructor work hand in hand and that is why we're still using (new JournalEntry) because we are creating a new JournalEntry and it shouldn't be anything like (new Journal) because our mock database has no format for creating the title and body keys..... It only has things in it that ensures the storage takes place and there are difference between the JournalEntry thanks to our unique incremental id's -->

Expected Output: 
{1: JournalEntry, 2: JournalEntry, 3: JournalEntry}

and we can dive deeper and access each entry like this 
so if we do: 
newJournal.journalEntries['3'];
It will show us the entirety of the journalEntry with the id of 3


<!-- Fifth test written and code written to pass, moving on to the next test -->

<!-- The next is to add a findJournalEntry() method that will find a a journal entry for me -->

Describe: findJournalEntry(); method

Test: It will scan our mock database and search for a journal entry you want it to search for but to do this you need to add in the id of that journal entry you're looking for

Code:
     let thirdJournal = new JournalEntry("The story of my life", "Yo yo yo Once upon a time");

    let secondJournal = new JournalEntry("The story of my life", "Once upon a time in the land of the living I experienced a shocker in my life although. When I say shocker I really do mean a big big big shocker, I got blocked by some guys in a Street that were armed and I was scared");

    let firstJournal = new JournalEntry("The story of my life", "Once upon a time in the land of the living I experienced a shocker in my life although");

    let newJournal = new Journal();

<!-- adding the journals to the database again because its been recreated with the let newJournal = new Journal();..... Let us populate our database now -->

    newJournal.addJournalEntry(secondJournal);
    newJournal.addJournalEntry(thirdJournal);
    newJournal.addJournalEntry(firstJournal);

    newJournal.findJournalEntry(2); or 
    newJournal.findJournalEntry("2");

Expected Output:
    The secondJournal has the id 2 so I expect the entire object in the secondJournal variable(datatype is object remember) to get shown to user

<!-- after that I can now access any key I want in that object(don't forget the constructor for this object takes only 2 parameters so you can only access those two at a time) like this: -->

    newJournal.findJournalEntry(2).title; or
    newJournal.findJournalEntry(2).body; or with the square bracket notation like this

    newJournal.findJournalEntry(2)['body']; or
    newJournal.findJournalEntry("2")['title'];

<!--  NOTE IF YOU CHECK FOR THIS WITHOUT USING THE addJournalEntry method to add in journal entries you'll get a false because you reinstantiated with the let newJournal = new Journal();
// and everytime we reinstantiate all of the items in the database gets cleaned out and that is why we need to use .addJournalEntry to add in those journalEntries again or you can also add in new ones too -->

<!-- to recap a bit again: the code 
newJournal.findJournalEntry(2); is finding me a journal Entry with an id 2 -->


<!-- Sixth test written and code written to pass, moving on to the next test -->


<!-- the last method for my business logic for now is the deleteJournalEntry -->

Describe: deleteJournalEntry(); method

Test: It will check to see if a journal entry exists, if user runs the deleteJournalEntry() method on an object created with our journalEntry constructor it will first check if that object exists in the database, if it does exist delete it for me and return me true to confirm its deleted, if it doesn't exist nothing should get deleted and onluy return me a false that will tell me my journal entry doesn't exist(don't forget we can access objects stored in with the unique incremental id's given to them)

Code:
    let firstJournal = new JournalEntry("The story of my life", "Once upon a time in the land of the living I experienced a shocker in my life although");

    let secondJournal = new JournalEntry("The story of my life", "Once upon a time in the land of the living I experienced a shocker in my life although. When I say shocker I really do mean a big big big shocker, I got blocked by some guys in a Street that were armed and I was scared");

    let thirdJournal = new JournalEntry("The story of my life", "Yo yo yo Once upon a time");

<!-- first I reinstantiate the journal's entry and add this journal entries into my database -->
    let newJournal = new Journal();

    newJournal.addJournalEntry(firstJournal);
    newJournal.addJournalEntry(secondJournal);
    newJournal.addJournalEntry(thirdJournal);

<!-- and then I run my delete method to check if what I wrote works to get my method passed -->

    newJournal.deleteJournalEntry(2);

Expected Output:
    the entire object secondJournal gets deleted from my mock database..... When I try to check it with:
    newJournal.journalEntries; 
    the secondJournal is deleted.... as a little extra I can still try to find the journal entry and it returns false because its deleted, its id is deleted, its keys are deleted and everything is deleted all thanks to my beautiful method

<!-- Note: Even though we successfully deleted the id(and the entire thing in that id) of one of the objects created with the journalEntry constructor the id of that object can never be repeated because they increase by 1... that is to say that even the object with the id 2 gets deleted if we add in other objects to tehdatabase, my beautiful database won't go back to use a 2 as an id for any new object created and that is just the way a realmlife database works  -->