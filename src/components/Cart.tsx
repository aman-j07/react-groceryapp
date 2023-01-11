import React from 'react'
import {Link} from 'react-router-dom'

interface product{
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

type cartProducts=product & {quantity:number}

interface IProps{
  cart:cartProducts[],
  setCart:React.Dispatch<React.SetStateAction<cartProducts[]>>,
}

function Cart(props:IProps) {
  const {cart,setCart}=props

  const editQuantity=(todo:string,ind:number)=>{
    if(todo==='increase'){
      cart[ind].quantity++;
    }else if(todo==='decrease'){
      if(cart[ind].quantity===1){
        deleteItem(ind)
        return
      }else{
        cart[ind].quantity--;
      }
    }
    setCart([...cart])
  }

  const deleteItem=(ind:number)=>{
    cart.splice(ind,1)
    setCart([...cart])
  }

  return (
    <main className='d-flex mx-2 px-4 justify-content-evenly align-items-start'>
        <section>
            <h5 className='text-start fw-light border-bottom  my-3 pb-2'>YOUR SHOPPING CART</h5>
            {cart.length>0?
            <><table className='table table-striped text-start fw-light mb-0 border'>
                <thead><tr className='bg-grey'><th className='fw-light'>ITEMS IN YOUR CART</th><th className='fw-light'>SPAR UNIT PRICE</th><th className='fw-light'>QUANTITY</th><th className='fw-light'>SUBTOTAL</th><th className='fw-light'></th></tr></thead>
                <tbody>{cart.map((ele,i)=>{return <tr><td>{`${ele.title.substring(0,70)}${ele.title.length>70 ? '...':''}`}</td><td>$ {ele.price}</td><td><span className='d-flex align-items-center py-0 justify-content-between gap-1'><button className='border-1 btn-outline-success rounded-circle ' onClick={()=>editQuantity('decrease',i)}>-</button>{ele.quantity}<button className='border-1 btn-outline-success rounded-circle' onClick={()=>editQuantity('increase',i)}>+</button></span></td><td>$ {(ele.price*ele.quantity).toFixed(2)}</td><td><i onClick={()=>deleteItem(i)} className="bi bi-trash3 text-danger"></i></td></tr>})}</tbody>
            </table><div className='d-flex justify-content-between p-2 border border-top-0'><button onClick={()=>{setCart([])}} className='btn btn-secondary rounded-0'><i className="bi bi-trash3 me-1"></i>EMPTY CART</button><Link to='/'><button className='btn btn-secondary rounded-0'>CONTINUE SHOPPING</button></Link></div></>:<h2>Add some items to place order :)</h2>}
        </section>
        {cart.length>0?<section className='bg-grey my-3 pt-3'>
          <div className='border-bottom border-2 px-3 pb-4'>
            <h6 className='text-start fw-light'>COUPONS</h6>
            <span className="d-flex">
              <input type="email" className="form-control rounded-0"/>
              <button className="btn btn-secondary rounded-0" type="button" id="button-addon2">APPLY</button>
            </span>
          </div>
          <div className='p-3 d-flex flex-column'>
            <h6 className='fw-light text-start'>PRICE DETAILS</h6>
            <span className='d-flex justify-content-between fw-light my-2 shorttxt'><span>Sub Total</span><span>{cart.reduce<any>((total:number=0,ele:cartProducts)=>{return total+(ele.price*ele.quantity)},0).toFixed(2)}</span></span>
            <span className='d-flex justify-content-between fw-light my-2 shorttxt'><span>Promotional Discount</span><span>$ 00</span></span>
            <span className='d-flex justify-content-between fw-light py-3 shorttxt border-top'><span>TOTAL</span><span>{cart.reduce<any>((total:number=0,ele:cartProducts)=>{return total+(ele.price*ele.quantity)},0).toFixed(2)}</span></span>
          </div>
          <button className='btn btn-success w-100 rounded-0'>PROCEED TO CHECKOUT</button>
        </section>:''}
    </main>
  )
}

export default Cart