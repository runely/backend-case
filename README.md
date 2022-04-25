# Backend case

Hi and welcome to our case!

## User story

We have the following user stories:

_As a customer, I would like to see the status of my orders, so I know which is on the way_

_As a customer, I want to know what I have previously paid for an item in an earlier order_

## Backend task

As a backend developer your task is to create an API that the frontend team can use in order to fetch the required information in order to solve these stories.

Feel free to start on something already, and upload it to a public github repo before the interview. Technologies is up to you.
In the interview we will talk about these stories and pair program a little on what is remaining in order to solve them.

## Data

In the database, a postgreSQL database, we will have the following dummy data available, here represented in JSON:

### Customer

```json
{
  "id": "9282e369-456d-4c39-b2b9-41a706f3fs59",
  "name": "Lars Monsen",
  "mobile": "000 00 000",
  "email": "fjell@klatrer.no",
  "adress": {
    "street": "Fjellklatrerveien 2",
    "postalcode": "3216",
    "city": "Sandefjord",
    "country": "Norway"
  }
}
```

### Order

```json
[
  {
    "id": "9282e369-456d-4c39-b2b9-41a706f3ad62",
    "customerId": "9282e369-456d-4c39-b2b9-41a706f3fs59",
    "orderDate": "2021-07-30T11:13:10.611Z",
    "orderStatus": "Open",
    "shipmentState": "Pending",
    "paymentState": "Paid"
  },
  {
    "id": "9244e369-456d-4c39-b8b9-41a777f3ad92",
    "customerId": "9282e369-456d-4c39-b2b9-41a706f3fs59",
    "orderDate": "2021-07-05T11:13:10.611Z",
    "orderStatus": "Closed",
    "shipmentState": "Shipped",
    "paymentState": "Paid"
  },
  {
    "id": "9626e369-466d-4c39-b8b9-41a283f3ad92",
    "customerId": "9282e369-456d-4c39-b2b9-41a706f3fs59",
    "orderDate": "2021-07-02T11:13:10.611Z",
    "orderStatus": "Closed",
    "shipmentState": "Shipped",
    "paymentState": "Paid"
  },
  {
    "id": "9666e363-433d-4c39-b8b9-33a273f3ad92",
    "customerId": "9282e369-456d-4c39-b2b9-41a706f3fs59",
    "orderDate": "2021-05-04T11:13:10.611Z",
    "orderStatus": "Closed",
    "shipmentState": "Shipped",
    "paymentState": "Paid"
  }
]
```

### Line items

- Line items in the order

```json
[
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
  },
  {
    "productId": "52f67ec9-9809-4685-ac31-0d363c0464e7",
    "orderId": "9244e369-456d-4c39-b8b9-41a777f3ad92",
    "name": "Urberg Drybag Set Rio Red",
    "qty": 3,
    "price": "742",
    "image": "https://dm9fd9qvy1kqy.cloudfront.net/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/U/r/Urberg-Drybag-Set-Rio-Red-Fjellsport-1200-Pixler-1200x1200.jpg"
  },
  {
    "productId": "52f67ec9-9569-4125-ac31-0d333c0414e7",
    "orderId": "9626e369-466d-4c39-b8b9-41a283f3ad92",
    "name": "Sydvang Austfjell Sleeping Mat Air Lw Crimson",
    "qty": 1,
    "price": "999",
    "image": "https://dm9fd9qvy1kqy.cloudfront.net/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/s/y/sydvang-austfjell-sleeping-mat-air-lw-crimson.jpg"
  },
  {
    "productId": "52f17ec9-9569-4185-ac31-0d333c0335e7",
    "orderId": "9666e363-433d-4c39-b8b9-33a273f3ad92",

    "name": "Sydvang Montana Vandresekk Sort 85L",
    "qty": 1,
    "price": "1599",
    "image": "https://dm9fd9qvy1kqy.cloudfront.net/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/r/y/ryggsekk-sort-1.jpg"
  }
]
```
