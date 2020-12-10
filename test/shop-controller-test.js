const expect = require('chai').expect;
const sinon = require('sinon');

const Product = require('../models/product');
const Order = require('../models/order');
const User = require('../models/user');

const ShopController = require('../controllers/shop');

describe('Shop Controller',function(){

    it('should throw error with code 500 if database fails',function(){
        //sinon.stub(Order,'find');
        //Order.find.throws();
        let user = new User({
            "_id": {
                "$oid": "5fd1e9bc3e01b0000483a926"
            },
            "email": "samaborukoje@gmail.com",
            "password": "$2a$12$koC4E7/YVn38l0SpAKaW8OQm4o/LiMyK8boStDDoYN8d32hpy2Ani",
            "cart": {
                "items": [ {
                    "productId": { "_id": {
                        "$oid": "5fd153fbde698715c9dabe3b"
                    },
                    "title": "Dog Blog",
                    "price": 0,
                    "description": "Dog blog updates subscription",
                    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUpRF5gyZRFiV4hiYMSi97hVDGUQ7gj3D7Kg&usqp=CAU",
                    "userId": {
                        "$oid": "5fd1e9bc3e01b0000483a926"
                    },
                    "__v": 0},
                    "quantity": 1
                  }]
            },
            "__v": 0
        });

        const req = {
            body:{
                
            },
            user: user
        };
        //req.user = user;
        expect(ShopController.postOrder(req,{},()=>{})).to.throw;
      //  Order.find.restore();
    });
})






