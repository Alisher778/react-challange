import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCompanies } from '../../store/actions/companiesActions';
import { Card, CardParent, Loading, ErrorCard, Headding } from '../../styles';

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
            return <ErrorCard>Error message: {errMsg} </ErrorCard>
        } else if (pending) {
            return <Loading><div></div> Loading ...</Loading>
        } else {
            return (
                <div>
                    <Headding>Top 10 Companies</Headding>
                    <CardParent>
                        {this.props.companies.slice(0, 10).map((item, index) => {
                            return (
                                <Card key={index} fDirection="column">
                                    <Link to={`/companies/${item.ticker}`}>
                                        <h5>{item.name}</h5>
                                        <p><b>Close</b>: N/A | <b>Open</b>: N/A | <b>Heigh</b>: N/A</p>
                                    </Link>
                                </Card>
                            )
                        })}
                    </CardParent>
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

const mapDispachToProps = dispach => bindActionCreators({ fetchCompanies }, dispach)


export default connect(mapStateToProps, mapDispachToProps)(LandingPage);