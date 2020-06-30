import Page from './page';
import ContentComponent from '../components/content.compontent'

export default class TasksPage extends Page {
    constructor(path) {
		super('/tasks' + (path || ''));
	}

	get contentComponent() {
		return new ContentComponent('.main-background').waitForIt();
	}

	addNewTask(taskName) {
		this.contentComponent.clickPlus().enterNewTask(taskName).clickAddTask();
		return this;
	}

	isTaskInList(taskName) {
		return this.contentComponent.isTaskInList(taskName);
	}
}