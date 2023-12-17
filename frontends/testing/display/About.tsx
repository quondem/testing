import { Cemjsx, Static, Ref, Fn, front, Func } from "cemjs-all"
import Arrow from '@svg/arrow.svg';
import slides from "json/aboutSlides.json"

export default function () {
  return (
    <section class="about">
        <div class="about__info">
                <p class="about__text">How we work</p>
                <div class="about__cover">
                    <h1 class="about__title">Visualising our<br/>processes.</h1>
                    <p class="about__subtitle">Your idea starts now, without any delays or unnecessary paperwork.</p>
                </div>
        </div>
        <div class="about__container">
            <div class="about__options">
                <div class="about__wrapper">
                    <div class="about__pagination active">01</div>
                    <div class="about__line"></div>
                    <div class="about__pagination">02</div>
                </div>
                <div class="about__buttons">
                    <button class="about__button next">
                        <img src={Arrow} alt="arrow" />
                    </button>
                    <button class="about__button prev">
                        <img src={Arrow} alt="arrow" />
                    </button>
                </div>
            </div>
                <div class="about__swiper swiper">
                <div class="about__swiper-wrapper swiper-wrapper">
                    {
                    slides.map((item, index) => {
                        return (
                        <div class="about__swiper-slide swiper-slide">
                            <img class="about__swiper-slide-img" src={item.img} alt="slide" />
                            <h3 class="about__swiper-slide-title">{item.title}</h3>
                            <p class="about__swiper-slide-text">{item.text}</p>
                        </div>
                    )
                    })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}