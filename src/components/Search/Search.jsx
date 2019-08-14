import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Dflex, Button, CardParent, Card } from '../../styles/index';
import { Search, Container, Result } from './styles';
import API_KEY from '../../configs/keys';
import ErrorMsg from '../UI/ErrorMsg';
import Pending from '../UI/Pending';
import Axios from 'axios';

const searchUrl = `https://api-v2.intrinio.com/companies/search?api_key=${API_KEY}&query=`;

class SearchPage extends Component {
    state = { query: '', data: [], pending: false }

    searchHandler = () => {
        this.setState({ pending: true });
        Axios
            .get(searchUrl + this.state.query)
            .then((res) => {
                const { data: { companies } } = res;
                if (companies.length === 0) {
                    return this.setState({ data: [{ name: 'No company found', id: 'notFound' }], pending: false });
                }
                return this.setState({ data: companies, pending: false });
            })
            .catch((err) => this.setState({ error: true, errMsg: err.message }));
    }

    render() {
        const { error, pending, errMsg, data } = this.state;
        if (error) {
            return <ErrorMsg error={errMsg} />
        } else {
            return (
                <Container>
                    {pending && <Pending />}
                    <Dflex position="center">
                        <Search
                            width="70%"
                            type="text"
                            placeholder="Search company"
                            onChange={(e) => this.setState({ query: e.target.value })}
                        />
                        <Button onClick={this.searchHandler}>Search</Button>
                    </Dflex>

                    <CardParent>
                        {
                            (
                                data.map(item => {
                                    if (item.id !== 'notFound') {
                                        return <Card key={item.id}><Link to={`/companies/${item.ticker}`}>{item.name}</Link></Card>

                                    } else {
                                        return <Result key={item.id}>{item.name} by "{this.state.query}" name</Result>
                                    }
                                })
                            )

                        }
                    </CardParent>
                </Container>
            )
        }

    }
}

export default SearchPage;