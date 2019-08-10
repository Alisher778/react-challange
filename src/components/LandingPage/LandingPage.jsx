import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCompanies } from '../../store/actions/companiesActions';

class LandingPage extends Component {
    componentDidMount() {
        //fetch 10 companies list
        this.props.fetchCompanies()
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
                </div>
            )
        }

    }
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