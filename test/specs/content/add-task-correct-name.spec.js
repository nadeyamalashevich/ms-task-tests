import application from '../../application';

const TASK_NAME = 'New automation task';

describe('TC1. Content: Add task with correct name', () => {
    let tasksPage;

    it('open Tasks page', () => {
        tasksPage = application.login();
        tasksPage.addNewTask(TASK_NAME);
        expect(tasksPage.isTaskInList(TASK_NAME)).toBe(true);
    })
})