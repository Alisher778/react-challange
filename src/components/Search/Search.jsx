import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchCompany } from '../../store/actions/searchActions';
import { Dflex, Button, CardParent, Card } from '../../styles/index';
import { Search, Container, Result } from './styles';
import ErrorMsg from '../UI/ErrorMsg';
import Pending from '../UI/Pending';


class SearchPage extends Component {
    state = { query: '', data: [] }

    searchHandler = () => {
        this.props.searchCompany(this.state.query);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.search.search !== this.props.search.search) {
            return this.setState({ data: this.props.search.search });
        }
    }

    componentWillUnmount() {
        return window.localStorage.clear();
    }


    render() {
        const { error, pending, search, errMsg } = this.props.search;
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
                            search &&
                            (
                                this.state.data.map(item => {
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

const mapStateToProps = state => {
    return {
        search: state.search
    }
}

const mapdispachToProps = dispach => {
    return {
        searchCompany: (query) => dispach(searchCompany(query))
    }
}

export default connect(mapStateToProps, mapdispachToProps)(SearchPage);