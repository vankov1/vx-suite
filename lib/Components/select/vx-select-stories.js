// vx-select.stories.js
import VxSelect from './VxSelect.vue'

export default {
  title: 'VxSelect',
  component: VxSelect,
  argTypes: {
    test: {
      control: 'object',
      defaultValue: { id: 1, name: 'One' },
    },
    test2: {
      control: 'text',
      defaultValue: 'A',
    },
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { VxSelect },
  data: () => ({
    itemsObject: [
      { id: 1, name: 'One' },
      { id: 2, name: 'Two' },
      { id: 3, name: 'Three' },
    ],
    itemsArray: ['A', 'BB', 'CCC'],
  }),
  template: `
    <div>
      <VxSelect
        by="id"
        label="Objects"
        :items="itemsObject"
        item-title="name"
        v-model="test"
        multiple
        chips
        chips-color="green"
      />

      <VxSelect
        label="Array"
        :items="itemsArray"
        v-model="test2"
        multiple
        chips
      />
    </div>
  `,
})

export const Default = Template.bind({})
