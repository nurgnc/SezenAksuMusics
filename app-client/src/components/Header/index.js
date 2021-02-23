import logo from '../../logos/image2.png'

const Header = () => {
    return <nav className="navbar navbar-expand-lg">
    <img className="mx-3" src={logo} width="100" height="100"/>
    <h4 className="mx-4 my-2 navbar-text">Sezen Aksu Şarkıları</h4>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse justify-content-end mx-4" id="navbarSupportedContent">
      <div className="form-inline d-flex">
        <input id="search" className="form-control d-inline" type="search" placeHolder="Search" aria-label="Search"/>
        <button className="btn btn-success d-inline" onClick={() => alert(document.getElementById("search").value)}>Search</button>
      </div>
    </div>
  </nav>
}

export default Header;