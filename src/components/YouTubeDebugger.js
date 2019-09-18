// Code YouTubeDebugger Component Here
// Code DigitalClicker Component Here
import React from 'react'

export default class YouTubeDebugger extends React.Component {

    constructor() {
        super()

        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
          }
    }

    handleYouTubeClick = (event) => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }
  
    handleResolutionClick = (event) => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                ...this.state.settings.video,
                resolution: '720p'
                }
            }
        })
    }

    render() {
        console.log(this.state.settings.video)
        return (
        <div>
        <button onClick={this.handleYouTubeClick} className="bitrate">YouTube Button</button>
        <button onClick={this.handleResolutionClick} className="resolution">Resolution Button</button>
        </div>
        )
    }
}