import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCompanies } from '../../store/actions/companiesActions';

class LandingPage extends Component {
    state = { companies: [] }
    componentDidMount() {
        //fetch 10 companies list
        this.props.fetchCompanies();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.companies !== this.props.companies) {
            console.log('Updated');

            return this.setState({ companies: this.props.companies });
        }
    }

    render() {
        const { error, pending, errMsg } = this.props;
        if (error) {
            return <div>Error message: {errMsg} </div>
        } else if (pending) {
            return <div>Loading ...</div>
        } else {
            return (
                <div>
                    <h2>Landing Page</h2>

                    <ul>
                        {this.props.companies.slice(0, 10).map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link to={`/companies/${item.ticker}`}>{item.name}</Link>
                                </li>
                            )
                        })}
                    </ul>

                </div>
            )
        }

    }
}

LandingPage.propTypes = {
    companies: PropTypes.array,
}

LandingPage.defaultProps = {
    companies: []
}

const mapStateToProps = state => {
    return {
        companies: state.companies.companies,
        pending: state.companies.pending,
        error: state.companies.error,
        errMsg: state.companies.errMsg
    }
}

const mapDispachToProps = dispach => {
    return {
        fetchCompanies: () => dispach(fetchCompanies())
    }
}

export default connect(mapStateToProps, mapDispachToProps)(LandingPage);