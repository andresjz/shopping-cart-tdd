const Cart = require('./Cart');

describe("when using the Cart Object", () => {
  let cart;

  beforeEach(() => {
    cart = new Cart();
  });

  it("should get the cart items", () => {
    // ARRANGE
    const cart = new Cart();

    // ACT
    const cartItems = cart.getItems();

    // ASSERT
    expect(cartItems).toBeDefined();
  });

  it("should get the total number of cart items", () => {
    // ARRANGE
    const cart = new Cart();

    // ACT
    const totalItems = cart.getTotalItems();

    // ASSERT
    expect(totalItems).toBeDefined();
    expect(typeof totalItems).toBe('number');
  });

  it("should add items to the shopping cart", () => {
    // ARRANGE
    const cart = new Cart();
    const item = {
      id: "1",
      name: "Test Product",
      price: 10.99,
      quantity: 1
    };

    // ACT
    cart.addItem(item);
    const cartItems = cart.getItems();

    // ASSERT
    expect(cartItems).toContainEqual(item);
    expect(cart.getTotalItems()).toBe(1);
  });

  it("should remove an item by itemId", () => {
    // ARRANGE
    const cart = new Cart();
    const item = {
      id: "1",
      name: "Test Product",
      price: 10.99,
      quantity: 1
    };
    cart.addItem(item);

    // ACT
    cart.removeItem("1");
    const cartItems = cart.getItems();

    // ASSERT
    expect(cartItems).not.toContain(item);
    expect(cart.getTotalItems()).toBe(0);
  });

  it("should get the total price of the cart items", () => {
    // ARRANGE
    const cart = new Cart();
    const item1 = {
      id: "1",
      name: "Product 1",
      price: 10.99,
      quantity: 2
    };
    const item2 = {
      id: "2",
      name: "Product 2",
      price: 5.50,
      quantity: 1
    };

    // ACT
    cart.addItem(item1);
    cart.addItem(item2);
    const totalPrice = cart.getTotalPrice();

    // ASSERT
    expect(totalPrice).toBeDefined();
    expect(typeof totalPrice).toBe('number');
    expect(totalPrice).toBe((10.99 * 2) + (5.50 * 1)); // 27.48
  });

  it("should handle adding the same item multiple times", () => {
    // ARRANGE
    const cart = new Cart();
    const item = {
      id: "1",
      name: "Test Product",
      price: 10.99,
      quantity: 1
    };

    // ACT
    cart.addItem(item);
    cart.addItem({...item, quantity: 2});

    // ASSERT
    expect(cart.getTotalItems()).toBe(3); // 1 + 2 = 3
  });

  it("should return empty array when cart is empty", () => {
    // ARRANGE
    const cart = new Cart();

    // ACT
    const cartItems = cart.getItems();

    // ASSERT
    expect(cartItems).toEqual([]);
    expect(cart.getTotalItems()).toBe(0);
    expect(cart.getTotalPrice()).toBe(0);
  });

  it("should handle removing non-existent item gracefully", () => {
    // ARRANGE
    const cart = new Cart();

    // ACT & ASSERT
    expect(() => cart.removeItem("999")).not.toThrow();
    expect(cart.getTotalItems()).toBe(0);
  });

  // Validation Tests for addItem
  describe("addItem validation", () => {
    it("should throw an error when the item passed to addItem is invalid (null)", () => {
      // ARRANGE
      const cart = new Cart();

      // ACT & ASSERT
      expect(() => cart.addItem(null)).toThrow("Invalid item: item cannot be null or undefined");
    });

    it("should throw an error when the item passed to addItem is invalid (undefined)", () => {
      // ARRANGE
      const cart = new Cart();

      // ACT & ASSERT
      expect(() => cart.addItem(undefined)).toThrow("Invalid item: item cannot be null or undefined");
    });

    it("should throw an error when the item passed to addItem is invalid (empty object)", () => {
      // ARRANGE
      const cart = new Cart();

      // ACT & ASSERT
      expect(() => cart.addItem({})).toThrow("Invalid item: missing required property 'id'");
    });

    it("should throw an error when the item passed to addItem is missing id", () => {
      // ARRANGE
      const cart = new Cart();
      const invalidItem = {
        name: "Test Product",
        price: 10.99,
        quantity: 1
      };

      // ACT & ASSERT
      expect(() => cart.addItem(invalidItem)).toThrow("Invalid item: missing required property 'id'");
    });

    it("should throw an error when the item passed to addItem is missing name", () => {
      // ARRANGE
      const cart = new Cart();
      const invalidItem = {
        id: "1",
        price: 10.99,
        quantity: 1
      };

      // ACT & ASSERT
      expect(() => cart.addItem(invalidItem)).toThrow("Invalid item: missing required property 'name'");
    });

    it("should throw an error when the item passed to addItem is missing price", () => {
      // ARRANGE
      const cart = new Cart();
      const invalidItem = {
        id: "1",
        name: "Test Product",
        quantity: 1
      };

      // ACT & ASSERT
      expect(() => cart.addItem(invalidItem)).toThrow("Invalid item: missing required property 'price'");
    });

    it("should throw an error when the item passed to addItem is missing quantity", () => {
      // ARRANGE
      const cart = new Cart();
      const invalidItem = {
        id: "1",
        name: "Test Product",
        price: 10.99
      };

      // ACT & ASSERT
      expect(() => cart.addItem(invalidItem)).toThrow("Invalid item: missing required property 'quantity'");
    });
  });

  // Validation Tests for removeItem
  describe("removeItem validation", () => {
    it("should throw an error when the item id passed to removeItem is not a string", () => {
      // ARRANGE
      const cart = new Cart();

      // ACT & ASSERT
      expect(() => cart.removeItem(123)).toThrow("Invalid id: id must be a string");
    });

    it("should throw an error message 'Invalid id: id must be a string' when the item id passed to removeItem is not a string", () => {
      // ARRANGE
      const cart = new Cart();

      // ACT & ASSERT
      expect(() => cart.removeItem(123)).toThrow("Invalid id: id must be a string");
    });
  });
});

