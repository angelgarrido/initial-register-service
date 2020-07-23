import React, { Component } from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { listRestaurants,listArticles,listSupplements } from '../graphql/queries'
import awsconfig from "../aws-exports";
Amplify.configure(awsconfig);

export class ContentRestaurants extends Component {
  state = { restaurants: [] }

  async componentDidMount() {
    try {
      const apiData = await API.graphql(graphqlOperation(listRestaurants))
      const restaurants = apiData.data.listRestaurants.items
      this.setState({ restaurants })
    } catch (err) {
      console.log('error: ', err)
    }
  }

  render() {
    return(
      <div className="content">
          <h2>Restaurantes</h2>
          <p>Tenemos un larga tradicion de restaurantes increibles. En nuestros restaurantes encontrará el lugar perfecto en el que podrá disfrutar de nuestra cocina moderna y saludable en un lugar idóneo</p>
          <p>Estos son algunos de nuestros mejores restaurantes: </p>
          <ol>        
            {
              this.state.restaurants.map((rest, i) => (
                <li key={i}><b>{rest.name}</b></li>))
            }
          </ol>
      </div>
    )
  }
}


/*
async function fetchRestaurants() {
  try {
    const restaurantData = await API.graphql(graphqlOperation(listRestaurants))
    const restaurants = restaurantData.data.listRestaurants.items
    setRestaurants(restaurants)
  } catch (err) { console.log('error fetching restaurants') }
}
*/
/*
const PageHome = () => {
  const [formState, setFormState] = useState(initialState)
  const [restaurants, setRestaurants] = useState([])
  useEffect(() => {
    fetchRestaurants()
  }, [])


  async function fetchRestaurants() {
    try {
      const restaurantData = await API.graphql(graphqlOperation(listRestaurants))
      const restaurants = restaurantData.data.listRestaurants.items
      setRestaurants(restaurants)
    } catch (err) { console.log('error fetching restaurants') }
  }

  return (
    <header>
		<div id="logo"><img src="/logo.png">Urban Gourmet</div>
		<nav>  
			<ul>
				<li><a href="/">Home</a></li>
				<li><Link to="/admin">Admin</Link></li>
				<li><a href="https://html-css-js.com/css/code/">CSS</a></li>
				<li><a href="https://htmlcheatsheet.com/js/">JS</a></li>
			</ul>
		</nav>
	</header>



    <div style={styles.container}>  
        <ul>
            <li>
                <Link to="/admin">Admin</Link>
            </li>
        </ul>

      <h2>Restaurants List</h2>

      {
        restaurants.map((restaurant, index) => (
          <div key={restaurant.id ? restaurant.id : index} style={styles.restaurant}>
            <p style={styles.restaurantName}>{restaurant.name}</p>
            <p style={styles.restaurantDescription}>{restaurant.description}</p>
          </div>
        ))
      }
    </div>
  )
}

const styles = {
  container: { width: 400, margin: '0 auto', display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', padding: 20 },
  restaurant: {  marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  restaurantName: { fontSize: 20, fontWeight: 'bold' },
  restaurantDescription: { marginBottom: 0 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}
export default PageHome;

*/