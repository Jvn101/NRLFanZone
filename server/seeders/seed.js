const db = require('../config/connection');
const { User, Team, Post, Comment } = require('../models');
const userSeeds = require('./userSeeds.json');
const teamSeeds = require('./teamSeeds.json')
const postSeeds = require('./postSeeds.json')
const commentSeeds = require('./commentSeeds.json')

db.on("error", (err) => err);

db.once("open", async () => {
  console.log("connected");
  await User.deleteMany()
  await Team.deleteMany()
  await Post.deleteMany()
  await Comment.deleteMany()
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
await User.insertMany(userSeeds);
console.table("Users seeded:", await User.find());

//   //create teams
  const Teamdata = await Team.insertMany(teamSeeds);

//   for (let i = 0; i < Team.length; i++) {
//     // Add thoughts to user
//     await User.findOneAndUpdate(
//       { username: thoughts[i].username },
//       { $push: { thoughts: thoughts[i]._id } },
//       { new: true }
//     );
//     }

//   //create posts
  const postsWithIds = postSeeds.map(post=> { return {...post, team: Teamdata[Math.floor(Math.random()*Teamdata.length)]._id}})
await Post.insertMany(postsWithIds);

//   //create teams
await Comment.insertMany(commentSeeds);

   
    console.table("Team seeded:", await Team.find());
    console.table("Post seeded:", await Post.find());
    console.table("Comment seeded:", await Comment.find());
    console.info("Seeding complete! 🌱");
    process.exit(0);
  });
    