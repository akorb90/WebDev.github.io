console.log("Starting")

// create array containing objects with quote date
const messages = [
    {
        ID: 1
        ,message: "Be yourself; everyone else is already taken."
        ,author: "Oscar Wilde"
    },
    {
        ID: 2
        ,message: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."
        ,author: "Albert Einstein"
    },
    {
        ID: 3
        ,message: "So many books, so little time."
        ,author: "Frank Zappa"
    },
    {
        ID: 4
        ,message: "A room without books is like a body without a soul."
        ,author: "Marcus Tullius Cicero"
    },
    {
        ID: 5
        ,message: "You only live once, but if you do it right, once is enough."
        ,author: "Mae West"
    },
    {
        ID: 6
        ,message: "Be the change that you wish to see in the world"
        ,author: "Mahatma Gandhi "
    },
]

const randomNumber = Math.floor(Math.random() * 6) 

console.log(`Printing quote with ID ${messages[randomNumber].ID}`)
console.log(messages[randomNumber].message)
console.log(messages[randomNumber].author)


console.log("Finished")