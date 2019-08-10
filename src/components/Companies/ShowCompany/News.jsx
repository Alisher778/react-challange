import React, { Component } from 'react';
import Axios from 'axios';
import { API_KEY } from '../../../keys/index';

class News extends Component {
    state = { news: [] }

    async componentDidMount() {
        const { id } = this.props;
        return Axios
            .get(`https://api-v2.intrinio.com/companies/news?api_key=${API_KEY}`)
            .then(res => {
                const data = res.data.news.filter(item => item.company.ticker === id);

                return this.setState({ news: data });
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <h3>Related news</h3>
                <ul>
                    {
                        this.state.news.map((item) => {
                            return (<li key={item.id}>
                                <a href={item.url} target="_blank" rel="noopener noreferrer">
                                    <div>{item.publication_date}</div>
                                    <h5>{item.title}</h5>
                                    <p>{item.summary}</p>
                                </a>
                            </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default News;