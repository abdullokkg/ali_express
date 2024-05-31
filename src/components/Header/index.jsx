import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Header = () => {
    return (
        <>
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
        </>
    )
}

export default Header