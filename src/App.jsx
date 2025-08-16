import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import './App.css'

const quizData = [
  {
    id: 1,
    question: "Quantos filhos você tem?",
    options: [
      { id: "01", text: "01", image: "👶" },
      { id: "02", text: "02", image: "👶👶" },
      { id: "03", text: "03", image: "👶👶👶" },
      { id: "04", text: "04 ou mais", image: "👶👶👶👶" }
    ]
  },
  {
    id: 2,
    question: "Qual é a idade do seu filho mais novo?",
    options: [
      { id: "ate2", text: "Até 2 anos", image: "🍼" },
      { id: "3a7", text: "3 a 7 anos", image: "🧒" },
      { id: "8a12", text: "8 a 12 anos", image: "⚽" },
      { id: "acima12", text: "Acima de 12 anos", image: "🎒" }
    ]
  },
  {
    id: 3,
    question: "Seu filho fica doente com frequência?",
    options: [
      { id: "1mes", text: "No mínimo 1 vez por mês", emoji: "😭" },
      { id: "quasetodo", text: "Quase todo mês", emoji: "😟" },
      { id: "gostaria", text: "Gostaria que ficasse menos doente", emoji: "😔" },
      { id: "nao", text: "Não, mas quero aprender mais sobre remédios caseiros", emoji: "😊" }
    ]
  },
  {
    id: 4,
    question: "Quando adoece, ele demora para melhorar?",
    options: [
      { id: "sim", text: "Sim, demora bastante" },
      { id: "pouco", text: "Demora um pouco, quero que seja mais rápido" }
    ]
  },
  {
    id: 5,
    question: "Ele usa muitos antibióticos ou outros medicamentos?",
    options: [
      { id: "todo", text: "Sim, todo mês" },
      { id: "bastante", text: "Usa bastante, quero diminuir" }
    ]
  },
  {
    id: 6,
    question: "Seu filho costuma ter crises de garganta, ouvido ou tosse?",
    options: [
      { id: "luta", text: "Sim, estamos na luta agora" },
      { id: "inverno", text: "Sim, Outono e Inverno é só preocupação" },
      { id: "vezes", text: "Às vezes, e sempre termina em medicamentos" }
    ]
  }
]

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showIntro, setShowIntro] = useState(true)
  const [showResult, setShowResult] = useState(false)

  const handleAnswer = (questionId, answerId) => {
    setAnswers(prev => ({ ...prev, [questionId]: answerId }))
    
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(prev => prev + 1)
    } else {
      setShowResult(true)
    }
  }

  const progress = ((currentQuestion + 1) / quizData.length) * 100

  if (showIntro) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md mx-auto text-center shadow-xl">
          <CardContent className="p-8">
            <div className="mb-6">
              <div className="text-4xl mb-4">🌿</div>
              <h1 className="text-2xl font-bold text-gray-800 mb-2">Farmacinha Natural</h1>
            </div>
            
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">
                Quer aumentar a imunidade do seu filho <span className="text-teal-600">de forma natural</span>?
              </h2>
              <p className="text-gray-600 mb-2">
                Descubra o que as farmácias não querem que você saiba e aumente a imunidade do seu filho
              </p>
              <p className="text-sm text-gray-500">(Leva só 1 minuto)</p>
            </div>

            <div className="mb-6">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-teal-100 to-blue-100 rounded-lg flex items-center justify-center text-6xl">
                👧
              </div>
            </div>

            <Button 
              onClick={() => setShowIntro(false)}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 text-lg font-semibold"
            >
              Continuar
            </Button>

            <p className="text-xs text-gray-500 mt-4">
              Ao clicar em continuar, você concorda com os{' '}
              <span className="underline">Termos de utilização e serviço</span>,{' '}
              <span className="underline">Política de privacidade</span>,{' '}
              <span className="underline">Política de subscrição</span> e{' '}
              <span className="underline">Política de cookies</span>
            </p>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (showResult) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md mx-auto text-center shadow-xl">
          <CardContent className="p-8">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Quiz Concluído!
            </h2>
            <p className="text-gray-600 mb-6">
              Obrigado por responder ao nosso quiz. Com base nas suas respostas, 
              preparamos recomendações personalizadas para aumentar a imunidade 
              do seu filho de forma natural.
            </p>
            <Button 
              onClick={() => {
                setShowIntro(true)
                setCurrentQuestion(0)
                setAnswers({})
                setShowResult(false)
              }}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3"
            >
              Fazer Quiz Novamente
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  const question = quizData[currentQuestion]

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md mx-auto shadow-xl">
        <CardContent className="p-6">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="text-2xl">🌿</div>
              <div className="text-sm text-gray-500">
                {currentQuestion + 1} de {quizData.length}
              </div>
            </div>
            <Progress value={progress} className="mb-4" />
          </div>

          <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
            {question.question}
          </h2>

          <div className="space-y-3">
            {question.options.map((option) => (
              <Button
                key={option.id}
                onClick={() => handleAnswer(question.id, option.id)}
                variant="outline"
                className="w-full p-4 h-auto text-left justify-start hover:bg-teal-50 hover:border-teal-300 transition-all duration-200"
              >
                <div className="flex items-center space-x-3">
                  {option.image && (
                    <div className="text-2xl">{option.image}</div>
                  )}
                  {option.emoji && (
                    <div className="text-2xl">{option.emoji}</div>
                  )}
                  <span className="text-gray-700">{option.text}</span>
                </div>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default App

