import { getAssetPath } from '../utils/pathUtils';

function Projects() {
    const parent = {
        padding: '2.5%',
        paddingBottom: '0',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px'
    }

    const box = {
        display: 'flex',
        gap: '10px',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        boxShadow: '0 25px 45px rgba(0, 0, 0, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.5)',
        borderRadius: '10px',
        borderRight: '1px solid rgba(255, 255, 255, 0.2)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(5px)',
        padding: '20px',
    }

    const projects = [
        {
            href: 'https://sbmedallion.infinityfreeapp.com',
            title: 'Capstone Project - DEVELOPMENT OF E-COMMERCE WEBSITE FOR SAINT BENEDICT MEDALLION',
            features: ['E-commerce System', 'Customization', 'Content Management System', 'Email Verification Security', 'Accounting Reports', 'Built-In Message', 'Comment Management', 'Real-time Notifications'],
            codestack: ['HTML', 'JavaScript', 'JQuery', 'PHP', 'MySQL'],
        },
        {
            href: 'https://mygithubaccnt1.github.io/Quotation/',
            src: '/flex2.png',
            title: 'Self Project - QUOTE FORM GENERATOR',
            features: ['Automated Calculation', 'Download to PDF', 'Dynamic Content'],
            codestack: ['HTML', 'JavaScript'],
        },
        {
            href: 'https://mygithubaccnt1.github.io/ID-generator/',
            src: '/flex3.jpeg',
            title: 'Self Project - ID GENERATOR',
            features: ['Automated Design', 'Download to PNG', '180 Degree Horizontal 3D View'],
            codestack: ['React', 'JSX'],
        },
    ]

    return (
        <>
            <div style={parent}>
                <b style={{color: '#fff'}}>Projects</b>
                {projects.map((project, index) => (
                    <a href={project.href} target="_blank" style={box} key={index}>
                        <div className="hidden lg:block" style={{width: '25%', position: 'relative'}}>
                            {project.src ? (
                                <img src={getAssetPath(project.src)} alt={project.title} style={{height: '200px'}}/>
                            ) : (
                                <>
                                    <img src={getAssetPath('/flex.gif')} alt={project.title} style={{height: '200px'}}/>
                                    <img src={getAssetPath('/flex_thesis.png')} alt={project.title} style={{position: 'absolute', top: '0', opacity: '0.6', height: '200px'}}/>
                                    <img src={getAssetPath('/flex_thesis_1.png')} alt={project.title} style={{height: '200px', marginTop: '10px'}}/>
                                </>
                            )}
                        </div>
                        <div style={{color: '#fff'}}>
                            <h6>{project.title}</h6>
                            <br/>
                            <p>Main Features:</p>
                            {project.features.map((feature) => (
                                <>
                                    <b>
                                        - {feature}
                                    </b>
                                    <br/>
                                </>
                            ))}
                            <br/>
                            <p>Code Stack:</p>
                            {project.codestack.map((code) => (
                                <>
                                    <b>
                                        - {code}
                                    </b>
                                    <br/>
                                </>
                            ))}
                        </div>
                    </a>
                ))}
            </div>
        </>
    )
}

export default Projects