-- Заполнение тестовыми данными

-- Добавление категорий
INSERT INTO categories (name, description, icon) VALUES
('Рестораны', 'Рестораны и кафе', 'UtensilsCrossed'),
('Электроника', 'Техника и гаджеты', 'Smartphone'),
('Одежда', 'Одежда и аксессуары', 'Shirt'),
('Автомобили', 'Автомобили и запчасти', 'Car'),
('Красота', 'Косметика и уход', 'Sparkles'),
('Спорт', 'Спорт и фитнес', 'Dumbbell');

-- Добавление тестовых пользователей
INSERT INTO users (username, email, password_hash, first_name, last_name, is_verified) VALUES
('alexey_k', 'alexey.k@example.com', 'hash123', 'Алексей', 'Козлов', true),
('maria_s', 'maria.s@example.com', 'hash456', 'Мария', 'Смирнова', true),
('dmitry_l', 'dmitry.l@example.com', 'hash789', 'Дмитрий', 'Лебедев', true),
('anna_p', 'anna.p@example.com', 'hash321', 'Анна', 'Петрова', true),
('igor_v', 'igor.v@example.com', 'hash654', 'Игорь', 'Волков', false);

-- Добавление товаров/услуг
INSERT INTO products (name, description, category_id, company_name, average_rating, total_reviews) VALUES
('iPhone 15 Pro Max', 'Флагманский смартфон Apple', 2, 'Apple Inc.', 4.8, 156),
('Ресторан "Белые ночи"', 'Ресторан европейской кухни в центре города', 1, 'Белые ночи', 4.6, 89),
('Nike Air Max 270', 'Спортивные кроссовки для бега и тренировок', 3, 'Nike', 4.4, 67),
('MacBook Pro M3', 'Профессиональный ноутбук для работы', 2, 'Apple Inc.', 4.9, 234),
('Tesla Model 3', 'Электрический седан премиум-класса', 4, 'Tesla', 4.8, 189),
('Samsung Galaxy S24', 'Android-смартфон с AI функциями', 2, 'Samsung', 4.7, 312);

-- Добавление отзывов
INSERT INTO reviews (product_id, user_id, rating, title, content, status, is_verified, helpful_count) VALUES
(1, 1, 5, 'Отличный телефон!', 'Отличный телефон, камера просто огонь! Батарея держит весь день.', 'approved', true, 24),
(2, 2, 5, 'Прекрасный ресторан', 'Прекрасная атмосфера, вкусная еда. Обслуживание на высоте.', 'approved', true, 18),
(3, 3, 4, 'Хорошие кроссовки', 'Удобные кроссовки, хорошее качество. Размер соответствует.', 'approved', true, 12),
(4, 1, 5, 'Лучший ноутбук', 'Невероятная производительность, отличный экран. Рекомендую!', 'approved', true, 45),
(5, 2, 5, 'Машина будущего', 'Тихая, быстрая, экономичная. Автопилот работает отлично!', 'approved', true, 67),
(6, 3, 5, 'Отличный Android', 'Камера супер, быстрая работа, хорошая батарея.', 'approved', true, 32),
(1, 4, 4, 'Дорого но качественно', 'Цена кусается, но качество на высоте. Доволен покупкой.', 'approved', true, 15),
(2, 5, 4, 'Неплохое место', 'Вкусно готовят, но долго ждать. Интерьер красивый.', 'pending', false, 8);

-- Добавление голосов за полезность
INSERT INTO review_votes (review_id, user_id, vote_type) VALUES
(1, 2, 'helpful'),
(1, 3, 'helpful'),
(1, 4, 'helpful'),
(2, 1, 'helpful'),
(2, 3, 'helpful'),
(3, 1, 'helpful'),
(3, 2, 'helpful');

-- Добавление комментариев
INSERT INTO review_comments (review_id, user_id, content) VALUES
(1, 2, 'Полностью согласен! У меня такой же опыт.'),
(2, 1, 'Спасибо за отзыв, обязательно зайдем!'),
(3, 4, 'А где покупали? В магазине или онлайн?');