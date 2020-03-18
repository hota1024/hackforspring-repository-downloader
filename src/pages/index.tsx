import Head from 'next/head'
import { Container, Typography, CssBaseline } from '@material-ui/core'
import { RepositoryCard } from '../components/RepositoryCard'
import { Repositories } from '../../data/repositories'
import { Repository } from '../../types/Repository'

const Home = () => {
  return (
    <div>
      <Head>
        <title>HackForSpringリポジトリダウンローダー</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className="paper">
          <Typography component="h1" variant="h3">
            HackForSpring
          </Typography>
          <div className="repositories">
            {Repositories.map((repository: Repository) => (
              <RepositoryCard
                key={repository.name}
                repository={repository}
              ></RepositoryCard>
            ))}
          </div>
        </div>
      </Container>

      <style jsx global>{`
        .paper {
          margin-top: 32px;
          display: 'flex';
          flex-direction: 'column';
          align-items: 'center';
        }

        .repositories {
          margin-top: 16px;
          width: '100%';
        }

        .repository {
          margin-bottom: 16px;
        }
      `}</style>
    </div>
  )
}

export default Home
