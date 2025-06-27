import React from 'react';

import Layout from '../Layout';
import { Article, ArticleRow } from '../Article';
import BentoGrid from '../Bento';
import Sidebar from '../Sidebar';
import Tile, { COLORS } from '.';

export default {
  title: 'Components/Tile',
  component: Tile,
  argTypes: {
    color: {
      control: { type: 'select' },
      options: COLORS,
    },
  },
  decorators: [
    (Story) => (
      <Layout>
        <Sidebar />
        <Article>
          <ArticleRow>
            <BentoGrid>
              {Array.from({ length: 24 }).map((_, i) => (
                <Tile key={i} height={1} colSpan={1}></Tile>
              ))}
              {Array.from({ length: 12 }).map((_, i) => (
                <Tile key={i} height={1} colSpan={2}></Tile>
              ))}
              <Story />
            </BentoGrid>
          </ArticleRow>
        </Article>
      </Layout>
    ),
  ],
};

const Template = ({ title, height, colSpan, color }: TileStoryArgs) => (
  <Tile height={height} colSpan={colSpan} color={color}>
    <div>{title}</div>
  </Tile>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Пример тайла',
  height: 2,
  colSpan: 2,
  children: <div>Контент тайла</div>,
  color: COLORS[0],
};
