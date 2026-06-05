export const liveExamples = [
    {
        id: 'button-base',
        title: 'ButtonBase',
        group: 'Buttons',
        description: 'Primary, secondary, danger and loading button states.',
        template: `
            <div class="preview-stack">
                <ButtonBase button-style="theme-solid">Save changes</ButtonBase>
                <ButtonBase button-style="secondary">Cancel</ButtonBase>
                <ButtonBase button-style="danger">Delete</ButtonBase>
                <ButtonBase button-style="danger-solid" :loading="true">Deleting</ButtonBase>
            </div>
        `,
    },
    {
        id: 'labels',
        title: 'Labels',
        group: 'Labels',
        description: 'Status labels and section captions.',
        template: `
            <div class="preview-stack">
                <div class="preview-row">
                    <ColorLabel color="purple">active</ColorLabel>
                    <ColorLabel color="green">synced</ColorLabel>
                    <ColorLabel color="yellow">pending</ColorLabel>
                    <ColorLabel color="red">blocked</ColorLabel>
                </div>
                <TextLabel>ACCOUNT SETTINGS</TextLabel>
                <SectionTitle>RECENT ACTIVITY</SectionTitle>
            </div>
        `,
    },
    {
        id: 'switch-input',
        title: 'SwitchInput',
        group: 'Inputs',
        description: 'Compact binary setting control.',
        template: `
            <div class="preview-card">
                <SwitchInput
                    label="Email notifications"
                    info="Send a summary when workspace activity changes"
                    :state="true"
                />
            </div>
        `,
    },
    {
        id: 'progress',
        title: 'ProgressBar',
        group: 'Status',
        description: 'Linear progress indicator.',
        template: `
            <div class="preview-card">
                <div class="preview-label">Storage usage</div>
                <ProgressBar :progress="68" />
            </div>
        `,
    },
    {
        id: 'alert-box',
        title: 'AlertBox',
        group: 'Feedback',
        description: 'Inline feedback for success and error states.',
        template: `
            <div>
                <AlertBox color="green">The component preview is isolated and ready.</AlertBox>
                <AlertBox color="rose">This is how destructive feedback is shown.</AlertBox>
            </div>
        `,
    },
    {
        id: 'list-info',
        title: 'ListInfo',
        group: 'Lists',
        description: 'Small metadata list layout.',
        template: `
            <ListInfo>
                <ListInfoItem title="Owner" content="Design System" />
                <ListInfoItem title="Version" content="0.1.0" />
                <ListInfoItem title="Status">
                    <ColorLabel color="green">public ready</ColorLabel>
                </ListInfoItem>
            </ListInfo>
        `,
    },
]
