import React, { Component } from 'react';
import PropsTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchSelectedCompanyDetails } from '../../../store/actions/selectedCompanyActions';
import { fetchNews } from '../../../store/actions/newsActions';
import Descriptions from './CompanyDescription';
import Comments from './Comments/Comments';
import News from './News';
import { Wrapper } from '../styles';
import ErrorMsg from '../../UI/ErrorMsg';
import Pending from '../../UI/Pending';


class ShowCompany extends Component {
    state = { notFound: false }

    componentDidMount() {
        const { ticker } = this.props.match.params;
        this.props.fetchSelectedCompanyDetails(ticker);
        this.props.fetchNews(ticker);
    }

    render() {
        const { error, errMsg, pending, selectedCompany } = this.props;

        if (error) {
            return <ErrorMsg error={errMsg} />
        } else if (pending) {
            return <Pending />
        } else {
            return (
                <div>
                    <Wrapper align="center">
                        <h2>{selectedCompany.ticker} - {selectedCompany.name}</h2>
                    </Wrapper>
                    <Wrapper align="left">


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
                    </Wrapper>
                    <Descriptions short={selectedCompany.short_description} long={selectedCompany.long_description} />
                    <Comments id={selectedCompany.ticker} />
                    <News id={selectedCompany.ticker} data={this.props.news} />
                </div>
            )
        }

    }
}

ShowCompany.propsType = ({
    selectedCompany: PropsTypes.object.isRequired
})

ShowCompany.defaultProps = ({
    selectedCompany: {}
})

const mapStateToProps = state => {
    return {
        selectedCompany: state.selectedCompany.selectedCompany,
        pending: state.selectedCompany.pending,
        error: state.selectedCompany.error,
        errMsg: state.selectedCompany.errMsg,
        news: state.news.news,
    }
}

const mapDispachToProps = dispach => {
    return bindActionCreators({ fetchSelectedCompanyDetails, fetchNews }, dispach)
}

export default connect(mapStateToProps, mapDispachToProps)(withRouter(ShowCompany));