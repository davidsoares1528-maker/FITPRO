'use client'

import { useState } from 'react'
import { 
  Target, 
  Utensils, 
  Dumbbell, 
  TrendingUp, 
  Award, 
  Clock, 
  Flame,
  Star,
  Check,
  ArrowRight,
  Play,
  Users,
  Zap,
  Shield,
  Smartphone,
  ChevronRight,
  Crown,
  Gift,
  Timer,
  Sparkles
} from 'lucide-react'

export default function LandingPage() {
  const [showQuiz, setShowQuiz] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [quizAnswers, setQuizAnswers] = useState<string[]>([])
  const [showPlan, setShowPlan] = useState(false)

  const quizQuestions = [
    {
      question: "Qual é seu principal objetivo?",
      options: [
        "Perder peso",
        "Ganhar massa muscular", 
        "Manter peso atual",
        "Melhorar saúde geral"
      ]
    },
    {
      question: "Qual seu nível de atividade física?",
      options: [
        "Sedentário",
        "Levemente ativo",
        "Moderadamente ativo",
        "Muito ativo"
      ]
    },
    {
      question: "Quantas refeições você faz por dia?",
      options: [
        "2-3 refeições",
        "4-5 refeições",
        "6+ refeições",
        "Irregular"
      ]
    },
    {
      question: "Qual sua maior dificuldade?",
      options: [
        "Controlar porções",
        "Encontrar tempo para exercícios",
        "Manter consistência",
        "Saber o que comer"
      ]
    }
  ]

  const handleQuizAnswer = (answer: string) => {
    const newAnswers = [...quizAnswers, answer]
    setQuizAnswers(newAnswers)
    
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Quiz finalizado - mostrar plano personalizado
      setShowPlan(true)
    }
  }

  const resetQuiz = () => {
    setShowQuiz(false)
    setShowPlan(false)
    setCurrentQuestion(0)
    setQuizAnswers([])
  }

  const getPersonalizedMessage = () => {
    const objective = quizAnswers[0]
    const activity = quizAnswers[1]
    const difficulty = quizAnswers[3]

    let message = "Baseado nas suas respostas, "
    
    if (objective === "Perder peso") {
      message += "você precisa de um plano focado em déficit calórico controlado e exercícios queima-gordura. "
    } else if (objective === "Ganhar massa muscular") {
      message += "você precisa de um plano com superávit calórico e treinos de força progressivos. "
    } else {
      message += "você precisa de um plano equilibrado para manter sua saúde em dia. "
    }

    if (difficulty === "Manter consistência") {
      message += "O FitTracker Pro vai te ajudar com lembretes inteligentes e metas graduais para criar hábitos duradouros."
    } else if (difficulty === "Saber o que comer") {
      message += "Nosso sistema de nutrição inteligente vai te guiar exatamente sobre o que comer e quando."
    } else {
      message += "Temos as ferramentas perfeitas para superar seus desafios específicos."
    }

    return message
  }

  if (showPlan) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-2xl">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Seu Plano Personalizado</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {getPersonalizedMessage()}
            </p>
          </div>

          {/* Oferta Especial */}
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-6 mb-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Timer className="h-6 w-6 text-black" />
              <span className="text-black font-bold text-lg">OFERTA LIMITADA</span>
            </div>
            <h3 className="text-2xl font-bold text-black mb-2">
              50% DE DESCONTO no Primeiro Mês!
            </h3>
            <p className="text-black/80 mb-4">
              Apenas para quem completou nosso quiz personalizado
            </p>
            <div className="flex items-center justify-center gap-4 text-black font-semibold">
              <span className="text-lg line-through opacity-70">€34,90</span>
              <span className="text-3xl font-bold">€17,45</span>
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">-50%</span>
            </div>
          </div>

          {/* Plano Recomendado */}
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200 rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-3 rounded-xl">
                <Crown className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">FitTracker Pro</h3>
                <p className="text-purple-600 font-semibold">Recomendado para você</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-bold text-gray-900 mb-4">✨ O que você vai receber:</h4>
                <ul className="space-y-3">
                  {[
                    "Plano nutricional personalizado para seu objetivo",
                    "Treinos adaptados ao seu nível de atividade",
                    "Acompanhamento diário de progresso",
                    "Lembretes inteligentes personalizados",
                    "Relatórios detalhados semanais",
                    "Suporte prioritário 24/7"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="bg-green-100 p-1 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-green-600" />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-4">🎯 Resultados esperados:</h4>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-xl border border-purple-100">
                    <div className="flex items-center gap-3 mb-2">
                      <Target className="h-5 w-5 text-purple-500" />
                      <span className="font-semibold text-gray-900">Primeiras 2 semanas</span>
                    </div>
                    <p className="text-gray-600 text-sm">Criação de hábitos e primeiros resultados visíveis</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-xl border border-blue-100">
                    <div className="flex items-center gap-3 mb-2">
                      <TrendingUp className="h-5 w-5 text-blue-500" />
                      <span className="font-semibold text-gray-900">Primeiro mês</span>
                    </div>
                    <p className="text-gray-600 text-sm">Mudanças significativas no corpo e energia</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-xl border border-green-100">
                    <div className="flex items-center gap-3 mb-2">
                      <Award className="h-5 w-5 text-green-500" />
                      <span className="font-semibold text-gray-900">3 meses</span>
                    </div>
                    <p className="text-gray-600 text-sm">Transformação completa e hábitos consolidados</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Garantias */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 mb-6">
              <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-500" />
                Nossas Garantias
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="bg-green-100 p-3 rounded-full w-fit mx-auto mb-2">
                    <Gift className="h-6 w-6 text-green-600" />
                  </div>
                  <p className="font-semibold text-gray-900">30 dias</p>
                  <p className="text-sm text-gray-600">Garantia total</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-2">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <p className="font-semibold text-gray-900">50.000+</p>
                  <p className="text-sm text-gray-600">Usuários satisfeitos</p>
                </div>
                <div className="text-center">
                  <div className="bg-yellow-100 p-3 rounded-full w-fit mx-auto mb-2">
                    <Star className="h-6 w-6 text-yellow-600" />
                  </div>
                  <p className="font-semibold text-gray-900">4.9/5</p>
                  <p className="text-sm text-gray-600">Avaliação média</p>
                </div>
              </div>
            </div>
          </div>

          {/* Urgência */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
            <div className="flex items-center gap-3 mb-3">
              <Timer className="h-5 w-5 text-red-500" />
              <span className="font-bold text-red-700">ATENÇÃO: Oferta por tempo limitado!</span>
            </div>
            <p className="text-red-600 mb-4">
              Este desconto de 50% é exclusivo para quem completou nosso quiz e expira em 24 horas. 
              Não perca esta oportunidade única de transformar sua vida com o menor investimento possível.
            </p>
            <div className="flex items-center gap-2 text-red-700 font-semibold">
              <Flame className="h-4 w-4" />
              <span>Apenas 12 vagas restantes com este desconto!</span>
            </div>
          </div>

          {/* Botões de Ação */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              <Crown className="h-5 w-5" />
              Garantir Desconto de 50%
              <ArrowRight className="h-5 w-5" />
            </button>
            <button 
              onClick={resetQuiz}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-4 px-8 rounded-2xl transition-all duration-300"
            >
              Refazer Quiz
            </button>
          </div>

          {/* Depoimento */}
          <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-purple-500">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold">
                M
              </div>
              <div>
                <p className="font-semibold text-gray-900">Maria Silva</p>
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "Perdi 15kg em 3 meses com o FitTracker Pro! O app me ajudou a entender minha alimentação 
              e criar uma rotina de exercícios que realmente funciona. Valeu cada centavo!"
            </p>
          </div>
        </div>
      </div>
    )
  }

  if (showQuiz) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-2xl w-full">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-900">Descubra seu Plano Ideal</h2>
              <button 
                onClick={resetQuiz}
                className="text-gray-500 hover:text-gray-700 text-xl"
              >
                ✕
              </button>
            </div>
            <div className="bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
              />
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Pergunta {currentQuestion + 1} de {quizQuestions.length}
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              {quizQuestions[currentQuestion].question}
            </h3>
            <div className="space-y-3">
              {quizQuestions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleQuizAnswer(option)}
                  className="w-full p-4 text-left bg-gray-50 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 border border-gray-200 hover:border-purple-300 rounded-xl transition-all duration-200 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-gray-900 font-medium">{option}</span>
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-purple-500 transition-colors" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-2xl">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                FitTracker <span className="text-yellow-300">Pro</span>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto">
              O App Definitivo para Transformar sua Vida
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Controle sua dieta, monitore exercícios e alcance seus objetivos com o sistema mais completo do mercado
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button 
                onClick={() => setShowQuiz(true)}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold px-8 py-4 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center gap-2"
              >
                <Zap className="h-5 w-5" />
                Fazer Quiz Gratuito
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold px-8 py-4 rounded-2xl text-lg transition-all duration-300 flex items-center gap-2">
                <Play className="h-5 w-5" />
                Ver Demo
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span className="font-semibold">50.000+</span>
                <span>usuários</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-300" />
                <span className="font-semibold">4.9</span>
                <span>avaliação</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                <span className="font-semibold">95%</span>
                <span>sucesso</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tudo que Você Precisa em Um Só App
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Funcionalidades profissionais que vão revolucionar sua jornada fitness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Utensils,
                title: "Controle Nutricional Inteligente",
                description: "Monitore calorias, macros e micronutrientes com precisão científica",
                color: "from-green-500 to-emerald-600"
              },
              {
                icon: Dumbbell,
                title: "Treinos Personalizados",
                description: "Exercícios adaptados ao seu nível e objetivos específicos",
                color: "from-blue-500 to-cyan-600"
              },
              {
                icon: TrendingUp,
                title: "Analytics Avançado",
                description: "Relatórios detalhados do seu progresso e tendências",
                color: "from-purple-500 to-pink-600"
              },
              {
                icon: Target,
                title: "Metas Inteligentes",
                description: "Sistema de objetivos que se adapta ao seu progresso",
                color: "from-orange-500 to-red-600"
              },
              {
                icon: Clock,
                title: "Lembretes Personalizados",
                description: "Nunca mais esqueça de uma refeição ou treino",
                color: "from-indigo-500 to-purple-600"
              },
              {
                icon: Shield,
                title: "Dados Seguros",
                description: "Seus dados protegidos com criptografia de nível bancário",
                color: "from-teal-500 to-green-600"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`bg-gradient-to-r ${feature.color} p-3 rounded-xl w-fit mb-4`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Interface Intuitiva e Moderna
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Design pensado para facilitar sua rotina. Tudo que você precisa a poucos toques de distância.
              </p>
              
              <div className="space-y-4">
                {[
                  "Dashboard completo com métricas em tempo real",
                  "Registro rápido de refeições e exercícios", 
                  "Gráficos interativos de progresso",
                  "Sincronização automática entre dispositivos"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="bg-green-100 p-1 rounded-full">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-8 rounded-3xl shadow-2xl">
                <div className="bg-white rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-2 rounded-xl">
                      <Target className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900">FitTracker Pro</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-green-50 p-4 rounded-xl">
                      <div className="flex items-center gap-2 mb-2">
                        <Utensils className="h-4 w-4 text-green-600" />
                        <span className="text-sm font-medium text-green-900">Calorias</span>
                      </div>
                      <p className="text-2xl font-bold text-green-600">1,847</p>
                      <p className="text-xs text-green-700">Meta: 2,000</p>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-xl">
                      <div className="flex items-center gap-2 mb-2">
                        <Dumbbell className="h-4 w-4 text-blue-600" />
                        <span className="text-sm font-medium text-blue-900">Exercícios</span>
                      </div>
                      <p className="text-2xl font-bold text-blue-600">3/3</p>
                      <p className="text-xs text-blue-700">Completo!</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">🥗</span>
                        <div>
                          <p className="font-medium text-gray-900">Salada Caesar</p>
                          <p className="text-sm text-gray-500">Almoço • 12:30</p>
                        </div>
                      </div>
                      <span className="text-sm font-medium text-green-600">420 cal</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className="bg-green-100 p-2 rounded-lg">
                          <Dumbbell className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Corrida</p>
                          <p className="text-sm text-gray-500">30 min • 14:00</p>
                        </div>
                      </div>
                      <span className="text-sm font-medium text-red-600">-280 cal</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Escolha Seu Plano
            </h2>
            <p className="text-xl text-gray-600">
              Investimento que transforma sua vida
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Básico",
                price: "€19,90",
                period: "/mês",
                features: [
                  "Controle básico de dieta",
                  "Exercícios limitados",
                  "Relatórios simples",
                  "Suporte por email"
                ],
                popular: false
              },
              {
                name: "Pro",
                price: "€34,90",
                period: "/mês",
                features: [
                  "Controle completo de nutrição",
                  "Treinos personalizados",
                  "Analytics avançado",
                  "Suporte prioritário",
                  "Sincronização ilimitada",
                  "Lembretes inteligentes"
                ],
                popular: true
              },
              {
                name: "Premium",
                price: "€54,90",
                period: "/mês",
                features: [
                  "Tudo do Pro +",
                  "Consultoria nutricional",
                  "Personal trainer virtual",
                  "Suporte 24/7",
                  "Relatórios médicos",
                  "API para desenvolvedores"
                ],
                popular: false
              }
            ].map((plan, index) => (
              <div key={index} className={`relative bg-white p-8 rounded-2xl shadow-lg ${plan.popular ? 'ring-2 ring-purple-500 transform scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Mais Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="bg-green-100 p-1 rounded-full">
                        <Check className="h-4 w-4 text-green-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}>
                  Começar Agora
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Pronto para Transformar sua Vida?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Junte-se a milhares de pessoas que já alcançaram seus objetivos com o FitTracker Pro
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setShowQuiz(true)}
              className="bg-white hover:bg-gray-100 text-purple-600 font-bold px-8 py-4 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Zap className="h-5 w-5" />
              Fazer Quiz Personalizado
            </button>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              <Smartphone className="h-5 w-5" />
              Baixar Agora
            </button>
          </div>

          <p className="text-white/80 mt-6">
            ✨ Garantia de 30 dias ou seu dinheiro de volta
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-2 rounded-xl">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">FitTracker Pro</h3>
              </div>
              <p className="text-gray-400">
                O app definitivo para transformar sua vida através da alimentação e exercícios.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Funcionalidades</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Preços</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Demo</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Comunidade</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 FitTracker Pro. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}