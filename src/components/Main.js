import React, {Component} from 'react'
import Title from './Title'
import PhotoWall from './PhotoWall'
import AddPhoto from './AddPhoto'
import {Route} from 'react-router-dom'



class Main extends Component {
       constructor() {
          super()
          this.state = {
                posts: [{
                  id: 0,
                  description: "Spirit of the west",
                  imageLink: "./IMG2.PNG"
            }, {
                  id: 1,
                  description: "PUBG",
                  imageLink: "./IMG4.JPG"
            }, {
                  id: 2,
                  description: "On a vacation!",
                  imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
            }]
        }
              this.removePhoto = this.removePhoto.bind(this)
      }
            removePhoto(postRemoved) {
                console.log(postRemoved.description)
                this.setState((state) => ({
                posts: state.posts.filter(post => post !== postRemoved )
        }))
      }
            addPhoto(postSubmitted) {
                  this.setState(state => ({
                  posts: state.posts.concat([postSubmitted])
        }))
    }
              componentDidMount() {
  }
 
              componentDidUpdate(prevProps, prevState) {
                      console.log(prevState.posts)
                      console.log(this.state)
      }
            render() {
                console.log(this.state.posts)
                      return ( 
 
                    <div>
                          <Route exact path = "/" render={() => (
                    <div>
                                      <Title title={'Photowall'}/>
                                      <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto} onNavigate = {this.navigate}/>
                      </div>
                                         )}/> 
                        <Route path= "/AddPhoto" render = {({history}) => (
                        <AddPhoto onAddPhoto={(addedPost) => {
                                  this.addPhoto(addedPost)
                                  history.push('/')
                              }}/>
                              )}/>
                        </div>
            )
          }
        }
export default Main