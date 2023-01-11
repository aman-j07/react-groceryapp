import React from 'react'
import Slider from "react-slick";

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
  products:product[],
  cart:cartProducts[],
  setCart:React.Dispatch<React.SetStateAction<cartProducts[]>>,
}

let responsive= [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  let categories=['https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/home-category/2022-12-28/tile-Fruits-&-Vegetable-min.png','https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/home-category/2022-12-28/tile-Daily-Essentials-min.png','https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/home-category/2022-12-28/tile-Tea-coffee-and-more-min.png','https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/home-category/2022-12-28/tile-Packaged%20Food-min.png','https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/home-category/2022-12-28/tile-Masala-and-Dry-Fruits-min.png','https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/home-category/2022-12-28/tile-Munchies-Biscuit-min.png','https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/home-category/2022-12-28/tile-Fruits-&-Vegetable-min.png','https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/home-category/2022-12-28/tile-Daily-Essentials-min.png','https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/home-category/2022-12-28/tile-Tea-coffee-and-more-min.png','https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/home-category/2022-12-28/tile-Packaged%20Food-min.png','https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/home-category/2022-12-28/tile-Masala-and-Dry-Fruits-min.png','https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/home-category/2022-12-28/tile-Munchies-Biscuit-min.png','https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/home-category/2022-12-28/tile-Fruits-&-Vegetable-min.png','https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/home-category/2022-12-28/tile-Daily-Essentials-min.png','https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/home-category/2022-12-28/tile-Tea-coffee-and-more-min.png','https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/home-category/2022-12-28/tile-Packaged%20Food-min.png','https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/home-category/2022-12-28/tile-Masala-and-Dry-Fruits-min.png','https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/home-category/2022-12-28/tile-Munchies-Biscuit-min.png']
  let offers=['https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/offerzone/DryFruits-Banner-6-10-22-min.jpg','https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/offerzone/Diwali-Chocolate-min.jpg','https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/offerzone/DryFruits-Banner-6-10-22-min.jpg','https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/offerzone/Diwali-Chocolate-min.jpg']

function Home(props:IProps){
  const{products,cart,setCart}=props

  const addToCart=(ind:number)=>{
    let id=products[ind]._id
    let found=cart.findIndex((ele:product)=>ele._id===id)
    if(found===-1){
      console.log('Not found= ',found)
      let obj={...products[ind],quantity:1}
      cart.push(obj)
    }
    else{
      console.log('found= ',found)
      cart[found].quantity++;
    }
    setCart([...cart])    
  }

  return (<>
    <div className='py-2'>
        <Slider autoplay pauseOnHover={false} centerMode autoplaySpeed={2000} dots={false} infinite={true} speed={500} slidesToShow={3} slidesToScroll={1} responsive={responsive}>
              <img className='pe-2 slidecvr--big' src='https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/mainbanners/2023-1-11/Spar-House-Hold-Range-web-min.png' alt='product ad'/>
              <img className='pe-2 slidecvr--big' src='https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/mainbanners/2023-1-2/Winter-Store-web-min.png' alt='product ad'/>
              <img className='pe-2 slidecvr--big' src='https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/mainbanners/2022-12-29/TEA-COFFE-web-min.png' alt='product ad'/>
              <img className='pe-2 slidecvr--big' src='https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/mainbanners/2022-12-30/Baby%20Care%20Banner%20462x489-01.png' alt='product ad'/>
              <img className='pe-2 slidecvr--big' src='https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/mainbanners/2023-1-10/Spar-Day-dai-web-min.jpg' alt='product ad'/>
              <img className='pe-2 slidecvr--big' src='https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/mainbanners/2023-1-11/Spar-House-Hold-Range-web-min.png' alt='product ad'/>
          </Slider>
        </div>
        <img className='w-100 mt-4' src='https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/nov_20_2020_greestrip.jpg' alt='offers'/>
        <div className='py-2 px-3'>
          <h4 className='text-start my-2 text-muted'>Offers</h4>
          <Slider autoplay pauseOnHover={false} autoplaySpeed={2000} slide='img' dots={false} infinite={true} speed={500} slidesToShow={4.5} slidesToScroll={1}>
            <img className='pe-2 slidecvr--small' alt='offers' src='https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/ss-banners/2022-12-29/Dairy-min.png'/>
            <img className='pe-2 slidecvr--small' alt='offers' src='https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/ss-banners/2022-12-29/Skin-Care-min.png'/>
            <img className='pe-2 slidecvr--small' alt='offers' src='https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/ss-banners/2022-12-29/Electric-Appliances-min.jpg'/>
            <img className='pe-2 slidecvr--small' alt='offers' src='https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/ss-banners/2022-12-29/Hot-Sips-min.png'/>
            <img className='pe-2 slidecvr--small' alt='offers' src='https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/ss-banners/2022-12-29/Drinkware-min.png'/>
            <img className='pe-2 slidecvr--small' alt='offers' src='https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/ss-banners/2022-12-29/Utensils-min.jpg'/>
          </Slider>
        </div>  
        <h4 className='text-start my-2 text-muted'>Spar Day</h4>
        <div className='py-2 px-3 mx-5'>
          <Slider dots={false} infinite={true} speed={1000} slidesToShow={5} slidesToScroll={5}>
          {props.products.map((ele,i)=>{return <div className='pe-2'><div className="card slidecvr--medium">
            <img className='slidecvr__img--medium card-img-top' src={ele.images[0]} alt="..."/>
            <div className="card-body d-flex flex-column align-items-start">
              <h6 className="text-muted text-start slidehead overflow-hidden">{ele.title}</h6>
              <select className='bg-grey shorttxt w-100 border-0 px-0 py-1'><option>500gm</option><option>1000gm</option></select>
              <span>$ {ele.price}</span>
              <button className='btn btn-success rounded-0 w-100 my-2' onClick={()=>addToCart(i)}><i className="bi bi-cart3"></i> ADD TO CART</button>
            </div>
          </div></div>})}
          </Slider>
        </div>
        <h4 className='text-start my-2 text-muted'>Shop By Category</h4>
        <section className='gridsec gridsec--small px-3'>
        {categories.map(ele=>{return <img src={ele} className='w-100' alt='categories'/>})}
        </section>
        <h4 className='text-start my-2 text-muted'>Fresh Deals</h4>
        <div className='py-2 px-3 mx-5'>          
          <Slider dots={false} infinite={true} speed={1000} slidesToShow={5} slidesToScroll={5}>
          {props.products.map((ele,i)=>{return <div className='pe-2'><div className="card slidecvr--medium">
            <img className='slidecvr__img--medium card-img-top' src={ele.images[0]} alt="..."/>
            <div className="card-body d-flex flex-column align-items-start">
              <h6 className="text-muted text-start slidehead overflow-hidden">{ele.title}</h6>
              <select className='bg-grey shorttxt w-100 border-0 px-0 py-1'><option>500gm</option><option>1000gm</option></select>
              <span>$ {ele.price}</span>
              <button className='btn btn-success rounded-0 w-100 my-2' onClick={()=>addToCart(i)}><i className="bi bi-cart3"></i> ADD TO CART</button>
            </div>
          </div></div>})}
          </Slider>
        </div>
        <h4 className=' my-2 text-muted'>OFFER ZONE</h4>
        <section className='gridsec gridsec--big px-3'>
        {offers.map(ele=>{return <img src={ele} className='w-100' alt='categories'/>})}
        </section>
        <h4 className='text-start my-2 text-muted'>Fruits and Vegetables</h4>
        <div className='py-2 px-3 mx-5'>          
          <Slider dots={false} infinite={true} speed={1000} slidesToShow={5} slidesToScroll={5}>
          {props.products.map((ele,i)=>{return <div className='pe-2'><div className="card slidecvr--medium">
            <img className='slidecvr__img--medium card-img-top' src={ele.images[0]} alt="..."/>
            <div className="card-body d-flex flex-column align-items-start">
              <h6 className="text-muted text-start slidehead overflow-hidden">{ele.title}</h6>
              <select className='bg-grey shorttxt w-100 border-0 px-0 py-1'><option>500gm</option><option>1000gm</option></select>
              <span>$ {ele.price}</span>
              <button className='btn btn-success rounded-0 w-100 my-2' onClick={()=>addToCart(i)}><i className="bi bi-cart3"></i> ADD TO CART</button>
            </div>
          </div></div>})}
          </Slider>
        </div>
        <img className='w-100 px-3' src='https://storage.sg.content-cdn.io/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/Online%20Grocery%20Shopping-Buy%20grocery%20online%20save.jpg' alt='offer'/></>
  )
}

export default Home