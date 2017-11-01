/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */
/* Copyright (c) 2017 Mobify Research & Development Inc. All rights reserved. */
/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */

/* eslint-disable dot-notation *//**

 * Shop API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 17.8
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */
import ApiClient from '../ApiClient'

/**
* The GiftCertificate model module.
* @module models/GiftCertificate
* @version 17.8
*/
export default class GiftCertificate {
    /**
    * Constructs a new <code>GiftCertificate</code>.
    * Document representing a gift certificate.
    * @alias module:models/GiftCertificate
    * @class
    */
    constructor() {
        /**
        * The gift certificate original amount.
        * @member {Number} amount
        */
        this.amount = undefined

        /**
        * The gift certificate balance.
        * @member {Number} balance
        */
        this.balance = undefined

        /**
        * The gift certificate description.
        * @member {String} description
        */
        this.description = undefined

        /**
        * Is the gift certificate is enabled?
        * @member {Boolean} enabled
        */
        this.enabled = undefined

        /**
        * The masked gift certificate code.
        * @member {String} masked_gift_certificate_code
        */
        this.masked_gift_certificate_code = undefined

        /**
        * The merchant ID.
        * @member {String} merchant_id
        */
        this.merchant_id = undefined

        /**
        * The message.
        * @member {String} message
        */
        this.message = undefined

        /**
        * The recipient email.
        * @member {String} recipient_email
        */
        this.recipient_email = undefined

        /**
        * The recipient name.
        * @member {String} recipient_name
        */
        this.recipient_name = undefined

        /**
        * The sender name.
        * @member {String} sender_name
        */
        this.sender_name = undefined

        /**
        * The gift certificate status.
        * @member {module:models/GiftCertificate.StatusEnum} status
        */
        this.status = undefined
    }

    /**
    * Constructs a <code>GiftCertificate</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/GiftCertificate} obj Optional instance to populate.
    * @return {module:models/GiftCertificate} The populated <code>GiftCertificate</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GiftCertificate()

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number')
            }
            if (data.hasOwnProperty('balance')) {
                obj['balance'] = ApiClient.convertToType(data['balance'], 'Number')
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String')
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean')
            }
            if (data.hasOwnProperty('masked_gift_certificate_code')) {
                obj['masked_gift_certificate_code'] = ApiClient.convertToType(data['masked_gift_certificate_code'], 'String')
            }
            if (data.hasOwnProperty('merchant_id')) {
                obj['merchant_id'] = ApiClient.convertToType(data['merchant_id'], 'String')
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String')
            }
            if (data.hasOwnProperty('recipient_email')) {
                obj['recipient_email'] = ApiClient.convertToType(data['recipient_email'], 'String')
            }
            if (data.hasOwnProperty('recipient_name')) {
                obj['recipient_name'] = ApiClient.convertToType(data['recipient_name'], 'String')
            }
            if (data.hasOwnProperty('sender_name')) {
                obj['sender_name'] = ApiClient.convertToType(data['sender_name'], 'String')
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String')
            }
        }

        return obj
    }
}

/**
* Allowed values for the <code>status</code> property.
* @enum {String}
* @readonly
*/
GiftCertificate.StatusEnum = {

    /**
     * value: "pending"
     * @const
     */
    pending: 'pending',

    /**
     * value: "issued"
     * @const
     */
    issued: 'issued',

    /**
     * value: "partially_redeemed"
     * @const
     */
    partially_redeemed: 'partially_redeemed',

    /**
     * value: "redeemed"
     * @const
     */
    redeemed: 'redeemed'
}