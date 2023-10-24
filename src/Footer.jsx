

const Footer = ({length}) => {

  let times = new Date();

  return (
    <footer>copyright &copy; {times.getFullYear()} {length} items left</footer>
  )
}

export default Footer