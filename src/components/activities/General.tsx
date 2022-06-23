const General = (props: any) => {
    console.log()
    return (
        <div className='ignore-div'>
            {
              props.activities.map((x: any) => { 
                  return (
                    <div className='ignore-div'>
                      <p className="actividades"> <b>JUGANDO A {props.activities.map((activity: any) => activity.name.toUpperCase()).join(', ')}</b> </p>
                  <h4 className='activitytexto'>{x.state}</h4>
                  <h4 className='activitydetales'>{x.details}</h4>
                  <img
                    alt='largeimage'
                    src={
                      'https://cdn.discordapp.com/app-assets/' +
                      x.application_id +
                      '/' +
                      x.assets?.large_image +
                      '.png'
                    }
                    className='activityimg'/>
                </div>
                  )
              })
              }
        </div>
    )
}

export default General