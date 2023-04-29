import './Setings.css'

const Setings = () =>{
    return(
        <div className="setings" id='about'>
            <div className="setings__txt">
                <div className="img__setings"></div>
                <h1 className="h1__setings">
                  Хто ми?
                </h1>
                <p className="setings__p">
                  <span>Nomo</span> - це те, що зобить твоє життя кращим! Ми запустили класну програму кешбеку, де ти можеш отримати гроші за те, що просто робиш свої звичайні покупки. І все це безкоштовно! Просто здійснюй свої покупки через додаток або карточку nomo- кешбек. Отримай кешбек, який зможеш витратити на наступні покупки.
                </p>
                <button className="setings__download">Скачати</button>
            </div>
            <div className="settings__img"></div>
        </div>
    )
}

export default Setings