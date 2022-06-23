import './css/App.css'
import React from 'react'

import { Data, useLanyard } from 'use-lanyard'
import { createDefaultData } from './util/createDefaultData'


import Status from './components/Status'
import Location from './components/Location'
import PersonalData from './components/PersonalData'
import Spotify from './components/activities/Spotify'
import General from './components/activities/General'

function App() {
  const presence = JSON.parse(JSON.stringify(useLanyard('756801630170513418')))

  const defaultData = createDefaultData()
  const data: Data = !presence.isValidating ? presence.data : defaultData

  const playingFN = (x: any) => x.type === 0
  const playingActivities = data.activities.filter(playingFN)

  console.log(playingActivities)

  return (
    <div className='app'>
      <div className='navbar'>
        <h1 className='navbar-brand'>DaskTek</h1>
        <a href="https://twitter.com/daskyt004" target="_blank" rel="noreferrer" className="twitter">Twitter</a>
        <a href="https://discordredirect.discordsafe.com/users/756801630170513418" rel="noreferrer" target="_blank" className="discord">Discord</a>
      </div>

      <br />
      <h3 className='presentacion'>
        I'm a 14-year-old <b>writer</b> and <b>developer novice</b> from Madrid,
        Spain.
        <br />
        +1 year of experience as a <b>writer</b>.<br /> Learning <b>Python</b>,{' '}
        <b>HTML</b>,<b>CSS</b> and <b>TypeScript (React)</b>
      </h3>

      <h1 className="proyectos">Projects</h1>
      <div className="dasktales"><img alt="fotika" className="dasktalesimg"src="https://cdn.discordapp.com/attachments/968243776038531072/985975332928618566/dasktektales.png"></img><h2 className="dasktalestext">DaskTekTales</h2><br/><br/><h3 className="dasktalestext2">DaskTekTales is an org based on promoting and improving writing and reading on social networks.</h3><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer"><div className="menu1"><p className="menutexto1">More info</p></div></a></div>

      <div className="quastral">
        <h2 className="discusslabtext">
          Quastral
        </h2>
        <img alt="DiscussLab" className="discusslabimg" src="https://cdn.discordapp.com/attachments/960914541837959208/986625709642493962/Union_1.png"></img>
        <br/><br/>
        <h3 className="quastraltext2">Coming soon.</h3><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer"><div className="menu3"><p className="menutexto3">More info</p></div></a>
      </div>

      <div className="discusslab">
        <h2 className="discusslabtext">DiscussLab</h2>
        <img src="https://cdn.discordapp.com/attachments/985968201068326973/986285390010925056/DiscussLab_Color.png" className="discusslabimg"></img>
        <h3 className="discusslabtext2">DiscussLab is a project based on simulation of judgments and discussion by the more realistic way between Discord users.</h3>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer">
          <div className="menu2"><p className="menutexto2">More info</p></div>
        </a>
      </div>

      <div className='tarjetapruba'>
          <PersonalData data={data}/>

          <Status data={data}/><br />

          <Spotify data={data}/>
          <General data={data} activities={playingActivities} playingFN={playingFN}/>

          <Location/>
      </div>
    </div>
  )
}

export default App