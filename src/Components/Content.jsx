import CustomScrollbars from './CustomScrollBar'
import { education, experienceData, skills } from '../data/experience'
import { useState } from 'react'

const Content = () => {
    const [sticky, setSticky] = useState(false)
    const [shownExp, setShownExp] = useState(0)
    const [shownSkill, setShownSkill] = useState(0)
    const onScroll = (e) => {
        if (e.target.scrollTop > 110 && !sticky) setSticky(true)
        if (e.target.scrollTop <= 110 && sticky) setSticky(false)
    }
    return <div className="content">
        <CustomScrollbars onScroll={onScroll}>
            <div className='container'>
                <div className='content-details details'>
                    <img className={`headshot ${sticky ? 'sticky' : ''}`} src='/headshot.png' />
                    <div className='details-text'>
                        <h3>Sudeep Mishra</h3>
                        <h5 className='text-gray'>Senior Software Engineer from Kathmandu, Nepal</h5>
                        <h6 className='text-gray'><i className="fa fa-envelope mr-2"></i>&nbsp;sudeep014@gmail.com</h6>
                    </div>
                </div>
                <div className='small-width'>
                    <div className='content-details about'>
                        <h4>About</h4>
                        <p className='text-gray'>I am an experienced Computer Engineer with a great dedication to my work and I am highly organized and professional. I am passionate about research and can apply my technical knowledge to software development.</p>
                    </div>
                    <div className='content-details skill'>
                        <h4>Skills</h4>
                        <div className='crds-ctr'>
                            {shownSkill !== skills.length - 1 && <button className='round-btn next' onClick={() => setShownSkill(shownSkill + 1)}><i className="fa fa-chevron-right" ></i></button>}
                            {shownSkill !== 0 && <button className='round-btn previous' onClick={() => setShownSkill(shownSkill - 1)}><i className="fa fa-chevron-left"></i></button>}
                            <div className='cards-container'>
                                {skills.map((_, idx) => (
                                    <div className={shownSkill === idx ? 'wec2 show' : 'wec1'} key={idx}>
                                        <div className='wect socials mb-2'>
                                            <a href={_.website} target='_blank'>{_.type}</a>
                                        </div>
                                        <div className='badge-container'>
                                            {_.list.map((__, i) => (
                                                <span className='badge' key={i}>
                                                    {__}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='content-details work-experience'>
                        <h4>Work Experince</h4>
                        <div className='crds-ctr'>
                            {shownExp !== experienceData.length - 1 && <button className='round-btn next' onClick={() => setShownExp(shownExp + 1)}><i className="fa fa-chevron-right" ></i></button>}
                            {shownExp !== 0 && <button className='round-btn previous' onClick={() => setShownExp(shownExp - 1)}><i className="fa fa-chevron-left"></i></button>}
                            <div className='cards-container'>
                                {experienceData.map((_, idx) => (
                                    <div className={shownExp === idx ? 'wec1 show' : 'wec1'} key={idx}>
                                        <div className='wect socials mb-2'>
                                            <a href={_.website} target='_blank'>{_.co_name}</a>
                                        </div>
                                        {_.experience.map((__, i) => (
                                            <div className='mb-2' key={i}>
                                                <div className='text-gray mb-2'>{__.date} &nbsp;[ {__.position} ]</div>
                                                {__.desc}
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='content-details education'>
                        <h4>Education</h4>
                        <div className='crds-ctr'>
                            <div className='cards-container'>
                                {education.map((_, idx) => (
                                    <div key={idx} className='mb-2'>
                                        <div className='wect socials'>
                                            {_.name}
                                        </div>
                                        <div>
                                            {_.degree}
                                        </div>
                                        <i>{_.time}</i>

                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </CustomScrollbars>
    </div>
}

export default Content