import {Link} from 'react-router-dom';

function Search()
{
    return (<>
    <div class="input-group">
        <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
        <Link type="button" className="btn btn-outline-success" to="/add-survey">Add New</Link>
    </div>
    </>)
}

export default Search;