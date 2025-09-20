import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Icon from '@/components/ui/icon'

const categories = [
  { name: 'Рестораны', count: 1205, icon: 'UtensilsCrossed' },
  { name: 'Электроника', count: 894, icon: 'Smartphone' },
  { name: 'Одежда', count: 756, icon: 'Shirt' },
  { name: 'Автомобили', count: 623, icon: 'Car' },
  { name: 'Красота', count: 445, icon: 'Sparkles' },
  { name: 'Спорт', count: 334, icon: 'Dumbbell' }
]

const reviews = [
  {
    id: 1,
    title: 'iPhone 15 Pro Max',
    category: 'Электроника',
    rating: 4.8,
    reviewsCount: 156,
    author: 'Алексей К.',
    text: 'Отличный телефон, камера просто огонь! Батарея держит весь день.',
    date: '15 сентября 2024',
    status: 'verified',
    helpful: 24
  },
  {
    id: 2,
    title: 'Ресторан "Белые ночи"',
    category: 'Рестораны',
    rating: 4.6,
    reviewsCount: 89,
    author: 'Мария С.',
    text: 'Прекрасная атмосфера, вкусная еда. Обслуживание на высоте.',
    date: '12 сентября 2024',
    status: 'verified',
    helpful: 18
  },
  {
    id: 3,
    title: 'Nike Air Max 270',
    category: 'Одежда',
    rating: 4.4,
    reviewsCount: 67,
    author: 'Дмитрий Л.',
    text: 'Удобные кроссовки, хорошее качество. Размер соответствует.',
    date: '10 сентября 2024',
    status: 'verified',
    helpful: 12
  }
]

const topProducts = [
  { name: 'MacBook Pro M3', rating: 4.9, reviews: 234 },
  { name: 'Tesla Model 3', rating: 4.8, reviews: 189 },
  { name: 'Samsung Galaxy S24', rating: 4.7, reviews: 312 }
]

function Index() {
  const [searchQuery, setSearchQuery] = useState('')

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

    return (
      <div className="flex items-center space-x-1">
        {[...Array(fullStars)].map((_, i) => (
          <Icon key={i} name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
        ))}
        {hasHalfStar && (
          <Icon name="StarHalf" size={16} className="fill-yellow-400 text-yellow-400" />
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <Icon key={i} name="Star" size={16} className="text-gray-300" />
        ))}
        <span className="ml-2 text-sm font-medium text-gray-600">{rating}</span>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Header */}
      <header className="glass-dark sticky top-0 z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="gradient-brand p-2 rounded-lg">
                  <Icon name="MessageSquareText" size={28} className="text-white" />
                </div>
                <span className="text-2xl font-bold gradient-text">Отзывы.рф</span>
              </div>
              <nav className="hidden md:flex space-x-8">
                <a href="#" className="text-gray-700 hover:gradient-text transition-all duration-300 font-medium relative group">
                  Главная
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 gradient-brand group-hover:w-full transition-all duration-300"></span>
                </a>
                <a href="#" className="text-gray-700 hover:gradient-text transition-all duration-300 font-medium relative group">
                  Отзывы
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 gradient-brand group-hover:w-full transition-all duration-300"></span>
                </a>
                <a href="#" className="text-gray-700 hover:gradient-text transition-all duration-300 font-medium relative group">
                  Категории
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 gradient-brand group-hover:w-full transition-all duration-300"></span>
                </a>
                <a href="#" className="text-gray-700 hover:gradient-text transition-all duration-300 font-medium relative group">
                  Рейтинг
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 gradient-brand group-hover:w-full transition-all duration-300"></span>
                </a>
                <a href="#" className="text-gray-700 hover:gradient-text transition-all duration-300 font-medium relative group">
                  О проекте
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 gradient-brand group-hover:w-full transition-all duration-300"></span>
                </a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-700 hover:bg-transparent hover:gradient-text">
                <Icon name="LogIn" size={16} className="mr-2" />
                Войти
              </Button>
              <Button size="sm" className="gradient-brand border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Icon name="UserPlus" size={16} className="mr-2" />
                Регистрация
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 gradient-brand opacity-90"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl floating"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl floating" style={{animationDelay: '2s'}}></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tight fade-in-up">
            Честные отзывы<br/>
            <span className="text-4xl md:text-6xl lg:text-7xl font-light text-white/80">о товарах и услугах</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed fade-in-up" style={{animationDelay: '0.2s'}}>
            Находите проверенные отзывы от реальных покупателей.<br className="hidden md:block"/> Делитесь опытом и помогайте другим принимать правильные решения.
          </p>
          <div className="max-w-3xl mx-auto fade-in-up" style={{animationDelay: '0.4s'}}>
            <div className="glass rounded-2xl p-2 shadow-2xl">
              <div className="flex gap-2">
                <div className="flex-1 relative">
                  <Icon name="Search" size={24} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Поиск товаров, услуг, компаний..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 h-14 text-lg bg-transparent border-0 focus:ring-0 placeholder:text-gray-400"
                  />
                </div>
                <Button size="lg" className="h-14 px-8 bg-white text-gray-900 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-xl">
                  <Icon name="Search" size={20} className="mr-2" />
                  Найти
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Categories */}
            <section className="mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Популярные категории</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {categories.map((category, index) => (
                  <Card key={category.name} className="group hover:shadow-2xl transition-all duration-500 cursor-pointer border-0 bg-white/50 backdrop-blur-sm hover:bg-white hover:scale-105 fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                    <CardContent className="p-8 text-center">
                      <div className="gradient-brand p-4 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Icon name={category.icon as any} size={28} className="text-white" />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2 text-lg">{category.name}</h3>
                      <p className="text-gray-600 font-medium">{category.count} отзывов</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Latest Reviews */}
            <section>
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Последние отзывы</h2>
                <Button variant="outline" className="border-2 hover:gradient-brand hover:text-white hover:border-transparent transition-all duration-300 px-6 py-3">
                  Все отзывы
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </div>
              <div className="space-y-8">
                {reviews.map((review, index) => (
                  <Card key={review.id} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/70 backdrop-blur-sm hover:bg-white hover:scale-[1.02] fade-in-up" style={{animationDelay: `${index * 0.15}s`}}>
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <CardTitle className="text-lg">{review.title}</CardTitle>
                            <Badge variant="secondary">{review.category}</Badge>
                            {review.status === 'verified' && (
                              <Badge variant="default" className="gradient-brand text-white border-0 shadow-md">
                                <Icon name="CheckCircle" size={12} className="mr-1" />
                                Проверено
                              </Badge>
                            )}
                          </div>
                          {renderStars(review.rating)}
                        </div>
                        <div className="text-right text-sm text-gray-500">
                          <p>{review.date}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base text-gray-700 mb-4">
                        {review.text}
                      </CardDescription>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <span className="text-sm text-gray-600">Автор: {review.author}</span>
                          <span className="text-sm text-gray-600">{review.reviewsCount} отзывов</span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <Button variant="outline" size="sm" className="hover:gradient-brand hover:text-white hover:border-transparent transition-all duration-300">
                            <Icon name="ThumbsUp" size={14} className="mr-2" />
                            Полезно ({review.helpful})
                          </Button>
                          <Button variant="outline" size="sm" className="hover:gradient-brand hover:text-white hover:border-transparent transition-all duration-300">
                            <Icon name="MessageCircle" size={14} className="mr-2" />
                            Ответить
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Top Rated */}
              <Card className="border-0 bg-white/70 backdrop-blur-sm shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <div className="gradient-brand p-2 rounded-lg mr-3">
                      <Icon name="Trophy" size={20} className="text-white" />
                    </div>
                    Топ рейтинг
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {topProducts.map((product, index) => (
                    <div key={product.name} className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                      <div className="flex-shrink-0 w-10 h-10 gradient-brand text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                        {index + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{product.name}</p>
                        <div className="flex items-center space-x-1">
                          <Icon name="Star" size={12} className="fill-yellow-400 text-yellow-400" />
                          <span className="text-xs text-gray-600">{product.rating} ({product.reviews})</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Add Review CTA */}
              <Card className="gradient-brand">
                <CardContent className="p-6 text-center">
                  <Icon name="PenTool" size={32} className="text-white mb-3 mx-auto" />
                  <h3 className="font-semibold text-white mb-2">Оставьте отзыв</h3>
                  <p className="text-sm text-white/90 mb-4">Поделитесь своим опытом и помогите другим</p>
                  <Button className="w-full bg-white text-gray-900 hover:bg-gray-100">
                    <Icon name="Plus" size={16} className="mr-2" />
                    Написать отзыв
                  </Button>
                </CardContent>
              </Card>

              {/* Stats */}
              <Card className="border-0 bg-white/70 backdrop-blur-sm shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl">Статистика</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex justify-between items-center p-3 rounded-xl bg-gradient-to-r from-gray-50 to-white">
                    <span className="text-gray-600 font-medium">Всего отзывов</span>
                    <span className="font-bold text-lg gradient-text">12,458</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-xl bg-gradient-to-r from-gray-50 to-white">
                    <span className="text-gray-600 font-medium">Проверенных</span>
                    <span className="font-bold text-lg gradient-text">9,847</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-xl bg-gradient-to-r from-gray-50 to-white">
                    <span className="text-gray-600 font-medium">Пользователей</span>
                    <span className="font-bold text-lg gradient-text">5,623</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-xl bg-gradient-to-r from-gray-50 to-white">
                    <span className="text-gray-600 font-medium">Компаний</span>
                    <span className="font-bold text-lg gradient-text">1,234</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="gradient-brand p-2 rounded-lg">
                  <Icon name="MessageSquareText" size={20} className="text-white" />
                </div>
                <span className="text-xl font-bold">Отзывы.рф</span>
              </div>
              <p className="text-gray-400 text-sm">
                Платформа честных отзывов о товарах и услугах. Помогаем принимать правильные решения.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Разделы</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Отзывы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Категории</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Рейтинг</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Поиск</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Помощь</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О проекте</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Правила</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Поддержка</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  info@отзывы.рф
                </p>
                <p className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (800) 123-45-67
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Отзывы.рф. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index