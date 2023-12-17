import { Cemjsx, Static, Ref, Fn, front, Func } from "cemjs-all"
import Info from "./Info"
import Cases from "./Cases"
import Capabilities from "./Capabilities"
import About from "./About"
import Solutions from './Solutions';

export default function () {
  return (
    <main class="wrapper">
      <Info />
      <Cases />
      <Capabilities />
      <About/>
      <Solutions/>
    </main>
  )
}