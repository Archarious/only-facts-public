import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Sidebar: React.FC<TileProps> = () => {
  return (
    <aside className="w-72 min-h-screen bg-[color:var(--color-gray-bg)] flex flex-col px-6 py-6 border-r border-gray-200">
      {/* Логотип */}
      <div className="mb-10">
        
      </div>

      <div className="mb-6">
        <div className="flex flex-col gap-2">
          {/* Первый выпадающий список */}
          <Select>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Выберите опцию 1" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Опция 1</SelectItem>
              <SelectItem value="option2">Опция 2</SelectItem>
              <SelectItem value="option3">Опция 3</SelectItem>
            </SelectContent>
          </Select>

          {/* Второй выпадающий список */}
          <Select>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Выберите опцию 2" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="optionA">Опция A</SelectItem>
              <SelectItem value="optionB">Опция B</SelectItem>
              <SelectItem value="optionC">Опция C</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      

      {/* Содержание */}
      <nav className="mb-8">
        <h3 className="font-semibold text-sm mb-2">Содержание</h3>
        <ul className="space-y-1">
          <li>
            <a href="#" className="text-sm hover:underline">Экономика региона</a>
          </li>
          <li>
            <a href="#" className="text-sm hover:underline">Регуляторы</a>
          </li>
          <li>
            <a href="#" className="text-sm hover:underline">Поисковые запросы</a>
          </li>
          <li>
            <a href="#" className="text-sm hover:underline">Лицензии</a>
          </li>
          <li>
            <a href="#" className="text-sm hover:underline">Партнеры и конкуренты</a>
          </li>
          <li>
            <a href="#" className="text-sm hover:underline">Инсайты</a>
          </li>
        </ul>
      </nav>

      {/* Сохранённые страны */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-sm">Сохраненные страны</h3>
          <button className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 bg-white hover:bg-gray-100 text-xl font-bold leading-none">+</button>
        </div>
        <ul className="space-y-1">
          <li className="flex items-center justify-between bg-gray-200 rounded-lg px-3 py-1.5">
            <span className="text-sm">Индия</span>
            <button className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-300 text-base">-</button>
          </li>
          <li className="text-sm px-3 py-1">Бангладеш</li>
          <li className="text-sm px-3 py-1">Мальта</li>
        </ul>
      </div>

      {/* Чат с аналитиком */}
      <div className="mt-auto mb-2">
        <span className="text-sm font-semibold">Чат с аналитиком</span>
      </div>
    </aside>
  );
}

export default Sidebar;
