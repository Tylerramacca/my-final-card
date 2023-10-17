import { html } from 'lit';
import '../src/my-final-card.js';

export default {
  title: 'MyFinalCard',
  component: 'my-final-card',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <my-final-card
      style="--my-final-card-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </my-final-card>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
