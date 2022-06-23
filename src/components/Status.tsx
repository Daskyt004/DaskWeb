import { Laptop2, Smartphone  } from 'lucide-react'

const Status = (props: any) => {
    return (
        <div className='ignore-div'>
          {props.data.discord_status === 'online' && (
            <div className='tarjeta-status-on' />
          )}

          {props.data.discord_status === 'idle' && (
            <div className='tarjeta-status-idle' />
          )}

          {props.data.discord_status === 'offline' && (
            <div className='tarjeta-status-off' />
          )}

          {props.data.discord_status === 'offline' && (
            <p className='textoffline'>Nothing here, just sleeping.</p>
          )}

          {props.data.discord_status === 'offline' && (
            <img
              alt="oflain"
              className='imagenoffline'
              src='https://p4.wallpaperbetter.com/wallpaper/953/480/857/animated-movies-movies-how-to-train-your-dragon-toothless-wallpaper-preview.jpg'
            />
          )}

          {props.data.discord_status === 'dnd' && (
            <div className='tarjeta-status-no-molestar' />
          )}

          { props.data.active_on_discord_desktop && (
            <Laptop2 className="activopc"/>      
            )}

{ props.data.active_on_discord_mobile && (
            <Smartphone className="activomovil"/>      
            )}
        </div>
    )
}

export default Status