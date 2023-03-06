import './Backdrop.css'

function Backdrop ({ children, show }) {
  return (
    <div className="Backdrop" style={{ display: show ? 'flex' : 'none' }}>
      {children}
    </div>
  )
}

export default Backdrop
