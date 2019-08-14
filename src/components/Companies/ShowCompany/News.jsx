import React from 'react';
import PropTypes from 'prop-types';
import { FiClock } from 'react-icons/fi';
import { NewsWrapper } from '../styles';

const News = ({ data }) => (
  <div>
    <h3>Related news</h3>
    <NewsWrapper>
      <ul>
        {
          data.map((item) => (
            <li key={item.id}>
              <a href={item.url} target="_blank" rel="noopener noreferrer">

                <h5>{item.title}</h5>
                <div>
                  <FiClock stroke="#4CAF50" />
                  {' '}
                  {new Date(item.publication_date).toLocaleDateString()}
                </div>
                <p>{`${item.summary.slice(0, 100)}...`}</p>
              </a>
            </li>
          ))
        }
      </ul>
    </NewsWrapper>
  </div>
);

News.propTypes = ({
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    url: PropTypes.string,
    title: PropTypes.string,
    publication_date: PropTypes.Date,
    summary: PropTypes.String,
  })),
});

News.defaultProps = ({
  data: [{
    id: '', url: '', title: '', publication_date: '', summary: '',
  }],
});

export default News;
