import React from 'react'
import image from './images/curtis-headshot.jpg'

function AboutMe() {
    return (
        <div>
            <div className="text-4xl font-bold underline bg-green-500 text-black-950 p-4 rounded-3xl"><h1>
                About Me:</h1>
            </div>
            <div className='flex flex-row'>
                <div className='basis-1/2 text-1xl font-bold bg-green-500 text-black-950 p-4 rounded-3xl justify-center align-middle border-4 border-black'>
                    <h1>A Penn State University graduate with a mechanical engineering degree, I have come a long way since graduation. Ultimately I went in a different direction with my career and worked in healthcare for almost a decade. When the pandemic hit, I decided it was time for a change and moved with my girlfriend to NYC. I moved out of the healthcare industry and into a field I was more passionate about, coffee. However, after 2 years working in a roastery, I was seeking a more career-oriented path.  I am enrolled in the Skillify Web development program learning how to code and thoroughly enjoying myself. A lover of all things sports, music, and entertainment, I hope to one day land a career position in a field more suited to my interests and become the best coder I can be!</h1></div>
                <div className='basis-1/2 text-1xl font-bold bg-green-500 text-black-950 p-4 rounded-3xl justify-center align-middle border-4 border-black'>
                    <img src={image}></img></div>
            </div>
        </div>
    )






}


export default AboutMe;