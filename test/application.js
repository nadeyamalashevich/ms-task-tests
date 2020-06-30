import LoginPage from './pages/login.page';
import TasksPage from './pages/tasks.page';

class Application {
    constructor() {
        this.loginPage = new LoginPage();
        this.tasksPage = new TasksPage();
    }
    
    login() {
        this.loginPage.open().login();
        return this.tasksPage.waitForIt();
    }
}

export default new Application();