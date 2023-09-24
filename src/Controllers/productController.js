const ProductModel = require("../model/ProductModel")



exports.CreateProduct = async (req, res) => {
    const reqBody = req.body;
    const data = await ProductModel.create(reqBody);
    if (data) {
      return res.status(200).json({ status: "Success", data: data });
    } else {
      return res.status(400).json({ status: "Failed"});
  }
  };

  exports.ReadProduct = async(req, res) => {
    const Quarry = {};
    const Projection =
      "ProductName ProductCode ProductImg UnitPrice Quantity TotalPrice";
   const read =await ProductModel.find(Quarry, Projection)
      if (read) {
       res.status(200).json({ satus: "Read Successs", data:read });
      } else {
        
        res.status(404).json({ status: "Read Fail", data: err });
      }
    };


 exports.UpdateProduct = async(req, res) => {
   const id = req.params.id;
   const Query = { _id: id };
   const reqBody = req.body;
   const update =await ProductModel.updateOne(Query, reqBody)
     if (update) {
       res.status(200).json({ satus: "Update Success", data: update });
     } else {      
      res.status(404).json({ satus: "Update Fail", data: err });
     }  
 };
 
 
 exports.DeletProduct =async (req, res) => {
   const id = req.params.id;
   const Query = { _id: id };
  const delet = await ProductModel.deleteOne(Query)
     if (delet) {
       res.status(200).json({ satus: "Remove Success", data: delet });
     } else {      
       res.status(404).json({ satus: "Remove Fail", data: err });
     }  
 };