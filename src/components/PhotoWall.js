import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


function PhotoWall(props){
    return    <div>  
        <Link to="/addPhoto" className="addIcon"> </Link>
                {/*<button className="addIcon" onClick ={ props.onNavigate }>  </button>*/ }
                <div className="photoGrid"> 
                    {props.posts
                    .sort(function(x,y) {
                        return y.id - x.id
                    })
                    .map((post, index) => <Photo key={index} posts={post} onRemovePhoto={props.onPhotoRemove}/>)}
                </div>
            </div>
}

PhotoWall.propTypes ={
    posts: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}


export default PhotoWall