import { App } from 'sendbird-uikit'

function Home () {
  return (
    <App
      userId='asdf'
      appId={process.env.SENDBIRD_APP_ID}
    />
  )
}

export default Home
