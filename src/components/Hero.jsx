import { FaFacebookMessenger } from 'react-icons/fa';
function Hero() {
    const hero = {
        position: 'relative',
        padding: '50px',
        marginInline: '2.5%',
        borderRadius: '10px',
        backgroundImage: `
            linear-gradient(67.5deg, rgb(215, 215, 215) 0%, rgb(215, 215, 215) 46%, rgb(198, 198, 198) 46%, rgb(198, 198, 198) 49%, rgb(181, 181, 181) 49%, rgb(181, 181, 181) 56%, rgb(164, 164, 164) 56%, rgb(164, 164, 164) 61%, rgb(146, 146, 146) 61%, rgb(146, 146, 146) 75%, rgb(129, 129, 129) 75%, rgb(129, 129, 129) 84%, rgb(112, 112, 112) 84%, rgb(112, 112, 112) 100%),
            linear-gradient(22.5deg, rgb(215, 215, 215) 0%, rgb(215, 215, 215) 46%, rgb(198, 198, 198) 46%, rgb(198, 198, 198) 49%, rgb(181, 181, 181) 49%, rgb(181, 181, 181) 56%, rgb(164, 164, 164) 56%, rgb(164, 164, 164) 61%, rgb(146, 146, 146) 61%, rgb(146, 146, 146) 75%, rgb(129, 129, 129) 75%, rgb(129, 129, 129) 84%, rgb(112, 112, 112) 84%, rgb(112, 112, 112) 100%),
            linear-gradient(112.5deg, rgb(215, 215, 215) 0%, rgb(215, 215, 215) 46%, rgb(198, 198, 198) 46%, rgb(198, 198, 198) 49%, rgb(181, 181, 181) 49%, rgb(181, 181, 181) 56%, rgb(164, 164, 164) 56%, rgb(164, 164, 164) 61%, rgb(146, 146, 146) 61%, rgb(146, 146, 146) 75%, rgb(129, 129, 129) 75%, rgb(129, 129, 129) 84%, rgb(112, 112, 112) 84%, rgb(112, 112, 112) 100%),
            linear-gradient(90deg, rgb(182, 182, 182), rgb(155, 155, 155))
        `,
        backgroundBlendMode: 'overlay, overlay, overlay, normal'
    }
    const addButton = {
        marginRight: '2.5%',
        borderRadius: '5px',
        backgroundColor: 'blue',
        color: '#fff',
        padding: '5px 15px'
    }
    return (
        <>
            <div 
                className="text-center text-black"
                style={hero}>
                <h1 className="text-2xl">Hello World!</h1>
                <h5 className="text-2xl">Thank you for visiting.</h5>
            </div>
            <div
                style={{margin: '20px 0 0 2.5%',}}>
                <b style={{fontSize: '2rem', color: '#fff'}}>Mhel Voi A. Bernabe</b>
                <br/>
                <div style={{display: 'flex', alignItems: 'end', justifyContent: 'space-between'}}>
                    <p style={{color: '#fff'}}>WEB DEVELOPER</p>
                    <a style={addButton} href="https://m.me/MVB17" target="_blank" className='flex flex-row gap-2 py-2! items-center'>
                        <FaFacebookMessenger size={25} /><b>Contact me on Messenger</b>
                    </a>
                </div>
                <hr style={{color: '#fff', marginTop: '10px', width: 'calc(100% - 2.5%)'}}/>
            </div>
        </>
    )
}

export default Hero
