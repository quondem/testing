import { Cemjsx, Static, Ref, Fn, front, Func } from "cemjs-all"
import cases from "json/cases.json"


export default function () {
  return (
    <section class="cases">
        <div class="cases__wrapper">
            <h2 class="cases__text">Our cases</h2>
            <h1 class="cases__title">Building ideas for your needs.</h1>
            <p class="cases__subtitle">We discuss all opportunities, while you make a choice.</p>
        </div>
        <div class="cases__items">
        {
        cases.map((item, index) => {
               return (
                <div class="cases__item">
                    <div class="cases__item-wrapper">
                        <img src={item.img} alt="case" class="cases__item-img" />
                    </div>
                    <div class="cases__item-bottom">
                        <h3 class="cases__item-title">{item.title}</h3>
                        <p class="cases__item-subtitle">{item.text}</p>
                    </div>
                </div>
            )
        })
        }
    </div>
    </section>
  )
}