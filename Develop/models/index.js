// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category)
// Categories have many Products
Category.hasMany(Product)
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(ProductTag) //ask in class
// Tags belongToMany Products (through ProductTag)
TimeRanges.belongsToMany(ProductTag) //ask in class

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
