import Slider from 'react-infinite-logo-slider'

function CodeStack() {
    const parent = {
        position: 'relative',
        overflowX: 'hidden',
        padding: '2.5%',
        paddingBottom: '0',
        width: '100%',
    }

    const box = {
        display: 'inline-block',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        boxShadow: '0 25px 45px rgba(0, 0, 0, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.5)',
        borderRadius: '15px',
        borderRight: '1px solid rgba(255, 255, 255, 0.2)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(5px)',
        padding: '20px',
        minWidth: '100px',
        marginInline: '15px'
    }

    const codestack = [
        {src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg', language: 'C++'},
        {src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualbasic/visualbasic-original.svg', language: 'Visual Basic'},
        {src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original-wordmark.svg', language: '.NET'},
        {src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg', language: 'PHP'},
        {src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', language: 'Python'},
        {src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg', language: 'HTML'},
        {src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg', language: 'CSS'},
        {src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', language: 'JavaScript'},
        {src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg', language: 'JQuery'},
        {src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg', language: 'Laravel'},
        {src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', language: 'ReactJS'},
        {src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg', language: 'VueJS'},
        {src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', language: 'NodeJS'},
        {src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg', language: 'ExpressJS'},
        {src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg', language: 'MySQL'},
        {src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg', language: 'MongoDB'},
    ]

    return (
        <>
            <div style={parent}>
                <b style={{color: '#fff'}}>Code Stack</b>
                <Slider
                    duration={25}
                    pauseOnHover={true}
                    blurBorders={false}
                    blurBorderColor={'#fff'}>
                    {codestack.map((code, index) => (
                        <Slider.Slide  style={box} key={index}>
                            <img style={{width: '50px', marginInline: 'auto', marginBottom: '10px'}} src={code.src} alt={code.language}/>
                        </Slider.Slide>
                    ))}
                </Slider>
            </div>
        </>
    )
}

export default CodeStack