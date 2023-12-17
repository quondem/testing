import { Cemjsx, Static, Ref, Fn, front, Func } from "cemjs-all"
import noteBook from '@images/notebook.png'


export default function () {
  return (
    <section class="info">
        <div class="info__cover">
          <div class="info__info">
            <h1 class="info__title">Agri-Tech Digital Solutions made conviniently for your needs & desires.</h1>
            <p class="info__subtitle">We help your agriculture ecosystem fulfill its potential, transitioning your legacy into dynamic agritech enterprise.</p>
            <button class="info__button">Get ballpark estimate</button>
          </div>
          <img class='info__img' src={noteBook} alt="notebook" />
        </div>
    </section>
  )
}