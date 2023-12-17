import { Cemjsx, Static, Ref, Fn, front, Func } from "cemjs-all"
import capabilities from "json/capabilities.json"

export default function () {
  return (
    <section class="capabilities">
        <h3 class="capabilities__text">What we offer</h3>
        <h1 class="capabilities__title">Our Capabilities.</h1>
        <p class="capabilities__subtitle">We make your product simple and stable with these opportunities.</p>
        <div class="capabilities__items">
            {
            capabilities.map((item, index) => {
               return (
                <div class="capabilities__item">
                        <h3 class="capabilities__item-title">{item.title}</h3>
                        <p class="capabilities__item-subtitle">{item.text}</p>
                        <button class="capabilities__item-button">Learn more about it</button>
                </div>
            )
            })
        }
        </div>
    </section>
  )
}