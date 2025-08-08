class Cart {
  constructor() {
    this.items = [];
  }

  getItems() {
    return this.items;
  }

  getTotalItems() {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  addItem(newItem) {

    const existingItemIndex = this.items.findIndex(item => item.id === newItem.id);
    
    if (existingItemIndex !== -1) {
      // Item exists, update quantity
      this.items[existingItemIndex].quantity += newItem.quantity;
    } else {
      // New item, add to cart
      this.items.push({ ...newItem });
    }
  }

  removeItem(itemId) {

    this.items = this.items.filter(item => item.id !== itemId);
  }

  getTotalPrice() {
    return this.items.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  }
}

module.exports = Cart;
