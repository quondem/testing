import { Cemjsx, Static, Ref, Fn, front, Func } from "cemjs-all"
import solutions from "json/solutions.json"


export default function () {
  return (
    <section class="solutions">
        <div class="solutions__wrapper">
            <h2 class="solutions__text">The AgriTech solutions we build</h2>
            <h1 class="solutions__title">Assisting stakeholders to increase yield and improve profitability.</h1>
        </div>
        <div class="solutions__items">
        {
        solutions.map((item, index) => {
               return (
                <div class="solutions__item">
                    <div class="solutions__item-cover">
                        <p class="solutions__item-id">{item.id}</p>
                        <h3 class="solutions__item-title">{item.title}</h3>
                        <p class="solutions__item-subtitle">{item.text}</p>
                        <button class="solutions__item-button">Learn more about it</button>
                    </div>
                    <div class="solutions__item-wrapper">
                        <img src={item.img} alt="case" class="solutions__item-img" />
                    </div>
                </div>
            )
        })
        }
    </div>
    </section>
  )
}