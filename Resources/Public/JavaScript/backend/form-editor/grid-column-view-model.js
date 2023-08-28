import * as Helper from '@typo3/form/backend/form-editor/helper.js';

function subscribeEvents(formEditor) {
    formEditor.getPublisherSubscriber().subscribe('view/stage/abstract/render/template/perform', (
        topic,
        [formElement, template]
    ) => {
        if (formElement.get('type') === 'GridColumn') {
            formEditor.getViewModel().getStage().renderSimpleTemplateWithValidators(formElement, template);
        }
    });
};

export function bootstrap(formEditorApp) {
    Helper.bootstrap(formEditorApp);
    subscribeEvents(formEditorApp);
};
