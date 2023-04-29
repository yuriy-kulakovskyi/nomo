import './OurMerits.css'

const OurMerits  = () =>{
    return(
        <section className="OurMerits" id='preferences'>
            <div className="cart__grp">
                <div className="cart__grp__bg"></div>
                <div className="cart__grp__top">
                    <div className="cart">
                        <div className="cart__download"></div>
                        <h1 className="cart__h1">50 К+</h1>
                        <p className="cart__discription">Скачуваннь</p>
                    </div>
                    <div className="cart">
                        <div className="cart__like"></div>
                        <h1 className="cart__h1">45 К+</h1>
                        <p className="cart__discription">Задоволених клієнтів</p>
                    </div>
                </div>
                <div className="cart__grp__bottom">
                    <div className="cart">
                        <div className="cart__api"></div>
                        <h1 className="cart__h1">1 К+</h1>
                        <p className="cart__discription">Компаній з якими ми <br /> співпрацюємо</p>
                    </div>
                    <div className="cart">
                        <div className="cart__man"></div>
                        <h1 className="cart__h1">25 К+</h1>
                        <p className="cart__discription">Постійних клієнтів</p>
                    </div>
                </div>
            </div>
            <div className="merits__txt">
                <h1 className="merits__txt__h1">Переваги з нами</h1>
                <p className="merits__txt__p">
                    1) Величезний вибір - завантажуй <br /> додаток та обирай потрібний <br /> магазин з великого переліку, який <br /> ми постійно розшираємо.
                </p>
                <p className="merits__txt__p">
                  2) Швидкий кешбек - купуй улюблені <br /> товари або обирай послуги, а nomo <br /> перерахує твій кешбек на наступні <br /> покупки.
                </p>
                <p className="merits__txt__p">
                  3) Клієнтський сервіс - ми завжди на <br /> зв’язку! На будь-які питання ми <br /> маємо відповідь.
                </p>
            </div>
        </section>
    )
}

export default OurMerits