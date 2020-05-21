const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    
    const duplicateNote = notes.find((note) => note.title === title)

        if (!duplicateNote) // or duplicateNote === undefined
    {
        notes.push({
            title: title,
            body: body
        })
        
        saveNotes(notes)
        console.log(chalk.bold.bgGreen('New note added!'))
    }
    else {
        console.log(chalk.bold.bgRed('Note title taken!'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()

    const selectedNote = notes.filter((note) => note.title == title)

    if (selectedNote.length !== 0)
    {
       const notesToKeep = notes.filter(function(note) {
           return note.title !== title
       })

       saveNotes(notesToKeep)
        console.log(chalk.bold.bgGreen('Note removed!'))
    }
    else {
        console.log(chalk.bold.bgRed('No note found!'))
    }

}

const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.inverse('Your notes'))

    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    
    const selectedNote = notes.find((note) => note.title === title)

    if(selectedNote)
    {
        console.log(chalk.inverse(selectedNote.title))
        console.log(selectedNote.body)
    }
    else 
    {
        console.log(chalk.red('No note found!'))
    }
}

const saveNotes = (notes) => {
    //turning JSON notes into string
    const dataJSON = JSON.stringify(notes)

    //writing new notes string to notes.json
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        //getting contents of notes'json as a string
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()

        //returning it as JSON
        return JSON.parse(dataJSON)
    }
    catch (e) {
        //if notes.json is empty, return empty array
        return []
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}