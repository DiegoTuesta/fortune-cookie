

const Message = ({phrase}) => {
  return (
    <div >
        <p>"{phrase.phrase}"</p>
        <p>by: {phrase.author}</p>
    </div>
  )
}

export default Message