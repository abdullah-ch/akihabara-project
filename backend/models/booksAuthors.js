const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/akihabara-project", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("DataBase has been connected !"))
  .catch((err) => console.log("Cannot connect to database", err.message));

const bookSchema = new mongoose.Schema({
  bookName: {
    type: String,
  },
  rating: {
    type: Number,
  },
  genre: {
    type: String,
  },
});

const Books = mongoose.model("Books", bookSchema);

const authorSchema = new mongoose.Schema({
  authorName: {
    type: String,
  },

  book: {
    type: new mongoose.Schema({
      bookName: {
        type: String,
      },
      rating: {
        type: Number,
      },
      genre: {
        type: String,
      },
    }),
  },
});

const Authors = mongoose.model("Authors", authorSchema);

async function createBook(bookName, rating, genre) {
  var book = new Books({
    bookName: bookName,
    rating: rating,
    genre: genre,
  });

  await book.save();
  console.log(book);
}

async function createAuthor(authorName, bookId) {
  var book = await Books.findById(bookId);

  var author = new Authors({
    authorName: authorName,
    book: {
      bookName: book.bookName,
      rating: book.rating,
      genre: book.genre,
    },
  });

  author.save();
  console.log(author);
}

async function editBook(bookId, bookName, rating, genre) {
  try {
    console.log("ID IS", bookId);
    var book = await Books.findById(bookId);
    console.log("Book is", book);
    book.set({
      bookName: bookName,
      rating: rating,
      genre: genre,
    });

    await book.save();

    console.log(book);
    return book;
  } catch (err) {
    console.log(err.message);
  }
}

async function editAuthor(
  authorId,
  bookId,
  authorName,
  bookName,
  rating,
  genre
) {
  console.log("ID IS", bookId);
  var book = await Books.findById(bookId);
  console.log("Book is", book);

  book.set({
    bookName: bookName,
    rating: rating,
    genre: genre,
  });
  await book.save();

  console.log(book);

  console.log("BBruhhhhhhhhhhh", book);
  var author = await Authors.findById(authorId);

  author.set({
    authorName: authorName,
    book: {
      bookName: book.bookName,
      rating: book.rating,
      genre: book.genre,
    },
  });

  await author.save();
  console.log(author);
}

async function deleteAuthor(authorId) {

  var author = await Authors.deleteOne({
    _id: authorId
  });

  console.log(author);
}

//createBook("Vdadsadas", 5, "drama");

createAuthor("John Greene", "5edb68d6ce839851e87455f3")

//editBook("5edb68c0f93aac40040c7f29", "Manto ki Kahani 2", 10, "Falsafa 2");

// editAuthor(
//   "5edb6a8c07dfaf570c35c8cd",
//   "5edb68c0f93aac40040c7f29",
//   "john green",
//   "Fault in our start",
//   10,
//   "romance"
// );

//deleteAuthor("5edb6a8c07dfaf570c35c8cd");