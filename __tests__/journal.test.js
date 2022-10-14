import Journal from "./../src/journal.js";
import JournalEntry from "./../src/journal.js"

describe("JournalEntry", () =>{
    
    test("should add a new journal with title and parameter when user clicks submit button with a journal in it", () =>{
        const testJournal = new JournalEntry("Story Time", "The full fledged story of the monster called amron, once upon a time. They say time time in School");

        expect(testJournal.title).toEqual("Story Time");
        expect(testJournal.body).toEqual("The full fledged story of the monster called amron, once upon a time. They say time time in School");
    });
});