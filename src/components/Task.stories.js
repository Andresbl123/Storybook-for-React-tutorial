import React from 'react';

import Task from './Task';

export default {
  component: Task,
  title: 'Task',
};

const Templete = args => <Task {...args} />;

export const Default = Templete.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
  },
};



export const Pinned = Templete.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
};


export const Archived = Templete.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
};

