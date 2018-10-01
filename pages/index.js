import Head from 'next/head'
import '../styles/index.scss'

const Index = () => (
  <div className='container'>
    <Head>
      <title>Hyperlist Online</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>

    <header>
      <img src='/static/logo.png' width='251' height='71' />
      <h1>Season 1, Issue 4</h1>
      <hr />
    </header>

    <h3>Title testing some underlines</h3>

    <p>Lorem ipsum dolor amet crucifix thundercats leggings scenester single-origin coffee chambray stumptown polaroid small batch tumblr street art. Bushwick offal gentrify, wayfarers enamel pin listicle authentic sustainable man bun. Mlkshk cold-pressed man braid, asymmetrical coloring book affogato tbh vinyl bespoke. Beard jean shorts small batch messenger bag live-edge fingerstache aesthetic unicorn.</p>

    <p>Lorem ipsum dolor amet crucifix thundercats leggings scenester single-origin coffee chambray stumptown polaroid small batch tumblr street art. Bushwick offal gentrify, wayfarers enamel pin listicle authentic sustainable man bun. Mlkshk cold-pressed man braid, asymmetrical coloring book affogato tbh vinyl bespoke. Beard jean shorts small batch messenger bag live-edge fingerstache aesthetic unicorn.</p>

    <p>Lorem ipsum dolor amet crucifix thundercats leggings scenester single-origin coffee chambray stumptown polaroid small batch tumblr street art. Bushwick offal gentrify, wayfarers enamel pin listicle authentic sustainable man bun. Mlkshk cold-pressed man braid, asymmetrical coloring book affogato tbh vinyl bespoke. Beard jean shorts small batch messenger bag live-edge fingerstache aesthetic unicorn.</p>

    <ul>
      <li>
        <a href="sdaded"><b>Here's a link to a neat thing →</b></a><br />
        Lorem ipsum dolor amet crucifix thundercats leggings scenester single-origin coffee chambray stumptown polaroid small batch tumblr street art.
      </li>
      <li>
        <a href="sdaded"><b>Here's a link to a neat thing →</b></a><br />
        Lorem ipsum dolor amet crucifix thundercats leggings scenester single-origin coffee chambray stumptown polaroid small batch tumblr street art.
      </li>
      <li>
        <a href="sdaded"><b>Here's a link to a neat thing →</b></a><br />
        Lorem ipsum dolor amet crucifix thundercats leggings scenester single-origin coffee chambray stumptown polaroid small batch tumblr street art.
      </li>
    </ul>
  </div>
)

export default Index
