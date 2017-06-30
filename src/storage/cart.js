const CART = 'cart';

const save = (cart = []) => localStorage.setItem(CART, JSON.stringify(cart));

export default {

  empty() {
    localStorage.clear();
  },

  byId(id) {
    const cart = this.get();
    return cart.filter(c => c.id === id).reduce((prev, current) => current);
  },

  get() {
    const cart = localStorage.getItem(CART);
    if (!cart) {
      save([{
        id: 1,
        name: 'Emmet',
        price: 9.99,
        description: `<p>“Good morning, city!”</p><p>Every day, Emmet goes to work exactly by the steps in the instructions booklet that he always keeps in his hand. As part of Bricksburg’s busy construction crew, he helps to rebuild the city as briefed by President Business.</p><p>Emmet wants to be popular, but he struggles to stand out in the crowd. Even his fellow construction workers hardly know he’s there. But all of that is about to change, thanks to a mysterious stranger and a legendary Prophecy about the most special minifigure in the entire world!</p>`,
        imageUrl: 'https://lc-www-live-s.legocdn.com/r/www/r/catalogs/-/media/catalogs/characters/minifigures/the%20lego%20movie/71004_detail_constructionemmet.jpg?l.r2=-185741075',
        isActive: true,
        quantity: 3,
      },
        {
          id: 3,
          name: 'President Business',
          price: 12.99,
          description: `“Let’s take extra care to follow the instructions, or you’ll be put to sleep.”

President Business is the president of the massive Octan Corporation… and the entire world. All he wants is for everybody to follow his instructions for how to build and act all the time. After all, an orderly Bricksburg is a happy Bricksburg.

But President Business is more than he appears. Although few suspect it, he is secretly Lord Business, an evil mastermind with a plan to glue the world together so it stays exactly the way he wants – forever! Can the prophesied Special stop his sinister scheme in time?`,
          imageUrl: 'https://lc-www-live-s.legocdn.com/r/www/r/catalogs/-/media/catalogs/characters/minifigures/the%20lego%20movie/71004_detail_presidentbusiness.jpg?l.r2=59727247',
          isActive: true,
          quantity: 1,
        },]);

      return this.get();
    }

    return JSON.parse(cart);
  },

  add(product = {}) {
    const cart = this.get();

    if (cart.some(c => c.id === product.id)) {
      const { id } = product;
      const existingProduct = this.byId(id);
      const quantity = parseInt(existingProduct.quantity) + 1;
      return this.changeQuantity(id, quantity);
    }

    product.quantity = 1;
    save([...cart, product]);
    return this.get();
  },

  remove(product = {}) {
    const cart = this.get();

    save([...cart.filter(c => c.id !== product.id)]);
    return this.get();
  },

  changeQuantity(id, quantity) {
    const cart = this.get();
    const modified = cart.map(c => {
      if (c.id !== id) return c;
      c.quantity = quantity;
      return c;
    });

    save([...modified]);
    return this.get();
  },


  get subtotal() {
    const cart = this.get();
    return cart.map(item => {
                 return item.quantity * item.price;
               })
               .reduce((prev, current) => prev + current, 0);

  },

  get tax() {
    return this.subtotal * 0.065;
  },

  get total() {
    return this.subtotal + this.tax;
  },

};