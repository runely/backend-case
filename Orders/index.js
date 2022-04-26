const { getOrders, getItemsInOrder } = require('../mock/db')
const generateResponseBody = require('../lib/generate-response-body')

module.exports = async (context, req) => {
  const { customerId, orderStatus, shipmentState, paymentState, includeItems } = req.body || {}
  const orderId = context.bindingData.orderId

  // get orders
  let orders = getOrders({
    customerId,
    orderId,
    orderStatus,
    shipmentState,
    paymentState
  })

  // get items for each order
  if (includeItems) {
    orders = orders.map(order => {
      const items = getItemsInOrder(order.id)
      return {
        ...order,
        items,
        itemsLength: items.length
      }
    })
  }

  return generateResponseBody({ orders, ordersLength: orders.length })
}
