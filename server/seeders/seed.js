const db = require('../config/connection');
const { User, Team, Post, Comment } = require('../models');
const userSeeds = require('./userSeeds.json');
const teamSeeds = require(',/teamSeeds.json')
const postSeeds = require('./postSeeds.json')
const commentSeeds = require('./commentSeeds.json')

// connection.on("error", (err) => err);

// connection.once("open", async () => {
//   console.log("connected");
//   let userCheck = await connection.db
//     .listCollections({ name: "User" })
//     .toArray();
//   if (userCheck.length) {
//     await connection.dropCollection("User");
//   }

//   let teamCheck = await connection.db
//     .listCollections({ name: "Team" })
//     .toArray();
//   if (teamCheck.length) {
//     await connection.dropCollection("Team");
//   }

//   let postCheck = await connection.db
//     .listCollections({ name: "Post" })
//     .toArray();
//   if (postCheck.length) {
//     await connection.dropCollection("Post");
//   }

//   let commentCheck = await connection.db
//     .listCollections({ name: "Comment" })
//     .toArray();
//   if (commentCheck.length) {
//     await connection.dropCollection("Comment");
//   }

//   // create users
//   const User = await User.insertMany(userSeedData);

//   //create teams
//   const Team = await Team.insertMany(teamSeedData);

//   for (let i = 0; i < Team.length; i++) {
//     // Add thoughts to user
//     await User.findOneAndUpdate(
//       { username: thoughts[i].username },
//       { $push: { thoughts: thoughts[i]._id } },
//       { new: true }
//     );
//     }

//   //create posts
//   const Post = await Post.insertMany(postSeedData);

//   //create teams
//   const Comment = await Comment.insertMany(commentSeedData);

//     console.table("Users seeded:", await User.find());
//     console.table("Team seeded:", await Team.find());
//     console.table("Post seeded:", await Post.find());
//     console.table("Comment seeded:", await Comment.find());
//     console.info("Seeding complete! 🌱");
//     process.exit(0);
//   });
    