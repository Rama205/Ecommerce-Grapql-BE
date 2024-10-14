//post create user
// {
//     "query": "mutation { register(username: \"tody \", email: \"Toby@gmail.com\", password: \"password123\") { id username email } }"
// }
//get user
// {
//   "query": "{ user(id: \"670b7fc2b5b81c8013f9a621\") { id username email } }"
// }

//update user
// {
//   "query": "mutation { updateUser(id: \"670b7fc2b5b81c8013f9a621\", username: \"Trooby\", email: \"Trooby@gmail.com\") { id username email } }"
// }

//delete a user
// {
//   "query": "mutation { deleteUser(id: \"<USER_ID>\") { id username email } }"
// }

//PRODUCT -create
// {
//   "query": "mutation { createProduct(name: \"Airpod\", description: \"Eyer bud\", price: 999.99, stock: 10) { id name description price stock } }"
// }

//Get All Products (Query)
// {
//   "query": "{ products(page: 1, limit: 10) { id name description price stock } }"
// }


//Get a Product by ID (Query)
// {
//   "query": "{ product(id: \"670beddbb5b81c8013f9a625\") { id name description price stock } }"
// }

//Update a Product (Mutation)
// {
//   "query": "mutation { updateProduct(id: \"670beddbb5b81c8013f9a625\", name: \"HP Laptop\", description: \"Updated laptop\", price: 3099.99, stock: 5) { id name description price stock } }"
// }


//Delete a Product (Mutation)
// {
//   "query": "mutation { deleteProduct(id: \"670beddbb5b81c8013f9a625\") { id name } }"
// }

//Order APIs
//for multiple products
// {
//   "query": "mutation { createOrder(userId: \"<USER_ID>\", productIds: [\"<PRODUCT_ID1>\", \"<PRODUCT_ID2>\"], quantities: [1, 2]) { id user { id username } products { name } total } }"
// }

//for single products
{
  "query": "mutation { createOrder(userId: \"670ca99cad605612d1015782\", productIds: [\"670caa3ead605612d1015784\"], quantities: [1]) { id user { id email } products { id name } total } }"
}



//Get an Order by ID (Query)
// {
//   "query": "{ order(id: \"<ORDER_ID>\") { id user { id username } products { name } total } }"
// }

// List All Orders for a User (Query)
// {
//   "query": "{ userOrders(userId: \"<USER_ID>\") { id products { name } total } }"
// }



