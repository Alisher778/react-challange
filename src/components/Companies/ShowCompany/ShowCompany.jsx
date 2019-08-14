import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchSelectedCompanyDetails } from '../../../store/actions/companiesActions';
import { fetchNews } from '../../../store/actions/newsActions';
import Descriptions from './CompanyDescription';
import Comments from './Comments/Comments';
import News from './News';
import { Wrapper } from '../styles';
import { Loading, ErrorCard } from '../../../styles/index';


class ShowCompany extends Component {
    state = { notFound: false }

    componentDidMount() {
        const { ticker } = this.props.match.params;
        this.props.fetchSelectedCompanyDetails(ticker);
        this.props.fetchNews(ticker);
    }

    render() {
        const { error, pending, selectedCompany, news } = this.props;
        console.log(news);


        if (error) {
            return <ErrorCard>Error message: {error} </ErrorCard>
        } else if (pending) {
            return <Loading><div></div> Loading ...</Loading>
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

const mapStateToProps = state => {
    return {
        selectedCompany: state.selectedCompany.selectedCompany,
        pending: state.selectedCompany.pending,
        error: state.selectedCompany.error,
        news: state.news.news
    }
}

const mapDispachToProps = dispach => {
    return {
        fetchSelectedCompanyDetails: (ticker) => dispach(fetchSelectedCompanyDetails(ticker)),
        fetchNews: (ticker) => dispach(fetchNews(ticker))
    }
}

export default connect(mapStateToProps, mapDispachToProps)(withRouter(ShowCompany));