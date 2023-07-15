export const getData = (payload) => ({
  type: 'GET_PRODUCT',
  payload
})

export const addTocart = (payload) => ({
  type: 'ADD_TO_CART',
  payload
})

export const inc =(test)=>{

  console.log(test,"oooooo");
  return{
      type:"INC_ITEM",
      payload:test.item.id
  }
}

export const dic =(test)=>{
  return{
      type:"DIC_ITEM",
      payload:test.item.id
  }
}

export const remv = (test)=>{
  return{
      type:"REMOVE_ITEM",
      payload:test.item.id
  }
}










