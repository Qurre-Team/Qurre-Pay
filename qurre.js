const axios = require('axios');
const qurre_link = 'https://qurre.store';
/**
 * @class
 */
module.exports = class QurreAPI {
    /**
     * Constructs the object.
     *
     * @param      {string}  private_key     Private key
     * @param      {string}  public_key     Public key
     */
    constructor (private_key, public_key) {
        this.private = private_key;
        this.public = public_key;
    }
    /**
     * Get information about your store
     */
    async GetShopInfo(){
        const _data = await axios.post(qurre_link+'/api/shop', {private: this.private}).catch((e) => {
            throw console.error(`An error occurred while retrieving store information - ${e}`);
        });
        return _data.data;
    }
    /**
     * Get information about payment by id
     * @param {string} payment     Payment ID
     */
    async GetPaymentInfo(payment){
        const _data = await axios.post(qurre_link+'/api/payments?type=info', {private: this.private, payment}).catch((e) => {
            throw console.error(`An error occurred while retrieving payment information - ${e}`);
        });
        return _data.data;
    }
    /**
     * Get information about payment by id
     * @param {number} sum     Sum of payment
     * @param {string} desc     Payment Description
     */
    async CreatePayment(sum, desc = ''){
        const _data = await axios.post(qurre_link+'/api/payments?type=create', {public: this.public, sum, desc}).catch((e) => {
            throw console.error(`An error occurred while creating a payment - ${e}`);
        });
        return _data.data;
    }
}