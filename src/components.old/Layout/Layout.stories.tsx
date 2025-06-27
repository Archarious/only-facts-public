import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Layout } from './Layout'
import { Grid, GridItem } from '../Grid/Grid'

const meta: Meta<typeof Layout> = {
  title: 'Layout/Size Point System',
  component: Layout,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Демонстрация адаптивной системы размеров size-point'
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const SizePointDemo: Story = {
  render: () => (
    <Layout>
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold">Size Point Адаптивная Система</h1>
          <div className="text-sm text-gray-600 space-y-2">
            <p>Mobile (&lt;600px): 4 колонки, отступы 32px</p>
            <p>Tablet Portrait (600-1023px): 16 колонок, отступы 36px</p>
            <p>Tablet Landscape (1024-1360px): 16 колонок, левое меню 290px</p>
            <p>Desktop (&gt;1360px): 24 колонки, контейнер 952px</p>
          </div>
        </div>

        <Grid>
          {Array.from({ length: 24 }, (_, i) => (
            <GridItem key={i}>
              <div 
                className="bg-blue-100 border border-blue-300 rounded flex items-center justify-center text-xs font-medium min-h-[60px]"
              >
                {i + 1}
              </div>
            </GridItem>
          ))}
        </Grid>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Размеры на основе size-point</h2>
          
          <div className="space-y-2">
            <div 
              className="bg-green-100 border border-green-300 rounded p-4 text-center"
              style={{ width: 'var(--size-point)' }}
            >
              1x size-point
            </div>
            
            <div 
              className="bg-green-200 border border-green-400 rounded p-4 text-center"
              style={{ width: 'var(--size-point-2x)' }}
            >
              2x size-point
            </div>
            
            <div 
              className="bg-green-300 border border-green-500 rounded p-4 text-center"
              style={{ width: 'var(--size-point-4x)' }}
            >
              4x size-point
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-4 rounded">
          <h3 className="font-semibold mb-2">Текущие CSS переменные:</h3>
          <div className="text-xs text-gray-700 space-y-1 font-mono">
            <div>--size-point: <span id="size-point-value"></span></div>
            <div>--sizes-col-num: <span id="col-num-value"></span></div>
            <div>--sizes-gutter: <span id="gutter-value"></span></div>
            <div>Window width: <span id="window-width"></span>px</div>
          </div>
        </div>
      </div>

      <script dangerouslySetInnerHTML={{
        __html: `
          function updateValues() {
            const root = document.documentElement;
            const sizePoint = getComputedStyle(root).getPropertyValue('--size-point');
            const colNum = getComputedStyle(root).getPropertyValue('--sizes-col-num');
            const gutter = getComputedStyle(root).getPropertyValue('--sizes-gutter');
            
            document.getElementById('size-point-value').textContent = sizePoint;
            document.getElementById('col-num-value').textContent = colNum;
            document.getElementById('gutter-value').textContent = gutter;
            document.getElementById('window-width').textContent = window.innerWidth;
          }
          
          updateValues();
          window.addEventListener('resize', updateValues);
        `
      }} />
    </Layout>
  )
}

export const ResponsiveBreakpoints: Story = {
  render: () => (
    <Layout>
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Адаптивная система брейкпоинтов</h1>
          <p className="text-gray-600">Измените размер окна для проверки переходов между брейкпоинтами</p>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Преимущества системы переменных:</h2>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
            <li>Централизованное управление брейкпоинтами</li>
            <li>Автоматическое вычисление max-width значений</li>
            <li>Легкое изменение брейкпоинтов в одном месте</li>
            <li>Консистентность между компонентами</li>
            <li>DRY принцип для значений брейкпоинтов</li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}
