const _customers = [
  {
    id: '9282e369-456d-4c39-b2b9-41a706f3fs59',
    name: 'Lars Monsen',
    mobile: '000 00 000',
    email: 'fjell@klatrer.no',
    adress: {
      street: 'Fjellklatrerveien 2',
      postalcode: '3216',
      city: 'Sandefjord',
      country: 'Norway'
    }
  }
]

const _orders = [
  {
    id: '9282e369-456d-4c39-b2b9-41a706f3ad62',
    customerId: '9282e369-456d-4c39-b2b9-41a706f3fs59',
    orderDate: '2021-07-30T11:13:10.611Z',
    orderStatus: 'Open',
    shipmentState: 'Pending',
    paymentState: 'Paid'
  },
  {
    id: '9244e369-456d-4c39-b8b9-41a777f3ad92',
    customerId: '9282e369-456d-4c39-b2b9-41a706f3fs59',
    orderDate: '2021-07-05T11:13:10.611Z',
    orderStatus: 'Closed',
    shipmentState: 'Shipped',
    paymentState: 'Paid'
  },
  {
    id: '9626e369-466d-4c39-b8b9-41a283f3ad92',
    customerId: '9282e369-456d-4c39-b2b9-41a706f3fs59',
    orderDate: '2021-07-02T11:13:10.611Z',
    orderStatus: 'Closed',
    shipmentState: 'Shipped',
    paymentState: 'Paid'
  },
  {
    id: '9666e363-433d-4c39-b8b9-33a273f3ad92',
    customerId: '9282e369-456d-4c39-b2b9-41a706f3fs59',
    orderDate: '2021-05-04T11:13:10.611Z',
    orderStatus: 'Closed',
    shipmentState: 'Shipped',
    paymentState: 'Paid'
  }
]

const _items = [
  {
    productId: '52f67ec6-9329-4685-ac31-0d363c0574e7',
    orderId: '9282e369-456d-4c39-b2b9-41a706f3ad62',
    name: '2XU Fitness Mid-Rise Line Up Tight-W Black/Geo Lines',
    qty: 1,
    price: '899',
    image: 'https://dm9fd9qvy1kqy.cloudfront.net/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/2/X/2XU-WOMENS-PRINT-MID-RISE-COMPRESSION-TIGHTS.jpg'
  },
  {
    productId: '52f62ec6-9339-4685-ac31-0d863c3574e7',
    orderId: '9282e369-456d-4c39-b2b9-41a706f3ad62',
    name: 'Rab Microlight Jacket Deep Ink',
    qty: 1,
    price: '2899',
    image: 'https://dm9fd9qvy1kqy.cloudfront.net/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/M/i/Microlight-Jacket-DeepInk-QDB-16-DI.jpg'
  },
  {
    productId: '52f67ec9-9809-4685-ac31-0d363c0464e7',
    orderId: '9244e369-456d-4c39-b8b9-41a777f3ad92',
    name: 'Urberg Drybag Set Rio Red',
    qty: 3,
    price: '742',
    image: 'https://dm9fd9qvy1kqy.cloudfront.net/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/U/r/Urberg-Drybag-Set-Rio-Red-Fjellsport-1200-Pixler-1200x1200.jpg'
  },
  {
    productId: '52f67ec9-9569-4125-ac31-0d333c0414e7',
    orderId: '9626e369-466d-4c39-b8b9-41a283f3ad92',
    name: 'Sydvang Austfjell Sleeping Mat Air Lw Crimson',
    qty: 1,
    price: '999',
    image: 'https://dm9fd9qvy1kqy.cloudfront.net/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/s/y/sydvang-austfjell-sleeping-mat-air-lw-crimson.jpg'
  },
  {
    productId: '52f17ec9-9569-4185-ac31-0d333c0335e7',
    orderId: '9666e363-433d-4c39-b8b9-33a273f3ad92',
    name: 'Sydvang Montana Vandresekk Sort 85L',
    qty: 1,
    price: '1599',
    image: 'https://dm9fd9qvy1kqy.cloudfront.net/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/r/y/ryggsekk-sort-1.jpg'
  }
]

module.exports.findCustomer = customerId => {
  return _customers.find(customer => customer.id === customerId)
}

/**
 * @typedef {Object} OrderOptions
 * @prop {String} [customerId] Id of the customer
 * @prop {String} [orderId] Id of the order to get
 * @prop {"Closed"|"Open"} [orderStatus] Status of the orders to get
 * @prop {"Shipped"|"Pending"} [shipmentState] Shipment state of the orders to get
 * @prop {"Paid"|"Unpaid"} [paymentState] Payment state of the orders to get
 */

/**
 * @param {OrderOptions} options Order options to filter for orders
 * @returns {Array} Filtered array of orders
 */
module.exports.getOrders = options => {
  const { customerId, orderId, orderStatus, shipmentState, paymentState } = options

  let orders
  if (customerId) {
    orders = _orders.filter(order => order.customerId === customerId)
  }
  if (orderId) {
    orders = (orders || _orders).filter(order => order.id === orderId)
  }
  if (orderStatus) {
    orders = (orders || _orders).filter(order => order.orderStatus === orderStatus)
  }
  if (shipmentState) {
    orders = (orders || _orders).filter(order => order.shipmentState === shipmentState)
  }
  if (paymentState) {
    orders = (orders || _orders).filter(order => order.paymentState === paymentState)
  }

  if (!orders) return []
  return orders
}
