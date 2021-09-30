// const book1 = {
// 	name : "Война и мир",
// 	pages ։ 1024

// }

// const book2 = {
// 	name : "shdj jsdh",
// 	pages : 512
// }


function ParentFunction(bookName, bookPages) {

	this.name = bookName
	this.pages = bookPages

	this.functionName = function(){return console.log(this.name, this.pages)}

	
}

const book1 = new ParentFunction("Война и мир", 1024)
const book2 = Object.create(ParentFunction)
book2.name_1 = "some_name"
book2.pages = 234
console.log(book1.functionName())
