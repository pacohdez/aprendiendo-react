import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
function App() {
  const format = (userName) => `@${userName}`
  //const heriberto = {formatUserName: format, userName: 'sistemasiq', name: 'Heriberto Flores', isFollowing: true}

  const users = [
    {
      userName: "pacohdez",
      name: "Francisco Hernández Cabrera",
      isFollowing: true
    },
    {
      userName: "jakqui",
      name: "Jakqueline Herrera García",
      isFollowing: false
    },
    {
      userName: "sistemasiq",
      name: "Heriberto Flores Chavez",
      isFollowing: false
    }
  ]

  return(
    <section className='App'>
      {/* <TwitterFollowCard formatUserName={format} userName="pacohdez" name="Francisco Hernández Cabrera" initialIsFollowing={true} />
      <TwitterFollowCard formatUserName={format} userName="jakqui" name="Jakqueline Herrera García" />
      <TwitterFollowCard {...heriberto} /> */}

      {/* Usando el arreglo de usuarios de forma dinamica */}
      {
        users.map(({userName, name, isFollowing}) => { //user
          //const {userName, name, isFollowing} = user
          return (
            <TwitterFollowCard
              key={userName}
              formatUserName={format}
              userName={userName}
              name={name}
              initialIsFollowing={isFollowing}
            ></TwitterFollowCard>
          )
        })
      }
    </section>
  )
}

export default App
