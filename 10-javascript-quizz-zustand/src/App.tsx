import { Container, Stack, Typography } from '@mui/material'
import './App.css'
import { JavaScriptLogo } from './components/JavaScriptLogo'
import { Start } from './components/Start'
import { useQuestionStore } from './store/questions'
import { Game } from './components/Game'

function App () {
  const { questions } = useQuestionStore()

  return (
    <main>
      <Container>
        <Stack direction='row' gap={2} alignItems='center' justifyContent='center'>
          <JavaScriptLogo />
          <Typography variant='h2'>
            JavaScript Quizz
          </Typography>
        </Stack>

        {questions.length === 0 ? <Start/> : <Game/>}
      </Container>
    </main>
  )
}

export default App
