const PersonalData = (props: any) => {
    return (
        <div className="ignore-div">
        <img
            alt='avatar'
            className='tarjeta-avatar'
            src={
              'https://cdn.discordapp.com/avatars/' +
              props.data.discord_user.id +
              '/' +
              props.data.discord_user.avatar +
              '.png?size=4096'
            }
          />

            <h3 className='tarjeta-nombre'>
              {props.data.discord_user.username}#{props.data.discord_user.discriminator}
            </h3>
            <div className='localizacion'>{props.data.kv.location}</div>
        </div>
    )
}

export default PersonalData