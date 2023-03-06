import './AlbumCard.css'

function AlbumCard ({ id, name, image, release, url }) {
  const releaseDate = new Date(release)
  const formattedRelease = releaseDate.toLocaleDateString(navigator.language, { year: 'numeric', month: 'short', day: 'numeric' })

  function handleClick () {
    window.open(url, '_blank')
  }

  return (
    <div className="AlbumCard" onClick={handleClick}>
      <img src={image} alt={name} />
      <div>
        <span>{name}</span>
        <span>{formattedRelease}</span>
      </div>

    </div>
  )
}

export default AlbumCard
