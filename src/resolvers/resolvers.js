const userController = require('../controllers/userController');
const productController = require('../controllers/productController');
const orderController = require('../controllers/orderController');

const resolvers = {
  Query: {
    users: async () => userController.getUserById(),
    user: async (_, { id }) => userController.getUserById(id),

    products: async (_, { page, limit }) => productController.listProducts(page, limit),
    product: async (_, { id }) => productController.getProductById(id),

    orders: async (_, { userId }) => orderController.listOrdersForUser(userId),
    order: async (_, { id }) => orderController.getOrderById(id),
  },
  Mutation: {
    register: async (_, { username, email, password }) => userController.register({ username, email, password }),
    updateUser: async (_, { id, username, email }) => userController.updateUser(id, { username, email }),
    deleteUser: async (_, { id }) => userController.deleteUser(id),

    createProduct: async (_, { name, description, price, stock }) => productController.createProduct({ name, description, price, stock }),
    updateProduct: async (_, { id, name, description, price, stock }) => productController.updateProduct(id, { name, description, price, stock }),
    deleteProduct: async (_, { id }) => productController.deleteProduct(id),

    createOrder: async (_, { userId, productIds, quantities }) => orderController.createOrder({ userId, productIds, quantities }),
  },
};

module.exports = resolvers;
