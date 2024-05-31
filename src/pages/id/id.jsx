import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { likeProduct } from "../../redux/slice/likeSlice";
import { FaCartPlus } from "react-icons/fa";
import { cartproducts } from "../../redux/slice2/cartSlice";
import "./id.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { useState } from 'react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Nav2 from '../../components/Navbar2';
import Header from '../../components/Header';

function Id() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const reduxProducts = useSelector((state) => state.id.id2.slice(0, 1))
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleup2 = (phone2) => {
        dispatch(likeProduct(phone2))
        console.log(phone2);
        navigate("/like")
    }
    const handleup = (phone2) => {
        dispatch(cartproducts(phone2))
        console.log(phone2);
        navigate("/cart")
    }
    return (
        <>
            <Nav2/>
            <Header/>
            <div className="id">
                {reduxProducts.map(product => (
                    <div key={"key"} className="id_card">
                        <div className='card_img'>
                        <Swiper
                            style={{
                                '--swiper-navigation-color': '#fff',
                                '--swiper-pagination-color': '#fff',
                            }}
                            spaceBetween={10}
                            navigation={true}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper2"
                        >
                            <SwiperSlide className='card_img'>
                                <img className='img' src={product.images[0]} />
                            </SwiperSlide>
                            <SwiperSlide className='card_img'>
                                <img className='img' src={product.images[1]} />
                            </SwiperSlide>
                            <SwiperSlide className='card_img'>
                                <img className='img' src={product.images[2]} />
                            </SwiperSlide>
                        </Swiper>
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            spaceBetween={10}
                            slidesPerView={3}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper"
                        >
                            <SwiperSlide className='card_img_mini'>
                                <img className='img1' src={product.images[0]} />
                            </SwiperSlide>
                            <SwiperSlide className='card_img_mini'>
                                <img className='img1' src={product.images[1]} />
                            </SwiperSlide>
                            <SwiperSlide className='card_img_mini'>
                                <img className='img1' src={product.images[2]} />
                            </SwiperSlide>
                        </Swiper>
                        </div>
                        <div className="card_txt">
                            <div className="card_h1">
                                <h1>{product.title}</h1>
                            </div>
                            <br />
                            <br />
                            <div className="card_str">
                                <strong>Title: {product.title}</strong>
                                <br />
                                <br />
                                <strong>Price: ${product.price}</strong>
                                <br />
                                <br />
                                <strong>Category: {product.category.name}</strong>
                                <div className='btn'>
                                    <IconButton className='button' onClick={() => handleup2(product)} aria-label="add to favorites">
                                        <button><FavoriteIcon className='icons' />Add to like</button>
                                    </IconButton>
                                    <IconButton className='button' onClick={() => handleup(product)} aria-label="add to favorites">
                                        <button><FaCartPlus className='icons' />Add to cart</button>
                                    </IconButton>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Id