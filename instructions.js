/*
  => Author: Mahmoud Osman

1. Create Schema
2. Create app.js  - for app entry point
3. create modal - Post.modal.js
4. run: npm init
5. install express, mongoose and body-parser
6. setup local server using Nodejs
7. create Schema -- if you haven't done in step 1
8. import this schema into the app.js
9. create variable and acquire mongodb database






//Create mongodb collection
db.createCollection('posts')


//insert values into collection

db.posts.insert([
{
  
   title: 'Post One', 
   body: 'This is post one',
   author: 'Mahmoud Osman',
   url: 'http://www.netsansoftware.com',
   
},

{
  
   title: 'Post Two', 
   body: 'This is post two',
   author: 'Mahmoud Osman',
   url: 'http://www.netsansoftware.com',
   
}
])




// find collection

db.posts.find().pretty()


*/