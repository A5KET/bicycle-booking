export default function Notification({visible, text}) {
  if (!visible) {
    return <></>
  }

  return <div lang='en' className='notification'>{text}</div>
}