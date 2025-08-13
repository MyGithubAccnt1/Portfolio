import Slider from 'react-infinite-logo-slider'

function CodeStack() {

    const box = {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        boxShadow: '0 25px 45px rgba(0, 0, 0, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.5)',
        borderRadius: '15px',
        borderRight: '1px solid rgba(255, 255, 255, 0.2)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(5px)',
        padding: '30px',
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
        {src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', language: 'ReactJS'},
        {src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg', language: 'VueJS'},
        {src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg', language: 'ThreeJS'},
        {src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', language: 'NodeJS'},
        {src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg', language: 'ExpressJS'},
        {src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg', language: 'Laravel'},
        {src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg', language: 'MySQL'},
        {src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg', language: 'MongoDB'},
        {src: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_Apps_Script.svg', language: 'Google Apps Script'},
    ]

    return (
        <div className='w-[100dvw] md:w-[80dvw] lg:w-[75dvw] mx-auto!'>
            <b>Code Stack</b>
            <div className='relative'>
                <div className='content-[""] absolute z-2 top-0 left-0 w-[50px] h-full bg-gradient-to-r from-gray-300 dark:from-neutral-800 to-transparent'></div>
                <div className='content-[""] absolute z-2 top-0 right-0 w-[50px] h-full bg-gradient-to-l from-gray-300 dark:from-neutral-800 to-transparent'></div>
                <Slider
                    className="absolute z-1"
                    duration={25}
                    pauseOnHover={true}
                    blurBorders={false}
                    blurBorderColor={'#fff'}>
                    {codestack.map((code, index) => (
                        <Slider.Slide key={index}>
                            <div style={box} title={code.language}>
                                <img 
                                className='w-[50px] mx-auto!'
                                src={code.src} 
                                alt={code.language}/>
                            </div>
                        </Slider.Slide>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default CodeStack