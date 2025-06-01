import { Link } from 'react-router-dom'
import './Notfound.css'
function Notfound() {
    return (
        <>
            <div class="text-center">
                <div class="error mx-auto" data-text="404">404</div>
                <p class="lead text-gray-800 mb-5">Page Not Found</p>
                <p class="text-gray-500 mb-0">It looks like you found a glitch in the matrix...</p>
                <Link to="/" class="btn btn-outline-danger rounded-pill w-50 mt-2">&larr; Back to Home</Link>
            </div>
        </>
    )
  }
  
  export default Notfound
  