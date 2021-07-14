<img src="https://cdn.scpsl.store/qurre.store/img/payments.png" align="right" />

# Qurre-Pay
## Using
**Create a Qurre-Pay API class**

```js
const QurreAPI = require('Qurre-Pay');
const Qurre = new QurreAPI(private_key, public_key);
```
**Get information about your store**

```js
const Store = await Qurre.GetShopInfo();
```
**Get information about payment by id**

```js
const Payment = await Qurre.GetPaymentInfo('3gui7GYus798');
```
**Create payment**

```js
const Payment = await Qurre.CreatePayment(100, 'Test payment');
```