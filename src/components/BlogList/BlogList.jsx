import React from 'react';
import { connect } from 'react-redux'

import Blog from '../Blog/Blog';

const mapStateToProps = ({ blogs }) => ({
  blogs
});

const BlogList = ({ blogs }) => {
  return(
    <div>
      {blogs.map(b => <Blog data={b} key={b.id} />)}
    </div>
  );
}

export default connect(mapStateToProps)(BlogList);
