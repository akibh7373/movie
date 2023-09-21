export default function Buttons({title}) {
  return (
    <>
      <span className='uppercase' style={{
        padding: '10px 20px',
        borderRadius: '30px',
        backgroundImage: 'linear-gradient(90deg, rgba(0,151,255,1) 0%, rgba(87,214,6,1) 100%)',
      }}>{title}</span>
    </>
  )
}

