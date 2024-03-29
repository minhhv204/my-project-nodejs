import Book from "../models/BookModel.js";

class BooksController {
  // GET '/'
  async getAllBooks(req, res) {
   try {
    const books = await Book.find();
    res.status(200).json({
      message: "Get All Books Done",
      data: books,
    });
   } catch (error) {
    res.status(400).json({message: error})
   }
  }

  // GET '/:id'
  async getBookDetail(req, res) {
    // lab 2 get
    try {
      const books = await Book.findById(req.params.id);
      if (!books) {
        return res.status(404).json({
          message: "Book Not Found",
        });
      }
      res.status(200).json({
        message: "Get Book Detail Done",
        data: books,
      });
     } catch (error) {
      res.status(400).json({message: error})
     }
  }

  // POST '/'
  async createBook(req, res) {
    try {
      const books = await Book.create(req.body);
      res.status(200).json({
        message: "Create Book Done",
        data: books,
      });
     } catch (error) {
      res.status(400).json({message: error.message})
     }
    // Model.create({data})
    // Book.create({
    //   title: "Book 2",
    //   description: "description 2",
    //   author: "author ",
    //   image: "image 2",
    //   price: 1,
    //   rate: 2,
    // });
    
    // res.send("Create Books");
  }

  // PUT '/:id'
  async updateBook(req, res) {
    try {
      const books = await Book.findByIdAndUpdate(req.params.id, req.body, {new:true,});
      if (!books) {
        return res.status(404).json({
          message: "Book Not Found",
        });
      }
      res.status(200).json({
        message: "Update Book Done",
        data: books,
      });
     } catch (error) {
      res.status(400).json({message: error.message})
     }
    
  }

  // DELETE '/:id'
  async deleteBook(req, res) {
    try {
      const books = await Book.findByIdAndDelete(req.params.id);
      if (!books) {
        return res.status(404).json({
          message: "Book Not Found",
        });
      }
      res.status(200).json({
        message: "Delete Book Done",
        data: books,
      });
     } catch (error) {
      res.status(400).json({message: error})
     }
  }
}

export default BooksController;