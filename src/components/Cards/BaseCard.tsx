interface Props {
  title: string
}

function BaseCard(props:Props) {
  return (
    <div className="card card-base">
      <small>Base Card</small>
      <h3>{props.title}</h3>
    </div>
  )
}

export default BaseCard;