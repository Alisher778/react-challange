import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchSelectedCompanyDetails } from '../../../store/actions/companiesActions';
import Descriptions from './CompanyDescription';
import Comments from './Comments';
import News from './News';

class ShowCompany extends Component {
    state = { notFound: false }

    componentDidMount() {
        const { ticker } = this.props.match.params;
        this.props.fetchSelectedCompanyDetails(ticker);
    }

    render() {
        const { error, pending, selectedCompany } = this.props;


        if (error) {
            return <h2>Sorry the company not found</h2>
        } else if (pending) {
            return <h2>Loading ...</h2>
        } else {
            return (
                <div>
                    <h2>{selectedCompany.ticker} - {selectedCompany.name}</h2>
                    <table>
                        <tbody>
                            <tr>
                                <th>Leagal name:</th>
                                <td>{selectedCompany.legal_name}</td>
                            </tr>
                            <tr>
                                <th>Stock Exchange:</th>
                                <td>{selectedCompany.stock_exchange}</td>
                            </tr>
                            <tr>
                                <th>CEO:</th>
                                <td>{selectedCompany.ceo}</td>
                            </tr>
                            <tr>
                                <th>Entity Status:</th>
                                <td>{selectedCompany.entity_status}</td>
                            </tr>
                            <tr>
                                <th>Country:</th>
                                <td>{selectedCompany.hq_country}</td>
                            </tr>
                            <tr>
                                <th>Sectors:</th>
                                <td>{selectedCompany.sector}</td>
                            </tr>
                        </tbody>

                    </table>
                    <Descriptions short={selectedCompany.short_description} long={selectedCompany.long_description} />
                    <Comments id={selectedCompany.ticker} />
                    <News id={selectedCompany.ticker} />
                </div>
            )
        }

    }
}

const mapStateToProps = state => {
    return {
        selectedCompany: state.selectedCompany.selectedCompany,
        pending: state.selectedCompany.pending,
        error: state.selectedCompany.error
    }
}

const mapDispachToProps = dispach => {
    return {
        fetchSelectedCompanyDetails: (ticker) => dispach(fetchSelectedCompanyDetails(ticker))
    }
}

export default connect(mapStateToProps, mapDispachToProps)(withRouter(ShowCompany));