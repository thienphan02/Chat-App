import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        'b4a9bd48-a79f-45ae-b2af-4dd48d8d6886', 
        props.user.username, 
        props.user.secret
    )
    return (
        <div style={{height: '100vh' }}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps}  style={{height: '100%'}} />
        </div>
    )
}

export default ChatsPage