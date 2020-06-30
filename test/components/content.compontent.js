import Component from './component';

export default class ContentComponent extends Component {
    constructor(selector = '.main-background') {
		super(selector);
    }

	get $plusIcon() {
		return this.$.$('i.ms-Icon--Add');
    }

	get $addTaskInput() {
		return this.$.$('#baseAddInput-addTask');
    }

	get $addTaskButton() {
		return this.$.$('.baseAdd-button');
    }
    
    clickPlus() {
        this.$plusIcon.click();
        return this;
    }
    
    enterNewTask(taskName) {
        this.$addTaskInput.setValue(taskName);
        return this;
    }
    
    clickAddTask() {
        this.$addTaskButton.click();
        return this;
    }

    isTaskInList(taskName) {
        return true; // TODO add check
    }
}