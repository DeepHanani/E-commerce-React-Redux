const initialState = {
    data:[],
    cart:[]
}

export default (state = initialState, { type, payload }) => {

  console.log(payload,"ggggggggg");
  switch (type) {

  case 'GET_PRODUCT':
    return { ...state, data: payload }

   case 'ADD_TO_CART' :

 let add = [...state.cart];

    if(add.length==0){
      add.push({item:payload, count : 1});
    }else{
      let index = add.findIndex((v)=> {

        return v.item.id == payload.id;
      });

      if(index>=0){
        add = add.map((v)=>{
          console.log(v , "kkkkkk");

          if(v.item.id == payload.id)
          {
            return { item: payload, count : v.count+1}
            
          }
          else
          {
            return v;
          }

        })
      }

      else
      {

        add.push({item:payload, count : 1});

      }

    }

    return   {...state, cart: add}



    case "INC_ITEM" :
                let plusitem = state.cart.map( (product)=>{
               console.log(product,"ppppp") ;  
                    if(product.item.id==payload){
                        return{...product, count:product.count + 1}
                    }
                    return product;
                })
                return{
                    ...state,
                    cart:plusitem
                }


                case "DIC_ITEM" :
                let decrease = state.cart.map( (product)=>{
                
                    if(product.item.id==payload){
                        return{...product, count:product.count-1}
                    }
                    return product;
                })
                return{
                    ...state,
                    cart:decrease
                }


                case 'REMOVE_ITEM' : 

                let removeCart = state.cart.filter((product)=>{
                  return product.item.id !== payload;
                })

                return {
                  ...state , cart:removeCart
                }


                


  



   



    



  default:
    return state
  }
}
