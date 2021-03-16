import React from 'react'

import classnames from 'classnames'


import { removeStream } from '../actions/StreamActions'
import { getDesktopStream } from '../actions/MediaActions'
import { StreamWithURL } from '../reducers/streams'
import { ME, DIAL_STATE_IN_CALL, DialState } from '../constants'
// import { NicknameMessage } from '../actions/PeerActions'
import { attendance } from './attendance'
// import { Nickname } from './Nickname'


export interface ToolbarProps {
  nickname: string
  dialState: DialState

  stream: StreamWithURL

  onHangup: () => void

}

export interface ToolbarState {

  camDisabled: boolean
  micMuted: boolean

}

// export interface ToolbarButtonProps {
//   className?: string
//   badge?: string | number
//   blink?: boolean
//   onClick: () => void
//   icon: string
//   offIcon?: string
//   on?: boolean
//   title: string
// }


// function ToolbarButton(props: ToolbarButtonProps) {
//   const { blink, on } = props
//   const icon = !on && props.offIcon ? props.offIcon : props.icon
//
//   return (
//     <a
//       className={classnames('button', props.className, { blink, on })}
//       onClick={props.onClick}
//       href='#'
//     >
//       <span className={classnames('icon', icon)}>
//         {!!props.badge && <span className='badge'>{props.badge}</span>}
//       </span>
//       <span className="tooltip">{props.title}</span>
//     </a>
//   )
// }


// interface ReadOnlyNicknameProps {
//   value: string
// }

// function ReadOnlyNickname(props: ReadOnlyNicknameProps) {
  
//   return <span className="nickname">{props.value}</span>
// }


// export interface SideBarProps {
//   // value: string
//   // onChangeNickname: (message: NicknameMessage) => void
//   nickname: string
//   // attendence? :string[] |undefined
  
//   // userId: string
//   // localUser?: boolean
// }

// interface Attendance {
//   attendies :string
// }

export default class SideBar extends React.PureComponent<ToolbarProps, ToolbarState> {
  // videoRef = React.createRef<HTMLVideoElement>()
  file = React.createRef<HTMLInputElement>()

  // constructor(props: ToolbarProps) {
    // super(props)
    // this.state = {
    
    //   // camDisabled: false,
    //   // micMuted: false,

    // }
  // }

  // componentDidMount () {
  //   this.componentDidUpdate()
  // }
  // componentDidUpdate () {
  //   console.log(this.props.nickname)
  //   attendance?.push("h",this.props.nickname);
  //   console.log(this.props.attendence)
  // }
  
  // handleMicClick = () => {
  //   const { stream } = this.props
  //   stream.stream.getAudioTracks().forEach(track => {
  //     track.enabled = !track.enabled
  //   })
  //   this.setState({
  //     ...this.state,
  //     micMuted: !this.state.micMuted,
  //   })
  // }
  // handleCamClick = () => {
  //   const { stream } = this.props
  //   stream.stream.getVideoTracks().forEach(track => {
  //     track.enabled = !track.enabled
  //   })
  //   this.setState({
  //     ...this.state,
  //     camDisabled: !this.state.camDisabled,
  //   })
  // }
 
  
  render () {
   

    // return <ReadOnlyNickname value={this.props.value} />
    const { nickname} = this.props
    // const { stream } = this.props
    // const className = classnames('video-container', {
    //   minimized: windowState === 'minimized',
    //   mirrored,
    // })
    // console.log(this.props.nickname)
    // attendance?.push(this.props.nickname);
    // console.log(this.props.attendence)
    // attendance?.push("hello");
    attendance?.push(nickname);
    // console.log(nickname)
    console.log(attendance)

    return (
      
    
        <div >
{/* 

{stream && (
          <React.Fragment>
            <ToolbarButton
              onClick={this.handleMicClick}
              className='mute-audio'
              on={this.state.micMuted}
              icon='icon-mic_off'
              offIcon='icon-mic'
              title='Toggle Microphone'
            />
            <ToolbarButton
              onClick={this.handleCamClick}
              className='mute-video'
              on={this.state.camDisabled}
              icon='icon-videocam_off'
              offIcon='icon-videocam'
              title='Toggle Camera'
            />
          </React.Fragment>
        )} */}

       
          {/* {this.props.dialState === DIAL_STATE_IN_CALL && (
            <ToolbarButton
              onClick={this.props.onHangup}
              className='hangup'
              icon='icon-call_end'
              title="Hang Up"
            />
          )} */}

        <span>{attendance}</span>
  
    </div>
    )
  }
}



// import classnames from 'classnames'


// import { removeStream } from '../actions/StreamActions'
// import { getDesktopStream } from '../actions/MediaActions'
// import { StreamWithURL } from '../reducers/streams'
// import { ME, DIAL_STATE_IN_CALL, DialState } from '../constants'



// export interface ToolbarProps {
//   dialState: DialState
//   messagesCount: number
//   stream: StreamWithURL
//   desktopStream: StreamWithURL | undefined
//   onToggleChat: () => void
//   onGetDesktopStream: typeof getDesktopStream
//   onRemoveStream: typeof removeStream
//   onSendFile: (file: File) => void
//   onHangup: () => void
//   chatVisible: boolean
// }

// export interface ToolbarState {
//   readMessages: number
//   camDisabled: boolean
//   micMuted: boolean
//   fullScreenEnabled: boolean
// }

// export interface ToolbarButtonProps {
//   className?: string
//   badge?: string | number
//   blink?: boolean
//   onClick: () => void
//   icon: string
//   offIcon?: string
//   on?: boolean
//   title: string
// }


// function ToolbarButton(props: ToolbarButtonProps) {
//   const { blink, on } = props
//   const icon = !on && props.offIcon ? props.offIcon : props.icon

//   return (
//     <a
//       className={classnames('button', props.className, { blink, on })}
//       onClick={props.onClick}
//       href='#'
//     >
//       <span className={classnames('icon', icon)}>
//         {!!props.badge && <span className='badge'>{props.badge}</span>}
//       </span>
//       <span className="tooltip">{props.title}</span>
//     </a>
//   )
// }

// export default class Toolbar
// extends React.PureComponent<ToolbarProps, ToolbarState> {
//   file = React.createRef<HTMLInputElement>()

//   constructor(props: ToolbarProps) {
//     super(props)
//     this.state = {
//       readMessages: props.messagesCount,
//       camDisabled: false,
//       micMuted: false,
//       fullScreenEnabled: false,
//     }
//   }

//   handleMicClick = () => {
//     const { stream } = this.props
//     stream.stream.getAudioTracks().forEach(track => {
//       track.enabled = !track.enabled
//     })
//     this.setState({
//       ...this.state,
//       micMuted: !this.state.micMuted,
//     })
//   }
//   handleCamClick = () => {
//     const { stream } = this.props
//     stream.stream.getVideoTracks().forEach(track => {
//       track.enabled = !track.enabled
//     })
//     this.setState({
//       ...this.state,
//       camDisabled: !this.state.camDisabled,
//     })
//   }
 
  
//   render () {
//     const { messagesCount, stream } = this.props
//     const unreadCount = messagesCount - this.state.readMessages
//     const hasUnread = unreadCount > 0

//     return (
//       <div className="toolbar active">
       
      

//         {stream && (
//           <React.Fragment>
//             <ToolbarButton
//               onClick={this.handleMicClick}
//               className='mute-audio'
//               on={this.state.micMuted}
//               icon='icon-mic_off'
//               offIcon='icon-mic'
//               title='Toggle Microphone'
//             />
//             <ToolbarButton
//               onClick={this.handleCamClick}
//               className='mute-video'
//               on={this.state.camDisabled}
//               icon='icon-videocam_off'
//               offIcon='icon-videocam'
//               title='Toggle Camera'
//             />
//           </React.Fragment>
//         )}

       
//           {this.props.dialState === DIAL_STATE_IN_CALL && (
//             <ToolbarButton
//               onClick={this.props.onHangup}
//               className='hangup'
//               icon='icon-call_end'
//               title="Hang Up"
//             />
//           )}

//       </div>
//     )
//   }
// }
