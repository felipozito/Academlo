const { DataTypes } = require("sequelize");
const db = require("../utils/database");
const Users = require("./users.models");
const Categories = require("./categories.models");

const Post = db.define("post", {
      id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
      },
      title: {
            type: DataTypes.STRING,
            allowNull: false,
      },
      conten: {
            type: DataTypes.TEXT,
            allowNull: false,
      },
      createBy: {
            type: DataTypes.UUID,
            allowNull: false,
            field: "created_by",
            references: {
                  model: Users,
                  key: "id",
            },
      },
      categoryId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "category_by",
            references: {
                  key: "id",
                  model: Categories,
            },
      },
});

module.exports = Post;
