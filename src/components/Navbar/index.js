import { Header, StyledLink } from "./styles"

const Navbar = () => {
    return (
        <Header>
            <h1>Im a Header :)</h1>


            <StyledLink className="distance" to="/home"><button>
                Home</button></StyledLink>

            <StyledLink to="/about"><button>About
                </button></StyledLink>
            <StyledLink to="/about"><button>Another one
                </button></StyledLink>


        </Header>
    )
}

export default Navbar;