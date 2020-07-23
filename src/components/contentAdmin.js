import React, { Component } from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { listRestaurants,listArticles,listSupplements } from '../graphql/queries'
import { createRestaurant } from '../graphql/mutations'
import awsconfig from "../aws-exports";
Amplify.configure(awsconfig);

export class ContentAdmin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '', 
      restaurants: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    this.fetchRestaurants();
  }

  async fetchRestaurants(){
    try {
      const apiData = await API.graphql(graphqlOperation(listRestaurants))
      const restaurants = apiData.data.listRestaurants.items
      this.setState({ restaurants })
    } catch (err) {
      console.log('error: ', err)
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.addRestaurant(this.state.value);
    this.fetchRestaurants();
    event.preventDefault();
  }

  async addRestaurant(restaurantName){
    try {
      const restaurant = { name: restaurantName }
      await API.graphql(graphqlOperation(createRestaurant, {input: restaurant}))
    } catch (err) {
      console.log('error creating restaurant:', err)
    }
  }
  
  render() {
    return(
    <div className="content">
      <h2>Admin - Añadir restaurante</h2>
      <p>
        <form onSubmit={this.handleSubmit}>
          <label> 
            <input type="text" value={this.state.value} placeholder="Nombre Restaurante" onChange={this.handleChange} />
          </label>
            <input type="submit" value="Crear Restaurante" />
        </form>
      </p>
      
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




