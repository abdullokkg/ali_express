import { GrCatalog } from "react-icons/gr";
import { SlBasket } from "react-icons/sl";
import { FaRegSmile } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card, CardContent, CardMedia, IconButton, Typography } from "@mui/material"
import { FaCartPlus } from "react-icons/fa"
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch } from "react-redux";
import { likeProduct } from "../../redux/slice/likeSlice";
import { cartproducts } from "../../redux/slice2/cartSlice";
import { ID } from "../../redux/slice3/ids";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Nav = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [data, setData] = useState(null)
    const [searchValue, setSearchValue] = useState("")
    // const [filteredData, setFilterData] = useState(null)
    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then(response => response.json())
            .then(data => setData(data.products))
    })
    const handleSearch = (data) => {
        return data?.filter(user => user.title.toUpperCase().includes(searchValue.toUpperCase().trim()))
    }
    console.log(handleSearch(data));
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
    const handleup3 = (phone2) => {
        dispatch(ID(phone2))
        console.log(phone2);
        navigate("/id")
    }
    return (
        <>
            <div className="div">
                <nav className="nav">
                    <div className="logo_txt">
                        <Link className="link" to={"/"}><h1>AliExpress</h1></Link>
                    </div>
                    <div className="input">
                        <Link to={"/"}><button><span><GrCatalog /></span><br />Каталог</button></Link>
                        <div className="search">
                            <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder="Search" />
                            <button className="search_btn">Найти</button>
                        </div>
                        <Link to={"/like"}><button><span><FaHeart /></span><br />Лайк</button></Link>
                        <Link to={"/cart"}><button><span><SlBasket /></span><br />Корзина</button></Link>
                        <Link to={"/login"}><button><span><FaRegSmile /></span><br />Войти</button></Link>
                    </div>
                </nav>
                <br />
                <div className='cart'>
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                        <SwiperSlide>
                            <div className="swiper1">
                                <h1 className="swiper1_h1">Get in harmony</h1>
                                <br />
                                <strong className="swiper1_strong">Health, hair care and luxury items <br />can help you feel at one.</strong>
                                <br />
                                <button className="swiper1_btn">Feel at one</button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper2">
                                <h1 className="swiper2_h1">May the <br />collectibles be <br />with you</h1>
                                <br />
                                <strong className="swiper2_strong">Discover a variety of action <br />figures, cards, toys and more.</strong>
                                <br />
                                <button className="swiper2_btn">Find yours</button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper3">
                                <h1 className="swiper3_h1">Give your <br />vehicle some <br />love</h1>
                                <br />
                                <strong className="swiper3_strong">Parts you need.Prices you want.</strong>
                                <br />
                                <button className="swiper3_btn">Shop parts</button>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="clothes">
                    {
                        handleSearch(data)?.map(furnitur =>
                            <Card key={furnitur.id} className='cosmetic_card2' sx={{ maxWidth: 345 }} >
                                <div onClick={() => handleup3(furnitur)}>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={furnitur.images[0]}
                                        alt="Smartphone"
                                    />
                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">
                                            ${furnitur.price}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {furnitur.title}
                                        </Typography>
                                    </CardContent>
                                </div>
                                <IconButton onClick={() => handleup(furnitur)} aria-label="add to favorites">
                                    <FaCartPlus />
                                </IconButton>
                                <IconButton onClick={() => handleup2(furnitur)} aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                            </Card>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Nav
