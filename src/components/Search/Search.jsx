import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { API_KEY } from '../../keys';
import Axios from 'axios';
import { Search, Dflex, Button, CardParent, Card } from '../../Elements/index';


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
                <Dflex position="center">
                    <Search
                        width="70%"
                        type="text"
                        onChange={(e) => this.setState({ query: e.target.value })}
                    />

                    <Button onClick={this.searchHandler}>Search</Button>
                </Dflex>

                <CardParent>
                    {
                        this.state.data.length > 0 ?
                            (
                                this.state.data.map(item => {
                                    return <Card key={item.id}><Link to={`/companies/${item.ticker}`}>{item.name}</Link></Card>
                                })
                            )
                            :
                            (
                                null
                            )
                    }
                </CardParent>


            </div>
        )
    }
}

export default LandingPage;