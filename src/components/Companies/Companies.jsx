import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import debounce from 'loadsh/debounce';
import { fetchCompanies } from '../../store/actions/companiesActions';
import { Card, CardParent, Headding } from '../../styles';
import { Search, Container } from './styles';
import ErrorMsg from '../UI/ErrorMsg';
import Pending from '../UI/Pending';


class LandingPage extends Component {
    state = { companies: [] }

    componentDidMount() {

        this.props.fetchCompanies();
    }

    filterhandler = debounce(() => {
        const value = this.searchRef.value;

        const data = this.props.companies.filter(item => item.name.toLowerCase().includes(value) || item.ticker.toLowerCase().includes(value));

        this.setState({ companies: data });

    }, 300);

    componentDidUpdate(prevProps) {
        if (prevProps.companies !== this.props.companies) {
            const sortAlphabetical = this.props.companies.sort((a, b) => {
                if (a.name > b.name) {
                    return 1
                } else if (a.name < b.name) {
                    return -1
                } else {
                    return 0
                }
            });
            return this.setState({ companies: sortAlphabetical });
        }
    }

    render() {
        const { error, pending } = this.props;

        if (error) {
            return <ErrorMsg error={error} />
        } else if (pending) {
            return <Pending />
        } else {
            return (
                <Container>
                    <Headding>All Companies</Headding>
                    <Search
                        type="text"
                        ref={ref => this.searchRef = ref}
                        onChange={this.filterhandler}
                        placeholder="Filter companies"
                        margin="auto"
                        width="70%"
                    />
                    <CardParent>
                        {
                            this.state.companies.map((item, index) => {
                                return (
                                    <Card key={index}>
                                        <Link to={`/companies/${item.ticker}`}>{item.name}</Link>
                                    </Card>
                                )
                            })
                        }
                    </CardParent>

                </Container>
            )
        }
    }



}

const mapStateToProps = state => {
    return {
        companies: state.companies.companies,
        pending: state.companies.pending,
        error: state.companies.error
    }
}

const mapDispachToProps = dispach => {
    return bindActionCreators({ fetchCompanies }, dispach)
}


export default connect(mapStateToProps, mapDispachToProps)(LandingPage);