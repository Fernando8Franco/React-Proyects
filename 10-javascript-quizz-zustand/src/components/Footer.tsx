import { Button } from '@mui/material'
import { useQuestionData } from '../hooks/useQuestionData'
import { useQuestionStore } from '../store/questions'

export const Footer = () => {
  const { correct, incorrect, unanswered } = useQuestionData()
  const { reset } = useQuestionStore()

  return (
    <footer style={{ marginTop: '16px' }}>
      <strong>{`✅ ${correct} - ❌ ${incorrect} - ❓ ${unanswered}`}</strong>
      <div style={{ marginTop: '16px' }}>
        <Button onClick={() => reset()}>
          Reset Quizz
        </Button>
      </div>
    </footer>
  )
}
