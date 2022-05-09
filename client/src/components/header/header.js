import './header.css';

function Header() {
  return (
    <div className="header">
        <span className='headerTitle'>LEMON</span>
        <div className='search'>
        <div className='searchIcon'>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className='searchInputs'>
            <input
              type="text"
              placeholder='Search for products or brands'
              className='headerSearch'
              autofocus
            />
          </div>
        </div>
    </div>
  );
}

export default Header;
