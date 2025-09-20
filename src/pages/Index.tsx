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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <Icon name="MessageSquareText" size={32} className="text-primary" />
                <span className="text-2xl font-bold text-gray-900">Отзывы.рф</span>
              </div>
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="text-gray-700 hover:text-primary transition-colors">Главная</a>
                <a href="#" className="text-gray-700 hover:text-primary transition-colors">Отзывы</a>
                <a href="#" className="text-gray-700 hover:text-primary transition-colors">Категории</a>
                <a href="#" className="text-gray-700 hover:text-primary transition-colors">Рейтинг</a>
                <a href="#" className="text-gray-700 hover:text-primary transition-colors">О проекте</a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Icon name="LogIn" size={16} className="mr-2" />
                Войти
              </Button>
              <Button size="sm">
                <Icon name="UserPlus" size={16} className="mr-2" />
                Регистрация
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Честные отзывы о товарах и услугах
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Находите проверенные отзывы от реальных покупателей. Делитесь своим опытом и помогайте другим принимать правильные решения.
          </p>
          <div className="max-w-2xl mx-auto flex gap-4">
            <div className="flex-1 relative">
              <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Поиск товаров, услуг, компаний..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 text-lg"
              />
            </div>
            <Button size="lg" className="h-12 px-8">
              <Icon name="Search" size={20} className="mr-2" />
              Найти
            </Button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Categories */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Популярные категории</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {categories.map((category) => (
                  <Card key={category.name} className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <Icon name={category.icon as any} size={32} className="text-primary mb-3 mx-auto" />
                      <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                      <p className="text-sm text-gray-600">{category.count} отзывов</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Latest Reviews */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Последние отзывы</h2>
                <Button variant="outline">
                  Все отзывы
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </div>
              <div className="space-y-6">
                {reviews.map((review) => (
                  <Card key={review.id} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <CardTitle className="text-lg">{review.title}</CardTitle>
                            <Badge variant="secondary">{review.category}</Badge>
                            {review.status === 'verified' && (
                              <Badge variant="default" className="bg-green-100 text-green-800">
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
                          <Button variant="outline" size="sm">
                            <Icon name="ThumbsUp" size={14} className="mr-2" />
                            Полезно ({review.helpful})
                          </Button>
                          <Button variant="outline" size="sm">
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
            <div className="sticky top-24 space-y-6">
              {/* Top Rated */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Trophy" size={20} className="mr-2 text-yellow-500" />
                    Топ рейтинг
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {topProducts.map((product, index) => (
                    <div key={product.name} className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
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
              <Card className="bg-gradient-to-br from-primary/10 to-blue-50">
                <CardContent className="p-6 text-center">
                  <Icon name="PenTool" size={32} className="text-primary mb-3 mx-auto" />
                  <h3 className="font-semibold text-gray-900 mb-2">Оставьте отзыв</h3>
                  <p className="text-sm text-gray-600 mb-4">Поделитесь своим опытом и помогите другим</p>
                  <Button className="w-full">
                    <Icon name="Plus" size={16} className="mr-2" />
                    Написать отзыв
                  </Button>
                </CardContent>
              </Card>

              {/* Stats */}
              <Card>
                <CardHeader>
                  <CardTitle>Статистика</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Всего отзывов</span>
                    <span className="font-semibold">12,458</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Проверенных</span>
                    <span className="font-semibold">9,847</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Пользователей</span>
                    <span className="font-semibold">5,623</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Компаний</span>
                    <span className="font-semibold">1,234</span>
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
                <Icon name="MessageSquareText" size={24} className="text-primary" />
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