export interface product{
    _id: string,
    title: string,
    description: string
    category: string,
    brand: string,
    expDate: string,
    mfdDate: string,
    size: string,
    price: number,
    stock: string,
    images: string[]
    suggestion: string[]
    allegations: string[]
  }
  
  export interface user{
    email:string,
    phone:number,
    password:string,
  }
  
  export type cartProducts=product & {quantity:number}