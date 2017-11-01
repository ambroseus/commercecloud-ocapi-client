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
* The Store model module.
* @module models/Store
* @version 17.8
*/
export default class Store {
    /**
    * Constructs a new <code>Store</code>.
    * Document representing a store.
    * @alias module:models/Store
    * @class
    * @param id {String} The id of the store.
    */
    constructor(id) {
        /**
        * The first address of the store.
        * @member {String} address1
        */
        this.address1 = undefined

        /**
        * The second address of the store.
        * @member {String} address2
        */
        this.address2 = undefined

        /**
        * The city of the store.
        * @member {String} city
        */
        this.city = undefined

        /**
        * The country code of the store.
        * @member {module:models/Store.CountryCodeEnum} country_code
        */
        this.country_code = undefined

        /**
        * The distance to the given geo location in the unit of attribute distance (miles or kilometers).
        * @member {Number} distance
        */
        this.distance = undefined

        /**
        * The distance unit the distance attribute is measured in (either in miles or kilometers).
        * @member {String} distance_unit
        */
        this.distance_unit = undefined

        /**
        * The email address of the store.
        * @member {String} email
        */
        this.email = undefined

        /**
        * The fax number of the store.
        * @member {String} fax
        */
        this.fax = undefined

        /**
        * The id of the store.
        * @member {String} id
        */
        this.id = id

        /**
        * The store image.
        * @member {String} image
        */
        this.image = undefined

        /**
        * The inventory list id associated with this store.
        * @member {String} inventory_id
        */
        this.inventory_id = undefined

        /**
        * The latitude of the store.
        * @member {Number} latitude
        */
        this.latitude = undefined

        /**
        * The longitude of the store.
        * @member {Number} longitude
        */
        this.longitude = undefined

        /**
        * The store name.
        * @member {String} name
        */
        this.name = undefined

        /**
        * The phone number of the store.
        * @member {String} phone
        */
        this.phone = undefined

        /**
        * Whether this store uses Store Point-of-Sale.
        * @member {Boolean} pos_enabled
        */
        this.pos_enabled = undefined

        /**
        * The postal code of the store.
        * @member {String} postal_code
        */
        this.postal_code = undefined

        /**
        * The state code of the store.
        * @member {String} state_code
        */
        this.state_code = undefined

        /**
        * The store events.
        * @member {String} store_events
        */
        this.store_events = undefined

        /**
        * The store opening hours.
        * @member {String} store_hours
        */
        this.store_hours = undefined

        /**
        * Whether this store should show up in store locator results.
        * @member {Boolean} store_locator_enabled
        */
        this.store_locator_enabled = undefined
    }

    /**
    * Constructs a <code>Store</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/Store} obj Optional instance to populate.
    * @return {module:models/Store} The populated <code>Store</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Store()

            if (data.hasOwnProperty('address1')) {
                obj['address1'] = ApiClient.convertToType(data['address1'], 'String')
            }
            if (data.hasOwnProperty('address2')) {
                obj['address2'] = ApiClient.convertToType(data['address2'], 'String')
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String')
            }
            if (data.hasOwnProperty('country_code')) {
                obj['country_code'] = ApiClient.convertToType(data['country_code'], 'String')
            }
            if (data.hasOwnProperty('distance')) {
                obj['distance'] = ApiClient.convertToType(data['distance'], 'Number')
            }
            if (data.hasOwnProperty('distance_unit')) {
                obj['distance_unit'] = ApiClient.convertToType(data['distance_unit'], 'String')
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String')
            }
            if (data.hasOwnProperty('fax')) {
                obj['fax'] = ApiClient.convertToType(data['fax'], 'String')
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String')
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = ApiClient.convertToType(data['image'], 'String')
            }
            if (data.hasOwnProperty('inventory_id')) {
                obj['inventory_id'] = ApiClient.convertToType(data['inventory_id'], 'String')
            }
            if (data.hasOwnProperty('latitude')) {
                obj['latitude'] = ApiClient.convertToType(data['latitude'], 'Number')
            }
            if (data.hasOwnProperty('longitude')) {
                obj['longitude'] = ApiClient.convertToType(data['longitude'], 'Number')
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String')
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String')
            }
            if (data.hasOwnProperty('pos_enabled')) {
                obj['pos_enabled'] = ApiClient.convertToType(data['pos_enabled'], 'Boolean')
            }
            if (data.hasOwnProperty('postal_code')) {
                obj['postal_code'] = ApiClient.convertToType(data['postal_code'], 'String')
            }
            if (data.hasOwnProperty('state_code')) {
                obj['state_code'] = ApiClient.convertToType(data['state_code'], 'String')
            }
            if (data.hasOwnProperty('store_events')) {
                obj['store_events'] = ApiClient.convertToType(data['store_events'], 'String')
            }
            if (data.hasOwnProperty('store_hours')) {
                obj['store_hours'] = ApiClient.convertToType(data['store_hours'], 'String')
            }
            if (data.hasOwnProperty('store_locator_enabled')) {
                obj['store_locator_enabled'] = ApiClient.convertToType(data['store_locator_enabled'], 'Boolean')
            }
        }

        return obj
    }
}

/**
* Allowed values for the <code>country_code</code> property.
* @enum {String}
* @readonly
*/
Store.CountryCodeEnum = {

    /**
     * value: "US"
     * @const
     */
    US: 'US',

    /**
     * value: "CA"
     * @const
     */
    CA: 'CA',

    /**
     * value: "DE"
     * @const
     */
    DE: 'DE'
}