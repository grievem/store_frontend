const catalog = [
  {
    title: "Mountains",
    price: 1000,
    category: "Mountains",
    image: "test1.png",
  },
  {
    title: "Mountains",
    price: 1000,
    category: "Mountains",
    image: "test1.png",
  },
  {
    title: "Mountains",
    price: 1000,
    category: "Mountains",
    image: "test1.png",
  },
];

class Dataservice {
  getCatalog() {
    return catalog;
  }

  saveOrder() {}

  validateCouponCode() {}
}

export default Dataservice;
