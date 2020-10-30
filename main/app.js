function removeOrderItem(orderInfo, position){
   
    if(!Array.isArray(orderInfo.items)){
        throw 'Items should be an array';
    }
    else {
        for(let i=0;i<orderInfo.items.length;i++){
            if(!orderInfo.items[i].hasOwnProperty('quantity') || !orderInfo.items[i].hasOwnProperty('price')){
                throw 'Malformed item';
            }
        }
        if(position>=0 && position < orderInfo.items.length){
            
            orderInfo.total=orderInfo.total-orderInfo.items[position].price*orderInfo.items[position].quantity;
            
        orderInfo.items.splice(position,1);
        }else {
            throw 'Invalid position';
        }
    }

    return orderInfo;
}

const app = {
    removeOrderItem
};

module.exports = app;