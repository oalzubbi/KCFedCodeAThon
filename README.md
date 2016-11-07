# KCFedCodeAThon
# Team Members:
# Omar Alzubbi
# Justin Lee
# Stephen Wiss
# Liia Butler
# Paul McElroy

Our goal was to create a social media platform connecting people to community involvement opportunities. To our knowledge, there is no dedicated social media application for people to improve their community. We wanted to create a space where people can self-organize into groups to build connections and strengthen their community through projects. Our application aggregates postings by community members and allows others in the community to join. For example, if someone wanted to organize a walkathon for charity, they could make a post about it using our application. The application has two main components: the project aggregator and the user profile.



The project aggregator is the primary feature of the application. This feature allows users to create postings of projects or events. Some examples could include: sports events to raise awareness for a cause, charity events to raise money, or something as simple as getting people together to plant a community garden. After the user creates a post, other users in the same area will see the posts and can choose to join the event. Each post will contain the date and time of the event, a description, who is organizing it, and a list of users who will attend the event.

The second aspect of the application is the user profile. This functions similarly to many other social media platforms but with a few differences that set it apart. Users can share their name, photo, skills, affiliations and a biography of themselves. Their profile will also display things like how many years they have been active, and past events or projects that the user has participated in through the application. We also wanted to make community improvement fun, so we added a badge system to introduce an element of gamification. For example, users can earn badges based on the number of projects they’ve completed or total hours spent volunteering. These badges will also be displayed on their profile.

# Technical aspects used to achieve the above:

-Node.js 
  Node.js is a web development platform written entirely in Javascript with a robust interface between server and client. 
-MySQL 
  All of the Users' information and the post contents were stored to databases queried using the npm_mysql module in NODE.
-Express.js 
  A node.js streamlining tool that allows for easier implementation of user-written middleware and  works as a useful template to write scalable node projects. 
-Passport.js
  We used this module to authenticate users and manage sessions. The site is obviously dynamic and appears different in certain       aspects to different users.
-Npm_mysql 
  This module allows for connection and the query of Sql databases. Node generally works better with mongoDB or SQLite but we got creative and found a way to use the EECS department MYSQL servers to host our data.
-Bcrypt 
  Module that allows for hashing of passwords. For added security 
# How to Use 
  -clone the repository
  -navigate into the myApp directory from the command line
  -to start the server, enter the command npm start
  -in your browser, go to localhost:3000
  -enjoy!
  
# Here is the link to our project presentation video:
# http://www.youtube.com/watch?v=taUfxiyY1a0
 
