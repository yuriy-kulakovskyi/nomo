import React, { useState } from "react";
import "./MainPage.css"

const MainPage = () =>{
  const [opened, setOpened] = useState(false);

    return(
        <section className="MainPage" id="main_page">
            <header>
                <div className="logo"></div>

                <div className="nav__toggle" onClick={() => setOpened(true)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><g fill="none" fillRule="evenodd" stroke="#fff"><rect width="8" height="8" x="2.5" y="2.5" rx="2"></rect><rect width="8" height="8" x="13.5" y="2.5" rx="2"></rect><rect width="8" height="8" x="2.5" y="13.5" rx="2"></rect><rect width="8" height="8" x="13.5" y="13.5" rx="2"></rect></g></svg>
                </div>

                <div className="nav__menu" style={{top: opened ? "0" : "-100vh"}}>
                    <div className="nav__head">
                      <button className="nav__head__cross" onClick={() => setOpened(false)}>✕</button>
                    </div>
                    <a href="#preferences" className="nav__btn">Переваги</a>
                    <a href="#about" className="nav__btn">Хто ми</a>
                    <a href="#collabs" className="nav__btn">Хто з нами</a>
                    <a href="#feedbacks" className="nav__btn">Відгуки</a>
                    <a href="#contact" className="nav__btn">Контакти</a>
                </div>
            </header>
            <main className="main">
                <div className="txt__main">
                    <h1 className="h1__main">
                        Любий кешбек на <br />
                        твій вибір, тільки <br />
                        тут тільки з <span>NOMO</span> 
                    </h1>
                    <p className="p__main">
                        Ми пропонуємо унікальний кешбек програму для своїх <br />
                        клієнтів. Ми працюємо з багатьма партнерами, щоб <br />
                        дозволити нашим користувачам отримувати грошовий <br />
                        кешбек за покупки в різних магазинах та онлайн-<br />платформах.
                    </p>
                    <div className="main__btn">
                        <div className="img__apple"></div>
                        <div className="img__android"></div>
                    </div>
                </div>
                <div className="img__phone"></div>
                <div className="img__heart"></div>
            </main>
        </section>
    )
}

export default MainPage