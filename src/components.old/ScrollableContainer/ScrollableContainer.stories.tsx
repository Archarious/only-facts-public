import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { ScrollableContainer } from './ScrollableContainer'
import { Article } from '@/components/Article'
import { Section } from '@/components/Section'

const meta: Meta<typeof ScrollableContainer> = {
  title: 'Layout/ScrollableContainer',
  component: ScrollableContainer,
  decorators: [
    (Story) => (
      <Article>
        <Section>
          <Story />
        </Section>
      </Article>
    )
  ],
  parameters: {
    layout: 'centered', // Изменено с 'centered' на 'fullscreen'
    docs: {
      description: {
        component: 'Универсальный компонент для горизонтального скролла от текущей позиции до правого края окна'
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <ScrollableContainer snap>
      <div className="flex gap-1">
        {Array.from({ length: 10 }, (_, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-64 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-semibold"
          >
            Карточка {i + 1}
          </div>
        ))}
      </div>
    </ScrollableContainer>
  )
}

export const InNestedContainer: Story = {
  render: () => (
    <div className="w-[600px] border-2 border-dashed border-red-300 p-6 mx-auto">
      <p className="text-sm text-red-600 mb-4">
        Контейнер ограничен шириной 600px для демонстрации независимости от родительского контейнера
      </p>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="font-semibold mb-4">Вложенный контент</h3>
        <ScrollableContainer>
          <div className="flex gap-2">
            {Array.from({ length: 8 }, (_, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-48 h-24 bg-orange-400 rounded-lg flex items-center justify-center text-white font-medium"
              >
                Элемент {i + 1}
              </div>
            ))}
          </div>
        </ScrollableContainer>
      </div>
    </div>
  )
}

export const WithVariousContent: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="w-[400px] border border-blue-300 p-4">
        <h3 className="font-semibold mb-4">Список операторов</h3>
        <ScrollableContainer>
          <div className="flex gap-1">
            {['Bet365', 'Stake', '1xBet', 'PokerStars', 'Betway', 'William Hill', 'Unibet', 'Paddy Power'].map((name) => (
              <div
                key={name}
                className="flex-shrink-0 bg-white border rounded-lg p-4 min-w-[200px]"
              >
                <div className="font-semibold">{name}</div>
                <div className="text-sm text-gray-600 mt-1">Gambling operator</div>
                <div className="text-xs text-gray-500 mt-2">Licensed • Active</div>
              </div>
            ))}
          </div>
        </ScrollableContainer>
      </div>

      <div className="w-[500px] border border-green-300 p-4">
        <h3 className="font-semibold mb-4">Статистика по регионам</h3>
        <ScrollableContainer>
          <div className="flex gap-2">
            {[
              { region: 'Нагаленд', value: '₹2.1М', growth: '+15%' },
              { region: 'Сикким', value: '₹1.8М', growth: '+8%' },
              { region: 'Федеральный', value: '₹45М', growth: '+22%' },
              { region: 'Тамил Наду', value: '₹3.2М', growth: '+12%' },
              { region: 'Другие штаты', value: '₹8.7М', growth: '+18%' }
            ].map((stat) => (
              <div
                key={stat.region}
                className="flex-shrink-0 bg-green-50 border border-green-200 rounded-lg p-4 min-w-[160px] text-center"
              >
                <div className="text-sm text-gray-600">{stat.region}</div>
                <div className="text-xl font-bold text-green-800 mt-1">{stat.value}</div>
                <div className="text-sm text-green-600 mt-1">{stat.growth}</div>
              </div>
            ))}
          </div>
        </ScrollableContainer>
      </div>
    </div>
  )
}

export const InArticleExample: Story = {
  render: () => (
    <div className="max-w-[952px] mx-auto p-6 space-y-12">
      <div>
        <h1 className="text-3xl font-bold mb-4">Анализ рынка азартных игр</h1>
        <p className="text-gray-600 mb-8">
          Детальный обзор текущего состояния рынка с интерактивными элементами.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Ключевые игроки рынка</h2>
        <ScrollableContainer>
          <div className="flex gap-3 p-2">
            {[
              { name: 'Bet365', market: '18%', color: 'from-blue-500 to-blue-600' },
              { name: 'Stake', market: '12%', color: 'from-green-500 to-green-600' },
              { name: '1xBet', market: '15%', color: 'from-orange-500 to-orange-600' },
              { name: 'PokerStars', market: '8%', color: 'from-purple-500 to-purple-600' },
              { name: 'Betway', market: '7%', color: 'from-pink-500 to-pink-600' },
              { name: 'William Hill', market: '6%', color: 'from-indigo-500 to-indigo-600' }
            ].map((operator) => (
              <div
                key={operator.name}
                className={`flex-shrink-0 w-72 bg-gradient-to-br ${operator.color} rounded-xl p-6 text-white`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">{operator.name}</h3>
                  <div className="text-2xl font-bold">{operator.market}</div>
                </div>
                <div className="space-y-2 text-sm opacity-90">
                  <div className="flex justify-between">
                    <span>Пользователи:</span>
                    <span>2.1M+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Лицензия:</span>
                    <span>Malta Gaming</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Рейтинг:</span>
                    <span>★★★★★</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollableContainer>
      </div>

      <div>
        <p className="text-gray-600">
          Контент после ScrollableContainer снова возвращается к нормальной ширине статьи.
          Это демонстрирует гибкость использования компонента в различных контекстах.
        </p>
      </div>
    </div>
  )
}

export const ResponsiveDemo: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-2">Адаптивная демонстрация</h2>
        <p className="text-gray-600">Измените размер окна чтобы увидеть как компонент адаптируется</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="border border-gray-300 p-4 rounded-lg">
          <h3 className="font-semibold mb-4">Левая колонка</h3>
          <ScrollableContainer>
            <div className="flex gap-2">
              {Array.from({ length: 6 }, (_, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-40 h-20 bg-blue-100 border border-blue-300 rounded-lg flex items-center justify-center"
                >
                  Item {i + 1}
                </div>
              ))}
            </div>
          </ScrollableContainer>
        </div>
        
        <div className="border border-gray-300 p-4 rounded-lg">
          <h3 className="font-semibold mb-4">Правая колонка</h3>
          <ScrollableContainer>
            <div className="flex gap-2">
              {Array.from({ length: 6 }, (_, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-40 h-20 bg-green-100 border border-green-300 rounded-lg flex items-center justify-center"
                >
                  Item {i + 1}
                </div>
              ))}
            </div>
          </ScrollableContainer>
        </div>
      </div>
    </div>
  )
}

export const WithoutScrollBar: Story = {
  render: () => (
    <div className="w-[600px] border-2 border-dashed border-blue-300 p-4">
      <p className="text-sm text-blue-600 mb-4">
        Скрытая полоса прокрутки - можно скроллить только перетаскиванием мышью
      </p>
      <ScrollableContainer isScrollBarVisible={false}>
        <div className="flex gap-2 p-4">
          {Array.from({ length: 15 }, (_, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-64 h-32 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center text-white font-semibold"
            >
              Карточка {i + 1}
            </div>
          ))}
        </div>
      </ScrollableContainer>
    </div>
  )
}

export const FourLongScrolls: Story = {
  render: () => (
    <div className="space-y-8 w-full max-w-6xl">
      <h2 className="text-2xl font-bold text-center">Четыре длинных горизонтальных скролла</h2>
      
      {/* Первый скролл - Операторы */}
      <div>
        <h3 className="text-lg font-semibold mb-3 text-blue-600">🏢 Ведущие операторы азартных игр</h3>
        <ScrollableContainer>
          <div className="flex gap-2 p-2">
            {[
              'Bet365', 'Stake', '1xBet', 'PokerStars', 'Betway', 'William Hill', 'Unibet', 'Paddy Power',
              'Ladbrokes', 'Coral', 'SkyBet', 'Betfair', 'Bodog', 'Bovada', 'FanDuel', 'DraftKings',
              '888Sport', 'BetMGM', 'Caesars', 'BetRivers', 'TwinSpires', 'PointsBet', 'BetOnline',
              'MyBookie', 'SportsBetting', 'Intertops', 'BetNow', 'GTBets', 'BookMaker', 'Heritage Sports'
            ].map((name, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-48 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg p-4 text-white"
              >
                <h4 className="font-bold text-lg mb-2">{name}</h4>
                <div className="text-sm space-y-1">
                  <p>Рейтинг: ★★★★☆</p>
                  <p>Лицензия: Malta Gaming</p>
                  <p>Пользователи: {(Math.random() * 5 + 1).toFixed(1)}M</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollableContainer>
      </div>

      {/* Второй скролл - Страны */}
      <div>
        <h3 className="text-lg font-semibold mb-3 text-green-600">🌍 Регулирование по странам мира</h3>
        <ScrollableContainer isScrollBarVisible={false}>
          <div className="flex gap-2 p-2">
            {[
              'Великобритания', 'Мальта', 'Гибралтар', 'Кюрасао', 'Австралия', 'Канада', 'Швеция', 'Дания',
              'Германия', 'Италия', 'Франция', 'Испания', 'Португалия', 'Нидерланды', 'Бельгия', 'Швейцария',
              'Норвегия', 'Финляндия', 'Эстония', 'Латвия', 'Литва', 'Польша', 'Чехия', 'Словакия',
              'Венгрия', 'Румыния', 'Болгария', 'Греция', 'Кипр', 'Словения', 'Хорватия', 'Сербия'
            ].map((country, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-56 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg p-4 text-white"
              >
                <h4 className="font-bold text-lg mb-2">{country}</h4>
                <div className="text-sm space-y-1">
                  <p>Статус: {Math.random() > 0.5 ? 'Регулируется' : 'Ограничен'}</p>
                  <p>Налог: {Math.floor(Math.random() * 25 + 5)}%</p>
                  <p>Лицензий: {Math.floor(Math.random() * 50 + 10)}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollableContainer>
      </div>

      {/* Третий скролл - Игры */}
      <div>
        <h3 className="text-lg font-semibold mb-3 text-purple-600">🎮 Типы азартных игр</h3>
        <ScrollableContainer>
          <div className="flex gap-2 p-2">
            {[
              'Слоты', 'Блэкджек', 'Рулетка', 'Покер', 'Баккара', 'Кости', 'Кено', 'Бинго',
              'Спортивные ставки', 'Киберспорт', 'Виртуальный спорт', 'Скретч-карты', 'Лотереи',
              'Живое казино', 'Видеопокер', 'Понтон', 'Пай Гоу', 'Сик Бо', 'Красная собака',
              'Карибский стад', 'Техасский Холдем', 'Фэнтези спорт', 'Биржевые ставки', 'Политические ставки',
              'Развлекательные ставки', 'Игры с прогрессивным джекпотом', 'Мгновенные игры', 'Социальные игры'
            ].map((game, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-52 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg p-4 text-white"
              >
                <h4 className="font-bold text-lg mb-2">{game}</h4>
                <div className="text-sm space-y-1">
                  <p>RTP: {(Math.random() * 10 + 90).toFixed(1)}%</p>
                  <p>Популярность: {['Низкая', 'Средняя', 'Высокая', 'Очень высокая'][Math.floor(Math.random() * 4)]}</p>
                  <p>Регулирование: {Math.random() > 0.3 ? 'Разрешено' : 'Ограничено'}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollableContainer>
      </div>

      {/* Четвертый скролл - Платежные системы */}
      <div>
        <h3 className="text-lg font-semibold mb-3 text-orange-600">💳 Платежные системы и методы</h3>
        <ScrollableContainer isScrollBarVisible={false}>
          <div className="flex gap-2 p-2">
            {[
              'Visa', 'Mastercard', 'PayPal', 'Skrill', 'Neteller', 'Paysafecard', 'Bitcoin', 'Ethereum',
              'Litecoin', 'Ripple', 'Bank Transfer', 'Trustly', 'iDEAL', 'Sofort', 'Giropay', 'EPS',
              'Przelewy24', 'BLIK', 'Zimpler', 'Siru Mobile', 'Apple Pay', 'Google Pay', 'Samsung Pay',
              'ecoPayz', 'MuchBetter', 'Jeton', 'AstroPay', 'Neosurf', 'Flexepin', 'CashtoCode',
              'Interac', 'Instadebit', 'iDebit', 'InstaDebit', 'Euteller', 'TeleIngreso', 'SafetyPay'
            ].map((payment, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-44 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg p-4 text-white"
              >
                <h4 className="font-bold text-lg mb-2">{payment}</h4>
                <div className="text-sm space-y-1">
                  <p>Комиссия: {(Math.random() * 5).toFixed(1)}%</p>
                  <p>Скорость: {['Мгновенно', '1-3 дня', '3-5 дней', '5-10 дней'][Math.floor(Math.random() * 4)]}</p>
                  <p>Лимиты: ${Math.floor(Math.random() * 50000 + 10000)}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollableContainer>
      </div>
    </div>
  )
}

export const ScrollBarComparison: Story = {
  render: () => (
    <div className="space-y-8 w-full max-w-4xl">
      <h2 className="text-xl font-bold text-center">Сравнение с полосой прокрутки и без неё</h2>
      
      <div>
        <h3 className="text-lg font-semibold mb-3">С полосой прокрутки (по умолчанию)</h3>
        <ScrollableContainer>
          <div className="flex gap-2 p-2">
            {Array.from({ length: 12 }, (_, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-48 h-24 bg-blue-100 border-2 border-blue-300 rounded-lg flex items-center justify-center"
              >
                <span className="text-blue-800 font-medium">Элемент {i + 1}</span>
              </div>
            ))}
          </div>
        </ScrollableContainer>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Без полосы прокрутки (только drag)</h3>
        <ScrollableContainer isScrollBarVisible={false}>
          <div className="flex gap-2 p-2">
            {Array.from({ length: 12 }, (_, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-48 h-24 bg-green-100 border-2 border-green-300 rounded-lg flex items-center justify-center"
              >
                <span className="text-green-800 font-medium">Элемент {i + 1}</span>
              </div>
            ))}
          </div>
        </ScrollableContainer>
      </div>
    </div>
  )
}
