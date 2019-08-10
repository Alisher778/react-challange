import React, { Component } from 'react';
import { API_KEY } from '../../keys';
import Axios from 'axios';


class LandingPage extends Component {
    state = { query: '', data: [] }

    searchHandler = () => {
        const url = `https://api-v2.intrinio.com/companies/search?query=${this.state.query}&api_key=${API_KEY}`;
        return Axios
            .get(url)
            .then(res => {
                if (res.data.companies.length > 0) {
                    this.setState({ data: res.data.companies })
                } else {
                    this.setState({ data: [{ id: 'none', name: 'Nothing found' }] })
                }

            })
            .catch(err => console.log(err))
    }

    render() {
        console.log(this.state);

        return (
            <div>
                <h2>Search Page</h2>

                <input
                    type="text"
                    onChange={(e) => this.setState({ query: e.target.value })}
                />

                <button onClick={this.searchHandler}>Search</button>
                <ul>
                    {
                        this.state.data.length > 0 ?
                            (
                                this.state.data.map(item => {
                                    return <li key={item.id}>{item.name}</li>
                                })
                            )
                            :
                            (
                                null
                            )
                    }
                </ul>


            </div>
        )
    }
}

export default LandingPage;