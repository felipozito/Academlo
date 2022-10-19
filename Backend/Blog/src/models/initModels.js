const Users = require("./users.models");
const Post = require(".//post.models");
const Categories = require("./categories.models");

const initModels = () => {
      Post.belongsTo(Users);
      Users.hasMany(Post);

      Post.belongsTo(Categories);
      Categories.hasMany(Post);
};

module.exports = initModels;
