import { FaFacebookMessenger } from 'react-icons/fa';
function Hero() {
    const hero = {
        backgroundImage: `
            linear-gradient(67.5deg, rgb(215, 215, 215) 0%, rgb(215, 215, 215) 46%, rgb(198, 198, 198) 46%, rgb(198, 198, 198) 49%, rgb(181, 181, 181) 49%, rgb(181, 181, 181) 56%, rgb(164, 164, 164) 56%, rgb(164, 164, 164) 61%, rgb(146, 146, 146) 61%, rgb(146, 146, 146) 75%, rgb(129, 129, 129) 75%, rgb(129, 129, 129) 84%, rgb(112, 112, 112) 84%, rgb(112, 112, 112) 100%),
            linear-gradient(22.5deg, rgb(215, 215, 215) 0%, rgb(215, 215, 215) 46%, rgb(198, 198, 198) 46%, rgb(198, 198, 198) 49%, rgb(181, 181, 181) 49%, rgb(181, 181, 181) 56%, rgb(164, 164, 164) 56%, rgb(164, 164, 164) 61%, rgb(146, 146, 146) 61%, rgb(146, 146, 146) 75%, rgb(129, 129, 129) 75%, rgb(129, 129, 129) 84%, rgb(112, 112, 112) 84%, rgb(112, 112, 112) 100%),
            linear-gradient(112.5deg, rgb(215, 215, 215) 0%, rgb(215, 215, 215) 46%, rgb(198, 198, 198) 46%, rgb(198, 198, 198) 49%, rgb(181, 181, 181) 49%, rgb(181, 181, 181) 56%, rgb(164, 164, 164) 56%, rgb(164, 164, 164) 61%, rgb(146, 146, 146) 61%, rgb(146, 146, 146) 75%, rgb(129, 129, 129) 75%, rgb(129, 129, 129) 84%, rgb(112, 112, 112) 84%, rgb(112, 112, 112) 100%),
            linear-gradient(90deg, rgb(182, 182, 182), rgb(155, 155, 155))
        `,
        backgroundBlendMode: 'overlay, overlay, overlay, normal'
    }
    return (
        <div className='w-[100dvw] md:w-[80dvw] lg:w-[75dvw] mx-auto!'>
            <div 
                style={hero}
                className="text-center text-black rounded-lg p-[50px]!">
                <h1 className="text-2xl">Hello World!</h1>
                <h5 className="text-2xl">Thank you for visiting.</h5>
            </div>
            <div className='my-[20px]!'>
                <b className='text-4xl'>Mhel Voi A. Bernabe</b>
                <br/>
                <div className='flex items-end justify-between'>
                    <p className='font-bold'>WEB DEVELOPER</p>
                    <a href="https://m.me/MVB17" target="_blank" 
                    className='flex items-center gap-2 py-2! px-5! rounded-sm transistion-all duration-300
                    border text-[#1877F2]
                    hover:border-[#1877F2] hover:bg-[#1877F2] hover:text-white
                    dark:border-0 dark:text-white dark:bg-[#1877F2]
                    hover:dark:text-[#1877F2] hover:dark:bg-white
                    '>
                        <FaFacebookMessenger size={25} /><b>Contact me on Messenger</b>
                    </a>
                </div>
                <div 
                className='content-[""] mt-[10px]! w-full h-0.5
                bg-gradient-to-b from-transparent via-black to-transparent
                dark:from-white dark:via-transparent dark:to-white'></div>
            </div>
        </div>
    )
}

export default Hero
