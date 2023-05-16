import React from "react";

export const Data = () => {
    return (
        <div className='home__data'>
            <h1 className="home__title">
                Rafał Gontarski
                {/*<svg*/}
                {/*    width={36}*/}
                {/*    height={36}*/}
                {/*    fill='none'*/}
                {/*    xmlns="http://www.w3.org/2000/svg"*/}
                {/*    viewBox="0 0 48 48"*/}
                {/*    id="hand"*/}
                {/*    class='home__hand'>*/}
                {/*    <defs>*/}
                {/*        <clipPath id="a">*/}
                {/*            <path d="M0 38h38V0H0v38Z">*/}

                {/*            </path>*/}
                {/*        </clipPath>*/}
                {/*    </defs>*/}
                {/*    <g clip-path="url(#a)" transform="matrix(1.25 0 0 -1.25 0 47.5)">*/}
                {/*        <path fill="#d99e82" d="M0 0s1.132 1.65-.519 2.781c-1.649 1.131-2.78-.519-2.78-.519L-8.55-5.396c-.18.302-.379.6-.599.894l7.288 10.629s1.131 1.649-.519 2.78c-1.649 1.132-2.78-.518-2.78-.518l-6.856-9.997c-.255.209-.515.417-.785.622l7.947 11.59s1.131 1.649-.518 2.78c-1.649 1.132-2.78-.518-2.78-.518L-16.1 1.277c-.292.18-.581.335-.87.498l7.427 10.832s1.131 1.649-.519 2.78c-1.649 1.132-2.78-.518-2.78-.518l-7.854-11.453-.629-.918-.565-.825c4.948-3.393 5.419-9.779 2.592-13.902-.566-.825-1.39-.26-1.39-.26 3.393 4.949 2.356 10.51-2.593 13.903l1.462 7.302s.545 1.925-1.379 2.47c-1.924.545-2.469-1.379-2.469-1.379l-1.685-5.004c-.668-1.984-1.379-3.961-2.32-5.83-2.657-5.28-1.07-11.843 3.941-15.279 5.465-3.747 12.935-2.355 16.683 3.11.198.29.364.573.522.856l.044-.031L0 0Z" transform="translate(34.305 19.664)"></path><path fill="#77b255" d="M0 0h-2a6.966 6.966 0 0 0 6.958 6.958v-2A4.964 4.964 0 0 1 0 0" transform="translate(3.042 30)"></path><path fill="#77b255" d="M0 0h-2c0 5.514 4.486 10 10 10V8C3.589 8 0 4.411 0 0" transform="translate(5 25)"></path><path fill="#77b255" d="M0 0v2c3 0 5 2 5 5h2c0-4-3-7-7-7" transform="translate(30 1)"></path><path fill="#77b255" d="M0 0v2c4 0 8.042 4.042 8.042 8.042h2C10.042 4.042 6 0 0 0" transform="translate(25 2.958)"></path></g></svg>*/}
            </h1>
            <h3 className="home__subtitle">Junior Java&React Developer</h3>
            <p className="home__description">I'm creative Junior
                Java&React Full-Stack Developer programmer based in Warsaw
                and I'm passionate and ambitious to my work.</p>
            <a href="#contact" className="button button--flex">
                Say Hello
                <svg
                    width={24}
                    height={24}
                    fill='none'
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    id="message"
                    class='button__icon'>
                    <path fill="var(--container-color)" d="M20.34,9.32l-14-7a3,3,0,0,0-4.08,3.9l2.4,5.37h0a1.06,1.06,0,0,1,0,.82l-2.4,5.37A3,3,0,0,0,5,22a3.14,3.14,0,0,0,1.35-.32l14-7a3,3,0,0,0,0-5.36Zm-.89,3.57-14,7a1,1,0,0,1-1.35-1.3l2.39-5.37A2,2,0,0,0,6.57,13h6.89a1,1,0,0,0,0-2H6.57a2,2,0,0,0-.08-.22L4.1,5.41a1,1,0,0,1,1.35-1.3l14,7a1,1,0,0,1,0,1.78Z">
                    </path>
                </svg>
            </a>
        </div>
    )
}