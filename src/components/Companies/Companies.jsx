import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import debounce from 'loadsh/debounce';
import { fetchCompanies } from '../../store/actions/companiesActions';
import { Card, CardParent, Loading, ErrorCard, Search } from '../../styles';


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
            return <ErrorCard>Error message: {error} </ErrorCard>
        } else if (pending) {
            return <Loading><div></div> Loading ...</Loading>
        } else {
            return (
                <div>
                    <h2>Companies Page</h2>
                    <Search
                        type="text"
                        ref={ref => this.searchRef = ref}
                        onChange={this.filterhandler}
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

                </div>
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
    return {
        fetchCompanies: () => dispach(fetchCompanies())
    }
}


export default connect(mapStateToProps, mapDispachToProps)(LandingPage);