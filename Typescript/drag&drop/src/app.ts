class ProjectInput {
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;

    constructor() {
        this.templateElement = document.querySelector('project-input')! as HTMLTemplateElement;
        this.hostElement = document.querySelector('app')! as HTMLDivElement;
    }
}