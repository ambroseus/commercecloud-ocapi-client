/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */
/* Copyright (c) 2017 Mobify Research & Development Inc. All rights reserved. */
/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */

/* eslint-disable dot-notation */
/**
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
* The GiftCertificateItem model module.
* @module models/GiftCertificateItem
* @version 17.8
*/
export default class GiftCertificateItem {
    /**
    * Constructs a new <code>GiftCertificateItem</code>.
    * A gift certificate item.
    * @alias module:models/GiftCertificateItem
    * @class
    * @param amount {Number} The certificate item amount.
    * @param recipientEmail {String} The recipient's email.
    */
    constructor(amount, recipientEmail) {
        /**
        * The certificate item amount.
        * @member {Number} amount
        */
        this.amount = amount

        /**
        * Id used to identify this item
        * @member {String} gift_certificate_item_id
        */
        this.gift_certificate_item_id = undefined

        /**
        * The certificate's message.
        * @member {String} message
        */
        this.message = undefined

        /**
        * The recipient's email.
        * @member {String} recipient_email
        */
        this.recipient_email = recipientEmail

        /**
        * The recipient's name.
        * @member {String} recipient_name
        */
        this.recipient_name = undefined

        /**
        * The sender's name.
        * @member {String} sender_name
        */
        this.sender_name = undefined

        /**
        * The shipment id.
        * @member {String} shipment_id
        */
        this.shipment_id = undefined
    }

    /**
    * Constructs a <code>GiftCertificateItem</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/GiftCertificateItem} obj Optional instance to populate.
    * @return {module:models/GiftCertificateItem} The populated <code>GiftCertificateItem</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GiftCertificateItem()

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number')
            }
            if (data.hasOwnProperty('gift_certificate_item_id')) {
                obj['gift_certificate_item_id'] = ApiClient.convertToType(data['gift_certificate_item_id'], 'String')
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
            if (data.hasOwnProperty('shipment_id')) {
                obj['shipment_id'] = ApiClient.convertToType(data['shipment_id'], 'String')
            }
        }

        return obj
    }
}