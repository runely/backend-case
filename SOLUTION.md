# Solution for this case

I have chosen to use [Azure Functions](https://docs.microsoft.com/en-us/azure/developer/javascript/how-to/develop-serverless-apps) to create the API. **Azure Functions** is very convenient to use since all server and VM stuff is handled for you. All you have to think about is your code and how to secure your route

The routes take one, some or all of these properties in the request body, and returns orders filtered by these properties. If `includeItems` is set to **true**, each order will also contain the items for that order
```json
{
  "customerId": "9282e369-456d-4c39-b2b9-41a706f3fs59",
  "orderStatus": "", // Closed or Open
  "shipmentState": "", // Pending or Shipped
  "paymentState": "Paid", // Paid or Unpaid
  "includeItems": true // true or false
}
```

## `POST /orders/orderId:guid`

The property `customerId` isn't neccessarry to use here since we are already limiting the orders by orderId given in the route

**Request**
```json
{
	"includeItems": true
}
```

**Response**
```json
{
  "orders": [
    {
      "id": "9282e369-456d-4c39-b2b9-41a706f3ad62",
      "customerId": "9282e369-456d-4c39-b2b9-41a706f3fs59",
      "orderDate": "2021-07-30T11:13:10.611Z",
      "orderStatus": "Open",
      "shipmentState": "Pending",
      "paymentState": "Paid",
      "items": [
        {
          "productId": "52f67ec6-9329-4685-ac31-0d363c0574e7",
          "orderId": "9282e369-456d-4c39-b2b9-41a706f3ad62",
          "name": "2XU Fitness Mid-Rise Line Up Tight-W Black/Geo Lines",
          "qty": 1,
          "price": "899",
          "image": "https://dm9fd9qvy1kqy.cloudfront.net/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/2/X/2XU-WOMENS-PRINT-MID-RISE-COMPRESSION-TIGHTS.jpg"
        },
        {
          "productId": "52f62ec6-9339-4685-ac31-0d863c3574e7",
          "orderId": "9282e369-456d-4c39-b2b9-41a706f3ad62",
          "name": "Rab Microlight Jacket Deep Ink",
          "qty": 1,
          "price": "2899",
          "image": "https://dm9fd9qvy1kqy.cloudfront.net/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/M/i/Microlight-Jacket-DeepInk-QDB-16-DI.jpg"
        }
      ],
      "itemsLength": 2
    }
  ],
  "ordersLength": 1
}
```

## `POST /orders`

### All orders for the customer

**Request**
```json
{
	"customerId": "9282e369-456d-4c39-b2b9-41a706f3fs59",
	"includeItems": true
}
```

**Response**
```json
{
  "orders": [
    {
      "id": "9282e369-456d-4c39-b2b9-41a706f3ad62",
      "customerId": "9282e369-456d-4c39-b2b9-41a706f3fs59",
      "orderDate": "2021-07-30T11:13:10.611Z",
      "orderStatus": "Open",
      "shipmentState": "Pending",
      "paymentState": "Paid",
      "items": [
        {
          "productId": "52f67ec6-9329-4685-ac31-0d363c0574e7",
          "orderId": "9282e369-456d-4c39-b2b9-41a706f3ad62",
          "name": "2XU Fitness Mid-Rise Line Up Tight-W Black/Geo Lines",
          "qty": 1,
          "price": "899",
          "image": "https://dm9fd9qvy1kqy.cloudfront.net/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/2/X/2XU-WOMENS-PRINT-MID-RISE-COMPRESSION-TIGHTS.jpg"
        },
        {
          "productId": "52f62ec6-9339-4685-ac31-0d863c3574e7",
          "orderId": "9282e369-456d-4c39-b2b9-41a706f3ad62",
          "name": "Rab Microlight Jacket Deep Ink",
          "qty": 1,
          "price": "2899",
          "image": "https://dm9fd9qvy1kqy.cloudfront.net/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/M/i/Microlight-Jacket-DeepInk-QDB-16-DI.jpg"
        }
      ],
      "itemsLength": 2
    },
    {
      "id": "9244e369-456d-4c39-b8b9-41a777f3ad92",
      "customerId": "9282e369-456d-4c39-b2b9-41a706f3fs59",
      "orderDate": "2021-07-05T11:13:10.611Z",
      "orderStatus": "Closed",
      "shipmentState": "Shipped",
      "paymentState": "Paid",
      "items": [
        {
          "productId": "52f67ec9-9809-4685-ac31-0d363c0464e7",
          "orderId": "9244e369-456d-4c39-b8b9-41a777f3ad92",
          "name": "Urberg Drybag Set Rio Red",
          "qty": 3,
          "price": "742",
          "image": "https://dm9fd9qvy1kqy.cloudfront.net/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/U/r/Urberg-Drybag-Set-Rio-Red-Fjellsport-1200-Pixler-1200x1200.jpg"
        }
      ],
      "itemsLength": 1
    },
    {
      "id": "9626e369-466d-4c39-b8b9-41a283f3ad92",
      "customerId": "9282e369-456d-4c39-b2b9-41a706f3fs59",
      "orderDate": "2021-07-02T11:13:10.611Z",
      "orderStatus": "Closed",
      "shipmentState": "Shipped",
      "paymentState": "Paid",
      "items": [
        {
          "productId": "52f67ec9-9569-4125-ac31-0d333c0414e7",
          "orderId": "9626e369-466d-4c39-b8b9-41a283f3ad92",
          "name": "Sydvang Austfjell Sleeping Mat Air Lw Crimson",
          "qty": 1,
          "price": "999",
          "image": "https://dm9fd9qvy1kqy.cloudfront.net/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/s/y/sydvang-austfjell-sleeping-mat-air-lw-crimson.jpg"
        }
      ],
      "itemsLength": 1
    },
    {
      "id": "9666e363-433d-4c39-b8b9-33a273f3ad92",
      "customerId": "9282e369-456d-4c39-b2b9-41a706f3fs59",
      "orderDate": "2021-05-04T11:13:10.611Z",
      "orderStatus": "Closed",
      "shipmentState": "Shipped",
      "paymentState": "Paid",
      "items": [
        {
          "productId": "52f17ec9-9569-4185-ac31-0d333c0335e7",
          "orderId": "9666e363-433d-4c39-b8b9-33a273f3ad92",
          "name": "Sydvang Montana Vandresekk Sort 85L",
          "qty": 1,
          "price": "1599",
          "image": "https://dm9fd9qvy1kqy.cloudfront.net/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/r/y/ryggsekk-sort-1.jpg"
        }
      ],
      "itemsLength": 1
    }
  ],
  "ordersLength": 4
}
```

### Customers shipped orders

**Request**
```json
{
  "customerId": "9282e369-456d-4c39-b2b9-41a706f3fs59",
  "shipmentState": "Shipped",
  "includeItems": true
}
```

**Response**
```json
{
  "orders": [
    {
      "id": "9244e369-456d-4c39-b8b9-41a777f3ad92",
      "customerId": "9282e369-456d-4c39-b2b9-41a706f3fs59",
      "orderDate": "2021-07-05T11:13:10.611Z",
      "orderStatus": "Closed",
      "shipmentState": "Shipped",
      "paymentState": "Paid",
      "items": [
        {
          "productId": "52f67ec9-9809-4685-ac31-0d363c0464e7",
          "orderId": "9244e369-456d-4c39-b8b9-41a777f3ad92",
          "name": "Urberg Drybag Set Rio Red",
          "qty": 3,
          "price": "742",
          "image": "https://dm9fd9qvy1kqy.cloudfront.net/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/U/r/Urberg-Drybag-Set-Rio-Red-Fjellsport-1200-Pixler-1200x1200.jpg"
        }
      ],
      "itemsLength": 1
    },
    {
      "id": "9626e369-466d-4c39-b8b9-41a283f3ad92",
      "customerId": "9282e369-456d-4c39-b2b9-41a706f3fs59",
      "orderDate": "2021-07-02T11:13:10.611Z",
      "orderStatus": "Closed",
      "shipmentState": "Shipped",
      "paymentState": "Paid",
      "items": [
        {
          "productId": "52f67ec9-9569-4125-ac31-0d333c0414e7",
          "orderId": "9626e369-466d-4c39-b8b9-41a283f3ad92",
          "name": "Sydvang Austfjell Sleeping Mat Air Lw Crimson",
          "qty": 1,
          "price": "999",
          "image": "https://dm9fd9qvy1kqy.cloudfront.net/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/s/y/sydvang-austfjell-sleeping-mat-air-lw-crimson.jpg"
        }
      ],
      "itemsLength": 1
    },
    {
      "id": "9666e363-433d-4c39-b8b9-33a273f3ad92",
      "customerId": "9282e369-456d-4c39-b2b9-41a706f3fs59",
      "orderDate": "2021-05-04T11:13:10.611Z",
      "orderStatus": "Closed",
      "shipmentState": "Shipped",
      "paymentState": "Paid",
      "items": [
        {
          "productId": "52f17ec9-9569-4185-ac31-0d333c0335e7",
          "orderId": "9666e363-433d-4c39-b8b9-33a273f3ad92",
          "name": "Sydvang Montana Vandresekk Sort 85L",
          "qty": 1,
          "price": "1599",
          "image": "https://dm9fd9qvy1kqy.cloudfront.net/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/r/y/ryggsekk-sort-1.jpg"
        }
      ],
      "itemsLength": 1
    }
  ],
  "ordersLength": 3
}
```

### Customers open orders

**Request**
```json
{
  "customerId": "9282e369-456d-4c39-b2b9-41a706f3fs59",
  "orderStatus": "Open",
  "includeItems": true
}
```

**Response**
```json
{
  "orders": [
    {
      "id": "9282e369-456d-4c39-b2b9-41a706f3ad62",
      "customerId": "9282e369-456d-4c39-b2b9-41a706f3fs59",
      "orderDate": "2021-07-30T11:13:10.611Z",
      "orderStatus": "Open",
      "shipmentState": "Pending",
      "paymentState": "Paid",
      "items": [
        {
          "productId": "52f67ec6-9329-4685-ac31-0d363c0574e7",
          "orderId": "9282e369-456d-4c39-b2b9-41a706f3ad62",
          "name": "2XU Fitness Mid-Rise Line Up Tight-W Black/Geo Lines",
          "qty": 1,
          "price": "899",
          "image": "https://dm9fd9qvy1kqy.cloudfront.net/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/2/X/2XU-WOMENS-PRINT-MID-RISE-COMPRESSION-TIGHTS.jpg"
        },
        {
          "productId": "52f62ec6-9339-4685-ac31-0d863c3574e7",
          "orderId": "9282e369-456d-4c39-b2b9-41a706f3ad62",
          "name": "Rab Microlight Jacket Deep Ink",
          "qty": 1,
          "price": "2899",
          "image": "https://dm9fd9qvy1kqy.cloudfront.net/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/M/i/Microlight-Jacket-DeepInk-QDB-16-DI.jpg"
        }
      ],
      "itemsLength": 2
    }
  ],
  "ordersLength": 1
}
```

### Customers paid orders

**Request**
```json
{
  "customerId": "9282e369-456d-4c39-b2b9-41a706f3fs59",
  "paymentState": "Paid",
  "includeItems": true
}
```

**Response**
```json
{
  "orders": [
    {
      "id": "9282e369-456d-4c39-b2b9-41a706f3ad62",
      "customerId": "9282e369-456d-4c39-b2b9-41a706f3fs59",
      "orderDate": "2021-07-30T11:13:10.611Z",
      "orderStatus": "Open",
      "shipmentState": "Pending",
      "paymentState": "Paid",
      "items": [
        {
          "productId": "52f67ec6-9329-4685-ac31-0d363c0574e7",
          "orderId": "9282e369-456d-4c39-b2b9-41a706f3ad62",
          "name": "2XU Fitness Mid-Rise Line Up Tight-W Black/Geo Lines",
          "qty": 1,
          "price": "899",
          "image": "https://dm9fd9qvy1kqy.cloudfront.net/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/2/X/2XU-WOMENS-PRINT-MID-RISE-COMPRESSION-TIGHTS.jpg"
        },
        {
          "productId": "52f62ec6-9339-4685-ac31-0d863c3574e7",
          "orderId": "9282e369-456d-4c39-b2b9-41a706f3ad62",
          "name": "Rab Microlight Jacket Deep Ink",
          "qty": 1,
          "price": "2899",
          "image": "https://dm9fd9qvy1kqy.cloudfront.net/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/M/i/Microlight-Jacket-DeepInk-QDB-16-DI.jpg"
        }
      ],
      "itemsLength": 2
    },
    {
      "id": "9244e369-456d-4c39-b8b9-41a777f3ad92",
      "customerId": "9282e369-456d-4c39-b2b9-41a706f3fs59",
      "orderDate": "2021-07-05T11:13:10.611Z",
      "orderStatus": "Closed",
      "shipmentState": "Shipped",
      "paymentState": "Paid",
      "items": [
        {
          "productId": "52f67ec9-9809-4685-ac31-0d363c0464e7",
          "orderId": "9244e369-456d-4c39-b8b9-41a777f3ad92",
          "name": "Urberg Drybag Set Rio Red",
          "qty": 3,
          "price": "742",
          "image": "https://dm9fd9qvy1kqy.cloudfront.net/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/U/r/Urberg-Drybag-Set-Rio-Red-Fjellsport-1200-Pixler-1200x1200.jpg"
        }
      ],
      "itemsLength": 1
    },
    {
      "id": "9626e369-466d-4c39-b8b9-41a283f3ad92",
      "customerId": "9282e369-456d-4c39-b2b9-41a706f3fs59",
      "orderDate": "2021-07-02T11:13:10.611Z",
      "orderStatus": "Closed",
      "shipmentState": "Shipped",
      "paymentState": "Paid",
      "items": [
        {
          "productId": "52f67ec9-9569-4125-ac31-0d333c0414e7",
          "orderId": "9626e369-466d-4c39-b8b9-41a283f3ad92",
          "name": "Sydvang Austfjell Sleeping Mat Air Lw Crimson",
          "qty": 1,
          "price": "999",
          "image": "https://dm9fd9qvy1kqy.cloudfront.net/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/s/y/sydvang-austfjell-sleeping-mat-air-lw-crimson.jpg"
        }
      ],
      "itemsLength": 1
    },
    {
      "id": "9666e363-433d-4c39-b8b9-33a273f3ad92",
      "customerId": "9282e369-456d-4c39-b2b9-41a706f3fs59",
      "orderDate": "2021-05-04T11:13:10.611Z",
      "orderStatus": "Closed",
      "shipmentState": "Shipped",
      "paymentState": "Paid",
      "items": [
        {
          "productId": "52f17ec9-9569-4185-ac31-0d333c0335e7",
          "orderId": "9666e363-433d-4c39-b8b9-33a273f3ad92",
          "name": "Sydvang Montana Vandresekk Sort 85L",
          "qty": 1,
          "price": "1599",
          "image": "https://dm9fd9qvy1kqy.cloudfront.net/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/r/y/ryggsekk-sort-1.jpg"
        }
      ],
      "itemsLength": 1
    }
  ],
  "ordersLength": 4
}
```

### Customers unpaid orders

**Request**
```json
{
  "customerId": "9282e369-456d-4c39-b2b9-41a706f3fs59",
  "paymentState": "Unpaid",
  "includeItems": true
}
```

**Response**
```json
{
  "orders": [],
  "ordersLength": 0
}
```
