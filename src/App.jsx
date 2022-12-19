
import { Layout } from './layout/Layout';
import { NavbarComponent, HeroComponent, CardComponent, HeroesComponents, Footer } from './components';


export const App = () => {
  return (
    <Layout>
      
      <section id='Navbar'>
        <NavbarComponent />
      </section>

      <section className='Hero' id='Hero'>
        <HeroComponent/>
      </section>

      <section id='card'>
        <CardComponent/>
      </section>

      <section id='S-heroes'>
        <HeroesComponents/>
      </section>

      <section id='Footer'>
        <Footer/>
      </section>
      

    </Layout>
  )
}
