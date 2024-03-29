import Category from "../models/CategoryModel.js";

class CategorysController {
  // GET '/'
  async getAll(req, res) {
   try {
    const Categorys = await Category.find();
    res.status(200).json({
      message: "Get Category Books Done",
      data: Categorys,
    });
   } catch (error) {
    res.status(400).json({message: error})
   }
  }

  // GET '/:id'
  async getCategoryDetail(req, res) {
    // lab 2 get
    try {
      const Category = await Category.findById(req.params.id);
      if (!Category) {
        return res.status(404).json({
          message: "Category Not Found",
        });
      }
      res.status(200).json({
        message: "Get Category Detail Done",
        data: Category,
      });
     } catch (error) {
      res.status(400).json({message: error})
     }
  }

  // POST '/'
  async createCategorys(req, res) {
    try {
      const Categorys = await Category.create(req.body);
      res.status(200).json({
        message: "Create Categorys Done",
        data: Categorys,
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
  async updateCategorys(req, res) {
    try {
      const Categoryss = await Categorys.findByIdAndUpdate(req.params.id, req.body, {new:true,});
      if (!Categoryss) {
        return res.status(404).json({
          message: "Categorys Not Found",
        });
      }
      res.status(200).json({
        message: "Update Categorys Done",
        data: Categoryss,
      });
     } catch (error) {
      res.status(400).json({message: error.message})
     }
    
  }

  // DELETE '/:id'
  async deleteCategorys(req, res) {
    try {
      const Categoryss = await Categorys.findByIdAndDelete(req.params.id);
      if (!Categoryss) {
        return res.status(404).json({
          message: "Categorys Not Found",
        });
      }
      res.status(200).json({
        message: "Delete Categorys Done",
        data: Categorys,
      });
     } catch (error) {
      res.status(400).json({message: error})
     }
  }
}

export default CategorysController;