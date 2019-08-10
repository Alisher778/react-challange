import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import debounce from 'loadsh/debounce';
import { fetchCompanies } from '../../store/actions/companiesActions';


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
            return <h2>Error</h2>
        } else if (pending) {
            return <h2>Loading ....</h2>
        } else {
            return (
                <div>
                    <h2>Companies Page</h2>
                    <input
                        type="text"
                        ref={ref => this.searchRef = ref}
                        onChange={this.filterhandler}
                    />
                    <ul>
                        {
                            this.state.companies.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <Link to={`/companies/${item.ticker}`}>{item.name}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>

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