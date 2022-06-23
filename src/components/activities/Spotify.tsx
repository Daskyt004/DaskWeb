const Spotify = (props: any) => {
    return (
        <div className='ignore-div'>
            {props.data.listening_to_spotify && (
              <p className='texto-raro'>ESCUCHANDO SPOTIFY</p>
            )}
            {props.data.listening_to_spotify && (
              <div className='activity'>
                <div className='x-info'>
                  <span className='x-title'>{props.data.spotify?.song}</span>
                </div>

                {props.data.listening_to_spotify && (
                  <h3 className='x-subtitle'>{props.data.spotify?.artist}</h3>
                )}

                {props.data.listening_to_spotify && (
                  <img
                    alt='espotifai'
                    className='spotifyimg'
                    src={props.data.spotify?.album_art_url}
                  />
                )}
              </div>
            )}
        </div>
    )
}

export default Spotify