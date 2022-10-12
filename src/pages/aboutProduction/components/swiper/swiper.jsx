import sliderStyle from './swiper.module.scss'
import '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js'
import 'http://code.jquery.com/jquery-1.11.3.min.js'
import $ from 'jquery';
import video1 from '../../../../style/videos/video1.mp4'
import video2 from '../../../../style/videos/video2.mp4'
import video3 from '../../../../style/videos/video3.mp4'
import img1 from '../../../../style/images/img1.jpeg'
import img2 from '../../../../style/images/img2.jpg'
import img3 from '../../../../style/images/img3.jpg'

$(document).ready(function() {
    $('.slider').slick();
})

const VideoSwiper = () => {
    const videos = [{id: 0, video: video1}, {id: 1, video: video2}, {id: 2, video: video3}];
    const imgs = [img1, img2, img3];

    return(
        <div className={sliderStyle.wrapper}>
            <div className={sliderStyle.slider}>
                {/* {
                    imgs.map((img) => 
                    <div className={sliderStyle.slider__item}>
                        <img className={sliderStyle.slider__img} src={img} />
                    </div>
                    )
                } */}
            </div>
        </div>
    );
};

export default VideoSwiper;