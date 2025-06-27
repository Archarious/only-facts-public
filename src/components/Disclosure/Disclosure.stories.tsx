import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Disclosure } from './Disclosure';
import { getAvailableSchemes } from '@/lib/color-schemes'
import { TwoColorIcon } from '@/lib/icons/two-color-icon';

const meta: Meta<typeof Disclosure> = {
  title: 'Components/Disclosure',
  component: Disclosure,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Заголовок для раскрываемого блока',
    },
    colorScheme: {
      control: { type: 'select' },
      options: getAvailableSchemes()
    },
    defaultOpen: {
      control: 'boolean',
      description: 'Открыт ли блок по умолчанию',
    },
    clampLines: {
      control: { type: 'number', min: 1, max: 10 },
      description: 'Количество строк для ограничения в свернутом состоянии',
    },
    icon: {
      control: false,
      description: 'Иконка для отображения слева от заголовка',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
  args: {
    title: 'Регулирование криптовалют в Европе',
    colorScheme: 'banana',
    defaultOpen: false,
    clampLines: 1,
    children: (
      <div>
        <p>
          Европейский союз активно работает над созданием единых правил регулирования 
          криптовалютного рынка. Новое законодательство MiCA (Markets in Crypto Assets) 
          вступит в силу поэтапно и коснется всех участников рынка.
        </p>
        <p>
          Основные изменения включают лицензирование криптобирж, требования к 
          стейблкоинам и обязательное раскрытие информации для эмитентов токенов.
        </p>
        <ul className="list-disc">
          <li>Лицензирование криптовалютных бирж</li>
          <li>Регулирование стейблкоинов</li>
          <li>Требования к раскрытию информации</li>
          <li>Защита прав инвесторов</li>
        </ul>
      </div>
    ),
  },
};

export const Multiple: Story = {
  render: () => (
    <div className="space-y-4 max-w-4xl">
      <Disclosure
        title="Новые правила KYC в США"
        colorScheme= "red-white"
        clampLines={1}
        children={
          <p>
            Американские регуляторы ужесточают требования к процедурам идентификации 
            клиентов (KYC) для криптовалютных компаний. Изменения коснутся всех 
            лицензированных операторов.
          </p>
        }
      />
      
      <Disclosure
        title="Япония расширяет список разрешенных криптовалют"
        colorScheme= "gray-aqua"
        clampLines={1}
        defaultOpen={true}
        children={
          <div className="space-y-3">
            <p>
              Японское агентство финансовых услуг (FSA) добавило в список разрешенных 
              для торговли активов несколько новых криптовалют, включая современные 
              DeFi токены.
            </p>
            <p>
              Решение принято после тщательного анализа технологических рисков и 
              соответствия местному законодательству.
            </p>
          </div>
        }
      />
      
      <Disclosure
        title="Сингапур вводит налог на криптовалютные операции"
        colorScheme= "aqua-yellow"
        clampLines={1}
        children={
          <div className="space-y-2">
            <p>
              С 1 января 2024 года в Сингапуре вводится специальный налог на 
              криптовалютные операции для физических лиц.
            </p>
            <ul className="list-disc pl-6">
              <li>Налог на прирост капитала: 10%</li>
              <li>Декларирование операций свыше $10,000</li>
              <li>Льготы для долгосрочных инвесторов</li>
            </ul>
          </div>
        }
      />
      
      <Disclosure
        title="Бразилия запускает цифровую валюту центрального банка"
        colorScheme= "aqua-white"
        outline={true}
        clampLines={1}
        children={
          <div className="space-y-4">
            <p>
              Центральный банк Бразилии объявил о запуске пилотной программы 
              тестирования национальной цифровой валюты (CBDC) в партнерстве 
              с крупнейшими коммерческими банками страны.
            </p>
            <p>
              Проект направлен на повышение финансовой инклюзивности и снижение 
              стоимости денежных переводов внутри страны.
            </p>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Ключевые особенности:</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Полная совместимость с существующей банковской системой</li>
                <li>Возможность офлайн-платежей</li>
                <li>Повышенная конфиденциальность транзакций</li>
              </ul>
            </div>
          </div>
        }
      />
      
      <Disclosure
        title="Канада ограничивает рекламу криптовалют"
        colorScheme= "red-aqua"
        clampLines={1}
        children={
          <p>
            Канадские власти вводят строгие ограничения на рекламу криптовалютных 
            продуктов, особенно нацеленную на неопытных инвесторов. Новые правила 
            вступят в силу с марта 2024 года.
          </p>
        }
      />

      <Disclosure
        title="Канада ограничивает рекламу криптовалют"
        colorScheme= "grey-red"
        clampLines={1}
        children={
          <p>
            Канадские власти вводят строгие ограничения на рекламу криптовалютных 
            продуктов, особенно нацеленную на неопытных инвесторов. Новые правила 
            вступят в силу с марта 2024 года.
          </p>
        }
      />

      <Disclosure
        title="Канада ограничивает рекламу криптовалют"
        colorScheme= "banana"
        clampLines={1}
        children={
          <p>
            Канадские власти вводят строгие ограничения на рекламу криптовалютных 
            продуктов, особенно нацеленную на неопытных инвесторов. Новые правила 
            вступят в силу с марта 2024 года.
          </p>
        }
      />
    </div>
  ),
};

export const WithIcon: Story = {
  args: {
    title: 'Новые санкции против криптовалютных бирж',
    colorScheme: 'banana',
    defaultOpen: false,
    clampLines: 1,
    icon: (
      <TwoColorIcon 
        name="refresh" 
        size={16} 
        colorScheme="banana"
      />
    ),
    children: (
      <div className="space-y-3">
        <p>
          Министерство финансов США объявило о новых санкциях против нескольких 
          крупных криптовалютных бирж, подозреваемых в отмывании денег и 
          финансировании незаконных операций.
        </p>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h4 className="font-semibold text-red-800 mb-2">Затронутые биржи:</h4>
          <ul className="list-disc pl-6 space-y-1 text-red-700">
            <li>CryptoExchange Pro</li>
            <li>Digital Assets Hub</li>
            <li>BlockTrade Platform</li>
          </ul>
        </div>
        <p className="text-sm text-gray-600">
          Пользователям рекомендуется вывести средства в течение 30 дней.
        </p>
      </div>
    ),
  },
};
