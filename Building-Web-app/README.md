# Node.js Coursera Assignment no. 4

## Instructions

**Assignment Overview**

In this assignment, you will be extending the router to support the ability to save and retrieve a list of favorite dishes by each of the registered users. All registered users in the system should have the ability to save any dish as their favorite dish, retrieve all their favorite dishes and remove one or all their favorite dishes. At the end of this assignment, your should have completed the following:

*   Allowed users to select a dish as their favorite, and add it to the list of favorites that are saved on the server.
*   Allowed users to retrieve the list of their favorite dishes from the server
*   Delete one or all of their favorite dishes from their favorites list on the server.

**Assignment Requirements**

In this assignment, you will be supporting a new route https://localhost:3443/favorites, where the users can do a GET to retrieve all their favorite dishes, a POST to add a dish to their favorites, and a DELETE to delete the list of their favorites. In addition, the users should have the ability to issue a DELETE request to [https://localhost:3443/favorites/](https://localhost:3443/favorites/<dish_id>)dishObjectId and delete the specific dish from the list of their favorite dishes.

Furthermore, when the user's token is checked in _verifyOrdinaryUser()_ function, it will load a new property named _decoded_ to the _request_ object. From this _req_ object, you can obtain the user's ObjectId by using the following expression. You can use this to identify the user:

    req.decoded._doc._id

This assignment consists of three Tasks

### Task 1
In this task you will be implementing a new Mongoose schema named favoriteSchema, and a model named Favorites in the file named favorites.js in the models folder. This schema should take advantage of the mongoose population support to populate the information about the user and the list of dishes when the user does a GET operation.

### Task 2
In this task, you will implement the Express router() for the '/favorites' URI such that you support GET, POST and DELETE operations

When the user does a GET operation on '/favorites', you will populate the user information and the dishes information before returning the favorites to the user.
When the user does a POST operation on '/favorites' by including {"_id":"dish ObjectId"} in the body of the message, you will (a) create a favorites document if such a document corresponding to this user does not already exist in the system, (b) add the dish specified in the body of the message to the list of favorite dishes for the user, if the dish does not already exists in the list of favorites.
When the user performs a DELETE operation on '/favorites', you will delete the list of favorites corresponding to the user
When the user performs a DELETE operation on '/favorites/dishObjectId', then you will remove the specified dish from the list of the user's favorite dishes.

### Task 3
You will update app.js to support the new '/favorites' route.


## Short manual on how to use the app
Steps required are:
### I. Create the private.key and cert.pem
cd into the `~/<path-to-server>/bin` directory of the server and type:
```
$ openssl genrsa 1024>private.key
$ openssl req -new -key private.key -out cert.csr
$ openssl x509 -req -in cert.csr -signkey private.key -out certificate.pem
```
During the questions of the last step, just fill it in at random, because we are just testing.


### II. Run the app
1. Start MongoDB `mongod --dbpath=data` mongod can be run from anywhere, but the `dbpath` must be correct
2. Empty the database with `mongo conFusion --eval "db.dropDatabase();"`
3. cd into the folder where the server resides and then type `npm start`
4. Fire up Postman from Chrome then from: https://localhost:3443/users/register
5. Start registering users by doing a POST
(a) first an ordinary user
```
{
”username”: ”Pipolo”,
”password ”: ”abcdef”
}```
(b) and then register the administrator:
```
{
”username”: ”admin”,
”password ”: ”abcdef”
}```
6. Start a new shell and type `mongo` to start the Repl shell
7. In the mongodb server type `use conFusion` (conFusion is the database
we set up)
8. Next type `db.users.find().pretty()` to see the list of users
9. Turn admin flag to true `db.users.update({username:"admin"},{$set:{admin:true}});`
10. Obtain token by logging in. POST on https://localhost:3443/users/login
```
{
”username”: ”Pipolo”,
”password ”: ”abcdef”
}```

11. Save the token for the ordinary user to a text file
12. To perform a GET operation, in the Header type `x-access-token` and paste the token
13. To perform POST, DELETE operation you need to login as adim, obtain token and repeat previous step. So log in as admin and save token to a text file. Note that the delete operation has to be done from an ordinary text instead of JSON
14. Insert with POST a couple of dishes
15. Delete with DELETE a dish by giving it the ”id” hash https://localhost:3443/dishes/56de4b122.....`
16. Query for user information by a GET request https://localhost:3443/users/
