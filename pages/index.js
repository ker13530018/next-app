import Link from 'next/link'
import React from 'react'
import { connect } from 'react-redux'
/*
 * Actions
 */
import { initData } from '../reduxs/index/actions'

class Index extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(initData())
  }

  render() {
    const { list, data, ...rest } = this.props
    console.log(list, data)

    return (
      <div>
        <h1>My Blog</h1>
        <ul>
          {data &&
            data.map(item => {
              return (
                <li key={item.id}>
                  <Link href={`/post?id=${item.id}`}>
                    <a>{item.title}</a>
                  </Link>
                </li>
              )
            })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state.index
}

export default connect(
  mapStateToProps,
  dispatch => ({ dispatch }),
)(Index)
