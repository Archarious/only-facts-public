import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Bento } from './Bento'
import { Tile } from '../Tile'

const meta: Meta<typeof Bento> = {
  title: 'Layout/Bento',
  component: Bento,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Адаптивная Bento Grid сетка с поддержкой различных размеров экранов'
      }
    }
  },
  argTypes: {
    gap: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg']
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="w-full max-w-6xl">
      <Bento>
        <div className="col-span-2 bg-blue-100 p-4 rounded-lg text-center">
          <p className="text-sm">2 колонки</p>
        </div>
        <div className="col-span-4 bg-green-100 p-4 rounded-lg text-center">
          <p className="text-sm">4 колонки</p>
        </div>
        <div className="col-span-2 bg-yellow-100 p-4 rounded-lg text-center">
          <p className="text-sm">2 колонки</p>
        </div>
        
        <div className="col-span-3 bg-purple-100 p-4 rounded-lg text-center">
          <p className="text-sm">3 колонки</p>
        </div>
        <div className="col-span-3 bg-pink-100 p-4 rounded-lg text-center">
          <p className="text-sm">3 колонки</p>
        </div>
        <div className="col-span-2 bg-indigo-100 p-4 rounded-lg text-center">
          <p className="text-sm">2 колонки</p>
        </div>
      </Bento>
    </div>
  )
}

export const WithTiles: Story = {
  render: () => (
    <div className="w-full max-w-6xl">
      <Bento gap="md">
        <div className="col-span-3">
          <Tile height={232} className="bg-orange-400 text-white">
            <div className="h-full flex items-center justify-center">
              <h3 className="text-lg font-bold">ROI Тайл</h3>
            </div>
          </Tile>
        </div>
        
        <div className="col-span-2">
          <Tile height={232} className="bg-gray-100">
            <div className="h-full flex items-center justify-center">
              <h3 className="text-lg font-bold">Статистика</h3>
            </div>
          </Tile>
        </div>
        
        <div className="col-span-3">
          <Tile height={232} className="bg-blue-400 text-white">
            <div className="h-full flex items-center justify-center">
              <h3 className="text-lg font-bold">Аналитика</h3>
            </div>
          </Tile>
        </div>
      </Bento>
    </div>
  )
}

export const ResponsiveLayout: Story = {
  render: () => (
    <div className="w-full max-w-6xl">
      <p className="text-sm text-gray-600 mb-4">
        Изменяйте размер окна для просмотра адаптивности: 8 колонок (мобильный) → 16 колонок (планшет) → 24 колонки (десктоп)
      </p>
      <Bento>
        {/* На мобильном: 8 колонок, на планшете: 16, на десктопе: 24 */}
        <div className="col-span-8 sm:col-span-8 lg:col-span-12 bg-blue-100 p-4 rounded-lg text-center">
          <p className="text-sm">Полная ширина → Половина → Половина</p>
        </div>
        <div className="col-span-8 sm:col-span-8 lg:col-span-12 bg-green-100 p-4 rounded-lg text-center">
          <p className="text-sm">Полная ширина → Половина → Половина</p>
        </div>
        
        <div className="col-span-4 sm:col-span-8 lg:col-span-8 bg-yellow-100 p-4 rounded-lg text-center">
          <p className="text-sm">Половина → Полная → Треть</p>
        </div>
        <div className="col-span-4 sm:col-span-8 lg:col-span-8 bg-purple-100 p-4 rounded-lg text-center">
          <p className="text-sm">Половина → Полная → Треть</p>
        </div>
        <div className="col-span-8 sm:col-span-16 lg:col-span-8 bg-pink-100 p-4 rounded-lg text-center">
          <p className="text-sm">Полная → Полная → Треть</p>
        </div>
      </Bento>
    </div>
  )
}

export const DifferentGaps: Story = {
  render: () => (
    <div className="w-full max-w-6xl space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Маленький gap (8px)</h3>
        <Bento gap="sm">
          <div className="col-span-2 bg-blue-100 p-4 rounded-lg text-center text-sm">Item 1</div>
          <div className="col-span-2 bg-green-100 p-4 rounded-lg text-center text-sm">Item 2</div>
          <div className="col-span-2 bg-yellow-100 p-4 rounded-lg text-center text-sm">Item 3</div>
          <div className="col-span-2 bg-purple-100 p-4 rounded-lg text-center text-sm">Item 4</div>
        </Bento>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Средний gap (16px)</h3>
        <Bento gap="md">
          <div className="col-span-2 bg-blue-100 p-4 rounded-lg text-center text-sm">Item 1</div>
          <div className="col-span-2 bg-green-100 p-4 rounded-lg text-center text-sm">Item 2</div>
          <div className="col-span-2 bg-yellow-100 p-4 rounded-lg text-center text-sm">Item 3</div>
          <div className="col-span-2 bg-purple-100 p-4 rounded-lg text-center text-sm">Item 4</div>
        </Bento>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Большой gap (24px)</h3>
        <Bento gap="lg">
          <div className="col-span-2 bg-blue-100 p-4 rounded-lg text-center text-sm">Item 1</div>
          <div className="col-span-2 bg-green-100 p-4 rounded-lg text-center text-sm">Item 2</div>
          <div className="col-span-2 bg-yellow-100 p-4 rounded-lg text-center text-sm">Item 3</div>
          <div className="col-span-2 bg-purple-100 p-4 rounded-lg text-center text-sm">Item 4</div>
        </Bento>
      </div>
    </div>
  )
}

export const RealWorldExample: Story = {
  render: () => (
    <div className="w-full max-w-6xl">
      <h2 className="text-xl font-bold mb-6">Доходность и размер рынка</h2>
      <Bento gap="md">
        {/* ROI блок */}
        <div className="col-span-8 sm:col-span-8 lg:col-span-8">
          <Tile height={312} className="bg-orange-400 text-white">
            <div className="h-full flex flex-col justify-between p-4">
              <div>
                <h3 className="text-lg font-bold mb-4">ROI</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>медиана</span>
                    <span>ПИК</span>
                    <span>единичные кейсы</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold">
                    <span>15-30%</span>
                    <span>100-200%</span>
                    <span>&gt;500%</span>
                  </div>
                </div>
              </div>
            </div>
          </Tile>
        </div>
        
        {/* Размер рынка */}
        <div className="col-span-8 sm:col-span-8 lg:col-span-8">
          <Tile height={312} className="bg-gray-100">
            <div className="h-full flex items-center justify-center text-center">
              <div>
                <div className="text-2xl font-bold">15,223</div>
                <div className="text-sm text-gray-600">MLN USD</div>
                <div className="text-xs text-gray-500">2025</div>
              </div>
            </div>
          </Tile>
        </div>
        
        {/* Депозиты */}
        <div className="col-span-8 sm:col-span-16 lg:col-span-8">
          <Tile height={312} className="bg-gray-100">
            <div className="h-full flex items-center justify-center text-center">
              <div>
                <div className="text-2xl font-bold">50,745</div>
                <div className="text-sm text-gray-600">Депозиты MLN USD</div>
                <div className="text-xs text-gray-500">2025</div>
              </div>
            </div>
          </Tile>
        </div>
      </Bento>
    </div>
  )
}

export const CustomClassNames: Story = {
  render: () => (
    <div className="w-full max-w-6xl">
      <Bento className="bg-gray-50 p-4 rounded-lg border-2 border-dashed border-gray-300">
        <div className="col-span-4 bg-white p-4 rounded-lg shadow-sm text-center">
          <p className="text-sm">Кастомные стили</p>
        </div>
        <div className="col-span-4 bg-white p-4 rounded-lg shadow-sm text-center">
          <p className="text-sm">для Bento Grid</p>
        </div>
      </Bento>
    </div>
  )
}
