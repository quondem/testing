import { Cemjsx, front, Func, Static, Fn } from "cemjs-all"
import Navigation from "./navigation"


front.listener.finish = () => {
    return
}

front.func.test = () => {
    return
}

front.loader = () => {
    return
}

front.display = () => {
    return (
        <footer class="section footer">
            <div class="wrapper">
                <Navigation />
            </div>
        </footer>
    )
}

export { front }