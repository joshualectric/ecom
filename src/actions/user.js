import {
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL
} from './types';

export function setPurchaseDetail(_id) {
    return ({
        type: SET_PURCHASE_DETAIL,
        payload: _id
    })
}

export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                total: 19.40,
                orderNumber: 'A004847493',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 1,
                total: 9.20,
                orderNumber: 'B334847493',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Joshua Steinberg',
                    shippingAddress: '19 elm Street'
                }
            },
            {
                _id: 2,
                total: 3.40,
                orderNumber: 'C004847493',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Yardley Huber',
                    shippingAddress: '666 love street'
                }
            },
            {
                _id: 3,
                total: 6.67,
                orderNumber: 'ACG047493',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Linda Lerner',
                    shippingAddress: '1919 yourmom street'
                }
            },
            {
                _id: 4,
                total: 23.40,
                orderNumber: 'H236847493',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Catherine Joyce',
                    shippingAddress: '99 Wicked Stepmom drive'
                }
            },
            {
                _id: 5,
                total: 19.40,
                orderNumber: 'A004847493',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 6,
                total: 19.40,
                orderNumber: 'A004847493',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 7,
                total: 19.40,
                orderNumber: 'BDFJE4567',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Andrew Hudgens',
                    shippingAddress: '348 West State Street'
                }
            },
            
        ]
    })
}